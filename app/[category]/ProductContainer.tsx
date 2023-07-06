import Image from "next/image";
import React from 'react';
import Button from "../Components/Button";

interface ProductContainerProps {
    new?: boolean;
    title: string;
    description: string;
    src: string;
    reverse?: boolean;
}

const ProductContainer = () => {
  return (
    <div className="
            xl:w-[1110px]
            w-full
            xl:h-[560px]
            h-full
            flex
            max-lg:flex-col
            justify-between
            items-center
        "
    >
        <Image 
            priority
            width={540}
            height={560}
            alt="Product-Image"
            src="/assets/products/xx99-mark-two-headphones/desktop/image-product.jpg"
            className="max-lg:hidden"
        />

         <Image 
            priority
            width={540}
            height={352}
            alt="Product-Image"
            src="/assets/products/xx99-mark-two-headphones/mobile/image-product.jpg"
            className="lg:hidden w-[689px] h-[352px] object-cover"
        />

        <div className="
                lg:w-[40%]
                sm:w-[65%]
                h-auto
                max-lg:mt-[3.25rem]
                max-lg:text-center
            "
        >
            <span className="text-overline uppercase text-raw-sienna">
                new product
            </span>
            <h1 className="sm:text-5xl text-2xl uppercase mt-4 mb-8 max-lg:sm:px-5">
                xx99 mark ii headphones
            </h1>
            <p className="opacity-50 mb-10">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience
                by reproducing the balanced depth and precision of studio-quality
                sound.
            </p>
            <Button type={1} value="see product" />
        </div>
    </div>
  )
}

export default ProductContainer;