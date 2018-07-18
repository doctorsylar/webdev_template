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
// Animated revealing
window.sr = ScrollReveal();
sr.reveal('.animated');

// jQuery
$(function () {
    $('.header-menu .menu-item a').click(function (event) {
        event.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});