export function validation() {
	const re =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	const footerInput = document.querySelector('.footer__contact-input');

	footerInput.addEventListener('input', onInput);

	function onInput() {
		if (isEmailValid(footerInput.value)) {
			footerInput.style.backgroundColor = 'green';
		} else {
			footerInput.style.backgroundColor = 'red';
		}
	}

	function isEmailValid(value) {
		return re.test(value);
	}
}
