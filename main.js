//seaarch
const searchBtn = document.querySelector('.search__button');
const inputSearch = document.querySelector('.search__input');

searchBtn.addEventListener('click', () => {
  inputSearch.classList.add('active');
  setTimeout(() => {
    inputSearch.classList.remove('active');
  }, 20000);
});
inputSearch.addEventListener('blur', () => {
  inputSearch.classList.remove('active');
});

//burger
const burgerMenuList = document.querySelector('.burger-menu');
const burgerBg = document.querySelector('.burger-menu__bg');

const menuBurgerBtn = document.querySelector('.menu-button');
const menuBurgerInnerBtn = document.querySelector('.inner-button');
menuBurgerBtn.addEventListener('click', () => {
  menuBurgerBtn.classList.toggle('menu-button--active');
  burgerMenuList.classList.toggle('burger-menu--active');
  burgerBg.classList.toggle('bg-lock');
});

burgerBg.addEventListener('click', () => {
  menuBurgerBtn.classList.toggle('menu-button--active');
  burgerMenuList.classList.toggle('burger-menu--active');
  burgerBg.classList.toggle('bg-lock');
});

menuBurgerInnerBtn.addEventListener('click', () => {
  menuBurgerBtn.classList.remove('menu-button--active');
  burgerMenuList.classList.remove('burger-menu--active');
  burgerBg.classList.remove('bg-lock');
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
  if (sliderArrowsIndex > sliderArrowsItems.length - 1) {
    sliderArrowsIndex = 0;
  }
  hideSlides();
  showSlide();
}

function prevSlide(index) {
  sliderArrowsIndex -= sliderArrowStep;
  if (sliderArrowsIndex < 0) {
    sliderArrowsIndex = sliderArrowsItems.length - 1;
  }
  hideSlides();
  showSlide();
}

function hideSlides() {
  sliderArrowsItems.forEach((item, index) => (item.style.display = 'none'));
}
function showSlide() {
  sliderArrowsItems[sliderArrowsIndex].style.display = 'block';
}

//second slider with dots
const sliderDots = document.querySelector('.slider-dots');
const sliderDotsWrapper = sliderDots.querySelector('.slider-dots__nav');
const sliderDotsItemsImg = document.querySelectorAll('.slider-dots__item');

let sliderDotsIndex = 0;

function renderPagin() {
  for (let i = 0; i < sliderDotsItemsImg.length; i++) {
    if (i === 0) {
      sliderDotsWrapper.insertAdjacentHTML(
        'beforeend',
        `<button class="slider-dots__nav-item slider-dots__nav-item--active" data-index="0"></button>`
      );
    } else {
      const sliderDotsHtmlItem = `<button class="slider-dots__nav-item" data-index="${i}"></button>`;
      sliderDotsWrapper.insertAdjacentHTML('beforeend', sliderDotsHtmlItem);
    }
  }
}
function changeImg() {
  sliderDotsItemsImg.forEach((item, index) => {
    item.classList.remove('item--active');
  });

  sliderDotsItemsImg[sliderDotsIndex].classList.add('item--active');
}

sliderDotsItemsImg.forEach((item, index) => {
  if (index === 0) {
    item.classList.add('item--active');
  }
});
renderPagin();

const sliderDotsItems = sliderDots.querySelectorAll('.slider-dots__nav-item');

sliderDotsItems.forEach((item) => {
  item.addEventListener('click', function () {
    sliderDotsItems.forEach((item) => {
      item.classList.remove('slider-dots__nav-item--active');
    });
    this.classList.add('slider-dots__nav-item--active');
    sliderDotsIndex = Number(this.dataset.index);
    changeImg();
  });
});
