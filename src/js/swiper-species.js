import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';

new Swiper(".species-slider", {
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
  

  const read_more = document.querySelector('.third-block__read-more')
  const read_more_button = read_more.querySelector('.read-more__button');
  const read_more_image = read_more.querySelector('.read-more__icon')
  
  read_more_button.addEventListener('click', function() {
    
    if(read_more_button.classList.contains('all')){
      read_more_button.classList.remove('all');
      read_more_button.value = "Показать все";
      read_more_image.style.transform = 'rotate(0deg)';
  
  
      if (window.innerWidth >= 768 && window.innerWidth < 1015){
        const species_slide = document.querySelectorAll('.species-slider__slide:not(:nth-child(-n +3))');
        for (let slide of species_slide){
          slide.setAttribute('id', 'hidden');
        }
      }
      else if (window.innerWidth >= 1016){
        const species_slide = document.querySelectorAll('.species-slider__slide:not(:nth-child(-n +4))');
        for (let slide of species_slide){
          slide.setAttribute('id', 'hidden');
        }
      }
    }
    else{
      read_more_button.classList.add('all');
      read_more_button.value = "Скрыть";
      read_more_image.style.transform = 'rotate(-180deg)';
  
      const species_slide = document.querySelectorAll('.species-slider__slide');
      for (let slide of species_slide){
        slide.removeAttribute('id');
      }
    }
  
  });
  
  
  function hidden (){
    const slideASSA = document.querySelectorAll('.species-slider__slide');
    for( let slideId of slideASSA){
      slideId.removeAttribute('id');
    }
      if (window.innerWidth >= 768 && window.innerWidth < 1015){
        const species_slide = document.querySelectorAll('.species-slider__slide:not(:nth-child(-n +3))');
        for (let slide of species_slide){
          slide.setAttribute('id', 'hidden');
        } 
      }
      if (window.innerWidth >= 1016){
        const species_slide = document.querySelectorAll('.species-slider__slide:not(:nth-child(-n +4))');
        for (let slide of species_slide){
          slide.setAttribute('id', 'hidden');
        }
      }
    }
  hidden();