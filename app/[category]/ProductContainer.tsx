import Image from "next/image";
import React from 'react';
import Button from "../Components/Button";

export interface ProductContainerProps {
    newProduct?: boolean;
    name: string;
    description: string;
    src: string;
    srcMobile: string;
    reverse?: boolean;
}

const ProductContainer: React.FC<ProductContainerProps> = ({
    newProduct,
    name,
    description,
    src,
    srcMobile,
    reverse
}) => {
  return (
    <div className={`
            xl:w-[1110px]
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
            <h1 className="sm:text-5xl text-2xl uppercase mt-4 mb-8 max-lg:sm:px-5">
                {name}
            </h1>
            <p className="opacity-50 mb-10">
                {description}
            </p>
            <Button type={1} value="see product" />
        </div>
    </div>
  )
}

export default ProductContainer;