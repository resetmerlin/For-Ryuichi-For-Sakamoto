const headerTitle = document.querySelector(".header__title");
const navTitle1 = document.querySelector(".nav-first");
const getImg = document.querySelector(".main__circle-effect");
const getImgFocus = document.querySelector(".main__img");
const changeSakamoto = document.querySelector(".main--left");
const getInnerBlurr = document.querySelector(".main--innerBlurr");

changeSakamoto.addEventListener("mouseover", () => {
  getImgFocus.style = `border-radius: 50%`;
  getImgFocus.style.transform = `scale(1.1)`;
  getImg.style.background = `radial-gradient(circle, transparent 60%, #fff 30%)`;
  getImg.style = `box-shadow: 0rem 0rem 10rem 10rem rgba($color-white, .3)`;
  getInnerBlurr.style = `box-shadow: rgba($color-white, 0.9) 0rem 2.2rem 3rem 1rem`;
});

getImg.addEventListener("mouseover", () => {
  getImgFocus.style = `border-radius: 50%`;
  getImgFocus.style.transform = `scale(1.1)`;
});
function changeText(event) {
  headerTitle.classList.toggle("active");
  headerTitle.innerText = "坂本龍";
}

function changeNav1(event) {
  navTitle1.classList.toggle("active1");
  navTitle1.innerText = "歌です";
}
headerTitle.addEventListener("click", changeText);
navTitle1.addEventListener("click", changeNav1);
