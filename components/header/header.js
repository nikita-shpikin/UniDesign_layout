let burger = document.querySelector('.header__burger');

export function headerMenu() {
	burger.addEventListener('click', function (e) {
		document
			.querySelector('.header__nav')
			.classList.toggle('header__nav_active');

		document
			.querySelector('.header__burger')
			.classList.toggle('header__burger_active');
	});
}

export function smoothScroll(e) {
	window.scroll({
		left: 0,
		top: e.offsetTop,
		behavior: 'smooth',
	});
}
