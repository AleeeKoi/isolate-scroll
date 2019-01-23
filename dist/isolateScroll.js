(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("isolateScroll", [], factory);
	else if(typeof exports === 'object')
		exports["isolateScroll"] = factory();
	else
		root["isolateScroll"] = factory();
})(window, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/isolateScroll.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*!
 * Isolate Scroll v 1.0.2
 * https://github.com/AleeeKoi/isolate-scroll
 *
 * Copyright Alessandro Pellizzari <aleeekoi@hotmail.it>
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */
var IsolateScroll =
/*#__PURE__*/
function () {
  function IsolateScroll(target) {
    var _this = this;

    _classCallCheck(this, IsolateScroll);

    if (typeof target === 'string') {
      target = document.querySelector(target);
    }

    if (!target) throw new Error('Invalid target');
    this.target = target;
    var touchStart = 0;
    this.events = [{
      name: 'wheel',
      callback: function callback(event) {
        _this.scrollEvent.call(_this, event);
      }
    }, {
      name: 'touchstart',
      callback: function callback(event) {
        touchStart = _this.getTouchY(event);
      }
    }, {
      name: 'touchmove',
      callback: function callback(event) {
        _this.scrollEvent.call(_this, event, touchStart - _this.getTouchY(event));
      }
    }];
    this.update();
    this.bindEvents();
  }

  _createClass(IsolateScroll, [{
    key: "update",
    value: function update() {
      if (!this.target) return;
      this.scrollHeight = this.target.scrollHeight;
      this.height = this.target.clientHeight;
      this.lineHeight = -1;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      for (var i = 0, l = this.events.length; i < l; i++) {
        var _this$events$i = this.events[i],
            name = _this$events$i.name,
            callback = _this$events$i.callback;
        this.target.addEventListener(name, callback, true);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      for (var i = 0, l = this.events.length; i < l; i++) {
        var _this$events$i2 = this.events[i],
            name = _this$events$i2.name,
            callback = _this$events$i2.callback;
        this.target.removeEventListener(name, callback, true);
      }
    }
  }, {
    key: "getTouchY",
    value: function getTouchY(event) {
      return event.changedTouches[0].clientY;
    }
  }, {
    key: "prevent",
    value: function prevent(event) {
      event.preventDefault();
      event.returnValue = false;
    }
  }, {
    key: "scrollEvent",
    value: function scrollEvent(event, deltaY) {
      if (!deltaY) {
        deltaY = event.deltaY;
      }

      var top = this.target.scrollTop;
      var upDisrection = deltaY < 0;
      event.stopPropagation();

      if (upDisrection && top === 0) {
        return this.prevent(event);
      }

      if (parseInt(event.deltaMode, 10) === 1) {
        // deltaY in LINE units
        if (this.lineHeight < 0) {
          var style = window.getComputedStyle(this.target, null).getPropertyValue('font-size');
          this.lineHeight = parseFloat(style);
        }

        deltaY *= this.lineHeight;
      }

      if (!upDisrection && deltaY > this.scrollHeight - this.height - top) {
        this.target.scrollTop = this.scrollHeight - this.height;
        return this.prevent(event);
      }

      return this;
    }
  }]);

  return IsolateScroll;
}();


// CONCATENATED MODULE: ./src/index.js
 // Expose globally

(function (w) {
  w.IsolateScroll = function (target) {
    return new IsolateScroll(target);
  };
})(window);

/* harmony default export */ var src = __webpack_exports__["default"] = (IsolateScroll);

/***/ })
/******/ ]);
});
//# sourceMappingURL=isolateScroll.js.map