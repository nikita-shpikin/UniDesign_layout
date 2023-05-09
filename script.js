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
smoothScroll();
