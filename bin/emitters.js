/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Emitter = function Emitter() {
	    var self = {};
	    var events = {};
	    var eventCount = {};
	    self._on = function (type, listener) {
	        if (eventCount[type] >= 10) {
	            throw "Event: " + type + " has to many listeners";
	        }
	        events[type] = events[type] || [];
	        events[type].push(listener);
	        eventCount[type] = eventCount[type] + 1;
	    };
	    self._emit = function (type) {
	        if (events[type]) {
	            events[type].forEach(function (listener) {
	                listener();
	            });
	        } else {
	            throw "Error: " + type + " has no listeners";
	        }
	    };
	    self._removeListeners = function (type) {
	        if (type) {
	            events[type] = [];
	            eventCount[type] = 0;
	        }
	    };
	    return self;
	};

	var ClassEmitter = function () {
	    function ClassEmitter() {
	        _classCallCheck(this, ClassEmitter);

	        this.eventCount = {};
	        this.events = {};
	    }

	    _createClass(ClassEmitter, [{
	        key: "_on",
	        value: function _on(type, listener) {
	            if (this.eventCount[type] >= 10) {
	                throw "Error: " + type + " has to many listeners";
	            } else {
	                this.events[type] = this.events[type] || [];
	                this.events[type].push(listener);
	                this.eventCount[type] = this.eventCount[type] + 1;
	            }
	        }
	    }, {
	        key: "_emit",
	        value: function _emit(type) {
	            if (this.events[type]) {
	                this.events[type].forEach(function (listener) {
	                    listener();
	                });
	            } else {
	                throw "Error: " + type + " has now listeners";
	            }
	        }
	    }, {
	        key: "_removeListeners",
	        value: function _removeListeners(type) {
	            if (type) {
	                this.events[type] = [];
	            } else {
	                this.events = {};
	            }
	        }
	    }]);

	    return ClassEmitter;
	}();

	module.exports = {
	    ClassEmitter: ClassEmitter,
	    Emitter: Emitter

	};

/***/ }
/******/ ]);