"use client";
import Image from "next/image";
import React, { useEffect } from 'react';
import useGetLocalStorage from "@/app/hooks/useGetLocalStorage";
import useFetch from "@/app/hooks/useFetch";
import { useGlobalContext } from "@/app/Context/store";
import Button from "../Button";

interface CartProps { activeCart: boolean };

export let productKeys: string[] = [];

const Cart: React.FC<CartProps> = ({ activeCart }) => {
    const {data, request} = useFetch();
    const { getLocalStorage } = useGetLocalStorage();
    const { 
        quantityProducts,
        setQuantityProducts,
        empty,
        setEmpty,
    } = useGlobalContext();

    useEffect(() => { request(`/Api/products`) }, []);
    productKeys = data.map((product: any) => product.key);

    const updateCart = () => {
        let currentProducts: object[] = [];

        productKeys.map((key) => {
          if(getLocalStorage(key)) {
            currentProducts.push(getLocalStorage(key));
            setQuantityProducts(currentProducts.length)
            setEmpty(false)
          }
        });
    };

    const removeAllProducts = () => {
        setEmpty(true);
        productKeys.map((key) => {
            if(getLocalStorage(key)) {
                localStorage.removeItem(key)
            }
        })
    }

    useEffect(() => { updateCart() }, [updateCart, empty]);

    if (activeCart) {
        return (
            <section 
                id="cart-menu"
                className={`
                    mobile:w-[377px]
                    w-full
                    ${empty ? "h-[300px]" : "h-auto"}
                    rounded-lg
                    bg-white
                    absolute
                    lg:top-[6rem]
                    sm:top-[5.5rem]
                    sm:right-0
                    z-[100]
                    flex
                    flex-col
                    items-center
                `}
                
            >
                <section className="sm:w-[313px] w-full h-auto max-sm:px-4">
                    <div className="flex max-small-mobile:flex-col justify-between mt-8">
                        <h2 className="
                                uppercase
                                text-lg
                            "
                        >
                            Cart 
                            <span>{!empty ? `(${quantityProducts})` : ""}</span>
                        </h2>
                        {!empty && (
                            <span
                                onClick={() => removeAllProducts()} 
                                className="
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
                        )}
                    </div>

                    {productKeys.map((key) => getLocalStorage(key) && (
                        <div 
                            key={key}
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
                                        {getLocalStorage(key).name}
                                    </h2>
                                    <h3 className="font-bold opacity-50">
                                        {`$ ${getLocalStorage(key)?.price}`}
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
                    ))}

                    {empty && (
                        <div className="mt-8 w-full h-full flex justify-center items-center text-center">
                            <h1 className="text-lg opacity-50">
                                Your cart is empty.
                            </h1>
                        </div>
                    )}


                    {!empty && (
                        <div>
                            <div className="flex justify-between mt-8 mb-6">
                                <h2 className="uppercase opacity-50">
                                    Total
                                </h2>
                                <span className="text-lg">
                                    $ 5,396
                                </span>
                            </div>

                            <div className="mb-8">
                                <Button 
                                    type={5}
                                    value="checkout"
                                />
                            </div>
                        </div>
                    )}
                </section>
            </section>
        )
    } else ""
}

export default Cart;