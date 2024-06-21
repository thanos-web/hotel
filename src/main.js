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
} ) 



// SWIPER

import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.room_gallery').forEach((gallery) => {
    let big = gallery.querySelector('.mySwiper2')
    let thumbs = gallery.querySelector('.mySwiper')

    let swiper_thumbs = new Swiper(thumbs, {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,

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
      console.log("hui pizda")
      btn_show.classList.remove("hidden")
    }
    else { console.log(lineCount) }

  });

})
