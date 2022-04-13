var swiper = new Swiper(".mySwiper", {
   cssMode: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   pagination: {
     el: ".swiper-pagination",
   },
   loop:true,
   mousewheel: true,
   keyboard: true,
 });