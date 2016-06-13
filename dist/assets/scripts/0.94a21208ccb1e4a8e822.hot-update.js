webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
		(0, _jquery2.default)('.reviews__list').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			arrows: false,
			customPaging: function customPaging() {
				return '<a class="reviews__dot"></a>';
			}
		});
		(0, _jquery2.default)('.works__list').mixItUp();
		(0, _jquery2.default)('.banner__container').slick({
			infinite: false,
			speed: 300,
			arrows: true,
			nextArrow: '<div class="banner__arrow-right"><svg class="banner__arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 29"><path fill="currentColor" d="M14.4 4.1L4.5 14.8l10 10.8c.3.4.5.9.5 1.4 0 1.1-.8 2-1.9 2-.5 0-1-.2-1.3-.6L.6 16.2c-.4-.3-.6-.9-.6-1.4 0-.6.2-1.1.6-1.5L11.8 1.1c.3-.4.8-.6 1.3-.6 1 0 1.9.9 1.9 2 0 .7-.2 1.2-.6 1.6z"/></svg></div>',
			prevArrow: '<div class="banner__arrow-left"><svg class="banner__arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 29"><path fill="currentColor" d="M14.4 4.1L4.5 14.8l10 10.8c.3.4.5.9.5 1.4 0 1.1-.8 2-1.9 2-.5 0-1-.2-1.3-.6L.6 16.2c-.4-.3-.6-.9-.6-1.4 0-.6.2-1.1.6-1.5L11.8 1.1c.3-.4.8-.6 1.3-.6 1 0 1.9.9 1.9 2 0 .7-.2 1.2-.6 1.6z"/></svg></div>'
		});
		function accordion() {
			var allPanels = (0, _jquery2.default)('.accordion__text').hide();
			(0, _jquery2.default)('.accordion_state_open').find('.accordion__text').slideDown();
			(0, _jquery2.default)('.accordion__header').click(function () {
				allPanels.slideUp().parent().removeClass('accordion_state_open');
				(0, _jquery2.default)(this).next().slideDown().parent().addClass('accordion_state_open');
				return false;
			});
		}
		accordion();
		(0, _jquery2.default)('.fancybox').fancybox({
			tpl: {
				closeBtn: '<div class="fancybox__close"><svg class="fancybox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.2 475.2"><path fill="currentColor" d="M405.6 69.6C360.7 24.7 301.1 0 237.6 0s-123.1 24.7-168 69.6S0 174.1 0 237.6s24.7 123.1 69.6 168 104.5 69.6 168 69.6 123.1-24.7 168-69.6 69.6-104.5 69.6-168-24.7-123.1-69.6-168zm-19.1 316.9c-39.8 39.8-92.7 61.7-148.9 61.7s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7 0-297.8C128.5 48.9 181.4 27 237.6 27s109.1 21.9 148.9 61.7c82.1 82.1 82.1 215.7 0 297.8z"/><path fill="currentColor" d="M342.3 132.9c-5.3-5.3-13.8-5.3-19.1 0l-85.6 85.6-85.6-85.6c-5.3-5.3-13.8-5.3-19.1 0-5.3 5.3-5.3 13.8 0 19.1l85.6 85.6-85.6 85.6c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l85.6-85.6 85.6 85.6c2.6 2.6 6.1 4 9.5 4 3.5 0 6.9-1.3 9.5-4 5.3-5.3 5.3-13.8 0-19.1l-85.4-85.6 85.6-85.6c5.3-5.3 5.3-13.8 0-19.1z"/></svg></div>'
			}
		});
		(0, _jquery2.default)('.banner__button').click(function () {
			(0, _jquery2.default)('html, body').animate({
				scrollTop: (0, _jquery2.default)('.who').offset().top
			}, 900);
		});
	});

/***/ }
])
//# sourceMappingURL=0.94a21208ccb1e4a8e822.hot-update.js.map