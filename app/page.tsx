import Image from "next/image";
import Button from "./Components/Button";

export default function Home() {
  return (
    <main className="bg-onyx">
      <section className="w-[1110px] h-[729px]">

        {/* Texts */}
        <div className="text-white">
          <span className="text-overline uppercase opacity-50">
            new product
          </span>
          <h1 className="text-6xl">
            XX99 Mark II <br />
            Headphones
          </h1>
          <p className="text-base opacity-75">
            Experience natural, lifelike audio and exceptional
            build quality made for the passionate music
            enthusiast.
          </p>
          <Button type={1} value="see product" />
        </div>

        {/* Image */}
        <Image 
          width={700}
          height={886}
          alt="Headphones-Image"
          src="/assets/home/desktop/image-hero.jpg"
          className="absolute w-auto h-[520px] object-cover "
        />
      </section>
    </main>
  )
}
