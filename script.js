import { headerMenu, smoothScroll } from './components/header/header.js';
import { validation } from './components/footer/footer.js';

headerMenu();
validation();

const headerLinks = document.querySelectorAll('.header__link');

headerLinks.forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();

		let href = e.target.getAttribute('href').substring(1);
		let sections = document.querySelectorAll('section');

		sections.forEach(section => {
			if (section.getAttribute('id') == href) {
				smoothScroll(section);
			}
		});

		link.blur();
	});
});
