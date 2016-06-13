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
			arrows: true
		});
	});

/***/ }
])
//# sourceMappingURL=0.81b7a360889864c0ceb1.hot-update.js.map