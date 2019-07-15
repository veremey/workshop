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


$(document).ready(function () {
	$('.page').addClass('is-loaded');

	var date = new Date('2019-07-16 05:02:12 pm');

	var clock = $('.timer__wrap').FlipClock(date, {
		clockFace: 'DailyCounter',
		countdown: true
	});

});



$(".trigger__btn").click(function() {
  $(this).find(".burger-3").toggleClass("burger-active-3");
  $('.trigger').toggleClass('is-active');
});

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

$('.js-goNext').click(function () {
	var $next = $(this).parents('.section').next();
	var $nextTop = $next.offset().top;

	$('html,body').animate({
		scrollTop: $nextTop}, 1000, 'swing');
});

if($(document).width() < 1220){
	$('.header__list a').on('click touchstart', function(){
		$('.header__list li').removeClass('is-active');
		$(this).parent().addClass('is-active');
		$('.trigger').toggleClass('is-active');
	});
} else {
	$(function() {
		$('#navigation').navpoints({
			speed: 1000,
			currentClass: 'is-active',
			updateHash: true,
			classToParent: true,
			offset: 70
		});
	});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLHVHQUF1RztBQUN2RztBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0hBQXNILFVBQVUsaUJBQWlCLFdBQVc7QUFDNUosQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9zdGF0aWMvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cdCQoJy5wYWdlJykuYWRkQ2xhc3MoJ2lzLWxvYWRlZCcpO1xuXG5cdHZhciBkYXRlID0gbmV3IERhdGUoJzIwMTktMDctMTYgMDU6MDI6MTIgcG0nKTtcblxuXHR2YXIgY2xvY2sgPSAkKCcudGltZXJfX3dyYXAnKS5GbGlwQ2xvY2soZGF0ZSwge1xuXHRcdGNsb2NrRmFjZTogJ0RhaWx5Q291bnRlcicsXG5cdFx0Y291bnRkb3duOiB0cnVlXG5cdH0pO1xuXG59KTtcblxuXG5cbiQoXCIudHJpZ2dlcl9fYnRuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAkKHRoaXMpLmZpbmQoXCIuYnVyZ2VyLTNcIikudG9nZ2xlQ2xhc3MoXCJidXJnZXItYWN0aXZlLTNcIik7XG4gICQoJy50cmlnZ2VyJykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xufSk7XG5cbi8vIHZpZGVvXG5mdW5jdGlvbiB5dEluaXQoKSB7XG5cdCQoXCIudmlkZW9cIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0JCh0aGlzKS5maW5kKFwiLnZpZGVvX3dyYXBcIikucmVtb3ZlQ2xhc3MoJ3ZpZGVvX3dyYXAnKS5hZGRDbGFzcygndmlkZW9fd3JhcF9wcmUnKTtcblx0fSk7XG5cdCQoXCIudmlkZW9fd3JhcF9wcmVcIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHl0ID0gJCh0aGlzKS5kYXRhKCd5dCcpO1xuXHRcdGlmICh5dCkge1xuXHRcdFx0JCh0aGlzKS5odG1sKFwiPGltZyBzcmM9J2h0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpL1wiICsgeXQgKyBcIi9tYXhyZXNkZWZhdWx0LmpwZycgc3R5bGU9J3dpZHRoOiAxMDAlOyBkaXNwbGF5OiBibG9jaycgY2xhc3M9J2dvX3l0JyBkYXRhLXl0PSdcIiArIHl0ICsgXCInPlwiKTtcblx0XHR9XG5cdH0pO1xufVxueXRJbml0KCk7XG5cbiQoXCIudmlkZW9fd3JhcF9wcmVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdHl0SW5pdCgpO1xuXHR2YXIgeXQgPSAkKHRoaXMpLmRhdGEoJ3l0Jyk7XG5cdCQodGhpcykucmVtb3ZlQ2xhc3MoXCJ2aWRlb193cmFwX3ByZVwiKS5hZGRDbGFzcygndmlkZW9fd3JhcCcpO1xuXHQkKHRoaXMpLmh0bWwoXCI8aWZyYW1lIHNyYz0naHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIgKyB5dCArIFwiP2F1dG9wbGF5PTEnIGZyYW1lYm9yZGVyPScwJyBhbGxvdz0nYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUnIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cIik7XG59KTtcblxuLy8gcHBwXG4kKCcuanMtcHBwJykuY2xpY2soZnVuY3Rpb24oZSl7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Ly9jbG9zZSBhbGwgcG9wdXBcblx0Y2xvc2VQcHAoKTtcblx0Ly9vcGVuIG15IHBvcHVwXG5cdCQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ3BwcC1vcGVuZWQnKTtcblx0dmFyIGdldENsYXNzID0gJCh0aGlzKS5kYXRhKCdwcHAnKTtcblx0JCgnLnBwcCcpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblx0JCgnIycgKyBnZXRDbGFzcykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG59KTtcblxuJCgnLmpzLWNsb3NlJykuY2xpY2soZnVuY3Rpb24oZSl7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Ly9jbG9zZSBhbGwgcG9wdXBcblx0Y2xvc2VQcHAoKTtcbn0pO1xuZnVuY3Rpb24gY2xvc2VQcHAoKXtcblx0JCgnLnBwcCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblx0JCgnLnBwcF9fY29udGVudCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblx0JCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygncHBwLW9wZW5lZCcpO1xufVxuXG4kKCcuanMtZ29OZXh0JykuY2xpY2soZnVuY3Rpb24gKCkge1xuXHR2YXIgJG5leHQgPSAkKHRoaXMpLnBhcmVudHMoJy5zZWN0aW9uJykubmV4dCgpO1xuXHR2YXIgJG5leHRUb3AgPSAkbmV4dC5vZmZzZXQoKS50b3A7XG5cblx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG5cdFx0c2Nyb2xsVG9wOiAkbmV4dFRvcH0sIDEwMDAsICdzd2luZycpO1xufSk7XG5cbmlmKCQoZG9jdW1lbnQpLndpZHRoKCkgPCAxMjIwKXtcblx0JCgnLmhlYWRlcl9fbGlzdCBhJykub24oJ2NsaWNrIHRvdWNoc3RhcnQnLCBmdW5jdGlvbigpe1xuXHRcdCQoJy5oZWFkZXJfX2xpc3QgbGknKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cdFx0JCgnLnRyaWdnZXInKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG5cdH0pO1xufSBlbHNlIHtcblx0JChmdW5jdGlvbigpIHtcblx0XHQkKCcjbmF2aWdhdGlvbicpLm5hdnBvaW50cyh7XG5cdFx0XHRzcGVlZDogMTAwMCxcblx0XHRcdGN1cnJlbnRDbGFzczogJ2lzLWFjdGl2ZScsXG5cdFx0XHR1cGRhdGVIYXNoOiB0cnVlLFxuXHRcdFx0Y2xhc3NUb1BhcmVudDogdHJ1ZSxcblx0XHRcdG9mZnNldDogNzBcblx0XHR9KTtcblx0fSk7XG59XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGVsKXtcblx0dmFyIGNoaWxkciA9ICQoJy5wcHBfX3NoYWRvdycpO1xuXG5cdGlmKCQoZWwudGFyZ2V0KS5pcyhjaGlsZHIpID09IHRydWUgKXtcblx0XHRjbG9zZVBwcCgpO1xuXHR9XG59KTtcblxuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAkKCcuaGVybycpLmhlaWdodCgpKi4yKXtcblx0XHQkKCcucGFnZScpLmFkZENsYXNzKCdpcy1zY3JvbGxlZCcpO1xuXHR9IGVsc2Uge1xuXHRcdCQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ2lzLXNjcm9sbGVkJyk7XG5cdH1cblx0Ly8gaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gJCgnI21fMycpLm9mZnNldCgpLnRvcCl7fVxufSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=