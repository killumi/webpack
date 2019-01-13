import $ from 'jquery';
import {scrollToId} from "./module";
import {Slider} from "./slider";
import {TestsJS} from "./js-test";
import {clicker} from "./module"

$(function initScroll(){
	$('.js-scroll').on('click', function(){
		let scrollBlock = $(this).attr('href');
		let scrollBlockOffset = $(scrollBlock).offset().top;
		let animationDuration = +$(this).attr('data-duration');

		new scrollToId(scrollBlockOffset, animationDuration);
	});
});

clicker();
import '../sass/app.sass'