#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
SET='\033[0m'

if [ -n "$TEST_SUITE" ]
then
    echo -e "${GREEN}Executing tests in test suite $TEST_SUITE...${SET}"
    if [ -n "$PLUGIN_NAME" ]
    then
        echo -e "${GREEN}[ plugin name = $PLUGIN_NAME ]${SET}"
    fi

    if [ "$TEST_SUITE" = "AngularJSTests" ]
    then
     echo -e "${GREEN}Running angularjs tests${SET}"
     ./node_modules/karma/bin/karma start karma.conf.js --browsers ChromeHeadless --single-run
     echo -e "${GREEN}Running vue tests${SET}"
     npm test
    elif [ "$TEST_SUITE" = "JavascriptTests" ]
    then
      ./console tests:run-js --matomo-url='http://localhost'
    elif [ "$TEST_SUITE" = "UITests" ]
    then
        echo ""
        echo "View UI failures (if any) here:"
        echo ""
        echo "https://builds-artifacts.matomo.org/$TRAVIS_REPO_SLUG/$TRAVIS_BRANCH/$TRAVIS_BUILD_NUMBER/"
        echo ""
        echo "If the new screenshots are valid, then you can copy them over to the right directory with the command:"

        echo ""
        echo -n "./console tests:sync-ui-screenshots $TRAVIS_BUILD_NUMBER"
        if [ -n "$PLUGIN_NAME" ]
        then
            echo -n " --repository=$TRAVIS_REPO_SLUG"

            if [ "$PROTECTED_ARTIFACTS" = "1" ];
            then
                echo -n " --http-user=... --http-password=..."
            fi
        fi

        echo ""
        echo ""

        if [ -n "$PLUGIN_NAME" ]
        then
            # HACK: this is a hack to get UI test jobs to run. the --extra-options option was added for 2.15.1, but
            #       older Matomo's will end up w/ a tests:run-ui command that doesn't support it.
            # a better fix would be to decouple the Matomo testing framework from Matomo in a way that allowed us to
            # change code for all versions of Matomo as well as selectively for individual Matomo versions.
            git checkout 4.x-dev ../../plugins/TestRunner/Commands/TestsRunUI.php

            ./../../console tests:run-ui --assume-artifacts --persist-fixture-data --plugin=$PLUGIN_NAME --extra-options="$UITEST_EXTRA_OPTIONS --screenshot-repo=$TRAVIS_REPO_SLUG"
        else
            ./../../console tests:run-ui --store-in-ui-tests-repo --persist-fixture-data --assume-artifacts --core --extra-options="$UITEST_EXTRA_OPTIONS"
        fi
    elif [ "$TEST_SUITE" = "AllTests" ]
    then
        exit_code=0

        if [ "$ALLTEST_EXTRA_OPTIONS" = "--run-first-half-only" ]
        then
            echo "Executing tests in test suite UnitTests"
            travis_wait ./../../vendor/phpunit/phpunit/phpunit --configuration phpunit.xml --testsuite UnitTests --colors $PHPUNIT_EXTRA_OPTIONS || exit_code=$?
            echo "Executing tests in test suite SystemTests for Plugins"
            travis_wait ./../../vendor/phpunit/phpunit/phpunit --configuration phpunit.xml --testsuite SystemTestsPlugins --colors $PHPUNIT_EXTRA_OPTIONS || exit_code=$?
            echo "Executing tests in test suite SystemTests for Core"
            travis_wait ./../../vendor/phpunit/phpunit/phpunit --configuration phpunit.xml --testsuite SystemTestsCore --colors $PHPUNIT_EXTRA_OPTIONS || exit_code=$?
        elif [ "$ALLTEST_EXTRA_OPTIONS" = "--run-second-half-only" ]
        then
            echo "Executing tests in test suite IntegrationTests"
            travis_wait ./../../vendor/phpunit/phpunit/phpunit --configuration phpunit.xml --testsuite IntegrationTests --colors $PHPUNIT_EXTRA_OPTIONS || exit_code=$?
        else
            travis_wait ./../../console tests:run --options="--colors" || exit_code=$?
        fi

        exit $exit_code
    else
        if [ -n "$PLUGIN_NAME" ]
        then
            travis_wait ./../../vendor/phpunit/phpunit/phpunit --configuration phpunit.xml --colors --testsuite $TEST_SUITE --group $PLUGIN_NAME --coverage-clover $PIWIK_ROOT_DIR/build/logs/clover-$PLUGIN_NAME.xml $PHPUNIT_EXTRA_OPTIONS | tee phpunit.out
        else
            travis_wait ./../../vendor/phpunit/phpunit/phpunit --configuration phpunit.xml --testsuite $TEST_SUITE --colors $PHPUNIT_EXTRA_OPTIONS | tee phpunit.out
        fi

        exit_code="${PIPESTATUS[0]}"
        if [ "$exit_code" -ne "0" ]; then
            exit $exit_code
        elif grep "No tests executed" phpunit.out; then
            exit 1
        else
            exit 0
        fi
    fi
else
    if [ "$COVERAGE" = "Unit" ]
    then
        echo "Executing tests in test suite UnitTests..."
        ./../../vendor/phpunit/phpunit/phpunit --configuration phpunit.xml --testsuite UnitTests --colors --coverage-clover $TRAVIS_BUILD_DIR/build/logs/clover-unit.xml $PHPUNIT_EXTRA_OPTIONS || true
    elif [ "$COVERAGE" = "Integration" ]
    then
        echo "Executing tests in test suite IntegrationTests..."
        ./../../vendor/phpunit/phpunit/phpunit --configuration phpunit.xml --testsuite IntegrationTests --colors --coverage-clover $TRAVIS_BUILD_DIR/build/logs/clover-integration.xml $PHPUNIT_EXTRA_OPTIONS || true
    fi;
fi