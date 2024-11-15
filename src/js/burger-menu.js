const burgerPopup = document.querySelector('.header__burger-menu');
const burgerButton = document.querySelector('.button-burger');
const burgerCall = document.querySelector('.button-burger-call');
const burgerChat = document.querySelector('.button-burger-chat')

const callPopup = document.querySelector('.header__popup-call');
const chatPopup = document.querySelector('.header__popup-chat');

const callClose = document.querySelector('.popup-call__button-close');
const chatClose = document.querySelector('.popup-chat__button-close');
const burgerClose = document.querySelector('.burger-menu__button-close')


burgerButton.addEventListener('click', function(evt){
    evt.preventDefault();
    burgerPopup.classList.add('popup--show');
});

burgerCall.addEventListener('click', function(evt){
    evt.preventDefault();
    burgerPopup.classList.remove('popup--show');
    callPopup.classList.add('popup--show');
});

burgerChat.addEventListener('click', function(evt){
    evt.preventDefault();
    burgerPopup.classList.remove('popup--show');
    chatPopup.classList.add('popup--show');
});

burgerClose.addEventListener('click', function(evt){
    if (evt.target === burgerPopup || burgerClose){
        burgerPopup.classList.remove('popup--show')
    }

})