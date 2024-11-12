import Image from "next/image";

const Home = () => {
  return (
    <div className="home-main-part">
      <div className="video-main">
        <video autoPlay loop muted playsInline className="video">
          <source src="/videoback2.webm" type="video/webm" />
        </video>
        <div className="overlay" />
      </div>

      <div className="over-content">
        <div className="over-cont-img">
          <Image alt="uber"
                  src='/shortlogo2.png'
                  width={277}
                  priority
                  height={90}
                  draggable="false"
                  quality={100}
                  unoptimized
                  />
        </div>
          <a href="https://www.ubereats.com/de-en/store/thommys-smash-burger/T7uygVu4XjK1YmAoQjHMXQ?diningMode=DELIVERY&fbclid=PAZXh0bgNhZW0CMTEAAabRYNu4TdX6ulr4FHsOydWjYqqK_83TxQUtCw9MjeFwgjadps3fUpeSdrU_aem_xBe0TAqtL9_n0Z1ouGT5fQ" style={{textDecoration: 'none'}}>
            <div className="bestellung-button">Jetzt bestellen!</div>
          </a>
          <p className="bestellung-text">mit Uber Eats</p>
      </div>
    </div>
  );
}

export default Home
