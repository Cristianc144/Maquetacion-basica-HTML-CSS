const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const arrow = document.getElementById('arrow')

const productList = []

escuchadorEventosToggle(navbarEmail, toggleDesktopMenu)
escuchadorEventosToggle(menu, toggleMenu)
escuchadorEventosToggle(menuCarrito, toggleCarrito)
escuchadorEventosToggle(arrow, toggleCarrito)

function escuchadorEventosToggle(evento, funcion) {
    evento.addEventListener('click', funcion)
}

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')

    if (!productDetail.classList.contains('inactive-detail') && !desktopMenu.classList.contains('inactive')) {
        productDetail.classList.toggle('inactive-detail')
    }
}

function toggleMenu() {
    mobileMenu.classList.toggle('inactive-mobile')

    if (!mobileMenu.classList.contains('inactive-mobile') && !productDetail.classList.contains('inactive-detail')) {
        productDetail.classList.toggle('inactive-detail')
    }
}

function toggleCarrito() {
    productDetail.classList.toggle('inactive-detail')

    if (!mobileMenu.classList.contains('inactive-mobile') && !productDetail.classList.contains('inactive-detail')) {
        mobileMenu.classList.toggle('inactive-mobile')
    }
}
