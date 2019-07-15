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
	if($('#navigation').length) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLHVHQUF1RztBQUN2RztBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0hBQXNILFVBQVUsaUJBQWlCLFdBQVc7QUFDNUosQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vc3RhdGljL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21hcmt1cC9zdGF0aWMvanMvbWFpbi5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXHQkKCcucGFnZScpLmFkZENsYXNzKCdpcy1sb2FkZWQnKTtcblxuXHR2YXIgZGF0ZSA9IG5ldyBEYXRlKCcyMDE5LTA3LTE2IDA1OjAyOjEyIHBtJyk7XG5cblx0dmFyIGNsb2NrID0gJCgnLnRpbWVyX193cmFwJykuRmxpcENsb2NrKGRhdGUsIHtcblx0XHRjbG9ja0ZhY2U6ICdEYWlseUNvdW50ZXInLFxuXHRcdGNvdW50ZG93bjogdHJ1ZVxuXHR9KTtcblxufSk7XG5cblxuXG4kKFwiLnRyaWdnZXJfX2J0blwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgJCh0aGlzKS5maW5kKFwiLmJ1cmdlci0zXCIpLnRvZ2dsZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZS0zXCIpO1xuICAkKCcudHJpZ2dlcicpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbn0pO1xuXG4vLyB2aWRlb1xuZnVuY3Rpb24geXRJbml0KCkge1xuXHQkKFwiLnZpZGVvXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCQodGhpcykuZmluZChcIi52aWRlb193cmFwXCIpLnJlbW92ZUNsYXNzKCd2aWRlb193cmFwJykuYWRkQ2xhc3MoJ3ZpZGVvX3dyYXBfcHJlJyk7XG5cdH0pO1xuXHQkKFwiLnZpZGVvX3dyYXBfcHJlXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdHZhciB5dCA9ICQodGhpcykuZGF0YSgneXQnKTtcblx0XHRpZiAoeXQpIHtcblx0XHRcdCQodGhpcykuaHRtbChcIjxpbWcgc3JjPSdodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS9cIiArIHl0ICsgXCIvbWF4cmVzZGVmYXVsdC5qcGcnIHN0eWxlPSd3aWR0aDogMTAwJTsgZGlzcGxheTogYmxvY2snIGNsYXNzPSdnb195dCcgZGF0YS15dD0nXCIgKyB5dCArIFwiJz5cIik7XG5cdFx0fVxuXHR9KTtcbn1cbnl0SW5pdCgpO1xuXG4kKFwiLnZpZGVvX3dyYXBfcHJlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHR5dEluaXQoKTtcblx0dmFyIHl0ID0gJCh0aGlzKS5kYXRhKCd5dCcpO1xuXHQkKHRoaXMpLnJlbW92ZUNsYXNzKFwidmlkZW9fd3JhcF9wcmVcIikuYWRkQ2xhc3MoJ3ZpZGVvX3dyYXAnKTtcblx0JCh0aGlzKS5odG1sKFwiPGlmcmFtZSBzcmM9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiICsgeXQgKyBcIj9hdXRvcGxheT0xJyBmcmFtZWJvcmRlcj0nMCcgYWxsb3c9J2FjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlJyBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XCIpO1xufSk7XG5cbi8vIHBwcFxuJCgnLmpzLXBwcCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdC8vY2xvc2UgYWxsIHBvcHVwXG5cdGNsb3NlUHBwKCk7XG5cdC8vb3BlbiBteSBwb3B1cFxuXHQkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdwcHAtb3BlbmVkJyk7XG5cdHZhciBnZXRDbGFzcyA9ICQodGhpcykuZGF0YSgncHBwJyk7XG5cdCQoJy5wcHAnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cdCQoJyMnICsgZ2V0Q2xhc3MpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxufSk7XG5cbiQoJy5qcy1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdC8vY2xvc2UgYWxsIHBvcHVwXG5cdGNsb3NlUHBwKCk7XG59KTtcbmZ1bmN0aW9uIGNsb3NlUHBwKCl7XG5cdCQoJy5wcHAnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cdCQoJy5wcHBfX2NvbnRlbnQnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cdCQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ3BwcC1vcGVuZWQnKTtcbn1cblxuJCgnLmpzLWdvTmV4dCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0dmFyICRuZXh0ID0gJCh0aGlzKS5wYXJlbnRzKCcuc2VjdGlvbicpLm5leHQoKTtcblx0dmFyICRuZXh0VG9wID0gJG5leHQub2Zmc2V0KCkudG9wO1xuXG5cdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuXHRcdHNjcm9sbFRvcDogJG5leHRUb3B9LCAxMDAwLCAnc3dpbmcnKTtcbn0pO1xuXG5pZigkKGRvY3VtZW50KS53aWR0aCgpIDwgMTIyMCl7XG5cdCQoJy5oZWFkZXJfX2xpc3QgYScpLm9uKCdjbGljayB0b3VjaHN0YXJ0JywgZnVuY3Rpb24oKXtcblx0XHQkKCcuaGVhZGVyX19saXN0IGxpJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXHRcdCQoJy50cmlnZ2VyJykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXHR9KTtcbn0gZWxzZSB7XG5cdGlmKCQoJyNuYXZpZ2F0aW9uJykubGVuZ3RoKSB7XG5cdFx0JChmdW5jdGlvbigpIHtcblx0XHRcdCQoJyNuYXZpZ2F0aW9uJykubmF2cG9pbnRzKHtcblx0XHRcdFx0c3BlZWQ6IDEwMDAsXG5cdFx0XHRcdGN1cnJlbnRDbGFzczogJ2lzLWFjdGl2ZScsXG5cdFx0XHRcdHVwZGF0ZUhhc2g6IHRydWUsXG5cdFx0XHRcdGNsYXNzVG9QYXJlbnQ6IHRydWUsXG5cdFx0XHRcdG9mZnNldDogNzBcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGVsKXtcblx0dmFyIGNoaWxkciA9ICQoJy5wcHBfX3NoYWRvdycpO1xuXG5cdGlmKCQoZWwudGFyZ2V0KS5pcyhjaGlsZHIpID09IHRydWUgKXtcblx0XHRjbG9zZVBwcCgpO1xuXHR9XG59KTtcblxuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHRpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAkKCcuaGVybycpLmhlaWdodCgpKi4yKXtcblx0XHQkKCcucGFnZScpLmFkZENsYXNzKCdpcy1zY3JvbGxlZCcpO1xuXHR9IGVsc2Uge1xuXHRcdCQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ2lzLXNjcm9sbGVkJyk7XG5cdH1cblx0Ly8gaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gJCgnI21fMycpLm9mZnNldCgpLnRvcCl7fVxufSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=