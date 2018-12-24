export class Slider {
	constructor(){
		this.currentIndex = 0;
		this.prevButton = null;
		this.nextButton = null;
		this.sliderImage = null;
		this.sliderImagesUrl = [];
		this.init();
		this.prev();
		this.next();
	}

	init(){
		// создаем массив url
		this.sliderImagesUrl.push('https://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg');
		this.sliderImagesUrl.push('https://usatiki.ru/wp-content/uploads/2017/06/karakal-22.jpg');
		this.sliderImagesUrl.push('http://investgo24.com/img/project/14713/images/600x450/caracal_kittens.jpg');
		this.sliderImagesUrl.push('https://ok-inform.ru/images/2016/october/obshestvo/Blackcat.jpg');

		// присваеваем значения переменным
		this.prevButton = document.querySelectorAll('.js-prev');
		this.nextButton = document.querySelectorAll('.js-next');
		this.sliderImage = document.querySelectorAll('.js-slider-image');

		// выставляем стартовое значение для слайдера
		this.sliderImage[0].src = this.sliderImagesUrl[this.currentIndex];

		// подписываемся на событие click для prev and next buttons
		this.prevButton[0].addEventListener('click', () => {
			this.prev();
			this.sliderImage[0].src = this.sliderImagesUrl[this.currentIndex]; // показываем предыдущий слайд
		});

		this.nextButton[0].addEventListener('click', () => {
			this.next();
			this.sliderImage[0].src = this.sliderImagesUrl[this.currentIndex]; // показываем следующий слайд
		});
	}

	prev(){
		if(this.currentIndex == 0) {
			return this.currentIndex = this.sliderImagesUrl.length - 1;  // проверяем значение currentIndex при prev() и возвращаем его если индекс == 0
		}

	 	return this.currentIndex--;
	}

	next(){
		if(this.currentIndex == this.sliderImagesUrl.length - 1) {
			return this.currentIndex = 0; // проверяем значение currentIndex при next() и возвращаем его если он равен длинне массива sliderImagesUrl
		}

		return this.currentIndex++; 
	}
}

let slider = new Slider();