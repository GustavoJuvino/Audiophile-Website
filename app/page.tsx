import Image from "next/image";
import Button from "./Components/Button";

export default function Home() {
  return (
    <main className="bg-onyx">
      <section className="w-[1110px] h-[729px] flex">

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
        <div className="w-[700px] h-auto relative">
          <Image 
            width={700}
            height={886}
            alt="Headphones-Image"
            src="/assets/home/desktop/image-main.png"
            className="absolute w-auto h-[886px] object-cover z-[2]"
          />
          <div className="
              w-[500px]
              h-[500px]
              bg-[#2B2B2B]
              rounded-full
              absolute
              bottom-[6.5rem]
              left-[1rem]
              z-[1]
              blur-3xl
            "
          />
        </div>
      </section>
    </main>
  )
}
