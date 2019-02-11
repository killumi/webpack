import $ from 'jquery';
import {scrollToId} from "./module";
import {Slider} from "./slider";
import {MyObservable} from "./js-test";
import {EventObserver} from "./oop-observable";

$(function initScroll(){
	$('.js-scroll').on('click', function(){
		let scrollBlock = $(this).attr('href');
		let scrollBlockOffset = $(scrollBlock).offset().top;
		let animationDuration = +$(this).attr('data-duration');

		new scrollToId(scrollBlockOffset, animationDuration);
	});
});

// MyObservable();

import '../sass/app.sass'