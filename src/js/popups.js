const callButton = document.querySelector('.button-call');
const chatButton = document.querySelector('.button-chat');

const callPopup = document.querySelector('.popup-call');
const chatPopup = document.querySelector('.popup-chat');

const callClose = document.querySelector('.popup-call__button-close');
const chatClose = document.querySelector('.popup-chat__button-close');

console.log(callButton, callPopup)

const body = document.body;

callButton.addEventListener('click', function(evt){
    evt.preventDefault();
    callPopup.classList.add('popup--show');

    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
});

chatButton.addEventListener('click', function(evt){
    evt.preventDefault();
    chatPopup.classList.add('popup--show');

    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
});

callPopup.addEventListener('click', function(evt){
    if (evt.target === callPopup || evt.target === callClose){
        callPopup.classList.remove('popup--show'); 

        body.style.height = '';
        body.style.overflowY = '';
    }
})

chatPopup.addEventListener('click', function(evt){
    if (evt.target === chatPopup || evt.target === chatClose){
        chatPopup.classList.remove('popup--show'); 

        body.style.height = '';
        body.style.overflowY = '';
    }
})
