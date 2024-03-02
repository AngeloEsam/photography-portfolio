const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");
menuBtn.addEventListener("click", function (e) {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  /*
    if (isOpen) {
        menuBtnIcon.innerHTML='<i class="ri-close-line"></i>';
    } else{
        menuBtnIcon.innerHTML='<i class="ri-menu-line"></i>';
    }
    */
});

navLinks.addEventListener("click", function (e) {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
const scrollRevealOption1 = {
  distance: "50px",
  origin: "top",
  duration: 1000,
};
const scrollRevealOption2 = {
  distance: "50px",
  origin: "right",
  duration: 1000,
};
const scrollRevealOption3 = {
  distance: "50px",
  origin: "left",
  duration: 1000,
};
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container form", { ...scrollRevealOption , delay: 500});
ScrollReveal().reveal(".header__container p", { ...scrollRevealOption,delay:1000 });
ScrollReveal().reveal(".popular__card", { ...scrollRevealOption,interval:500 });
// ScrollReveal().reveal(".talent__card", { ...scrollRevealOption3,interval:500 });
// ScrollReveal().reveal(".talent__card", { ...scrollRevealOption1,interval:500 });
// ScrollReveal().reveal(".talent__card", { ...scrollRevealOption2,interval:500 });
ScrollReveal().reveal(".talent__card", { ...scrollRevealOption,interval:500 });
// ScrollReveal().reveal(".talent__card", { ...scrollRevealOption2,interval:500 });
ScrollReveal().reveal(".register__image img", { ...scrollRevealOption2,delay:300 });
ScrollReveal().reveal(".register__content h4", { ...scrollRevealOption,delay:700 });
ScrollReveal().reveal(".register__btn", { ...scrollRevealOption,delay:1000 });
const swipper=new Swiper(".swiper",{
    slidesPerView: 'auto',
    //grabCursor: true,
    spaceBetween:0,
})


