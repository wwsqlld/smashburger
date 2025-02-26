import Image from "next/image";

const About = () => {
  return (
    <div className="about-part">
      <div className="about-gastrowg-container">
        <div className="about-gastrowg-main">
          <Image
            alt="short logo"
            src='part2zam1.webp'
            priority
            width={301.7}
            height={40.7}
            draggable="false"
            quality={100}
            unoptimized
          />
        </div>
        
        <div className="about-gastrowg-image">
          <Image
            alt="short logo"
            src='part2zam2.webp'
            priority
            width={175.8}
            height={202.4}
            draggable="false"
            quality={100}
            unoptimized
          />
        </div>
      </div>
      <div className="about-container-text">
        <p className="burger-menu-txt-p">THOMMY'S und das ZAMZAM haben eine Gastro WG gegründet.<br />
        Gastro WG? Das Konzept ist eigentlich ganz einfach:</p>
        <p className="burger-menu-txt-p-g">Zwei Restaurants - ein Lokal.</p>
        
        <p className="burger-menu-txt-p">Wir teilen uns Zeit, Raum und noch viele andere Dinge und Nicht-
          Dinge.<br />

          Wir helfen und unterstützen uns gegenseitig, lernen‚ voneinander, molivieren uns und lachen ziemlich viel.
          ‚Gemeinsam geht einfach viel mehr als alleine!

          Das ist auch noch nicht alles, Nun kommen alle, die Lust auf
          ‚absurd leckeres Essen haben an sieben Tage die Woche in den
          Genuss eines vielfältiges und
        </p>

        <p className="burger-menu-txt-p-g">einzigartiges Speiseangebot!</p>
        
        
        
      </div>
      <div className="about-image-container">
        <div className="about-image-main">
          <Image
            alt="zam zam"
            src='part2zam4.webp'
            priority
            width={383}
            height={140.3}
            draggable="false"
            quality={100}
            unoptimized
        />
        </div>
      </div>
      <div className="about-images-cont">
          <Image
            alt="logo"
            src='part2zam3.webp'
            priority
            width={189.24}
            height={195.24}
            draggable="false"
            quality={100}
            unoptimized
      />
      </div>
      <div className="about-images-cont2">
        <Image
            alt="better together"
            src='part2zam5.webp'
            priority
            width={153.66}
            height={114.92}
            draggable="false"
            quality={100}
            unoptimized
      />
      </div>
    </div>
  )
}

export default About
