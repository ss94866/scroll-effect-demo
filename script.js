let docHeight;
let containerHeight;

document.addEventListener("DOMContentLoaded", function () {
  docHeight = document.body.offsetHeight;
  containerHeight = docHeight / 3;
});

document.addEventListener("scroll",function () {
  let scrollY = window.scrollY;
  let ratio = scrollY / containerHeight
  let {clipContainer, clipRatio} = getClipcontainer(ratio)
  clipContainer.style.clipPath = `inset(0px 0px ${clipRatio * 100}%)`
});

function getClipcontainer(conRatio){
    if(conRatio < 1) return {clipContainer: document.querySelector('.img1'), clipRatio: conRatio}
    if(conRatio < 2) return {clipContainer: document.querySelector('.img2'), clipRatio: conRatio - 1}
    return {clipContainer: document.querySelector('.img3'), clipRatio: conRatio - 2}
}
