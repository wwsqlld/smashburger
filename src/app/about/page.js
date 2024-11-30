import Image from "next/image";

const About = () => {
  return (
    <div className="about-part">
      <Image
      alt="short logo"
      src='/wg.webp'
      priority
      width={577}
      height={815}
      draggable="false"
      quality={100}
      unoptimized
      />
    </div>
  )
}

export default About
