"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { useGlobalContext } from "@/app/Context/store";
import { useLocalStorage } from "usehooks-ts";
import useGetLocalStorage from "@/app/hooks/useGetLocalStorage";

let newLocalData: LocalProductProps & {quantity: number}

const CartProduct: React.FC<LocalProductProps> = ({
    name,
    price,
    quantity,
}) => {
    const [cartQuantity, setCartQuantity] = useState<number>(quantity);
    const { getLocalStorage } = useGetLocalStorage();
    const { setEmpty } = useGlobalContext();

    const [storage, setStorage] = useLocalStorage(name, newLocalData);

    useEffect(() => {
        newLocalData = Object.assign(getLocalStorage(name), {quantity: cartQuantity})
        setStorage(newLocalData);

        // else {
        //     localStorage.removeItem(name);
        //     setEmpty(true);
        // }
    }, [cartQuantity, setCartQuantity])

    if (cartQuantity) {
        return (
            <div className="
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
                        onClick={() => setCartQuantity(cartQuantity >=1 ? cartQuantity - 1 : 0)}
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
}

export default CartProduct;