"use client";
import React from 'react';
import Image from "next/image";
import DefaultButton from "../Buttons/DefaultButton";
import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();

  return (
    <section className="bg-onyx w-full h-auto flex justify-center items-center">
        <section className="
                lg:w-[1110px]
                w-full
                sm:h-[730px]
                h-[630px]
                flex
                max-lg:flex-col
                justify-between
                max-lg:items-center
                max-xl:sm:ml-8
                max-xl:overflow-hidden
            "
        >
            {/* Texts */}
            <div className="
                text-white
                flex
                flex-col
                max-lg:items-center
                max-lg:text-center
                max-lg:w-[380px]
                lg:mt-32
                max-lg:sm:mt-[160px]
                max-sm:mt-24
                max-sm:px-4
                z-40
                "
            >
                <span className="text-overline uppercase opacity-50">
                    new product
                </span>
                <h1 className="mobile:text-6xl text-5xl my-6 uppercase">
                    XX99 Mark II <br />
                    Headphones
                </h1>
                <p className="lg:w-[68%] text-base opacity-75 mb-10">
                    Experience natural, lifelike audio and exceptional
                    build quality made for the passionate music
                    enthusiast.
                </p>
                <DefaultButton 
                    click={() => router.push("/products/xx99-mark-two-headphones")}
                    value="see product"
                />
            </div>

            {/* Image */}
            <div className="w-[700px] h-auto relative">
                <Image
                    width={700}
                    height={886}
                    alt="Headphones-Image"
                    src="/assets/home/desktop/image-main.png"
                    priority
                    className="
                        absolute
                        lg:bottom-[-6.5rem]
                        sm:bottom-[-10rem]
                        bottom-[-12rem]
                        w-auto
                        lg:h-[886px]
                        h-[980px]
                        object-cover
                        z-[2]
                        max-lg:brightness-50
                        max-lg:opacity-70
                    "
                />
                <div className="
                    w-[500px]
                    h-[500px]
                    bg-[#2B2B2B]
                    rounded-full
                    absolute
                    bottom-[11rem]
                    left-[1rem]
                    z-[1]
                    blur-3xl
                    max-lg:hidden
                "
                />
            </div>
        </section>
    </section>
  )
}

export default Main