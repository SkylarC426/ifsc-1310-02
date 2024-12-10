const images = ["MOONBEAR.jpg", "sddefault.jpg", "worddle.JPG"]; 
let currentImageIndex = 0;

function cycleImages() {
  currentImageIndex = (currentImageIndex + 1) % images.length; 
  const carouselImage = document.getElementById("carousel-image");
  carouselImage.style.opacity = 0; 
  setTimeout(() => {
    carouselImage.src = images[currentImageIndex]; 
    carouselImage.style.opacity = 1; 
  }, 500); 
}

setInterval(cycleImages, 3000);
