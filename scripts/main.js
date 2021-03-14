const burgerButton = document.getElementById('burgerButton');
const burgerMenu = document.getElementById('burgerMenu');

function toogleBurger() {
	burgerButton.classList.toggle('active');
	burgerMenu.classList.toggle('active');
}