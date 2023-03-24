let btnList = document.querySelectorAll(".btnGroup button");
let slideList = document.querySelector(".slideList");
let btnSlideList = document.querySelectorAll(".btnSlide");

let index = 0;

btnList.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    index = idx;
    slideList.style.transform = `translate(${index * -100}%)`;
  });
});
