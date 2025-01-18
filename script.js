let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * (slides[0].clientWidth + 20); // Adjust for margin
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Initialize the carousel
showSlide(slideIndex);