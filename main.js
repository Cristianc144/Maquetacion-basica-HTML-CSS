const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const closeIcon = document.querySelector('.product-detail-close')
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const detalles = document.getElementById('detail')
const arrow = document.getElementById('arrow')
const cardsContainer = document.querySelector('.cards-container')

const productList = []

productList.push({
    name: 'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=pexels-philipp-m-100582.jpg&fm=jpg&_gl=1*1qcn03x*_ga*MTEwNjA5MTA3NS4xNjY2NTAzMDE3*_ga_8JE65Q40S6*MTY2NjUwMzAyMS4xLjEuMTY2NjUwMzAzNi4wLjAuMA..'
})
productList.push({
    name: 'Carro',
    precio: 4500,
    imagen: 'https://images.pexels.com/photos/12152814/pexels-photo-12152814.jpeg?auto=compress&cs=tinysrgb&w=600'
})
productList.push({
    name: 'Moto',
    precio: 1200,
    imagen: 'https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=600'
})

escuchadorEventosToggle(navbarEmail, toggleDesktopMenu)
escuchadorEventosToggle(menu, toggleMenu)
escuchadorEventosToggle(menuCarrito, toggleCarrito)
escuchadorEventosToggle(arrow, toggleCarrito)
escuchadorEventosToggle(cardsContainer, abrirDetalles)
escuchadorEventosToggle(closeIcon, closeDetail)

renderProducts(productList)

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
    if (!detalles.classList.contains('inactive') && !mobileMenu.classList.contains('inactive-mobile')) {
        detalles.classList.add('inactive')
    }
}

function toggleCarrito() {
    productDetail.classList.toggle('inactive-detail')

    if (!mobileMenu.classList.contains('inactive-mobile') && !productDetail.classList.contains('inactive-detail')) {
        mobileMenu.classList.toggle('inactive-mobile')
    }
    if (!detalles.classList.contains('inactive') && !productDetail.classList.contains('inactive-detail')) {
        detalles.classList.add('inactive')
    }
}

function renderProducts(productList) {
    // Ciclo para insertar datos en HTML (Maquetamos desde JavaScript)
    for (product of productList) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const img = document.createElement('img')
        img.setAttribute('src', product.imagen)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const div = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerHTML = '$'+product.precio
    
        const productName = document.createElement('p')
        productName.innerHTML = product.name
    
        const figure = document.createElement('figure')
    
        imgCart = document.createElement('img')
        imgCart.setAttribute('src', './Maquetacion/curso-frontend-developer-practico-main/icons/bt_add_to_cart.svg')
    
        figure.appendChild(imgCart)
    
        div.appendChild(productPrice)
        div.appendChild(productName)
    
        productInfo.appendChild(div)
        productInfo.appendChild(figure)
    
        productCard.appendChild(img)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

function abrirDetalles() {
    detalles.classList.remove('inactive')
    productDetail.classList.add('inactive-detail')

}

function closeDetail() {
    detalles.classList.add('inactive')
}
