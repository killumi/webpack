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


export function clicker() {
	const btn = document.getElementById('clicker-btn');
	const t  = document.getElementById('t');
	let i = 0;
	let time = 5;
	btn.addEventListener('click', () => {
		 console.log(i++);
		 if( i == 1){
			let interv =	setInterval(() => {
				t.innerHTML = time--;
			}, 1000);
			
			setTimeout(() => {
				console.log('game over');
				clearInterval(interv);
				i = 0;
			}, 5000);	
		}
	});
}