"use client";

import React from 'react';
import Image from "next/image";
import { OrderConfirm } from "@/public/assets/svgs";
import LargeButton from "../Components/Buttons/LargeButton";

const Receipt = () => {
  return (
    <div 
      className="
          sm:w-[540px]
          w-auto
          max-sm:left-3
          max-sm:right-3
          h-[581px]
          mt-[3.75rem]
          bg-white
          rounded-lg
          mobile:p-12
          p-6
          absolute
          z-[100]
        "
    >
      <div className="w-full h-ful">
        <OrderConfirm />

        <h1 className="text-4xl uppercase mt-8">
          Thank you <br />
          For your order
        </h1>

        <p className="mt-6 opacity-50 font-medium">
          You will receive an email confirmation shortly.
        </p>

        <section className="w-full h-[140px] rounded-lg mt-8 sm:mb-[46px] mb-[8.5rem] flex max-sm:flex-col">
          <div className="
              sm:w-[246px]
              w-full
              h-full
              p-6 
              flex
              flex-wrap
              items-center
              justify-center
              bg-seashell
              sm:rounded-l-lg
              max-sm:rounded-t-lg
            "
          >
            <div className="w-full flex justify-between">
              <Image
                width={50}
                height={50}
                alt="Product-Image"
                src={`/assets/cart/image-xx99-mark-two-headphones.jpg`}
                className="rounded-lg object-cover"
              />

              <div className="sm:mr-[42px]">
                <h2 className="font-bold">XX99 MK II</h2>
                <span className="font-bold opacity-50">$ 2,999</span>
              </div>
              <span className="font-bold opacity-50 mb-6"> x1 </span>
            </div>

            <hr className="w-full h-[1px] my-3 bg-black" />
            <span className="text-xs font-bold opacity-50"> and 2 other item{"(s)"}</span>
          </div>

          <div className="
              sm:w-[198px]
              w-ful
              h-full
              bg-black
              sm:rounded-r-lg
              max-sm:rounded-b-lg
              pl-8
              py-5
              flex
              flex-col
              justify-center
             "
          >
            <h2 className="font-medium text-white opacity-50 uppercase mb-2">
              grand total
            </h2>
            <span className="text-lg text-white font-bold">$ 5,446</span>
          </div>
        </section>
        <LargeButton value="Back to home" />
      </div>
    </div>
  )
}

export default Receipt;