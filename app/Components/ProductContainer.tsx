"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import CartButton from "./Cart/CartButton";
import DefaultButton from "./Buttons/DefaultButton";

interface ProductContainerProps {
    newProduct?: boolean;
    name: string;
    description: string;
    price?: number;
    src: string;
    srcMobile: string;
    reverse?: boolean;
    cart?: boolean;
    slug: string;
}

const ProductContainer: React.FC<ProductContainerProps> = ({
    newProduct,
    name,
    description,
    price,
    src,
    srcMobile,
    reverse,
    cart,
    slug
}) => {
    const router = useRouter();

    return (
        <div className={`
            w-full
            xl:h-[560px]
            h-full
            flex
            ${reverse && "flex-row-reverse"}
            ${cart ? "lg:justify-between md:gap-[70px] max-md:flex-col"
                : "justify-between items-center max-lg:flex-col"}
        `}
        >
            <Image
                id="main-product-image"
                priority
                width={540}
                height={560}
                alt={`${name} Image`}
                src={src}
                className="max-lg:hidden"
            />

            <Image
                id="product-image"
                priority
                width={540}
                height={352}
                alt={`${name} Mobile Image`}
                src={srcMobile}
                className={`
                lg:hidden
                object-cover
                ${cart ? "md:w-[281px] md:h-[480px]" : "w-[689px] h-[352px]"}
            `}
            />

            <div className={`
                lg:w-[40%]
                h-auto
                max-lg:mt-8
                ${cart ? "md:w-[40%] mobile:w-[327px]"
                    : "sm:w-[65%] max-lg:text-center"}     
            `}
            >
                {newProduct &&
                    <span className="text-overline uppercase text-raw-sienna">
                        new product
                    </span>
                }
                <h1 className={`
                    sm:text-5xl
                    text-2xl
                    uppercase
                    mt-4
                    mb-8
                    lg:pr-[170px]
                    ${!cart && "max-lg:sm:pr-5"}
                `}
                >
                    {name}
                </h1>
                <p className="opacity-50 mb-10">
                    {description}
                </p>

                <div className={`flex flex-col gap-12 ${!cart && "max-lg:items-center"}`}>
                    {price &&
                        <span className="text-lg">{`$ ${price.toLocaleString("en-US")}`}</span>
                    }

                    {cart ? (
                        <CartButton />
                    ) : <DefaultButton
                        click={() => router.push(`products/${slug}`)}
                        value="see product"
                    />
                    }
                </div>

            </div>
        </div>
    )

}

export default ProductContainer;