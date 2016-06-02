import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';
import '../../node_modules/mixitup/build/jquery.mixitup.min.js';

$(() => {
	svg4everybody();
	$('.reviews__list').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: false,
		customPaging: function () {
			return '<a class="reviews__dot"></a>';
		}
	});
	$('.works__list').mixItUp();
	$('.banner__container').slick({
		infinite: false,
		speed: 300,
		arrows: true,
		nextArrow: '<div class="banner__arrow-right"><svg class="banner__arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 29"><path fill="currentColor" d="M14.4 4.1L4.5 14.8l10 10.8c.3.4.5.9.5 1.4 0 1.1-.8 2-1.9 2-.5 0-1-.2-1.3-.6L.6 16.2c-.4-.3-.6-.9-.6-1.4 0-.6.2-1.1.6-1.5L11.8 1.1c.3-.4.8-.6 1.3-.6 1 0 1.9.9 1.9 2 0 .7-.2 1.2-.6 1.6z"/></svg></div>',
	    prevArrow: '<div class="banner__arrow-left"><svg class="banner__arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 29"><path fill="currentColor" d="M14.4 4.1L4.5 14.8l10 10.8c.3.4.5.9.5 1.4 0 1.1-.8 2-1.9 2-.5 0-1-.2-1.3-.6L.6 16.2c-.4-.3-.6-.9-.6-1.4 0-.6.2-1.1.6-1.5L11.8 1.1c.3-.4.8-.6 1.3-.6 1 0 1.9.9 1.9 2 0 .7-.2 1.2-.6 1.6z"/></svg></div>'
	});
	function accordion() {
		$('.accordion__header').on('click', function() {
			if($(this).parent().hasClass('accordion_state_open')) {
				$(this).parent().find('.accordion__text').slideDown();
				$(this).parent().removeClass('accordion_state_open');
			} else {
				$(this).parent().find('.accordion__text').slideUp();
				$(this).parent().addClass('accordion_state_open');
			}
		})
	}
	accordion();
});
