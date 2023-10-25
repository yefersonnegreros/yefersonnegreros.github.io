let menu_nav = document.querySelector('.menu-nav');

document.querySelector('#menu-btn').onclick = ()=>{
    menu_nav.classList.toggle('activo');
    contenedor_carrito.classList.remove('activo');
    form_buscar.classList.remove("activo");
}

let contenedor_carrito = document.querySelector('.contenedor-carrito-productos');

document.querySelector('#carrito-btn').onclick = ()=>{
    contenedor_carrito.classList.toggle('activo');
    menu_nav.classList.remove('activo');
    form_buscar.classList.remove("activo");
}

let form_buscar = document.querySelector('.form-buscar');

document.querySelector('#buscar-btn').onclick = ()=>{
    form_buscar.classList.toggle("activo");
    menu_nav.classList.remove('activo');
    contenedor_carrito.classList.remove('activo');
}


window.onscroll = ()=>{
    menu_nav.classList.remove('activo');
    contenedor_carrito.classList.remove('activo');
    form_buscar.classList.remove("activo");
}