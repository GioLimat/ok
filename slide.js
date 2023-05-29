const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const s1 = document.querySelector(".s1");
let slideIndex = 0;

prevBtn.addEventListener("click", () => {
  slideIndex--;
  updateSlide();
});

nextBtn.addEventListener("click", () => {
  slideIndex++;
  updateSlide();
});

function updateSlide() {
  const slideWidth = 1349;
  const maxSlides = 10;
  const maxTranslate = -(slideWidth * (maxSlides - 1));

  if (slideIndex < 0) {
    slideIndex = maxSlides - 1;
  } else if (slideIndex >= maxSlides) {
    slideIndex = 0;
  }

  const translateValue = slideIndex * -slideWidth;
  s1.style.marginLeft = `${translateValue}px`;

  if (translateValue === maxTranslate) {
    slideIndex = 0;
    s1.style.marginLeft = "0";
  }
}
