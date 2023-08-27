const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.querySelectorAll('.navbar__links').forEach
(link => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page');
    }
})