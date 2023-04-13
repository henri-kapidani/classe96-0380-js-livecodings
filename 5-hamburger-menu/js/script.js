const eleHamburger = document.querySelector('.hamburger');
const eleClose = document.querySelector('.fa-close');
const eleMenu = document.querySelector('.right');

eleHamburger.addEventListener('click', function () {
	console.log('Hamburger cliccato');
	eleMenu.classList.add('show');
});

eleClose.addEventListener('click', function () {
	console.log('Close cliccato');
	eleMenu.classList.remove('show');
});
