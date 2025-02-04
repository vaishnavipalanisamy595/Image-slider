let index = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(n) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Calculate the new index (loop back if needed)
    index = (n + totalSlides) % totalSlides;

    // Add active class to the new slide
    slides[index].classList.add('active');
}

// Function for previous/next button clicks
function moveSlide(step) {
    showSlide(index + step);
}

// Auto slide every 3 seconds
setInterval(() => moveSlide(1), 3000);

// Initialize first slide as active
showSlide(index);