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

  // EmailJSの送信処理
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.send('service_1mrxjba', 'template_wzedz25', {
          name: form.name.value,
          email: form.email.value,
          message: form.message.value
      })
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('メッセージが送信されました。');
          form.reset();
      }, function(error) {
          console.log('FAILED...', error);
          alert('メッセージの送信ごときに失敗しました。\nエラー内容: ' + JSON.stringify(error));
      });
  });
};
