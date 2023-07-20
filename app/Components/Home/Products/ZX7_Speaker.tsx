import React from 'react';
import Image from "next/image";
import ProductButton from "../../Buttons/ProductButton";

const ZX7_Speaker = () => {
  return (
    <div className="
        w-full
        h-[20rem]
        rounded-lg
        relative
        flex
        items-center
      "
    >
      <Image
        width={1110}
        height={320}
        alt="ZX7 Image"
        src="/assets/home/desktop/image-speaker-zx7.jpg"
        className="max-sm:hidden w-full h-full rounded-lg absolute object-cover z-[-1]"
      />

      <Image
        width={1110}
        height={320}
        alt="ZX7 Mobile Image"
        src="/assets/Home/mobile/image-speaker-zx7.jpg"
        className="sm:hidden w-full h-full rounded-lg absolute object-cover z-[-1]"
      />
      
      <div className="z-20 flex flex-col lg:ml-[95px] ml-6">
        <h1 className="text-2xl mb-8">
          ZX7 SPEAKER
        </h1>
        <ProductButton value="see product"/>
      </div>
    </div>
  )
}

export default ZX7_Speaker;