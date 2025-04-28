import "./_slider.scss";
export default function Slider(slides) {
  let slider = document.createElement("div");
  slider.classList.add("slider");
  
  slides.forEach((slide) => {
    let slideElm = document.createElement("div");
    slideElm.classList.add("slider__slide");
    slider.append(slideElm);
    slideElm.innerHTML = slide;
  });
  return slider.outerHTML;
}
