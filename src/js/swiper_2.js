 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 10,

   breakpoints: {
     320: {
       slidesPerView: 1,
       spaceBetween: 10,
     },
     414: {
       slidesPerView: 1.5,
       spaceBetween: 10,
     },
     1024: {
       slidesPerView: 2.5,
       spaceBetween: 30,
     },
     1280: {
       slidesPerView: 3,
       spaceBetween: 30,
     },
   }
  }
);