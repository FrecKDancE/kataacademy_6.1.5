import Swiper from 'swiper';

const services_slider = new Swiper(".services-slider", {
  slideToClickedSlide: true,
  slidesPerView: 'auto',

  breakpoints: { 
    320: { enabled: true, loop: true},
    1120: { enabled: false, },
  },
});


const read_more = document.querySelector('.first-block__read-more')
const read_more_button = read_more.querySelector('.read-more__button');
const read_more_image = read_more.querySelector('.read-more__icon');
const firstBlock_text = document.querySelector('.first-block__text');

read_more_button.addEventListener('click', function(){
    if (read_more_button.classList.contains('on')){
        read_more_button.classList.remove('on');
        read_more_button.value = 'Читать далее';
        read_more_image.style.transform = 'rotate(0deg)';
        if (window.innerWidth >= 320 && window.innerWidth < 768){
            firstBlock_text.style.height = '90px';    
        }
        else{
            firstBlock_text.style.height = '160px'; 
        }
    }
    else{
        read_more_button.classList.add('on');
        read_more_button.value = 'Скрыть';
        read_more_image.style.transform = 'rotate(180deg)';
        firstBlock_text.style.height = 'auto';
    }
});
