const menu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
})