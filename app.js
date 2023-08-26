const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.navbar__menu a').
forEach (link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
        console.log(`${activePage}`)
    }
})