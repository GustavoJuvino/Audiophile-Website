"use client";

import React, { useEffect } from 'react';
import LargeButton from "../Components/Buttons/LargeButton";
import { useGlobalContext } from "@/app/Context/store";
import Image from "next/image";

const Summary = () => {
  const { localProducts, total, setTotal } = useGlobalContext();

  let result: number[] = [];
  localProducts.map((p) => {
    result.push(p.price * p.quantity)
  })

  useEffect(() => {
    setTotal(
      result.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0)
    )
  }, [result]);


  return (
    <section className="
          lg:w-[350px]
          md:w-[689px]
          w-full
          lg:ml-[30px]
          max-lg:mt-8
          h-full
          rounded-l
        bg-white
        "
      >
      <div className="mobile:px-[33px] px-2 pb-8">
        <h1 className="text-lg uppercase mt-8">
          summary
        </h1>
        <section className="mt-8 flex flex-col gap-y-6">
          {localProducts.map((product) => (
            <div
              key={product.slug}
              className="w-full h-16 flex justify-between items-center"
            >
              <div className="flex items-center gap-x-4">
                <Image
                  width={64}
                  height={64}
                  alt="Product-Icon"
                  src={`/assets/cart/image-${product.slug}.jpg`}
                  className="w-auto h-auto rounded-lg"
                />
                <div>
                  <h2 className="font-bold">
                    {product.name}
                  </h2>
                  <span className="text-sm font-bold opacity-50">
                    {`$ ${product.price.toLocaleString("en-US")}`}
                  </span>
                </div>
              </div>

              <span className="font-bold opacity-50"> {`x${product.quantity}`} </span>
            </div>
          ))}
        </section>

        <div className="flex justify-between my-8">
          <div className="font-medium opacity-50 uppercase flex flex-col gap-y-2">
            <h2>total</h2>
            <h2>shipping</h2>
            <h2>vat {"(included)"}</h2>
            <h2 className="mt-6">
              {total > 0 && "grand total"}
            </h2>
          </div>

          <div className="flex flex-col items-end gap-y-2 text-lg">
            <span>{`$ ${total ? total.toLocaleString("en-US") : 0}`}</span>
            <span>$ 50</span>
            <span>$ 1,079</span>
            <span className="mt-6 text-raw-sienna">
              {total > 0 && `$ ${(total + 50).toLocaleString("en-US")}`}
            </span>
          </div>
        </div>

        <LargeButton
          click={() => window.scrollTo(0, 0)}
          value="continue & pay"
          type="submit"
        />
      </div>
    </section>
  )
}

export default Summary;