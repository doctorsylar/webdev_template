"use strict";
// pure JavaScript
let menuToggler = document.getElementById('menu-toggler');
menuToggler.onclick = function () {
    let menuCont = document.querySelector('nav.header-menu');
    if (!menuCont.classList.contains('shown') ) {
        menuCont.classList.add('shown');
    }
    else {
        menuCont.classList.remove('shown');
    }
};