const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

const imagesToShow = 3;
const totalImages = images.length;

function updateCarousel() {
  const imageWidth = carousel.offsetWidth / imagesToShow;
  carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalImages - imagesToShow) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener("resize", updateCarousel);

updateCarousel();