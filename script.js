const navlinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  //Toggle mobile menu visible//
  document.body.classList.add("show-mobile-menu");
});

// Close menu when the close button is clicked//
menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

navlinks.forEach(link => {
 link.addEventListener("click", () => menuOpenButton.click());
});
//initialize swiper//
new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,     
  slidesPerGroup: 1,      
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1
    }
  }
});
