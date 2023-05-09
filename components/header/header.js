export function headerMenu() {
	let burger = document.querySelector('.header__burger');

	burger.addEventListener('click', function (e) {
		document
			.querySelector('.header__nav')
			.classList.toggle('header__nav_active');

		document
			.querySelector('.header__burger')
			.classList.toggle('header__burger_active');
	});
}

export function smoothScroll() {
	const headerLinks = document.querySelectorAll('.header__link');

	headerLinks.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault();

			let href = e.target.getAttribute('href').substring(1);
			let sections = document.querySelectorAll('section');

			sections.forEach(section => {
				if (section.getAttribute('id') == href) {
					scroll(section);
				}
			});

			link.blur();
		});
	});
}

function scroll(e) {
	window.scroll({
		left: 0,
		top: e.offsetTop,
		behavior: 'smooth',
	});
}
