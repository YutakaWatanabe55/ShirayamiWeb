import { useEffect, useState } from 'react'
import './style.css'

function App() {
  const backgrounds = [
    'https://github.com/YutakaWatanabe55/ShirayamiWeb/raw/main/img/Tokyo_tower.jpg',
    'https://github.com/YutakaWatanabe55/ShirayamiWeb/raw/main/img/shimanami.jpg',
    'https://github.com/YutakaWatanabe55/ShirayamiWeb/raw/main/img/future_1.png'
  ]
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((i) => (i + 1) % backgrounds.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const shareOnTwt = () => {
    const currentUrl = window.location.href
    const shareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(currentUrl)
    window.open(shareUrl, '_blank')
  }

  return (
    <>
      <div
        id="background-images"
        style={{
          backgroundImage: `url(${backgrounds[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <header>
        <nav>
          <a href="#about">自己紹介</a>
          <a href="#works">制作物</a>
          <a href="#contact">お問い合わせ</a>
        </nav>
      </header>
      <section id="hero">
        <h1>渡邉 愉尊</h1>
        <p>東京電機大学 | 工学部情報通信工学科</p>
        <a href="#contact" className="button">お問い合わせ</a>
      </section>
      <section id="about">
        <div className="container about-container">
          <h2 className="title">自己紹介</h2>
          <div className="about-content">
            <div className="about-image">
              <img
                src="https://github.com/YutakaWatanabe55/ShirayamiWeb/raw/main/img/profile.jpg"
                alt="自分の写真"
                className="profile-image"
              />
            </div>
            <div className="about-text">
              <ul className="about-list">
                <li>生年月日：2001年11月22日</li>
                <li>大学：東京電機大学 工学部情報通信工学科 24年卒業</li>
                <li>趣味：アニメ、ゲームなどのオタク趣味</li>
                <li>特技：PC組み立て</li>
                <li>
                  所属サークル：UT-virtual (<a href="http://utvirtual.tech/">http://utvirtual.tech/</a>)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="works">
        <div className="container">
          <h2 className="title">制作物</h2>
          <div className="work">
            <h3>
              <a href="works.html#vtuber">Vtuber制作</a>
            </h3>
          </div>
          <div className="work">
            <h3>
              <a href="works.html#witch">VRゲーム制作</a>
            </h3>
          </div>
          <div className="work">
            <h3>
              <a href="works.html#cg">ギャラリー</a>
            </h3>
          </div>
          <div className="work">
            <h3>
              <a href="game.html">ミニゲーム</a>
            </h3>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <h2 className="title">お問い合わせ</h2>
          <form action="mailto:yutaka.siraga.55@gmail.com" method="post" encType="text/plain">
            <label htmlFor="name">お名前</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">メールアドレス</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">メッセージ</label>
            <textarea name="message" id="message" cols="30" rows="10" required></textarea>
            <button type="submit" className="button">送信する</button>
          </form>
        </div>
      </section>
      <footer>
        <div>
          <svg onClick={shareOnTwt} id="icon" viewBox="0 0 512 512">
            <path
              fill="#ffffff"
              transform="scale(1,-1) translate(0,-512)"
              d="M336 416c-26.51 0-48-21.49-48-48 0-3.785 0.453-7.468 1.281-11l-147.875-95.063c-8.124 6.307-18.326 10.063-29.406 10.063-26.51 0-48-21.49-48-48s21.49-48 48-48c12.944 0 24.679 5.139 33.313 13.469l207.063-103.563c-0.238-1.937-0.375-3.906-0.375-5.906 0-26.51 21.49-48 48-48s48 21.49 48 48c0 26.51-21.49 48-48 48-12.944 0-24.679-5.139-33.313-13.469l-207.063 103.563c0.238 1.937 0.375 3.906 0.375 5.906 0 3.785-0.453 7.468-1.281 11l147.875 95.063c8.124-6.307 18.325-10.063 29.406-10.063 26.51 0 48 21.49 48 48s-21.49 48-48 48z"
            />
          </svg>
          <a href="https://twitter.com/shirayami55">
            <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 512 512">
              <path
                fill="#ffffff"
                transform="scale(1,-1) translate(0,-512)"
                d="M492.255 370.544c-17.384-7.712-36.069-12.921-55.676-15.264 20.011 11.997 35.384 30.995 42.623 53.633-18.733-11.111-39.478-19.177-61.561-23.524-17.681 18.841-42.875 30.611-70.758 30.611-53.536 0-96.942-43.403-96.942-96.938 0-7.598 0.857-14.998 2.51-22.092-80.567 4.043-151.999 42.637-199.81 101.288-8.346-14.317-13.126-30.971-13.126-48.737 0-33.633 17.113-63.305 43.127-80.689-15.891 0.503-30.84 4.865-43.908 12.125-0.009-0.404-0.009-0.808-0.009-1.219 0-46.969 33.416-86.147 77.762-95.056-8.133-2.215-16.698-3.401-25.538-3.401-6.247 0-12.32 0.609-18.239 1.74 12.336-38.512 48.137-66.541 90.558-67.32-33.177-26.003-74.976-41.5-120.395-41.5-7.825 0-15.542 0.461-23.125 1.356 42.901-27.505 93.857-43.556 148.602-43.556 178.309 0 275.819 147.716 275.819 275.821 0 4.203-0.097 8.382-0.284 12.541 18.943 13.669 35.377 30.741 48.373 50.183z"
              />
            </svg>
          </a>
          <a href="https://github.com/YutakaWatanabe55">
            <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 512 512">
              <path
                fill="#ffffff"
                transform="scale(1,-1) translate(0,-512)"
                d="M512 230v2c-42.159 8.427-85.827 9.088-112 8 4.3 15.487 6 32.129 6 52 0 28.5-10.611 52.65-28 70 3.038 9.805 7.151 30.123-4 58 0 0-19.504 7.772-64-22-17.43 4.355-35.423 6-54 6-20.44 0-42.737-2.717-62-8-45.916 31.315-66 24-66 24-13.231-33.077-4.485-55.918-2-62-15.552-16.779-26-39.74-26-66 0-19.825 2.486-36.543 8-52-26.396 0.96-67.346 0.127-108-8v-2c40.899 8.177 83.765 8.993 110 8 1.215-3.2 2.482-7 4-10-25.944-0.836-71.546-4.026-114-16l2-2c42.79 12.062 86.308 15.214 112 16 15.501-28.886 45.63-46.141 100-52-7.717-5.184-14.81-15.089-18-30-10.516-5.029-44.028-16.341-64 18 0 0-10.6 20.4-32 22 0 0-21.326-0.75-2-14 0 0 14.416-5.411 24-30 0.298 0 11.67-43.456 72-30v-42c-0.298 0 0.053-14.894-14-20 0 0-8.945-6.813 0-10 0.031 0 38-3.916 38 28v48c0.339 0-1.207 17.488 8 24v-76c-0.37 0-0.421-18.976-10-26 0 0-6.051-11.188 8-8 0 0 26.721 4.719 28 36v78h8v-78c1.276-31.281 28-36 28-36 14.047-3.188 8 8 8 8-9.961 7.024-10 26-10 26v76c9.539-7.163 8-24 8-24v-48c0.044-31.918 38-28 38-28 8.937 3.188 0 10 0 10-14.361 5.106-14 20-14 20v62c0.31 24.147-10.053 37.25-20 44 57.983 5.748 85.179 22.919 98 52 25.397-0.698 70.281-3.671 114-16l2 2c-43.469 12.257-90.346 15.254-116 16 1.215 2.938 3.058 6.857 4 10 41.325-0.51 78.075-1.154 112-8z"
              />
            </svg>
          </a>
        </div>
        <p>Copyright © 2023, yutaka Watanabe</p>
      </footer>
    </>
  )
}

export default App
