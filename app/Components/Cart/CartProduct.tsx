"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { useGlobalContext } from "@/app/Context/store";
import { useLocalStorage } from "usehooks-ts";

const CartProduct: React.FC<LocalProductProps> = ({
    name,
    price,
    quantity,
    slug
}) => {
    const [cartQuantity, setCartQuantity] = useState<number>(quantity);
    const { localData, setLocalData } = useGlobalContext();

    const [storage, setStorage] = useLocalStorage(localData.name, localData);

    useEffect(() => {
        
    }, [])

    return (
        <div
            key={name}
            className="
                flex
                max-small-mobile:flex-col
                small-mobile:justify-between
                small-mobile:items-center
                max-small-mobile:gap-4
                mt-8
            "
        >
            <div className="flex">
                <Image
                    width={64}
                    height={64}
                    alt="Product-Image"
                    src="/assets/cart/image-xx99-mark-two-headphones.jpg"
                    className="rounded-lg"
                />
                <div className="ml-4">
                    <h2 className="uppercase font-bold">
                        {name}
                    </h2>
                    <h3 className="font-bold opacity-50">
                        {`$ ${price}`}
                    </h3>
                </div>
            </div>

            <div className="w-[96px] h-[32px] bg-seashell flex justify-between items-center px-[11px]">
                <span
                    className="
                        text-subTitle
                        opacity-25
                        cursor-pointer
                        duration-300
                        hover:text-raw-sienna
                        hover:opacity-100
                    "
                >
                    -
                </span>

                <p className="text-subTitle">
                    {cartQuantity}
                </p>

                <span
                    onClick={() => {
                        setCartQuantity(cartQuantity + 1)                        
                    }}
                    className="
                        text-subTitle
                        opacity-25
                        cursor-pointer
                        duration-300
                        hover:text-raw-sienna
                        hover:opacity-100
                    "
                >
                    +
                </span>
            </div>
        </div>
    )
}

export default CartProduct;