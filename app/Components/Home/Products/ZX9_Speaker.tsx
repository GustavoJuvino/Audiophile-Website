import React from 'react'
import Image from "next/image"
import Button from "../../Button"
import { PatternCircles } from "@/public/assets/svgs"

const ZX9_Speaker = () => {
  return (
    <div className="
        w-full
        lg:h-[35rem]
        h-[45rem]
        rounded-lg
        bg-raw-sienna
        relative
        overflow-hidden
        flex
        lg:justify-between
        justify-center
        max-lg:flex-col
        max-lg:items-center
      "
    >
      <div className="flex items-center justify-center">
        <PatternCircles
          className="
            w-auto
            h-auto
            absolute
            lg:left-[-9.6rem]
            lg:top-0
            bottom-[4rem]
            z-[1]
            max-lg:rotate-180
          " 
        />
        <Image
          width={410}
          height={493}
          alt="ZX9-Image"
          src="/assets/home/desktop/image-speaker-zx9.png"
          className="
            max-lg:w-auto
            max-lg:h-[237px]
            lg:absolute
            bottom-[-1rem]
            left-[7.2rem]
            max-lg:mb-16
            z-[2]
          "
        />
      </div>

      <div className="
          text-white 
          lg:mr-24
          flex
          flex-col
          justify-center
          max-lg:text-center
          max-lg:items-center
          z-30
        "
      >
        <h1 className="small-mobile:text-6xl text-2xl mb-6 ">
          ZX9<br/>
          SPEAKER
        </h1>
        <p className="opacity-75 mb-10 max-mobile:text-sm">
          Upgrade to premium speakers that are <br className="max-small-mobile:hidden"/>
          phenomenally built to deliver truly remarkable <br className="max-small-mobile:hidden" />
          sound.
        </p>
        <Button
          type={3}
          value="see product"
        />
      </div>
    </div>
  )
}

export default ZX9_Speaker;