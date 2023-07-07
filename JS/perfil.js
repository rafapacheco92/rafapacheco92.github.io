let slides = document.querySelectorAll('.introducaoCarrossel');
let currentSlide = 0;

function showSlide(n) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[n].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector('.botao').addEventListener('click', nextSlide);
document.querySelector('.botaoRetorna').addEventListener('click', prevSlide);

showSlide(currentSlide);