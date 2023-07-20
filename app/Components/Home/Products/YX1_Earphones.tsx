"use client";

import React from 'react';
import Image from "next/image";
import ProductButton from "../../Buttons/ProductButton";
import { useRouter } from "next/navigation";

const YX1_Earphones = () => {
  const router = useRouter();

  return (
    <div className="
            w-full
            h-auto
            flex
            max-sm:flex-col
            justify-between
            sm:gap-3
            gap-[24px]
        "
    >
        <div className="sm:w-[540px] w-full h-[320px] relative">
            <Image 
                width={540}
                height={320}
                alt="YX1 Image"
                src="/assets/home/desktop/image-earphones-yx1.jpg"
                className="w-full h-full rounded-lg absolute object-cover"
            />
        </div>
        <div className="
                sm:w-[540px]
                w-full
                h-[320px]
                rounded-lg
                lg:pl-24
                pl-10
                bg-seashell
                flex
                flex-col
                justify-center
            "
        >
            <h1 className="text-2xl mb-8">
                YX1 EARPHONES
            </h1>
            <ProductButton 
                click={() => router.push("/products/yx1-earphones")}
                value="see product"
            />
        </div>
    </div>
  )
}

export default YX1_Earphones;