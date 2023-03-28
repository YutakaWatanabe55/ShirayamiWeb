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
