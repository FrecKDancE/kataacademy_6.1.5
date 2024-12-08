const burgerPopup = document.querySelector('.burger-menu');
const burgerButton = document.querySelector('.button-burger');
const burgerCall = document.querySelector('.button-burger-call');
const burgerChat = document.querySelector('.button-burger-chat')

const callPopup = document.querySelector('.popup-call');
const chatPopup = document.querySelector('.popup-chat');

const callClose = document.querySelector('.popup-call__button-close');
const chatClose = document.querySelector('.popup-chat__button-close');
const burgerClose = document.querySelector('.burger-menu__button-close')

const body = document.body;

burgerButton.addEventListener('click', function(evt){
    evt.preventDefault();
    burgerPopup.classList.add('popup--show');
    
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
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

burgerPopup.addEventListener('click', function(evt){
    if (evt.target === burgerPopup || evt.target === burgerClose){
        burgerPopup.classList.remove('popup--show')

        body.style.height = '';
        body.style.overflowY = '';
    }
})