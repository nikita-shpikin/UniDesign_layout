import { headerMenu, smoothScroll } from './components/header/header.js';
import { validation } from './components/footer/footer.js';
import {
	validationInput,
	validationPassword,
	validationTextArea,
} from './components/contact/contacct.js';
import { lightbox } from './components/project/project.js';

headerMenu();
validation();
validationInput();
validationPassword();
validationTextArea();
lightbox();

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
