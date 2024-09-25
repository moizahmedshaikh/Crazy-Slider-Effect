let nextDom = document.getElementById("next") as HTMLElement;
let prevDom = document.getElementById("prev") as HTMLElement;

let carouselDom = document.querySelector(".main") as HTMLElement;
let SliderDom = carouselDom.querySelector(".main .list") as HTMLElement;
let thumbnailBorderDom = document.querySelector(
  ".main .thumbnail"
) as HTMLElement;
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".items");
let timeDom = document.querySelector(".main .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut: number;
let runNextAuto = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);
function showSlider(type: string) {
  let SliderItemsDom = SliderDom.querySelectorAll(".main .list .items");
  let thumbnailItemsDom = document.querySelectorAll(".main .thumbnail .items");

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);
}
