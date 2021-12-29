(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", , "CorePluginsAdmin"], factory);
	else if(typeof exports === 'object')
		exports["CoreAdminHome"] = factory(require("CoreHome"), require("vue"), require("CorePluginsAdmin"));
	else
		root["CoreAdminHome"] = factory(root["CoreHome"], root["Vue"], root["CorePluginsAdmin"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__19dc__, __WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a5a2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "plugins/CoreAdminHome/vue/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "19dc":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19dc__;

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "a5a2":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a5a2__;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ArchivingSettings", function() { return /* reexport */ ArchivingSettings; });
__webpack_require__.d(__webpack_exports__, "BrandingSettings", function() { return /* reexport */ BrandingSettings; });
__webpack_require__.d(__webpack_exports__, "SmtpSettings", function() { return /* reexport */ SmtpSettings; });
__webpack_require__.d(__webpack_exports__, "JsTrackingCodeGenerator", function() { return /* reexport */ JsTrackingCodeGenerator; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CoreAdminHome/vue/src/ArchivingSettings/ArchivingSettings.vue?vue&type=template&id=df19edbe

var _hoisted_1 = {
  class: "form-group row"
};
var _hoisted_2 = {
  class: "col s12"
};
var _hoisted_3 = {
  class: "col s12 m6"
};
var _hoisted_4 = {
  class: "form-description",
  style: {
    "margin-left": "4px"
  }
};
var _hoisted_5 = {
  for: "enableBrowserTriggerArchiving2"
};
var _hoisted_6 = ["innerHTML"];
var _hoisted_7 = {
  class: "col s12 m6"
};
var _hoisted_8 = ["innerHTML"];
var _hoisted_9 = {
  class: "form-group row"
};
var _hoisted_10 = {
  class: "col s12"
};
var _hoisted_11 = {
  class: "input-field col s12 m6"
};
var _hoisted_12 = ["disabled"];
var _hoisted_13 = {
  class: "form-description"
};
var _hoisted_14 = {
  class: "col s12 m6"
};
var _hoisted_15 = {
  key: 0,
  class: "form-help"
};
var _hoisted_16 = {
  key: 0
};

var _hoisted_17 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var _hoisted_18 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var _hoisted_19 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");

  var _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, {
    "content-title": _ctx.translate('CoreAdminHome_ArchivingSettings'),
    anchor: "archivingSettings",
    class: "matomo-archiving-settings"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", _hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_AllowPiwikArchivingToTriggerBrowser')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        type: "radio",
        id: "enableBrowserTriggerArchiving1",
        name: "enableBrowserTriggerArchiving",
        value: "1",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return _ctx.enableBrowserTriggerArchivingValue = $event;
        })
      }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelRadio"], _ctx.enableBrowserTriggerArchivingValue]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Yes')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Default')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        type: "radio",
        id: "enableBrowserTriggerArchiving2",
        name: "enableBrowserTriggerArchiving",
        value: "0",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return _ctx.enableBrowserTriggerArchivingValue = $event;
        })
      }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelRadio"], _ctx.enableBrowserTriggerArchivingValue]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_No')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        class: "form-description",
        innerHTML: _ctx.archivingTriggerDesc,
        style: {
          "margin-left": "4px"
        }
      }, null, 8, _hoisted_6)])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: "form-help",
        innerHTML: _ctx.archivingInlineHelp
      }, null, 8, _hoisted_8)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", _hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_ReportsContainingTodayWillBeProcessedAtMostEvery')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        type: "text",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return _ctx.todayArchiveTimeToLiveValue = $event;
        }),
        id: "todayArchiveTimeToLive",
        disabled: !_ctx.isGeneralSettingsAdminEnabled
      }, null, 8, _hoisted_12), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.todayArchiveTimeToLiveValue]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_13, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_RearchiveTimeIntervalOnlyForTodayReports')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_14, [_ctx.isGeneralSettingsAdminEnabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_15, [_ctx.showWarningCron ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("strong", _hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_NewReportsWillBeProcessedByCron')), 1), _hoisted_17, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_ReportsWillBeProcessedAtMostEveryHour')) + " " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_IfArchivingIsFastYouCanSetupCronRunMoreOften')), 1), _hoisted_18])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_SmallTrafficYouCanLeaveDefault', _ctx.todayArchiveTimeToLiveDefault)) + " ", 1), _hoisted_19, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_MediumToHighTrafficItIsRecommendedTo', 1800, 3600)), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
        saving: _ctx.isLoading,
        onConfirm: _cache[3] || (_cache[3] = function ($event) {
          return _ctx.save();
        })
      }, null, 8, ["saving"])])])];
    }),
    _: 1
  }, 8, ["content-title"]);
}
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/ArchivingSettings/ArchivingSettings.vue?vue&type=template&id=df19edbe

// EXTERNAL MODULE: external "CorePluginsAdmin"
var external_CorePluginsAdmin_ = __webpack_require__("a5a2");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CoreAdminHome/vue/src/ArchivingSettings/ArchivingSettings.vue?vue&type=script&lang=ts



/* harmony default export */ var ArchivingSettingsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    enableBrowserTriggerArchiving: Boolean,
    showSegmentArchiveTriggerInfo: Boolean,
    isGeneralSettingsAdminEnabled: Boolean,
    showWarningCron: Boolean,
    todayArchiveTimeToLive: Number,
    todayArchiveTimeToLiveDefault: Number
  },
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  data: function data() {
    return {
      isLoading: false,
      enableBrowserTriggerArchivingValue: this.enableBrowserTriggerArchiving ? 1 : 0,
      todayArchiveTimeToLiveValue: this.todayArchiveTimeToLive
    };
  },
  watch: {
    enableBrowserTriggerArchiving: function enableBrowserTriggerArchiving(newValue) {
      this.enableBrowserTriggerArchivingValue = newValue ? 1 : 0;
    },
    todayArchiveTimeToLive: function todayArchiveTimeToLive(newValue) {
      this.todayArchiveTimeToLiveValue = newValue;
    }
  },
  computed: {
    archivingTriggerDesc: function archivingTriggerDesc() {
      var result = '';
      result += Object(external_CoreHome_["translate"])('General_ArchivingTriggerDescription', '<a target="_blank" rel="noreferrer noopener" href="https://matomo.org/docs/setup-auto-archiving/">', '</a>');

      if (this.showSegmentArchiveTriggerInfo) {
        result += Object(external_CoreHome_["translate"])('General_ArchivingTriggerSegment');
      }

      return result;
    },
    archivingInlineHelp: function archivingInlineHelp() {
      var result = Object(external_CoreHome_["translate"])('General_ArchivingInlineHelp');
      result += '<br/>';
      result += Object(external_CoreHome_["translate"])('General_SeeTheOfficialDocumentationForMoreInformation', '<a target="_blank" rel="noreferrer noopener" href="https://matomo.org/docs/setup-auto-archiving/">', '</a>');
      return result;
    }
  },
  methods: {
    save: function save() {
      var _this = this;

      this.isLoading = true;
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        method: 'CoreAdminHome.setArchiveSettings'
      }, {
        enableBrowserTriggerArchiving: this.enableBrowserTriggerArchivingValue,
        todayArchiveTimeToLive: this.todayArchiveTimeToLiveValue
      }).then(function () {
        _this.isLoading = false;
        external_CoreHome_["NotificationsStore"].show({
          message: Object(external_CoreHome_["translate"])('CoreAdminHome_SettingsSaveSuccess'),
          type: 'transient',
          id: 'generalSettings',
          context: 'success'
        });
        external_CoreHome_["NotificationsStore"].scrollToNotification('generalSettings');
      }).finally(function () {
        _this.isLoading = false;
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/ArchivingSettings/ArchivingSettings.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/ArchivingSettings/ArchivingSettings.vue



ArchivingSettingsvue_type_script_lang_ts.render = render

/* harmony default export */ var ArchivingSettings = (ArchivingSettingsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/ArchivingSettings/ArchivingSettings.adapter.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */


/* harmony default export */ var ArchivingSettings_adapter = (Object(external_CoreHome_["createAngularJsAdapter"])({
  component: ArchivingSettings,
  scope: {
    enableBrowserTriggerArchiving: {
      angularJsBind: '<'
    },
    showSegmentArchiveTriggerInfo: {
      angularJsBind: '<'
    },
    isGeneralSettingsAdminEnabled: {
      angularJsBind: '<'
    },
    showWarningCron: {
      angularJsBind: '<'
    },
    todayArchiveTimeToLive: {
      angularJsBind: '<'
    }
  },
  directiveName: 'matomoArchivingSettings'
}));
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CoreAdminHome/vue/src/BrandingSettings/BrandingSettings.vue?vue&type=template&id=954032b0

var BrandingSettingsvue_type_template_id_954032b0_hoisted_1 = {
  id: "logoSettings"
};
var BrandingSettingsvue_type_template_id_954032b0_hoisted_2 = {
  id: "logoUploadForm",
  ref: "logoUploadForm",
  method: "post",
  enctype: "multipart/form-data",
  action: "index.php?module=CoreAdminHome&format=json&action=uploadCustomLogo"
};
var BrandingSettingsvue_type_template_id_954032b0_hoisted_3 = {
  key: 0
};
var BrandingSettingsvue_type_template_id_954032b0_hoisted_4 = ["value"];

var BrandingSettingsvue_type_template_id_954032b0_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
  type: "hidden",
  name: "force_api_session",
  value: "1"
}, null, -1);

var BrandingSettingsvue_type_template_id_954032b0_hoisted_6 = {
  key: 0
};
var BrandingSettingsvue_type_template_id_954032b0_hoisted_7 = {
  key: 0,
  class: "alert alert-warning uploaderror"
};
var BrandingSettingsvue_type_template_id_954032b0_hoisted_8 = {
  class: "row"
};
var BrandingSettingsvue_type_template_id_954032b0_hoisted_9 = {
  class: "col s12"
};
var BrandingSettingsvue_type_template_id_954032b0_hoisted_10 = ["src"];
var BrandingSettingsvue_type_template_id_954032b0_hoisted_11 = {
  class: "row"
};
var BrandingSettingsvue_type_template_id_954032b0_hoisted_12 = {
  class: "col s12"
};
var BrandingSettingsvue_type_template_id_954032b0_hoisted_13 = ["src"];
var BrandingSettingsvue_type_template_id_954032b0_hoisted_14 = {
  key: 1
};
var BrandingSettingsvue_type_template_id_954032b0_hoisted_15 = ["innerHTML"];
var BrandingSettingsvue_type_template_id_954032b0_hoisted_16 = {
  key: 1
};
var BrandingSettingsvue_type_template_id_954032b0_hoisted_17 = {
  class: "alert alert-warning"
};
function BrandingSettingsvue_type_template_id_954032b0_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");

  var _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");

  var _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");

  var _directive_form = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("form");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, {
    "content-title": _ctx.translate('CoreAdminHome_BrandingSettings'),
    anchor: "brandingSettings"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreAdminHome_CustomLogoHelpText')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        name: "useCustomLogo",
        uicontrol: "checkbox",
        "model-value": _ctx.enabled,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return _ctx.onUseCustomLogoChange($event);
        }),
        title: _ctx.translate('CoreAdminHome_UseCustomLogo'),
        "inline-help": _ctx.help
      }, null, 8, ["model-value", "title", "inline-help"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", BrandingSettingsvue_type_template_id_954032b0_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("form", BrandingSettingsvue_type_template_id_954032b0_hoisted_2, [_ctx.fileUploadEnabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", BrandingSettingsvue_type_template_id_954032b0_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        type: "hidden",
        name: "token_auth",
        value: _ctx.tokenAuth
      }, null, 8, BrandingSettingsvue_type_template_id_954032b0_hoisted_4), BrandingSettingsvue_type_template_id_954032b0_hoisted_5, _ctx.logosWriteable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", BrandingSettingsvue_type_template_id_954032b0_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
        name: "fade-out"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [_ctx.showUploadError ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", BrandingSettingsvue_type_template_id_954032b0_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreAdminHome_LogoUploadFailed')), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
        }),
        _: 1
      }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "file",
        name: "customLogo",
        "model-value": _ctx.customLogo,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return _ctx.onCustomLogoChange($event);
        }),
        title: _ctx.translate('CoreAdminHome_LogoUpload'),
        "inline-help": _ctx.translate('CoreAdminHome_LogoUploadHelp', 'JPG / PNG / GIF', '110')
      }, null, 8, ["model-value", "title", "inline-help"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", BrandingSettingsvue_type_template_id_954032b0_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", BrandingSettingsvue_type_template_id_954032b0_hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
        src: _ctx.pathUserLogoWithBuster,
        id: "currentLogo",
        style: {
          "max-height": "150px"
        },
        ref: "currentLogo"
      }, null, 8, BrandingSettingsvue_type_template_id_954032b0_hoisted_10)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "file",
        name: "customFavicon",
        "model-value": _ctx.customFavicon,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return _ctx.onFaviconChange($event);
        }),
        title: _ctx.translate('CoreAdminHome_FaviconUpload'),
        "inline-help": _ctx.translate('CoreAdminHome_LogoUploadHelp', 'JPG / PNG / GIF', '16')
      }, null, 8, ["model-value", "title", "inline-help"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", BrandingSettingsvue_type_template_id_954032b0_hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", BrandingSettingsvue_type_template_id_954032b0_hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
        src: _ctx.pathUserFaviconWithBuster,
        id: "currentFavicon",
        width: "16",
        height: "16",
        ref: "currentFavicon"
      }, null, 8, BrandingSettingsvue_type_template_id_954032b0_hoisted_13)])])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.logosWriteable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", BrandingSettingsvue_type_template_id_954032b0_hoisted_14, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        class: "alert alert-warning",
        innerHTML: _ctx.logosNotWriteableWarning
      }, null, 8, BrandingSettingsvue_type_template_id_954032b0_hoisted_15)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.fileUploadEnabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", BrandingSettingsvue_type_template_id_954032b0_hoisted_16, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", BrandingSettingsvue_type_template_id_954032b0_hoisted_17, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreAdminHome_FileUploadDisabled', "file_uploads=1")), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 512)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.enabled]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
        onConfirm: _cache[3] || (_cache[3] = function ($event) {
          return _ctx.save();
        }),
        saving: _ctx.isLoading
      }, null, 8, ["saving"])], 512), [[_directive_form]])];
    }),
    _: 1
  }, 8, ["content-title"]);
}
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/BrandingSettings/BrandingSettings.vue?vue&type=template&id=954032b0

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CoreAdminHome/vue/src/BrandingSettings/BrandingSettings.vue?vue&type=script&lang=ts



var _window = window,
    $ = _window.$;
/* harmony default export */ var BrandingSettingsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    fileUploadEnabled: {
      type: Boolean,
      required: true
    },
    logosWriteable: {
      type: Boolean,
      required: true
    },
    useCustomLogo: {
      type: Boolean,
      required: true
    },
    pathUserLogoDirectory: {
      type: String,
      required: true
    },
    pathUserLogo: {
      type: String,
      required: true
    },
    pathUserLogoSmall: {
      type: String,
      required: true
    },
    pathUserLogoSvg: {
      type: String,
      required: true
    },
    hasUserLogo: {
      type: Boolean,
      required: true
    },
    pathUserFavicon: {
      type: String,
      required: true
    },
    hasUserFavicon: {
      type: Boolean,
      required: true
    },
    isPluginsAdminEnabled: {
      type: Boolean,
      required: true
    }
  },
  components: {
    Field: external_CorePluginsAdmin_["Field"],
    ContentBlock: external_CoreHome_["ContentBlock"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  directives: {
    Form: external_CorePluginsAdmin_["Form"]
  },
  data: function data() {
    return {
      isLoading: false,
      enabled: this.useCustomLogo,
      customLogo: this.pathUserLogo,
      customFavicon: this.pathUserFavicon,
      showUploadError: false,
      currentLogoSrcExists: this.hasUserLogo,
      currentFaviconSrcExists: this.hasUserFavicon,
      currentLogoCacheBuster: new Date().getTime(),
      currentFaviconCacheBuster: new Date().getTime()
    };
  },
  computed: {
    tokenAuth: function tokenAuth() {
      return external_CoreHome_["Matomo"].token_auth;
    },
    logosNotWriteableWarning: function logosNotWriteableWarning() {
      return Object(external_CoreHome_["translate"])('CoreAdminHome_LogoNotWriteableInstruction', "<code>".concat(this.pathUserLogoDirectory, "</code><br/>"), "".concat(this.pathUserLogo, ", ").concat(this.pathUserLogoSmall, ", ").concat(this.pathUserLogoSvg));
    },
    help: function help() {
      if (!this.isPluginsAdminEnabled) {
        return undefined;
      }

      var giveUsFeedbackText = Object(external_CoreHome_["translate"])('General_GiveUsYourFeedback');
      var linkStart = '<a href="?module=CorePluginsAdmin&action=plugins" ' + 'rel="noreferrer noopener" target="_blank">';
      return Object(external_CoreHome_["translate"])('CoreAdminHome_CustomLogoFeedbackInfo', giveUsFeedbackText, linkStart, '</a>');
    },
    pathUserLogoWithBuster: function pathUserLogoWithBuster() {
      if (this.currentLogoSrcExists && this.pathUserLogo) {
        return "".concat(this.pathUserLogo, "?").concat(this.currentLogoCacheBuster);
      }

      return '';
    },
    pathUserFaviconWithBuster: function pathUserFaviconWithBuster() {
      if (this.currentFaviconSrcExists && this.pathUserFavicon) {
        return "".concat(this.pathUserFavicon, "?").concat(this.currentFaviconCacheBuster);
      }

      return '';
    }
  },
  methods: {
    onUseCustomLogoChange: function onUseCustomLogoChange(newValue) {
      this.enabled = newValue;
    },
    onCustomLogoChange: function onCustomLogoChange(newValue) {
      this.customLogo = newValue;
      this.updateLogo();
    },
    onFaviconChange: function onFaviconChange(newValue) {
      this.customFavicon = newValue;
      this.updateLogo();
    },
    save: function save() {
      var _this = this;

      this.isLoading = true;
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        method: 'CoreAdminHome.setBrandingSettings'
      }, {
        useCustomLogo: this.enabled ? '1' : '0'
      }).then(function () {
        var notificationInstanceId = external_CoreHome_["NotificationsStore"].show({
          message: Object(external_CoreHome_["translate"])('CoreAdminHome_SettingsSaveSuccess'),
          type: 'transient',
          id: 'generalSettings',
          context: 'success'
        });
        external_CoreHome_["NotificationsStore"].scrollToNotification(notificationInstanceId);
      }).finally(function () {
        _this.isLoading = false;
      });
    },
    updateLogo: function updateLogo() {
      var _this2 = this;

      var isSubmittingLogo = !!this.customLogo;
      var isSubmittingFavicon = !!this.customFavicon;

      if (!isSubmittingLogo && !isSubmittingFavicon) {
        return;
      }

      this.showUploadError = false;
      var frameName = "upload".concat(new Date().getTime());
      var uploadFrame = $("<iframe name=\"".concat(frameName, "\" />"));
      uploadFrame.css('display', 'none');
      uploadFrame.on('load', function () {
        setTimeout(function () {
          var frameContent = ($(uploadFrame.contents()).find('body').html() || '').trim();

          if (frameContent === '0') {
            _this2.showUploadError = true;
          } else {
            // Upload succeed, so we update the images availability
            // according to what have been uploaded
            if (isSubmittingLogo) {
              _this2.currentLogoSrcExists = true;
              _this2.currentLogoCacheBuster = new Date().getTime(); // force re-fetch
            }

            if (isSubmittingFavicon) {
              _this2.currentFaviconSrcExists = true;
              _this2.currentFaviconCacheBuster = new Date().getTime(); // force re-fetch
            }
          }

          if (frameContent === '1' || frameContent === '0') {
            uploadFrame.remove();
          }
        }, 1000);
      });
      $('body:first').append(uploadFrame);
      var submittingForm = $(this.$refs.logoUploadForm);
      submittingForm.attr('target', frameName);
      submittingForm.submit();
      this.customLogo = '';
      this.customFavicon = '';
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/BrandingSettings/BrandingSettings.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/BrandingSettings/BrandingSettings.vue



BrandingSettingsvue_type_script_lang_ts.render = BrandingSettingsvue_type_template_id_954032b0_render

/* harmony default export */ var BrandingSettings = (BrandingSettingsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/BrandingSettings/BrandingSettings.adapter.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */


/* harmony default export */ var BrandingSettings_adapter = (Object(external_CoreHome_["createAngularJsAdapter"])({
  component: BrandingSettings,
  scope: {
    fileUploadEnabled: {
      angularJsBind: '<'
    },
    logosWriteable: {
      angularJsBind: '<'
    },
    useCustomLogo: {
      angularJsBind: '<'
    },
    pathUserLogoDirectory: {
      angularJsBind: '<'
    },
    pathUserLogo: {
      angularJsBind: '<'
    },
    pathUserLogoSmall: {
      angularJsBind: '<'
    },
    pathUserLogoSvg: {
      angularJsBind: '<'
    },
    hasUserLogo: {
      angularJsBind: '<'
    },
    pathUserFavicon: {
      angularJsBind: '<'
    },
    hasUserFavicon: {
      angularJsBind: '<'
    },
    isPluginsAdminEnabled: {
      angularJsBind: '<'
    }
  },
  directiveName: 'matomoBrandingSettings'
}));
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CoreAdminHome/vue/src/SmtpSettings/SmtpSettings.vue?vue&type=template&id=a947f986

var SmtpSettingsvue_type_template_id_a947f986_hoisted_1 = {
  id: "smtpSettings"
};
function SmtpSettingsvue_type_template_id_a947f986_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");

  var _component_SaveButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SaveButton");

  var _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");

  var _directive_form = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("form");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, {
    "content-title": _ctx.translate('CoreAdminHome_EmailServerSettings'),
    anchor: "mailSettings"
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "mailUseSmtp",
        modelValue: _ctx.enabled,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return _ctx.enabled = $event;
        }),
        title: _ctx.translate('General_UseSMTPServerForEmail'),
        "inline-help": _ctx.translate('General_SelectYesIfYouWantToSendEmailsViaServer')
      }, null, 8, ["modelValue", "title", "inline-help"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", SmtpSettingsvue_type_template_id_a947f986_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "mailHost",
        "model-value": _ctx.mailHost,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return _ctx.onUpdateMailHost($event);
        }),
        title: _ctx.translate('General_SmtpServerAddress')
      }, null, 8, ["model-value", "title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "mailPort",
        modelValue: _ctx.mailPort,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return _ctx.mailPort = $event;
        }),
        title: _ctx.translate('General_SmtpPort'),
        "inline-help": _ctx.translate('General_OptionalSmtpPort')
      }, null, 8, ["modelValue", "title", "inline-help"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "select",
        name: "mailType",
        modelValue: _ctx.mailType,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return _ctx.mailType = $event;
        }),
        title: _ctx.translate('General_AuthenticationMethodSmtp'),
        options: _ctx.mailTypes,
        "inline-help": _ctx.translate('General_OnlyUsedIfUserPwdIsSet')
      }, null, 8, ["modelValue", "title", "options", "inline-help"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "mailUsername",
        modelValue: _ctx.mailUsername,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return _ctx.mailUsername = $event;
        }),
        title: _ctx.translate('General_SmtpUsername'),
        "inline-help": _ctx.translate('General_OnlyEnterIfRequired'),
        autocomplete: false
      }, null, 8, ["modelValue", "title", "inline-help"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "password",
        name: "mailPassword",
        "model-value": _ctx.mailPassword,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return _ctx.onMailPasswordChange($event);
        }),
        onClick: _cache[6] || (_cache[6] = function ($event) {
          !_ctx.passwordChanged && $event.target.select();
        }),
        title: _ctx.translate('General_SmtpPassword'),
        "inline-help": _ctx.passwordHelp,
        autocomplete: false
      }, null, 8, ["model-value", "title", "inline-help"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "mailFromAddress",
        modelValue: _ctx.mailFromAddress,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return _ctx.mailFromAddress = $event;
        }),
        title: _ctx.translate('General_SmtpFromAddress'),
        "inline-help": _ctx.translate('General_SmtpFromEmailHelp', _ctx.mailHost),
        autocomplete: false
      }, null, 8, ["modelValue", "title", "inline-help"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "mailFromName",
        modelValue: _ctx.mailFromName,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return _ctx.mailFromName = $event;
        }),
        title: _ctx.translate('General_SmtpFromName'),
        "inline-help": _ctx.translate('General_NameShownInTheSenderColumn'),
        autocomplete: false
      }, null, 8, ["modelValue", "title", "inline-help"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "select",
        name: "mailEncryption",
        modelValue: _ctx.mailEncryption,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
          return _ctx.mailEncryption = $event;
        }),
        title: _ctx.translate('General_SmtpEncryption'),
        options: _ctx.mailEncryptions,
        "inline-help": _ctx.translate('General_EncryptedSmtpTransport')
      }, null, 8, ["modelValue", "title", "options", "inline-help"])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.enabled]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SaveButton, {
        onConfirm: _cache[10] || (_cache[10] = function ($event) {
          return _ctx.save();
        }),
        saving: _ctx.isLoading
      }, null, 8, ["saving"])], 512), [[_directive_form]])];
    }),
    _: 1
  }, 8, ["content-title"]);
}
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/SmtpSettings/SmtpSettings.vue?vue&type=template&id=a947f986

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CoreAdminHome/vue/src/SmtpSettings/SmtpSettings.vue?vue&type=script&lang=ts



/* harmony default export */ var SmtpSettingsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    mail: {
      type: Object,
      required: true
    },
    mailTypes: {
      type: Object,
      required: true
    },
    mailEncryptions: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    var mail = this.mail;
    return {
      isLoading: false,
      enabled: mail.transport === 'smtp',
      mailHost: mail.host,
      passwordChanged: false,
      mailPort: mail.port,
      mailType: mail.type,
      mailUsername: mail.username,
      mailPassword: mail.password ? '******' : '',
      mailFromAddress: mail.noreply_email_address,
      mailFromName: mail.noreply_email_name,
      mailEncryption: mail.encryption
    };
  },
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"],
    Field: external_CorePluginsAdmin_["Field"],
    SaveButton: external_CorePluginsAdmin_["SaveButton"]
  },
  directives: {
    Form: external_CorePluginsAdmin_["Form"]
  },
  computed: {
    passwordHelp: function passwordHelp() {
      var part1 = "".concat(Object(external_CoreHome_["translate"])('General_OnlyEnterIfRequiredPassword'), "<br/>");
      var part2 = "".concat(Object(external_CoreHome_["translate"])('General_WarningPasswordStored', '<strong>', '</strong>'), "<br/>");
      return "".concat(part1, "\n").concat(part2);
    }
  },
  methods: {
    onUpdateMailHost: function onUpdateMailHost(newValue) {
      this.mailHost = newValue;

      if (this.passwordChanged) {
        return;
      }

      this.mailPassword = '';
      this.passwordChanged = true;
    },
    onMailPasswordChange: function onMailPasswordChange(newValue) {
      this.mailPassword = newValue;
      this.passwordChanged = true;
    },
    save: function save() {
      var _this = this;

      this.isLoading = true;
      var mailSettings = {
        mailUseSmtp: this.enabled ? '1' : '0',
        mailPort: this.mailPort,
        mailHost: this.mailHost,
        mailType: this.mailType,
        mailUsername: this.mailUsername,
        mailFromAddress: this.mailFromAddress,
        mailFromName: this.mailFromName,
        mailEncryption: this.mailEncryption
      };

      if (this.passwordChanged) {
        mailSettings.mailPassword = this.mailPassword;
      }

      external_CoreHome_["AjaxHelper"].post({
        module: 'CoreAdminHome',
        action: 'setMailSettings'
      }, mailSettings, {
        withTokenInUrl: true
      }).then(function () {
        var notificationInstanceId = external_CoreHome_["NotificationsStore"].show({
          message: Object(external_CoreHome_["translate"])('CoreAdminHome_SettingsSaveSuccess'),
          type: 'transient',
          id: 'generalSettings',
          context: 'success'
        });
        external_CoreHome_["NotificationsStore"].scrollToNotification(notificationInstanceId);
      }).finally(function () {
        _this.isLoading = false;
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/SmtpSettings/SmtpSettings.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/SmtpSettings/SmtpSettings.vue



SmtpSettingsvue_type_script_lang_ts.render = SmtpSettingsvue_type_template_id_a947f986_render

/* harmony default export */ var SmtpSettings = (SmtpSettingsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/SmtpSettings/SmtpSettings.adapter.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */


/* harmony default export */ var SmtpSettings_adapter = (Object(external_CoreHome_["createAngularJsAdapter"])({
  component: SmtpSettings,
  scope: {
    mail: {
      angularJsBind: '<'
    },
    mailTypes: {
      angularJsBind: '<'
    },
    mailEncryptions: {
      angularJsBind: '<'
    }
  },
  directiveName: 'matomoSmtpSettings'
}));
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CoreAdminHome/vue/src/JsTrackingCodeGenerator/JsTrackingCodeGenerator.vue?vue&type=template&id=6f552a2a

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_1 = {
  id: "js-code-options"
};

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_4 = ["innerHTML"];

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_7 = ["innerHTML"];

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_8 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_10 = ["innerHTML"];

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_11 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_13 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
  href: "https://matomo.org/faq/new-to-piwik/how-do-i-install-the-matomo-tracking-code-on-wordpress/",
  target: "_blank",
  rel: "noopener"
}, "WordPress", -1);

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_14 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" | ");

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_15 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
  href: "https://matomo.org/faq/new-to-piwik/how-do-i-integrate-matomo-with-squarespace-website/",
  taret: "_blank",
  rel: "noopener"
}, "Squarespace", -1);

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_16 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" | ");

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_17 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
  href: "https://matomo.org/faq/new-to-piwik/how-do-i-install-the-matomo-analytics-tracking-code-on-wix/",
  target: "_blank",
  rel: "noopener"
}, "Wix", -1);

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_18 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" | ");

var JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_19 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
  href: "https://matomo.org/faq/how-to-install/faq_19424/",
  target: "_blank",
  rel: "noopener"
}, "SharePoint", -1);

var _hoisted_20 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" | ");

var _hoisted_21 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
  href: "https://matomo.org/faq/new-to-piwik/how-do-i-install-the-matomo-analytics-tracking-code-on-joomla/",
  target: "_blank",
  rel: "noopener"
}, "Joomla", -1);

var _hoisted_22 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" | ");

var _hoisted_23 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
  href: "https://matomo.org/faq/new-to-piwik/how-do-i-install-the-matomo-tracking-code-on-my-shopify-store/",
  target: "_blank",
  rel: "noopener"
}, "Shopify", -1);

var _hoisted_24 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" | ");

var _hoisted_25 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
  href: "https://matomo.org/faq/new-to-piwik/how-do-i-use-matomo-analytics-within-gtm-google-tag-manager/",
  target: "_blank",
  rel: "noopener"
}, "Google Tag Manager", -1);

var _hoisted_26 = {
  id: "javascript-output-section"
};
var _hoisted_27 = {
  class: "valign-wrapper trackingHelpHeader matchWidth"
};
var _hoisted_28 = {
  id: "javascript-text"
};
var _hoisted_29 = ["textContent"];
var _hoisted_30 = {
  id: "optional-js-tracking-options"
};
var _hoisted_31 = {
  id: "jsTrackAllSubdomainsInlineHelp",
  class: "inline-help-node"
};
var _hoisted_32 = ["innerHTML"];
var _hoisted_33 = ["innerHTML"];
var _hoisted_34 = {
  id: "jsTrackGroupByDomainInlineHelp",
  class: "inline-help-node"
};
var _hoisted_35 = {
  id: "jsTrackAllAliasesInlineHelp",
  class: "inline-help-node"
};
var _hoisted_36 = {
  id: "javascript-advanced-options"
};
var _hoisted_37 = {
  id: "javascript-tracking-visitor-cv"
};
var _hoisted_38 = {
  class: "row"
};
var _hoisted_39 = {
  class: "col s12 m3"
};
var _hoisted_40 = {
  class: "col s12 m3"
};
var _hoisted_41 = {
  class: "row",
  "ng-repeat": "(customVar, index) in customVars"
};
var _hoisted_42 = {
  class: "col s12 m6 l3"
};
var _hoisted_43 = {
  class: "col s12 m6 l3"
};
var _hoisted_44 = {
  class: "row"
};
var _hoisted_45 = {
  class: "col s12"
};

var _hoisted_46 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-add"
}, null, -1);

var _hoisted_47 = {
  id: "jsCrossDomain",
  class: "inline-help-node"
};

var _hoisted_48 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var _hoisted_49 = {
  id: "jsDoNotTrackInlineHelp",
  class: "inline-help-node"
};
var _hoisted_50 = {
  key: 0
};

var _hoisted_51 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var _hoisted_52 = ["innerHTML"];
var _hoisted_53 = {
  id: "js-campaign-query-param-extra"
};
var _hoisted_54 = {
  class: "row"
};
var _hoisted_55 = {
  class: "col s12"
};
var _hoisted_56 = {
  class: "row"
};
var _hoisted_57 = {
  class: "col s12"
};
function JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Field = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Field");

  var _component_ContentBlock = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ContentBlock");

  var _directive_select_on_focus = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDirective"])("select-on-focus");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ContentBlock, {
    anchor: "javaScriptTracking",
    "content-title": _ctx.translate('CoreAdminHome_JavaScriptTracking')
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreAdminHome_JSTrackingIntro1')) + " ", 1), JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_2, JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreAdminHome_JSTrackingIntro2')) + " ", 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        innerHTML: _ctx.jsTrackingIntro3a
      }, null, 8, JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreAdminHome_JSTrackingIntro3b')) + " ", 1), JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_5, JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        innerHTML: _ctx.jsTrackingIntro4a
      }, null, 8, JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_7), JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_8, JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        innerHTML: _ctx.jsTrackingIntro5
      }, null, 8, JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_10), JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_11, JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('SitesManager_InstallationGuides')) + " : ", 1), JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_13, JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_14, JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_15, JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_16, JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_17, JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_18, JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_hoisted_19, _hoisted_20, _hoisted_21, _hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "site",
        name: "js-tracker-website",
        class: "jsTrackingCodeWebsite",
        modelValue: _ctx.site,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return _ctx.site = $event;
        }),
        introduction: _ctx.translate('General_Website')
      }, null, 8, ["modelValue", "introduction"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_26, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_27, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_JsTrackingTag')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreAdminHome_JSTracking_CodeNoteBeforeClosingHead', "</head>")), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
        class: "btn",
        id: "emailJsBtn",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.sendEmail();
        })
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('SitesManager_EmailInstructionsButton')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_28, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("pre", {
        class: "codeblock",
        textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.trackingCode),
        ref: "trackingCode"
      }, null, 8, _hoisted_29), [[_directive_select_on_focus]])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_30, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_31, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        innerHTML: _ctx.mergeSubdomainsDesc
      }, null, 8, _hoisted_32), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
        innerHTML: _ctx.learnMoreText
      }, null, 8, _hoisted_33)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "javascript-tracking-all-subdomains",
        "model-value": _ctx.trackAllSubdomains,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          _ctx.trackAllSubdomains = $event;

          _ctx.updateTrackingCode();
        }),
        disabled: _ctx.isLoading,
        introduction: _ctx.translate('General_Options'),
        title: "".concat(_ctx.translate('CoreAdminHome_JSTracking_MergeSubdomains'), " ").concat(_ctx.site.name),
        "inline-help": "#jsTrackAllSubdomainsInlineHelp"
      }, null, 8, ["model-value", "disabled", "introduction", "title"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_34, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreAdminHome_JSTracking_GroupPageTitlesByDomainDesc1', _ctx.currentSiteHost)), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "javascript-tracking-group-by-domain",
        "model-value": _ctx.groupByDomain,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          _ctx.groupByDomain = $event;

          _ctx.updateTrackingCode();
        }),
        disabled: _ctx.isLoading,
        title: _ctx.translate('CoreAdminHome_JSTracking_GroupPageTitlesByDomain'),
        "inline-help": "#jsTrackGroupByDomainInlineHelp"
      }, null, 8, ["model-value", "disabled", "title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_35, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreAdminHome_JSTracking_MergeAliasesDesc', _ctx.currentSiteAlias)), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "javascript-tracking-all-aliases",
        "model-value": _ctx.trackAllAliases,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          _ctx.trackAllAliases = $event;

          _ctx.updateTrackingCode();
        }),
        disabled: _ctx.isLoading,
        title: "".concat(_ctx.translate('CoreAdminHome_JSTracking_MergeAliases'), " ").concat(_ctx.site.name),
        "inline-help": "#jsTrackAllAliasesInlineHelp"
      }, null, 8, ["model-value", "disabled", "title"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "javascript-tracking-noscript",
        "model-value": _ctx.trackNoScript,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          _ctx.trackNoScript = $event;

          _ctx.updateTrackingCode();
        }),
        disabled: _ctx.isLoading,
        title: _ctx.translate('CoreAdminHome_JSTracking_TrackNoScript')
      }, null, 8, ["model-value", "disabled", "title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('Mobile_Advanced')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        href: "javascript:;",
        onClick: _cache[6] || (_cache[6] = function ($event) {
          return _ctx.showAdvanced = true;
        })
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Show')), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.showAdvanced]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        href: "javascript:;",
        onClick: _cache[7] || (_cache[7] = function ($event) {
          return _ctx.showAdvanced = false;
        })
      }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Hide')), 513), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showAdvanced]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_36, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "javascript-tracking-visitor-cv-check",
        "model-value": _ctx.trackCustomVars,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          _ctx.trackCustomVars = $event;

          _ctx.updateTrackingCode();
        }),
        disabled: _ctx.isLoading,
        title: _ctx.translate('CoreAdminHome_JSTracking_VisitorCustomVars'),
        "inline-help": _ctx.translate('CoreAdminHome_JSTracking_VisitorCustomVarsDesc')
      }, null, 8, ["model-value", "disabled", "title", "inline-help"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_37, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_38, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_39, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_40, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Value')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_41, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_42, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        type: "text",
        class: "custom-variable-name",
        onKeydown: _cache[9] || (_cache[9] = function ($event) {
          return _ctx.onCustomVarNameKeydown($event, _ctx.index);
        }),
        placeholder: "e.g. Type"
      }, null, 32)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_43, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        type: "text",
        class: "custom-variable-value",
        onKeydown: _cache[10] || (_cache[10] = function ($event) {
          return _ctx.onCustomVarValueKeydown($event, _ctx.index);
        }),
        placeholder: "e.g. Customer"
      }, null, 32)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_44, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_45, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
        href: "javascript:;",
        onClick: _cache[11] || (_cache[11] = function ($event) {
          return _ctx.addCustomVar();
        }),
        class: "add-custom-variable"
      }, [_hoisted_46, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Add')), 1)])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.canAddMoreCustomVariables]])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.trackCustomVars]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_47, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreAdminHome_JSTracking_CrossDomain')) + " ", 1), _hoisted_48, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreAdminHome_JSTracking_CrossDomain_NeedsMultipleDomains')), 1)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "javascript-tracking-cross-domain",
        "model-value": _ctx.crossDomain,
        "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
          _ctx.crossDomain = $event;

          _ctx.updateTrackingCode();

          _ctx.onCrossDomainToggle();
        }),
        disabled: _ctx.isLoading || !_ctx.hasManySiteUrls,
        title: _ctx.translate('CoreAdminHome_JSTracking_EnableCrossDomainLinking'),
        "inline-help": "#jsCrossDomain"
      }, null, 8, ["model-value", "disabled", "title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_49, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreAdminHome_JSTracking_EnableDoNotTrackDesc')) + " ", 1), _ctx.serverSideDoNotTrackEnabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_50, [_hoisted_51, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('CoreAdminHome_JSTracking_EnableDoNotTrack_AlreadyEnabled')), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "javascript-tracking-do-not-track",
        "model-value": _ctx.doNotTrack,
        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
          _ctx.doNotTrack = $event;

          _ctx.updateTrackingCode();
        }),
        disabled: _ctx.isLoading,
        title: _ctx.translate('CoreAdminHome_JSTracking_EnableDoNotTrack'),
        "inline-help": "#jsDoNotTrackInlineHelp"
      }, null, 8, ["model-value", "disabled", "title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "javascript-tracking-disable-cookies",
        "model-value": _ctx.disableCookies,
        "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
          _ctx.disableCookies = $event;

          _ctx.updateTrackingCode();
        }),
        disabled: _ctx.isLoading,
        title: _ctx.translate('CoreAdminHome_JSTracking_DisableCookies'),
        "inline-help": _ctx.translate('CoreAdminHome_JSTracking_DisableCookiesDesc')
      }, null, 8, ["model-value", "disabled", "title", "inline-help"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
        id: "jsTrackCampaignParamsInlineHelp",
        class: "inline-help-node",
        innerHTML: _ctx.jsTrackCampaignParamsInlineHelp
      }, null, 8, _hoisted_52), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "checkbox",
        name: "custom-campaign-query-params-check",
        "model-value": _ctx.useCustomCampaignParams,
        "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
          _ctx.useCustomCampaignParams = $event;

          _ctx.updateTrackingCode();
        }),
        disabled: _ctx.isLoading,
        title: _ctx.translate('CoreAdminHome_JSTracking_CustomCampaignQueryParam'),
        "inline-help": "#jsTrackCampaignParamsInlineHelp"
      }, null, 8, ["model-value", "disabled", "title"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_53, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_54, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_55, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "custom-campaign-name-query-param",
        "model-value": _ctx.customCampaignName,
        "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
          _ctx.customCampaignName = $event;

          _ctx.updateTrackingCode();
        }),
        disabled: _ctx.isLoading,
        title: _ctx.translate('CoreAdminHome_JSTracking_CampaignNameParam')
      }, null, 8, ["model-value", "disabled", "title"])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_56, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_57, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_Field, {
        uicontrol: "text",
        name: "custom-campaign-keyword-query-param",
        "model-value": _ctx.customCampaignKeyword,
        "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
          _ctx.customCampaignKeyword = $event;

          _ctx.updateTrackingCode();
        }),
        disabled: _ctx.isLoading,
        title: _ctx.translate('CoreAdminHome_JSTracking_CampaignKwdParam')
      }, null, 8, ["model-value", "disabled", "title"])])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.useCustomCampaignParams]])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.showAdvanced]])];
    }),
    _: 1
  }, 8, ["content-title"]);
}
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/JsTrackingCodeGenerator/JsTrackingCodeGenerator.vue?vue&type=template&id=6f552a2a

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/CoreAdminHome/vue/src/JsTrackingCodeGenerator/JsTrackingCodeGenerator.vue?vue&type=script&lang=ts




function getHostNameFromUrl(url) {
  var urlObj = new URL(url);
  return urlObj.hostname;
}

function getCustomVarArray(cvars) {
  return cvars.map(function (cv) {
    return [cv.name, cv.value];
  });
}

var JsTrackingCodeGeneratorvue_type_script_lang_ts_window = window,
    JsTrackingCodeGeneratorvue_type_script_lang_ts_$ = JsTrackingCodeGeneratorvue_type_script_lang_ts_window.$;
var piwikHost = window.location.host;
var piwikPath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
/* harmony default export */ var JsTrackingCodeGeneratorvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    defaultSite: {
      type: Object,
      required: true
    },
    maxCustomVariables: Number,
    serverSideDoNotTrackEnabled: Boolean
  },
  data: function data() {
    return {
      showAdvanced: false,
      site: this.defaultSite,
      trackingCode: '',
      trackAllSubdomains: false,
      isLoading: false,
      siteUrls: {},
      siteExcludedQueryParams: {},
      crossDomain: false,
      groupByDomain: false,
      trackAllAliases: false,
      trackNoScript: false,
      trackCustomVars: false,
      customVars: [],
      canAddMoreCustomVariables: !!this.maxCustomVariables && this.maxCustomVariables > 0,
      doNotTrack: false,
      disableCookies: false,
      useCustomCampaignParams: false,
      customCampaignName: '',
      customCampaignKeyword: '',
      trackingCodeAbortController: null
    };
  },
  components: {
    ContentBlock: external_CoreHome_["ContentBlock"],
    Field: external_CorePluginsAdmin_["Field"]
  },
  directives: {
    SelectOnFocus: external_CoreHome_["SelectOnFocus"]
  },
  created: function created() {
    this.onCustomVarNameKeydown = Object(external_CoreHome_["debounce"])(this.onCustomVarNameKeydown, 100);
    this.onCustomVarValueKeydown = Object(external_CoreHome_["debounce"])(this.onCustomVarValueKeydown, 100);
    this.addCustomVar();

    if (this.site && this.site.id) {
      this.onSiteChanged(this.site);
    }
  },
  watch: {
    site: function site(newValue) {
      this.onSiteChanged(newValue);
    }
  },
  methods: {
    onSiteChanged: function onSiteChanged(newValue) {
      var _this = this;

      var idSite = newValue.id; // if data is already loaded, don't do an AJAX request

      var promises = [];

      if (!this.siteUrls[idSite]) {
        this.isLoading = true;
        promises.push(external_CoreHome_["AjaxHelper"].fetch({
          module: 'API',
          method: 'SitesManager.getSiteUrlsFromId',
          idSite: idSite,
          filter_limit: '-1'
        }).then(function (data) {
          _this.siteUrls[idSite] = data || [];
        }));
      }

      if (!this.siteExcludedQueryParams[idSite]) {
        this.isLoading = true;
        promises.push(external_CoreHome_["AjaxHelper"].fetch({
          module: 'API',
          method: 'Overlay.getExcludedQueryParameters',
          idSite: idSite,
          filter_limit: '-1'
        }).then(function (data) {
          _this.siteExcludedQueryParams[idSite] = data || [];
        }));
      }

      Promise.all(promises).then(function () {
        _this.isLoading = false;

        _this.updateCurrentSiteInfo();

        _this.updateTrackingCode();
      });
    },
    sendEmail: function sendEmail() {
      var subjectLine = Object(external_CoreHome_["translate"])('SitesManager_EmailInstructionsSubject');
      subjectLine = encodeURIComponent(subjectLine);
      var trackingCode = this.trackingCode;
      trackingCode = trackingCode.replace(/<[^>]+>/g, '');
      var bodyText = "".concat(Object(external_CoreHome_["translate"])('SitesManager_JsTrackingTagHelp'), ". ").concat(Object(external_CoreHome_["translate"])('CoreAdminHome_JSTracking_CodeNoteBeforeClosingHeadEmail', '\'head'), "\n").concat(trackingCode);
      bodyText = encodeURIComponent(bodyText);
      var linkText = "mailto:?subject=".concat(subjectLine, "&body=").concat(bodyText);
      window.location.href = linkText;
    },
    onCrossDomainToggle: function onCrossDomainToggle() {
      if (this.crossDomain) {
        this.trackAllAliases = true;
      }
    },
    updateTrackingCode: function updateTrackingCode() {
      var _this2 = this;

      var site = this.site; // get params used to generate JS code

      var params = {
        piwikUrl: "".concat(piwikHost).concat(piwikPath),
        groupPageTitlesByDomain: this.groupByDomain ? 1 : 0,
        mergeSubdomains: this.trackAllSubdomains ? 1 : 0,
        mergeAliasUrls: this.trackAllAliases ? 1 : 0,
        visitorCustomVariables: this.trackCustomVars ? getCustomVarArray(this.customVars) : 0,
        customCampaignNameQueryParam: null,
        customCampaignKeywordParam: null,
        doNotTrack: this.doNotTrack ? 1 : 0,
        disableCookies: this.disableCookies ? 1 : 0,
        crossDomain: this.crossDomain ? 1 : 0,
        trackNoScript: this.trackNoScript ? 1 : 0,
        forceMatomoEndpoint: 1
      };

      if (this.siteExcludedQueryParams[site.id]) {
        params.excludedQueryParams = this.siteExcludedQueryParams[site.id];
      }

      if (this.useCustomCampaignParams) {
        params.customCampaignNameQueryParam = this.customCampaignName;
        params.customCampaignKeywordParam = this.customCampaignKeyword;
      }

      if (this.trackingCodeAbortController) {
        this.trackingCodeAbortController.abort();
        this.trackingCodeAbortController = null;
      }

      this.trackingCodeAbortController = new AbortController();
      return external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        format: 'json',
        method: 'SitesManager.getJavascriptTag',
        idSite: site.id
      }, params, {
        abortController: this.trackingCodeAbortController
      }).then(function (response) {
        _this2.trackingCodeAbortController = null;
        _this2.trackingCode = response.value;
        var jsCodeTextarea = JsTrackingCodeGeneratorvue_type_script_lang_ts_$(_this2.$refs.trackingCode);

        if (jsCodeTextarea) {
          jsCodeTextarea.effect('highlight', {}, 1500);
        }
      });
    },
    updateCurrentSiteInfo: function updateCurrentSiteInfo() {
      if (!this.hasManySiteUrls) {
        // we make sure to disable cross domain if it has only one url or less
        this.crossDomain = false;
      }
    },
    addCustomVar: function addCustomVar() {
      if (this.canAddMoreCustomVariables) {
        this.customVars.push({
          name: '',
          value: ''
        });
      }

      this.canAddMoreCustomVariables = !!this.maxCustomVariables && this.maxCustomVariables > this.customVars.length;
    },
    onCustomVarNameKeydown: function onCustomVarNameKeydown(event, index) {
      var _this3 = this;

      setTimeout(function () {
        _this3.customVars[index].name = event.target.value;

        _this3.updateTrackingCode();
      });
    },
    onCustomVarValueKeydown: function onCustomVarValueKeydown(event, index) {
      var _this4 = this;

      setTimeout(function () {
        _this4.customVars[index].value = event.target.value;

        _this4.updateTrackingCode();
      });
    }
  },
  computed: {
    hasManySiteUrls: function hasManySiteUrls() {
      var site = this.site;
      return this.siteUrls[site.id] && this.siteUrls[site.id].length > 1;
    },
    currentSiteHost: function currentSiteHost() {
      var _this$siteUrls$this$s;

      var siteUrl = (_this$siteUrls$this$s = this.siteUrls[this.site.id]) === null || _this$siteUrls$this$s === void 0 ? void 0 : _this$siteUrls$this$s[0];

      if (!siteUrl) {
        return '';
      }

      return getHostNameFromUrl(siteUrl);
    },
    currentSiteAlias: function currentSiteAlias() {
      var _this$siteUrls$this$s2;

      var defaultAliasUrl = "x.".concat(this.currentSiteHost);
      var alias = (_this$siteUrls$this$s2 = this.siteUrls[this.site.id]) === null || _this$siteUrls$this$s2 === void 0 ? void 0 : _this$siteUrls$this$s2[1];
      return alias || defaultAliasUrl;
    },
    jsTrackingIntro3a: function jsTrackingIntro3a() {
      return Object(external_CoreHome_["translate"])('CoreAdminHome_JSTrackingIntro3a', '<a href="https://matomo.org/integrate/" rel="noreferrer noopener" target="_blank">', '</a>');
    },
    jsTrackingIntro4a: function jsTrackingIntro4a() {
      return Object(external_CoreHome_["translate"])('CoreAdminHome_JSTrackingIntro4', '<a href="#image-tracking-link">', '</a>');
    },
    jsTrackingIntro5: function jsTrackingIntro5() {
      return Object(external_CoreHome_["translate"])('CoreAdminHome_JSTrackingIntro5', '<a rel="noreferrer noopener" target="_blank" ' + 'href="https://developer.matomo.org/guides/tracking-javascript-guide">', '</a>');
    },
    mergeSubdomainsDesc: function mergeSubdomainsDesc() {
      return Object(external_CoreHome_["translate"])('CoreAdminHome_JSTracking_MergeSubdomainsDesc', 'x.<span class=\'current-site-host\'></span>', 'y.<span class=\'current-site-host\'></span>');
    },
    learnMoreText: function learnMoreText() {
      var subdomainsLink = 'https://developer.matomo.org/guides/tracking-javascript-guide' + '#measuring-domains-andor-sub-domains';
      return Object(external_CoreHome_["translate"])('General_LearnMore', " (<a href=\"".concat(subdomainsLink, "\" rel=\"noreferrer noopener\" target=\"_blank\">"), '</a>');
    },
    jsTrackCampaignParamsInlineHelp: function jsTrackCampaignParamsInlineHelp() {
      return Object(external_CoreHome_["translate"])('CoreAdminHome_JSTracking_CustomCampaignQueryParamDesc', '<a href="https://matomo.org/faq/general/#faq_119" rel="noreferrer noopener" target="_blank">', '</a>');
    }
  }
}));
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/JsTrackingCodeGenerator/JsTrackingCodeGenerator.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/JsTrackingCodeGenerator/JsTrackingCodeGenerator.vue



JsTrackingCodeGeneratorvue_type_script_lang_ts.render = JsTrackingCodeGeneratorvue_type_template_id_6f552a2a_render

/* harmony default export */ var JsTrackingCodeGenerator = (JsTrackingCodeGeneratorvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/JsTrackingCodeGenerator/JsTrackingCodeGenerator.adapter.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */


/* harmony default export */ var JsTrackingCodeGenerator_adapter = (Object(external_CoreHome_["createAngularJsAdapter"])({
  component: JsTrackingCodeGenerator,
  scope: {
    defaultSite: {
      angularJsBind: '<'
    },
    maxCustomVariables: {
      angularJsBind: '<'
    },
    serverSideDoNotTrackEnabled: {
      angularJsBind: '<'
    }
  },
  directiveName: 'matomoJsTrackingCodeGenerator'
}));
// CONCATENATED MODULE: ./plugins/CoreAdminHome/vue/src/index.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
*/








// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=CoreAdminHome.umd.js.map