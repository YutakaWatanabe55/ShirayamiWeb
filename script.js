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

window.onload = () => {
  var slideIndex = 1;
showSlides(slideIndex);
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (!slides || slides.length === 0) return;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

