const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
    const isExpanded = burgerMenu.getAttribute('aria-expanded') === 'true';
    burgerMenu.setAttribute('aria-expanded', !isExpanded);
});


