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
/******/ 	__webpack_require__.p = "/assets/es3/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ },

/***/ 559:
/***/ function(module, exports) {

!function(t){return t.plugin("cropFill",function(e,i){var n,r,o,a,l,h,u,c;return u=null,e.hasData(function(){var i;return i=t.Video.stillAsset(e._mediaData),u=i.width/i.height}),l=e.container.parentNode,l===document.body||/absolute|fixed|relative/.test(l.style.position)||(l.style.position="relative",l.style.overflow="hidden"),e.container.style.position="absolute",a=function(){var i,n,r,o,a;return a=t.elem.width(l),o=t.elem.height(l),r=a/o,r>u?(e.width(a,{constrain:!0}),n=-(e.height()-o)/2,e.container.style.top=Math.round(n)+"px",e.container.style.left="0px"):(e.height(o,{constrain:!0}),i=-(e.width()-a)/2,e.container.style.left=Math.round(i)+"px",e.container.style.top="0px")},n=function(){return t.timeout(e.uuid+".cropFill.resize",a,50)},o=t.elem.width(l),r=t.elem.height(l),c=function(){var i,n;return n=t.elem.width(l),i=t.elem.height(l),o!==n?(a(),o=n):r!==i&&(a(),r=i),t.timeout(e.uuid+".cropFill.watchTarget",c,500)},h=function(){return t.clearTimeouts(e.uuid+".cropFill.watchTarget")},c(),e.bind("widthchange",n),e.bind("heightchange",n),e.hasData(a),{resize:a,watch:c,unwatch:h}})}(Wistia);

/***/ }

/******/ });