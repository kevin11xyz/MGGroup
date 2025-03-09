let slideIndex = 0;
let slideImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
    
];

function showSlides() {
    let heroSection = document.querySelector(".hero");
    
    // Set background image with repeat
    heroSection.style.background = `url('${slideImages[slideIndex]}') repeat`;

    heroSection.style.backgroundSize = "contain";  // Ensures the image repeats
    heroSection.style.backgroundPosition = "center";

    slideIndex++;
    if (slideIndex >= slideImages.length) {
        slideIndex = 0;
    }
    
    setTimeout(showSlides, 3000);
}

document.addEventListener("DOMContentLoaded", showSlides);
