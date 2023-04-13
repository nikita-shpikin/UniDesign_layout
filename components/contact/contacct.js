export function validationInput() {
	const re =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	const formInput = document.querySelector('.form__input');

	formInput.addEventListener('input', onInput);

	function onInput() {
		if (isEmailValid(formInput.value)) {
			formInput.style.boxShadow = '20px 20px 20px RGBA(0,84,255,0.4)';
		} else {
			formInput.style.boxShadow = '20px 20px 20px RGBA(255,0,0,0.4)';
		}
	}

	function isEmailValid(value) {
		return re.test(value);
	}
}

export function validationPassword() {
	const formPassword = document.querySelector('.form__input[type="password"]');

	formPassword.addEventListener('input', onPassword);

	function onPassword() {
		if (formPassword.value.length > 8) {
			formPassword.style.boxShadow = '20px 20px 20px RGBA(0,84,255,0.4)';
		} else {
			formPassword.style.boxShadow = '20px 20px 20px RGBA(255,0,0,0.4)';
		}
	}
}

export function validationTextArea() {
	const formArea = document.querySelector('.form__area');

	formArea.addEventListener('input', onArea);

	function onArea() {
		if (formArea.value.length > 10) {
			formArea.style.boxShadow = '20px 20px 20px RGBA(0,84,255,0.4)';
		} else {
			formArea.style.boxShadow = '20px 20px 20px RGBA(255,0,0,0.4)';
		}
	}
}
