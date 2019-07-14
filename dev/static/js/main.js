/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./markup/static/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./markup/static/js/main.js":
/*!**********************************!*\
  !*** ./markup/static/js/main.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// video
	function ytInit() {
		$(".video").each(function () {
			$(this).find(".video_wrap").removeClass('video_wrap').addClass('video_wrap_pre');
		});
		$(".video_wrap_pre").each(function () {
			var yt = $(this).data('yt');
			if (yt) {
				$(this).html("<img src='https://img.youtube.com/vi/" + yt + "/maxresdefault.jpg' style='width: 100%; display: block' class='go_yt' data-yt='" + yt + "'>");
			}
		});
	}
	ytInit();

	$(".video_wrap_pre").on("click", function () {
		ytInit();
		var yt = $(this).data('yt');
		$(this).removeClass("video_wrap_pre").addClass('video_wrap');
		$(this).html("<iframe src='https://www.youtube.com/embed/" + yt + "?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
	});

// ppp
$('.js-ppp').click(function(e){
	e.preventDefault();
	//close all popup
	closePpp();
	//open my popup
	$('.page').removeClass('ppp-opened');
	var getClass = $(this).data('ppp');
	$('.ppp').addClass('is-active');
	$('#' + getClass).addClass('is-active');

});

$('.js-close').click(function(e){
	e.preventDefault();
	//close all popup
	closePpp();
});
function closePpp(){
	$('.ppp').removeClass('is-active');
	$('.ppp__content').removeClass('is-active');
	$('.page').removeClass('ppp-opened');
}

$(document).on('click', function(el){
	var childr = $('.ppp__shadow');

	if($(el.target).is(childr) == true ){
		closePpp();
	}
});

$(window).scroll(function() {
	if($(window).scrollTop() > $('.hero').height()*.2){
		$('.page').addClass('is-scrolled');
	} else {
		$('.page').removeClass('is-scrolled');
	}
	// if($(window).scrollTop() > $('#m_3').offset().top){}
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0dBQXdHO0FBQ3hHO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1SEFBdUgsVUFBVSxpQkFBaUIsV0FBVztBQUM3SixFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL3N0YXRpYy9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tYXJrdXAvc3RhdGljL2pzL21haW4uanNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIHZpZGVvXG5cdGZ1bmN0aW9uIHl0SW5pdCgpIHtcblx0XHQkKFwiLnZpZGVvXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0JCh0aGlzKS5maW5kKFwiLnZpZGVvX3dyYXBcIikucmVtb3ZlQ2xhc3MoJ3ZpZGVvX3dyYXAnKS5hZGRDbGFzcygndmlkZW9fd3JhcF9wcmUnKTtcblx0XHR9KTtcblx0XHQkKFwiLnZpZGVvX3dyYXBfcHJlXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHl0ID0gJCh0aGlzKS5kYXRhKCd5dCcpO1xuXHRcdFx0aWYgKHl0KSB7XG5cdFx0XHRcdCQodGhpcykuaHRtbChcIjxpbWcgc3JjPSdodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS9cIiArIHl0ICsgXCIvbWF4cmVzZGVmYXVsdC5qcGcnIHN0eWxlPSd3aWR0aDogMTAwJTsgZGlzcGxheTogYmxvY2snIGNsYXNzPSdnb195dCcgZGF0YS15dD0nXCIgKyB5dCArIFwiJz5cIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0eXRJbml0KCk7XG5cblx0JChcIi52aWRlb193cmFwX3ByZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHR5dEluaXQoKTtcblx0XHR2YXIgeXQgPSAkKHRoaXMpLmRhdGEoJ3l0Jyk7XG5cdFx0JCh0aGlzKS5yZW1vdmVDbGFzcyhcInZpZGVvX3dyYXBfcHJlXCIpLmFkZENsYXNzKCd2aWRlb193cmFwJyk7XG5cdFx0JCh0aGlzKS5odG1sKFwiPGlmcmFtZSBzcmM9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiICsgeXQgKyBcIj9hdXRvcGxheT0xJyBmcmFtZWJvcmRlcj0nMCcgYWxsb3c9J2FjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlJyBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XCIpO1xuXHR9KTtcblxuLy8gcHBwXG4kKCcuanMtcHBwJykuY2xpY2soZnVuY3Rpb24oZSl7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Ly9jbG9zZSBhbGwgcG9wdXBcblx0Y2xvc2VQcHAoKTtcblx0Ly9vcGVuIG15IHBvcHVwXG5cdCQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ3BwcC1vcGVuZWQnKTtcblx0dmFyIGdldENsYXNzID0gJCh0aGlzKS5kYXRhKCdwcHAnKTtcblx0JCgnLnBwcCcpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblx0JCgnIycgKyBnZXRDbGFzcykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG59KTtcblxuJCgnLmpzLWNsb3NlJykuY2xpY2soZnVuY3Rpb24oZSl7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Ly9jbG9zZSBhbGwgcG9wdXBcblx0Y2xvc2VQcHAoKTtcbn0pO1xuZnVuY3Rpb24gY2xvc2VQcHAoKXtcblx0JCgnLnBwcCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblx0JCgnLnBwcF9fY29udGVudCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblx0JCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygncHBwLW9wZW5lZCcpO1xufVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlbCl7XG5cdHZhciBjaGlsZHIgPSAkKCcucHBwX19zaGFkb3cnKTtcblxuXHRpZigkKGVsLnRhcmdldCkuaXMoY2hpbGRyKSA9PSB0cnVlICl7XG5cdFx0Y2xvc2VQcHAoKTtcblx0fVxufSk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+ICQoJy5oZXJvJykuaGVpZ2h0KCkqLjIpe1xuXHRcdCQoJy5wYWdlJykuYWRkQ2xhc3MoJ2lzLXNjcm9sbGVkJyk7XG5cdH0gZWxzZSB7XG5cdFx0JCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnaXMtc2Nyb2xsZWQnKTtcblx0fVxuXHQvLyBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAkKCcjbV8zJykub2Zmc2V0KCkudG9wKXt9XG59KTsiXSwic291cmNlUm9vdCI6IiJ9