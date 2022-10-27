const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

navbarEmail.addEventListener('click', toggleDesktopMenu)
menu.addEventListener('click', toggleMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMenu() {
    mobileMenu.classList.toggle('inactive-mobile')
}