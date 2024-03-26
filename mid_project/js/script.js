var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
setInterval(() => {
  plusSlides(1);
}, 3000);
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const windowheight = window.innerHeight;

window.addEventListener('scroll', () => {
  var scrollheight = window.scrollY;
  console.log(scrollheight);
  if (scrollheight > 100){
    document.getElementsByClassName("fade-move")[0].style.height = 0;
  }
  if (scrollheight > 200) {
    var locationdisplay_elm = document.querySelector(".middlebar");
    locationdisplay_elm.style.opacity = 1;
    console.log(locationdisplay_elm);
  }
  if (scrollheight > 500) {
    var locationdisplay_elm = document.querySelector(".topbar");
    locationdisplay_elm.style.opacity = 0;
    var locationdisplay_elm = document.querySelector(".header-appear");
    locationdisplay_elm.style.opacity = 1;
    document.getElementsByClassName("floatright-header")[0].style.top = "20px";
    document.getElementsByClassName("floatright-header")[0].style.right = "3%";
    console.log(locationdisplay_elm.style.top);
  } else {
    var locationdisplay_elm = document.querySelector(".topbar");
    locationdisplay_elm.style.opacity = 1;
    var locationdisplay_elm = document.querySelector(".header-appear");
    locationdisplay_elm.style.opacity = 0;
    document.getElementsByClassName("floatright-header")[0].style.top = "5px";
    document.getElementsByClassName("floatright-header")[0].style.right = "5%";
    console.log(locationdisplay_elm.style.top);
  }
  if (scrollheight > 1000){
    document.getElementsByClassName("fade-move")[1].style.height = 0;
  }
  if (scrollheight > 1100) {
    var locationdisplay_elm = document.querySelector(".locationbar");
    locationdisplay_elm.style.opacity = 1;
    console.log(locationdisplay_elm);
  }
  if (scrollheight > 1500){
    document.getElementsByClassName("fade-move")[2].style.height = 0;
  }
  if (scrollheight > 1600) {
    var locationdisplay_elm = document.querySelector(".instagram");
    locationdisplay_elm.style.opacity = 1;
    console.log(locationdisplay_elm);
  }
});
function changemenu(x) {
  x.classList.toggle("change");
}
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

setTimeout(() => {
  document.getElementById("myNav").style.width = "0%";
}, 1000);















