let menuBtn = document.querySelector('#menu');
let navbar= document.querySelector('.header .f .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fas-bars');
    navbar.classList.toggle('active');
}  

var swiper = new Swiper(".cursosSlider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints:{

    
        400: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

    }

  });
