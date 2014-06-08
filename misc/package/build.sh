#!/bin/bash
# Syntax: build.sh version

# Setup environment once:
# $ curl -sS https://getcomposer.org/installer | php
# git clone -- https://github.com/piwik/piwik.git /home/piwik-builds/builds/piwik_last_version || die "Problem checking out the last version tag"

# Before running this script, tag a new version:
# $ git tag 1.11-b3
# $ git push origin tags/1.11-b3

VERSION="$1"
DEST_PATH=/home/piwik-builds/builds
URL_REPO=https://github.com/piwik/piwik.git
# repo should be in DEST_PATH/piwik_last_version eg. /home/piwik-builds/builds/piwik_last_version
HTTP_PATH=/home/piwik-builds/www/builds.piwik.org
API_SCP_LATEST=piwik-api@localhost:/home/piwik-api/www/api.piwik.org/
WWW_SCP_LATEST=piwik@localhost:/home/piwik/www/

# report error and exit
function die() {
    echo -e "$0: $1"
    exit 2
}

# clean up the workspace
function cleanupWorkspace() {
    rm -rf piwik
    rm -f *.html
    rm -f *.xml
    rm -f *.sql
    rm -f *.md
    rm -f *.html.*
}

# organize files for packaging
function organizePackage() {
    curl -sS https://getcomposer.org/installer | php
    php composer.phar install
    cd ../
    rm -rf piwik/composer.phar
    rm -rf piwik/vendor/twig/twig/test/
    rm -rf piwik/vendor/twig/twig/doc/
    rm -rf piwik/vendor/symfony/console/Symfony/Component/Console/Tests
    rm -rf piwik/vendor/symfony/console/Symfony/Component/Console/Resources/bin
    rm -rf piwik/vendor/phpunit/
    rm -rf piwik/vendor/sebastian/

    rm -rf piwik/libs/PhpDocumentor-1.3.2/
    rm -rf piwik/libs/FirePHPCore/
    rm -f piwik/libs/open-flash-chart/php-ofc-library/ofc_upload_image.php

    rm -rf piwik/tmp/*
    rm -rf piwik/tmp/.gitkeep
    rm -f piwik/misc/updateLanguageFiles.sh
    rm -f piwik/misc/others/db-schema*
    rm -f piwik/misc/others/diagram_general_request*
    rm -f piwik/.travis*

    # delete submodules empty dirs
    for path_to_delete in `cat piwik/.gitmodules  | grep "path = " | sed "s/.*path = //"` ; do rmdir piwik/$path_to_delete; done
    rm -rf piwik/.git*

    cp piwik/tests/README.md .
    find piwik -name 'tests' -type d -prune -exec rm -rf {} \;
    mkdir piwik/tests
    mv README.md piwik/tests/

    cp piwik/misc/How\ to\ install\ Piwik.html .
    if [ -e piwik/misc/package ]; then
        cp piwik/misc/package/WebAppGallery/*.* .
        rm -rf piwik/misc/package/
    else
        if [ -e piwik/misc/WebAppGallery ]; then
            cp piwik/misc/WebAppGallery/*.* .
            rm -rf piwik/misc/WebAppGallery
        fi
    fi

    find piwik -type f -printf '%s ' -exec md5sum {} \; \
        | grep -v "user/.htaccess" \
        | egrep -v 'manifest.inc.php|autoload.php|autoload_real.php' \
        | sed '1,$ s/\([0-9]*\) \([a-z0-9]*\) *piwik\/\(.*\)/\t\t"\3" => array("\1", "\2"),/;' \
        | sort \
        | sed '1 s/^/<?php\n\/\/ This file is automatically generated during the Piwik build process \
namespace Piwik;\nclass Manifest {\n\tstatic $files=array(\n/; $ s/$/\n\t);\n}/' \
        > piwik/config/manifest.inc.php

}

if [ -z "$VERSION" ]; then
    die "Expected a version number as a parameter"
fi


# Fail script, if Piwik has already been built, to prevent re-building a given release
destination=$HTTP_PATH/piwik-$VERSION.zip
if [ -f "$destination" ]
then
	die "Piwik $VERSION has already been packaged. You must increase Piwik version number before packaging Piwik."
fi

############################
echo "Starting build...."
############################

# Setting umask so it works for most users, see http://dev.piwik.org/trac/ticket/3869
UMASK=`umask`
umask 0022

if [ ! -e $DEST_PATH ] ; then
    echo "Destination directory does not exist... Creating it!";
    mkdir -p $DEST_PATH;
fi

cd $DEST_PATH
cleanupWorkspace

if [ ! -e $DEST_PATH/piwik_last_version ] ; then
    git clone -- $URL_REPO $DEST_PATH/piwik_last_version
fi
echo "checkout repository for tag $VERSION..."
cd $DEST_PATH/piwik_last_version
git checkout master
git pull
git checkout tags/$VERSION

if [ $? -eq 1 ] ; then
    echo "Tag $VERSION does not exist in repository"
fi

echo "copying files to a new directory..."
cd ..
rm -Rf piwik
cp -R piwik_last_version piwik
cd piwik
git checkout master
git pull

if [ `git describe --exact-match --tags HEAD` != "$VERSION" ]
then
    echo "=====> could not checkout to the tag for this version, make sure tag exists <======"
    exit 1
fi

cd $DEST_PATH/piwik
git checkout tags/$VERSION

echo "preparing release $VERSION"

echo `grep "'$VERSION'" core/Version.php`
if [ `grep "'$VERSION'" core/Version.php | wc -l` -ne 1 ]; then
    echo "version $VERSION does not match core/Version.php";
    exit
fi

echo "organizing files and generating manifest file..."
organizePackage

echo "packaging release..."
zip -r piwik-$VERSION.zip piwik How\ to\ install\ Piwik.html > /dev/null
tar -czf piwik-$VERSION.tar.gz piwik How\ to\ install\ Piwik.html
mv piwik-$VERSION.{zip,tar.gz} $HTTP_PATH

zip -r piwik-$VERSION-WAG.zip piwik *.xml *.sql > /dev/null 2> /dev/null
mkdir $HTTP_PATH/WebAppGallery 2> /dev/null
mv piwik-$VERSION-WAG.zip $HTTP_PATH/WebAppGallery/piwik-$VERSION.zip

# setting back umask
umask $UMASK

if [ `echo $VERSION | grep -E 'rc|b|a|alpha|beta|dev' -i | wc -l` -eq 1 ]; then
    if [ `echo $VERSION | grep -E 'rc|b|beta' -i | wc -l` -eq 1 ]; then
        echo "Beta or RC release";
        echo $VERSION > $HTTP_PATH/LATEST_BETA
    fi
    echo "build finished! http://builds.piwik.org/piwik-$VERSION.zip"
else
    echo "Stable release";

    #hard linking piwik.org/latest.zip to the newly created build
    for i in zip tar.gz; do
        ln -sf $HTTP_PATH/piwik-$VERSION.$i $HTTP_PATH/latest.$i
        ln -sf $HTTP_PATH/piwik-$VERSION.$i $HTTP_PATH/piwik-latest.$i
    done

    # record filesize in Mb
    ls -l $HTTP_PATH/piwik-$VERSION.zip | awk '/d|-/{printf("%.3f %s\n",$5/(1024*1024),$9)}' > LATEST_SIZE

    echo $VERSION > $HTTP_PATH/LATEST
    echo $VERSION > $HTTP_PATH/LATEST_BETA

    CMD="scp $HTTP_PATH/LATEST $API_SCP_LATEST"
    echo $CMD
    $CMD

    CMD="scp $HTTP_PATH/LATEST LATEST_SIZE $WWW_SCP_LATEST"
    echo $CMD
    $CMD

    SHA1_WINDOWS="$(sha1sum $HTTP_PATH/WebAppGallery/piwik-$VERSION.zip | cut -d' ' -f1)"

    echo -e "Sending email to Microsoft web team \n\n"
    echo -e "Hello, \n\n\
We are proud to announce a new release for Piwik! \n\
Piwik $VERSION can be downloaded at: http://builds.piwik.org/WebAppGallery/piwik-$VERSION.zip \n\
SHA1 checksum is: $SHA1_WINDOWS \n\n\
Please consult the changelog for list of closed tickets: http://piwik.org/changelog/ \n\n\
We're looking forward to seeing this Piwik version on Microsoft Web App Gallery. \n\
If you have any question, feel free to ask. \n\n\
Thank you,\n\n\
Piwik team" | mail -s"New Piwik Version $VERSION" "appgal@microsoft.com,hello@piwik.org"

    echo "build finished! http://builds.piwik.org/latest.zip"
fi


cleanupWorkspace

