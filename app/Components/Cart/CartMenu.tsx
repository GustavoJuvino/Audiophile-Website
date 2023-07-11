"use client";
import Image from "next/image";
import React, { useRef } from 'react';
import Button from "../Button";

interface CartProps {
    activeCart: boolean;
}

const Cart: React.FC<CartProps> = ({ activeCart }) => {

    if (activeCart) {
        return (
            <section 
                className="
                    w-[377px]
                    h-[488px]
                    rounded-lg
                    bg-white
                    absolute
                    right-0
                    top-[6rem]
                    z-50
                    flex
                    flex-col
                    items-center
                "
            >
                <section className="w-[313px] h-auto">
                    <div className="flex justify-between mt-8">
                        <h2 className="
                                uppercase
                                text-lg
                            "
                        >
                            Cart <span>{"(3)"}</span>
                        </h2>
                        <span className="
                                font-medium
                                opacity-50
                                cursor-pointer
                                duration-300
                                hover:underline
                                hover:text-raw-sienna
                            "
                        >
                            Remove All
                        </span>
                    </div>

                    <div className="flex justify-between items-center mt-8">
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
                                    xx99 mk ii
                                </h2>
                                <h3 className="font-bold opacity-50">
                                    $ 2,999
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
                                1
                            </p>

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
                                +
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-between mt-8 mb-6">
                        <h2 className="uppercase opacity-50">
                            Total
                        </h2>
                        <span className="text-lg">
                            $ 5,396
                        </span>
                    </div>

                    <Button type={5} value="checkout" />
                </section>
            </section>
        )
    } else ""
}

export default Cart;