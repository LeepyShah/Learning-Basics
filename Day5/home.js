function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// // let slideIndex = 1;
// // showSlides(slideIndex);
// // function plusSlides(n) {
// //   showSlides(slideIndex += n);
// // }
// // function showSlides(n) {
// //   let i;
// //   let slides = document.getElementsByClassName("mySlides");
// //   if (n > slides.length) {slideIndex = 1}
// //   if (n < 1) {slideIndex = slides.length}
// //   for (i = 0; i < slides.length; i++) {
// //     slides[i].style.display = "none";
// //   }

// //   slides[slideIndex-1].style.display = "block";

// // }
// // Object to track the current slide index for each carousel
// const slideIndex = {};

// // Initialize each carousel
// function initCarousel(carouselId) {
//     const slides = document.querySelectorAll(`#${carouselId} .mySlides`);
//     slideIndex[carouselId] = 0; // Start with the first slide
//     showSlides(carouselId, slideIndex[carouselId]);
// }

// // Show the current slide for a specific carousel
// function showSlides(carouselId, n) {
//     const slides = document.querySelectorAll(`#${carouselId} .mySlides`);
//     if (n >= slides.length) slideIndex[carouselId] = 0;
//     if (n < 0) slideIndex[carouselId] = slides.length - 1;

//     slides.forEach((slide, index) => {
//         slide.style.display = index === slideIndex[carouselId] ? "block" : "none";
//     });
// }

// // Navigate to the next or previous slide
// function plusSlides(n, carouselId) {
//     slideIndex[carouselId] += n;
//     showSlides(carouselId, slideIndex[carouselId]);
// }

// // Initialize both carousels
// initCarousel("carousel1");
// initCarousel("carousel2");
const wrapper = document.querySelector(".cards-wrapper");
const dots = document.querySelectorAll(".dot");
let activeDotNum = 0;
dots.forEach((dot, idx) => {
  dot.setAttribute("data-num", idx);
  dot.addEventListener("click", (e) => {
    let clickedDotNum = e.target.dataset.num;
    if (clickedDotNum == activeDotNum) {
      return;
    } else {
      let displayArea = wrapper.parentElement.clientWidth;
      let pixels = -displayArea * clickedDotNum;
      wrapper.style.transform = "translateX(" + pixels + "px)";
      dots[activeDotNum].classList.remove("active");
      dots[clickedDotNum].classList.add("active");
      activeDotNum = clickedDotNum;
    }
  });
});
const slideIndex = {};
function initCarousel(carouselId) {
  const slides = document.querySelectorAll(`#${carouselId} .mySlides`);
  slideIndex[carouselId] = 0;
  showSlides(carouselId, slideIndex[carouselId]);
}
function showSlides(carouselId, n) {
  const slides = document.querySelectorAll(`#${carouselId} .mySlides`);
  if (n >= slides.length) slideIndex[carouselId] = 0;
  if (n < 0) slideIndex[carouselId] = slides.length - 1;

  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex[carouselId] ? "block" : "none";
  });
}
function plusSlides(n, carouselId) {
  slideIndex[carouselId] += n;
  showSlides(carouselId, slideIndex[carouselId]);
}
initCarousel("carousel1");
initCarousel("carousel2");
function startCardCarousel(carouselId, dotsWrapperId) {
  const wrapper = document.querySelector(`#${carouselId}`);
  const cards = wrapper.querySelectorAll(".card");
  const dots = document.querySelectorAll(`#${dotsWrapperId} .dot`);
  let currentIndex = 0;

  function updateActiveDot(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }
  function scrollCarousel() {
    currentIndex = (currentIndex + 1) % cards.length;
    const cardWidth = cards[0].clientWidth + 20;
    wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updateActiveDot(currentIndex);
  }
  setInterval(scrollCarousel, 3000);
  updateActiveDot(currentIndex);
}
