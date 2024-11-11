import Image from "next/image";

export default function About() {
  return (
    <>
    <div className="about-part">
      <Image
      alt="short logo"
      src='/wg.jpg'
      priority
      width={412}
      height={582}
      draggable="false"
      quality={100}
      unoptimized
      />
    </div>
    </>
  )
}
