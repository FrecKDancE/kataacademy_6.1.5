const callButton = document.querySelector('.button-call');
const chatButton = document.querySelector('.button-chat');

const callPopup = document.querySelector('.header__popup-call');
const chatPopup = document.querySelector('.header__popup-chat');

const callClose = document.querySelector('.popup-call__button-close');
const chatClose = document.querySelector('.popup-chat__button-close');

callButton.addEventListener('click', function(evt){
    evt.preventDefault();
    callPopup.classList.add('popup--show');
});

chatButton.addEventListener('click', function(evt){
    evt.preventDefault();
    chatPopup.classList.add('popup--show');
});

callPopup.addEventListener('click', function(e){
    if (e.target === callPopup){
        callPopup.classList.remove('popup--show'); 
    }
    else if (e.target === callClose){
        callPopup.classList.remove('popup--show');
    }
})

chatPopup.addEventListener('click', function(e){
    if (e.target === chatPopup){
        chatPopup.classList.remove('popup--show'); 
    }
    else if (e.target === chatClose){
        chatPopup.classList.remove('popup--show');
    }
})
