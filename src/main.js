import { createApp } from 'vue';
import Booking from "../src/components/booking.vue"
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

// BOOKING

document.addEventListener("DOMContentLoaded", () => {
  const node_booking = document.getElementById("v-booking")
  if (node_booking) {
    createApp(Booking).mount(node_booking)

  }
})

// SWIPER

import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.room_gallery').forEach((gallery) => {
    let big = gallery.querySelector('.mySwiper2')
    let thumbs = gallery.querySelector('.mySwiper')

    let swiper_thumbs = new Swiper(thumbs, {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
        },
        // when window width is >= 320px
        480: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 3,
        },

      },   

    });

  let swiper = new Swiper(big, {
    spaceBetween: 10,
    modules: [Navigation, Pagination, Thumbs],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper_thumbs,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },  
  });
})

})


// ROOM DESCRIPTION

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.room_info_text').forEach((text) => {
    let textHolder = text.querySelector('p')
    let btn_show = text.querySelector('.btn_show')


    function toggleText() {
      textHolder.classList.toggle("truncate");
    }

    function toggleTextBtn() {
      if (btn_show.innerText == "Показать полностью") {
        btn_show.innerText = "Свернуть";
      } else if (btn_show.innerText == "Свернуть") {
        btn_show.innerText = "Показать полностью";
      } else {
        null
      }
    }

    btn_show.addEventListener('click', toggleText);
    toggleText(); //to truncate at first time

    btn_show.addEventListener('click', toggleTextBtn);


    const lineHeight = parseInt(window.getComputedStyle(textHolder).lineHeight); // Определяем высоту строки
    const lineCount = Math.ceil(textHolder.scrollHeight / lineHeight); // Делим полную высоту на высоту строки для подсчёта их числа 

    if (lineCount > 3) {
      btn_show.classList.remove("hidden")
    }
    else { console.log(lineCount) }

  });

})

// ОТЗЫВЫ

let noReview = document.querySelector(".no_reviews")
let reviews = document.querySelector(".reviews")

if (reviews < 1) {
  noReview.classList.remove('hidden')
}


//  ЛАЙТБОКС



// МЕНЮ

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector(".burger_icon");
  const nav_burger_wrapper = document.querySelector(".nav_burger_wrapper");
  const closeIcon = document.querySelector(".closeicon");

  burger.addEventListener('click', () =>
    nav_burger_wrapper.classList.toggle("showMenu")
  );

  closeIcon.addEventListener('click', () => nav_burger_wrapper.classList.remove("showMenu"));

  const mobileMenu = document.querySelectorAll('.nav_burger a');
  mobileMenu.forEach(link => {
    link.addEventListener('click', () => {
      nav_burger_wrapper.classList.remove("showMenu")
    })
  })

});