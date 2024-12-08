import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';

new Swiper(".image-slider", {
  modules: [Pagination],

  pagination: {
    el: '.swiper-pagination',
  },

  slidesPerView: 'auto',

  breakpoints: { 
    320: { enabled: true, loop: true, spaceBetween: 16},
    768: { enabled: false, spaceBetween: 24},
    1120: { enabled: false, spaceBetween: 32}
  },
});
  

const read_more = document.querySelector('.second-block__read-more')
const read_more_button = read_more.querySelector('.read-more__button');
const read_more_image = read_more.querySelector('.read-more__icon')

read_more_button.addEventListener('click', function() {
  
  if(read_more_button.classList.contains('all')){
    read_more_button.classList.remove('all');
    read_more_button.value = "Показать все";
    read_more_image.style.transform = 'rotate(0deg)';


    if (window.innerWidth >= 768 && window.innerWidth < 1015){
      const image_slide = document.querySelectorAll('.image-slider__slide:not(:nth-child(-n +6))');
      for (let slide of image_slide){
        slide.setAttribute('id', 'hidden');
      }
    }
    else if (window.innerWidth >= 1016){
      const image_slide = document.querySelectorAll('.image-slider__slide:not(:nth-child(-n +8))');
      for (let slide of image_slide){
        slide.setAttribute('id', 'hidden');
      }
    }
  }
  else{
    read_more_button.classList.add('all');
    read_more_button.value = "Скрыть";
    read_more_image.style.transform = 'rotate(-180deg)';

    const image_slide = document.querySelectorAll('.image-slider__slide');
    for (let slide of image_slide){
      slide.removeAttribute('id');
    }
  }

});


function hidden (){
  const slideASSA = document.querySelectorAll('.image-slider__slide');
  for( let slideId of slideASSA){
    slideId.removeAttribute('id');
  }
    if (window.innerWidth >= 768 && window.innerWidth < 1015){
      const image_slide = document.querySelectorAll('.image-slider__slide:not(:nth-child(-n +6))');
      for (let slide of image_slide){
        slide.setAttribute('id', 'hidden');
      } 
    }
    if (window.innerWidth >= 1016){
      const image_slide = document.querySelectorAll('.image-slider__slide:not(:nth-child(-n +8))');
      for (let slide of image_slide){
        slide.setAttribute('id', 'hidden');
      }
    }
  }

hidden();

window.addEventListener('resize', function(){ 
  if (window.innerWidth >= 768){
    hidden();
  }
});