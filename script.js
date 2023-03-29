window.onload = () => {
const backgrounds = [
  'https://github.com/YutakaWatanabe55/ShirayamiWeb/raw/main/img/Tokyo_tower.jpg',
  'https://github.com/YutakaWatanabe55/ShirayamiWeb/raw/main/img/shimanami.jpg',
  'https://github.com/YutakaWatanabe55/ShirayamiWeb/raw/main/img/future_1.png'
];

const backgroundImages = document.getElementById('background-images');
let currentBackground = 0;

setInterval(() => {
  currentBackground = (currentBackground + 1) % backgrounds.length;
  backgroundImages.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
}, 5000);
  backgroundImages.style.backgroundSize = 'cover';
  backgroundImages.style.backgroundPosition = 'center center';
};

const slideshow = document.querySelector('.slideshow');
const images = slideshow.querySelectorAll('img');
const interval = 3000;
let currentSlide = 0;

function nextSlide() {
  images[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % images.length;
  images[currentSlide].classList.add('active');
}

images[currentSlide].classList.add('active');
setInterval(nextSlide, interval);
