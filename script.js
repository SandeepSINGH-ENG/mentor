const mobileMenu = document.getElementById('open-nav');
const mobileMenuClose = document.getElementById('closemenu');
const nav = document.getElementById('nav');

mobileMenu.addEventListener('click', () => {
    nav.classList.add('mobile-nav');
});
mobileMenuClose.addEventListener('click', () => {
    nav.classList.remove('mobile-nav');
});

function submenu(per) {
    sub = document.getElementById(per)
    sub.classList.toggle('active');
}