export function lightbox() {
	const projects = document.querySelectorAll('.project__list-image');
	const lightbox = document.querySelector('.project__lightbox');
	const lightboxImage = document.querySelector('.project__lightbox-image');
	const leftArrow = document.querySelector('.project__lightbox-left');
	const rightArrow = document.querySelector('.project__lightbox-right');

	let num;
	projects.forEach((project, index) => {
		project.addEventListener('click', e => {
			e.preventDefault();
			showImage(index);

			num = index;
		});
	});
	//показать картинку
	function showImage(index) {
		lightboxImage.setAttribute('src', projects[index].getAttribute('src'));

		lightbox.style.cssText = `visibility: visible; opacity: 1;`;

		document.body.style.overflow = 'hidden';
	}
	//закрыть картинку
	lightbox.addEventListener('click', e => {
		if (e.target.getAttribute('class') === 'project__lightbox') {
			lightbox.style.cssText = `visibility: hidden; opacity: 0;`;
			document.body.style.overflow = '';
		}
	});

	leftArrow.addEventListener('click', () => {
		if (num === 0) {
			num = projects.length - 1;
		} else num--;

		showImage(num);
	});

	rightArrow.addEventListener('click', () => {
		if (num === projects.length - 1) {
			num = 0;
		} else num++;

		showImage(num);
	});
}
