export class Slider {
	constructor(sliderId = null, dots = false){
		this.sliderId = sliderId;
		this.currentIndex = 0;
		this.dots = dots;
		this.prevButton = null;
		this.nextButton = null;
		this.sliderImage = null;
		this.sliderImagesUrl = [];
		this.sliderDotBox = null;
		this.sliderDot = null;
		this.prev();
		this.next();
		this.sliderDots();
		this.init();
	}

	init() {
		// создаем массив url
		this.sliderImagesUrl.push('https://bipbap.ru/wp-content/uploads/2017/12/65620375-6b2b57fa5c7189ba4e3841d592bd5fc1-800-640x426.jpg');
		this.sliderImagesUrl.push('https://kot-pes.com/wp-content/uploads/2015/07/Thai_cat_11.jpg');
		this.sliderImagesUrl.push('http://investgo24.com/img/project/14713/images/600x450/caracal_kittens.jpg');
		this.sliderImagesUrl.push('https://ok-inform.ru/images/2016/october/obshestvo/Blackcat.jpg');
		
		// генерируем дотсы
		this.sliderDots();

		// присваиваем значения переменным
		const slider = document.getElementById(this.sliderId);

		this.sliderDot = this.sliderDotBox.querySelectorAll('.slider-dot');
		this.prevButton = slider.querySelector('.js-prev');
		this.nextButton = slider.querySelector('.js-next');
		this.sliderImage = slider.querySelector('.js-slider-image');

		// выставляем стартовое значение для слайдера и дотов
		this.sliderImage.src = this.sliderImagesUrl[this.currentIndex];
		this.sliderDot[0].classList.add("active");

		// подписываемся на событие click для кнопок prev и next
		this.prevButton.addEventListener('click', () => {
			this.prev();
			this.sliderImage.src = this.sliderImagesUrl[this.currentIndex]; // показываем предыдущий слайд
			// убираю класс active у неактивных точек и добавляю активной
			for(let i = 0; i <= this.sliderDot.length - 1; i++) {
				this.sliderDot[i].classList.remove('active');
			}
			this.sliderDot[this.currentIndex].classList.add('active');
		});

		this.nextButton.addEventListener('click', () => {
			this.next();
			this.sliderImage.src = this.sliderImagesUrl[this.currentIndex]; // показываем следующий слайд
			// убираю класс active у неактивных точек и добавляю активной
			for(let i = 0; i <= this.sliderDot.length - 1; i++) {
				this.sliderDot[i].classList.remove('active');
			}
			this.sliderDot[this.currentIndex].classList.add('active');
		});
	}

	sliderDots() {
		if(!this.dots) {
			return;
		}	
		
		let slider = document.getElementById(this.sliderId);
		this.sliderDotBox = slider.querySelector('.slider__dots');
	
		for (var i = 0; i <= this.sliderImagesUrl.length -1; i++) {
			this.sliderDot = document.createElement('li');
			this.sliderDot.className = 'slider-dot';
			this.sliderDotBox.append(this.sliderDot);
		}
	}

	prev() {
		this.currentIndex--;

		if(this.currentIndex < 0) {
			this.currentIndex = this.sliderImagesUrl.length - 1; // проверяем значение currentIndex при next() и возвращаем 0 если currentIndex равен длинне массива sliderImagesUrl
		}
	}

	next() {
		this.currentIndex++;

		if(this.currentIndex == this.sliderImagesUrl.length) {
			this.currentIndex = 0; // проверяем значение currentIndex при next() и возвращаем 0 если currentIndex равен длинне массива sliderImagesUrl
		}
	}
	
}

let slider = new Slider('slider1', true);
let slider2 = new Slider('slider2', true);