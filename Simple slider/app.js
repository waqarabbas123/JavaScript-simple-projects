let slides = document.querySelectorAll(".slide");
let counter = 0;
console.log(slides);

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let slider = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

let goPrev = () => {
  counter--;
  slider();
};
let goNext = () => {
  counter++;
  slider();
};

