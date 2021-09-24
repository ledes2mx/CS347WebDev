const navlinks = document.getElementsByTagName('nav')[0];
const hamburgerButton = document.getElementById('burgerButton');

function toggleNavlinks() {
  navlinks.classList.toggle('open'); 
}

hamburgerButton.addEventListener('click', toggleNavlinks);
