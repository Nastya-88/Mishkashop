'use strict';



(function () {
  
  
  var toggle = document.querySelector('.main-nav__toggle');
  var close = document.querySelector('.js-toggle');
  var mainNav = document.querySelector('.main-nav');
  var modalOpen = document.querySelector('.featured__button');
  var modal = document.querySelector('.add-to-cart');
  var background = document.querySelector('.add-to-cart__mute-background');
  var orderButton = document.querySelector('.add-to-cart__button');
  var body = document.querySelector('.page');
  var ESC_KEYCODE = 27;

// menu
  mainNav.classList.remove('main-nav--nojs');
  body.classList.remove('page--nojs');

  toggle.addEventListener('click', function () {
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
    }
  });

// modal
    modalOpen.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.add('add-to-cart--show');
    });

    background.addEventListener('click', function (evt) {
      modal.classList.remove('add-to-cart--show');
    });

    orderButton.addEventListener('click', function () {
      modal.classList.remove('add-to-cart--show');
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        if(modal.classList.contains('add-to-cart--show')){
          modal.classList.remove('add-to-cart--show');
        }
      }
    });
})();