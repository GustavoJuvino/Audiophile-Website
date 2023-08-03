"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { OrderConfirm } from "@/public/assets/svgs";
import LargeButton from "../Components/Buttons/LargeButton";
import { useGlobalContext } from "../Context/store";
import useRemoveAllProducts from "../hooks/useRemoveAllProducts";
import { useRouter } from "next/navigation";

const Receipt = () => {
  const { removeAllProducts } = useRemoveAllProducts();
  const { localProducts, total } = useGlobalContext();
  const [listProducts, setListProducts] = useState(1);
  const [viewLess, setViewLess] = useState(false)
  const router = useRouter();

  const expandListProducts = () => {
    setListProducts(localProducts.length);
    setViewLess(true);
  }

  const decreaseListProduct = () => {
    setListProducts(1);
    setViewLess(false)
  }

  return (
    <div
      className={`
        sm:w-[540px]
        w-auto
        max-sm:left-3
        max-sm:right-3
        ${viewLess ? "h-auto" : "h-fit"}
        mt-[3.75rem]
        bg-white
        rounded-lg
        mobile:p-12
        p-6
        absolute
        z-[100]
      `}
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

        <section className={`
            w-full
            ${viewLess ? "h-auto" : "h-[140px]"}
            rounded-lg
            mt-8
            sm:mb-[45px]
            ${viewLess ? "max-sm:mb-[45px]" : "mb-[137px]"}
            flex
            max-sm:flex-col
          `}
        >
          <div className="
              sm:w-[246px]
              w-full
              h-full
              p-6 
              flex
              gap-y-4
              flex-wrap
              items-center
              justify-center
              bg-seashell
              sm:rounded-l-lg
              max-sm:rounded-t-lg
            "
          >
            {localProducts.slice(0, listProducts).map((product) => (
              <div className="w-full flex justify-between">
                <Image
                  width={50}
                  height={50}
                  alt="Product-Image"
                  src={`/assets/cart/image-${product.slug}.jpg`}
                  className="rounded-lg object-cover"
                />

                <div className="sm:mr-[42px]">
                  <h2 className="font-bold">
                    {product.name}
                  </h2>
                  <span className="font-bold opacity-50">
                    {`$ ${product.price.toLocaleString("en-US")}`}
                  </span>
                </div>
                <span className="font-bold opacity-50 mb-6"> {`x ${product.quantity}`} </span>
              </div>

            ))}

            <hr className="w-full h-[1px] bg-black" />

            {viewLess ? (
              <span
                onClick={() => decreaseListProduct()}
                className="
                  text-xs
                  font-bold
                  opacity-50
                  cursor-pointer
                "
              >
                View Less
              </span>
            ) : (
              <span
                onClick={() => expandListProducts()}
                className="
                  text-xs
                  font-bold
                  opacity-50
                  cursor-pointer
                "
              >
                and {localProducts.length - 1} other item{"(s)"}
              </span>
            )}
          </div>

          <div className={`
              sm:w-[198px]
              w-full
              ${viewLess ? "h-auto" : "h-auto"}
              bg-black
              sm:rounded-r-lg
              max-sm:rounded-b-lg
              pl-8
              max-sm:pt-4
              ${viewLess ? "pb-10" : "py-5"}
              flex
              flex-col
              ${viewLess ? "justify-end" : "justify-center"}
            `}
          >
            <h2 className="font-medium text-white opacity-50 uppercase mb-2">
              grand total
            </h2>
            <span className="text-lg text-white font-bold">
              {`$ ${(total + 50).toLocaleString("en-US")}`}
            </span>
          </div>
        </section>
        <LargeButton 
          click={() => {
            router.push("/")
            removeAllProducts()
            window.scrollTo(0, 0)
          }}
         value="Back to home" />
      </div>
    </div>
  )
}

export default Receipt;