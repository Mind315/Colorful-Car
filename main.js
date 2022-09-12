const burgerMenuList = document.querySelector(".burger-menu");
const burgerBg = document.querySelector(".burger-menu__bg");

const menuBurgerBtn = document.querySelector(".menu-button");
const menuBurgerInnerBtn = document.querySelector(".inner-button");
menuBurgerBtn.addEventListener("click", () => {
    menuBurgerBtn.classList.toggle("menu-button--active");
    burgerMenuList.classList.toggle("burger-menu--active");
    burgerBg.classList.toggle("bg-lock");
});

burgerBg.addEventListener("click", () => {
    menuBurgerBtn.classList.toggle("menu-button--active");
    burgerMenuList.classList.toggle("burger-menu--active");
    burgerBg.classList.toggle("bg-lock");
});

menuBurgerInnerBtn.addEventListener("click", () => {
  menuBurgerBtn.classList.remove("menu-button--active");
  burgerMenuList.classList.remove("burger-menu--active");
  burgerBg.classList.remove("bg-lock");
});


// first slider
const sliderArrows = document.querySelector('.slider-arrows');
const sliderArrowsItems = sliderArrows.querySelectorAll('.slider-arrows__item');
const sliderArrowsPrev = sliderArrows.querySelector('.slider-arrows__arrow--left');
const sliderArrowsNext = sliderArrows.querySelector('.slider-arrows__arrow--right');

let sliderArrowsIndex = 0;
const sliderArrowStep = 1;

sliderArrowsNext.addEventListener('click', nextSlide);
sliderArrowsPrev.addEventListener('click', prevSlide);
hideSlides();
showSlide();


function nextSlide(index) {
  sliderArrowsIndex += sliderArrowStep;
  if(sliderArrowsIndex > sliderArrowsItems.length - 1 ) {
    sliderArrowsIndex = 0;
  }
  hideSlides(); 
  showSlide();
  
}

function prevSlide(index) {
  sliderArrowsIndex -= sliderArrowStep;
  if(sliderArrowsIndex < 0) {
    sliderArrowsIndex = sliderArrowsItems.length - 1;
  }
  hideSlides();
  showSlide();
}

function hideSlides() {
  sliderArrowsItems.forEach((item, index) => item.style.display = 'none');
}
function showSlide() {
  sliderArrowsItems[sliderArrowsIndex].style.display = 'block';
}