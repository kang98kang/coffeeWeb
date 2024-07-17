const searchEl = document.querySelector(".search");
const searchInputEl = document.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: "none",
    });
    gsap.to(toTopEl, 0.6, {
      opacity: 1,
      x: 0,
    });
  } else {
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: "block",
    });
    gsap.to(toTopEl, 0.6, {
      opacity: 0,
      x: 100,
    });
  }
});

const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function (fadeEls, index) {
  gsap.to(fadeEls, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".visual .inner .swiper", {
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
});

new Swiper(".notice .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

const promotionEl = document.querySelector("section.promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  if (promotionEl.classList.contains("hide")) {
    promotionEl.classList.remove("hide");
  } else {
    promotionEl.classList.add("hide");
  }
});

gsap.to(".floating1", 1.5, {
  //'요소', 시간, {속성}
  delay: 1,
  y: 30, //수직으로 얼마나 움직일지
  repeat: -1, //-1 은 무한반복
  yoyo: true, //한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut, //Easing함수 적용. GSAP 페이지에서 다양한 값 테스트 가능
});

gsap.to(".floating2", 2, {
  delay: 1,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut,
});

gsap.to(".floating3", 2.5, {
  delay: 1,
  y: 40,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut,
});

const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElment: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-button-prev",
    nextEl: ".awards .swiper-button-next",
  },
});

const thisYear = document.querySelector(".this-year");

thisYear.textContent = new Date().getFullYear();

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.6, {
    scrollTo: 0,
  });
});
