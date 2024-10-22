let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    // Show the current slide
    slides[currentIndex].classList.add('active');
}

// Optional: You could use this if you want to handle clicks manually
function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

window.onload = function () {
    showSlide(currentIndex);
};
