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
				allPanels.slideUp().parent().removeClass('.accordion_state_open');
				(0, _jquery2.default)(this).next().slideDown().parent().addClass('.accordion_state_open');
				return false;
			});
		}
		accordion();
	});

/***/ }
])
//# sourceMappingURL=0.44fd7c3c660dccedd9ed.hot-update.js.map