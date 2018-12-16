import $ from 'jquery';

export class scrollToId {
	constructor(scrollBlockOffset, animationDuration){
		this.scrollBlockOffset = scrollBlockOffset;
		this.animationDuration = animationDuration;
		this.scrollTo();
	}

	scrollTo(){
		$('body, html').animate({
			scrollTop: this.scrollBlockOffset
		}, this.animationDuration);
	}
}