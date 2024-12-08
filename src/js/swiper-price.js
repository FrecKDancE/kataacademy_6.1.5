import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';

new Swiper(".price-slider", {
    modules: [Pagination],
  
    pagination: {
      el: '.swiper-pagination',
    },

    slidesPerView: 'auto',
  
    breakpoints: { 
      320: { enabled: true, loop: true},
      768: { enabled: false, } 
    },
  });


