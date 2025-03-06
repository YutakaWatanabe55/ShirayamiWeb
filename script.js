window.onload = () => {

  // 背景画像の切替（背景要素が存在する場合）
  const backgroundImages = document.getElementById('background-images');
  if (backgroundImages) {
    const backgrounds = [
      'https://github.com/YutakaWatanabe55/ShirayamiWeb/raw/main/img/Tokyo_tower.jpg',
      'https://github.com/YutakaWatanabe55/ShirayamiWeb/raw/main/img/shimanami.jpg',
      'https://github.com/YutakaWatanabe55/ShirayamiWeb/raw/main/img/future_1.png'
    ];
    let currentBackground = 0;
    setInterval(() => {
      currentBackground = (currentBackground + 1) % backgrounds.length;
      backgroundImages.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
    }, 5000);
    backgroundImages.style.backgroundSize = 'cover';
    backgroundImages.style.backgroundPosition = 'center center';
  }

  // EmailJSの送信処理（フォームが存在する場合）
  const form = document.querySelector('form');
  if (form) {
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
  }

  // --- ブロック崩しゲームの実装 ---
  const canvas = document.getElementById("gameCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");

    // ボールの設定
    let ballRadius = 10;
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;

    // パドルの設定
    let paddleHeight = 10;
    let paddleWidth = 75;
    let paddleX = (canvas.width - paddleWidth) / 2;
    let rightPressed = false;
    let leftPressed = false;

    // ブロックの設定
    let brickRowCount = 3;
    let brickColumnCount = 5;
    let brickWidth = 75;
    let brickHeight = 20;
    let brickPadding = 10;
    let brickOffsetTop = 30;
    let brickOffsetLeft = 30;
    let score = 0;
    let lives = 3;

    // ブロックの配列作成
    let bricks = [];
    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }

    // キーイベントの登録
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
      }
    }

    function keyUpHandler(e) {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
      }
    }

    // ブロックとの衝突判定
    function collisionDetection() {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          let b = bricks[c][r];
          if (b.status === 1) {
            if (
              x > b.x &&
              x < b.x + brickWidth &&
              y > b.y &&
              y < b.y + brickHeight
            ) {
              dy = -dy;
              b.status = 0;
              score++;
              if (score === brickRowCount * brickColumnCount) {
                alert("おめでとうございます！ゲームクリアです！");
                document.location.reload();
              }
            }
          }
        }
      }
    }

    // ボールの描画
    function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#ff4d4d";
      ctx.fill();
      ctx.closePath();
    }

    // パドルの描画
    function drawPaddle() {
      ctx.beginPath();
      ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.closePath();
    }

    // ブロックの描画
    function drawBricks() {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status === 1) {
            let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
            let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    }

    // スコアの描画
    function drawScore() {
      ctx.font = "16px Arial";
      ctx.fillStyle = "#fff";
      ctx.fillText("Score: " + score, 8, 20);
    }

    // ライフの描画
    function drawLives() {
      ctx.font = "16px Arial";
      ctx.fillStyle = "#fff";
      ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
    }

    // 全体の描画処理
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBricks();
      drawBall();
      drawPaddle();
      drawScore();
      drawLives();
      collisionDetection();

      // 壁との反射
      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }
      if (y + dy < ballRadius) {
        dy = -dy;
      } else if (y + dy > canvas.height - ballRadius) {
        // パドルとの当たり判定
        if (x > paddleX && x < paddleX + paddleWidth) {
          dy = -dy;
        } else {
          lives--;
          if (!lives) {
            alert("ゲームオーバー");
            document.location.reload();
          } else {
            x = canvas.width / 2;
            y = canvas.height - 30;
            dx = 2;
            dy = -2;
            paddleX = (canvas.width - paddleWidth) / 2;
          }
        }
      }

      // パドルの移動
      if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
      } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
      }

      x += dx;
      y += dy;
      requestAnimationFrame(draw);
    }

    draw();
  }
};
