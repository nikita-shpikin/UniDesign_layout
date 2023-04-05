let burger = document.querySelector('.header__burger');

burger.addEventListener('click', function (e) {
	document.querySelector('.header__nav').classList.toggle('header__nav_active');

	document
		.querySelector('.header__burger')
		.classList.toggle('header__burger_active');
});
