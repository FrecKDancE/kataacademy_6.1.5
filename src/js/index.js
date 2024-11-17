import './../styles/styles.scss';
import 'swiper/swiper-bundle.css';
import './swiper-menu.js';
import './swiper-brand.js';
import './swiper-species.js';
import './swiper-price.js';
import './popups.js';
import './burger-menu.js'


let header = document.querySelector('.header');
if (window.innerWidth >= 1120){
    header.classList.add('visually-hidden');
}
else{
    header.classList.remove('visually-hidden');
}

window.addEventListener('resize', function(){
    if (window.innerWidth >= 1120){
        header.classList.add('visually-hidden');
    }
    else{
        header.classList.remove('visually-hidden');
    }
})
