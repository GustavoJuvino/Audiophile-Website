import Image from "next/image";
import React from 'react';
import Button from "./Button";
import CartButton from "./Cart/CartButton";

export interface ProductContainerProps {
    newProduct?: boolean;
    name: string;
    description: string;
    price?: number;
    src: string;
    srcMobile: string;
    reverse?: boolean;
    cart?: boolean;
}

const ProductContainer: React.FC<ProductContainerProps> = ({
    newProduct,
    name,
    description,
    price,
    src,
    srcMobile,
    reverse,
    cart
}) => {
  return (
    <div className={`
            w-full
            xl:h-[560px]
            h-full
            flex
            max-lg:flex-col
            justify-between
            items-center
            ${reverse && "flex-row-reverse"}
        `}    
    >
        <Image 
            priority
            width={540}
            height={560}
            alt={`${name} Image`}
            src={src}
            className="max-lg:hidden"
        />

         <Image 
            priority
            width={540}
            height={352}
            alt={`${name} Mobile Image`}
            src={srcMobile}
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
            {newProduct && 
                <span className="text-overline uppercase text-raw-sienna">
                    new product
                </span>
            }
            <h1 className="
                    sm:text-5xl
                    text-2xl
                    uppercase
                    mt-4
                    mb-8
                    lg:pr-[170px]
                    max-lg:sm:px-5
                "
            >
                {name}
            </h1>
            <p className="opacity-50 mb-10">
                {description}
            </p>

            <div className="flex flex-col gap-12">
                {price && 
                    <span className="text-lg">{`$ ${price.toLocaleString("en-US")}`}</span>
                }

                {cart ? (
                    <CartButton />
                ) : <Button type={1} value="see product" /> }
            </div>
            
        </div>
    </div>
  )
}

export default ProductContainer;