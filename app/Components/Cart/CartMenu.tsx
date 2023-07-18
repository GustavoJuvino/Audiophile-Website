"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from 'react';
import useGetLocalStorage from "@/app/hooks/useGetLocalStorage";
import useFetch from "@/app/hooks/useFetch";
import { useGlobalContext } from "@/app/Context/store";
import Button from "../Button";
import { useLocalStorage } from "usehooks-ts";
import { usePathname } from "next/navigation";
import CartProduct from "./CartProduct";

interface CartProps { activeCart: boolean };

interface LocalProducts {
    key: string;
    slug: string;
    price: number;
}

export let productKeys: string[] = [];
let qnt: number[] = [];

const Cart: React.FC<CartProps> = ({ activeCart }) => {
    const { data, request } = useFetch();
    const { getLocalStorage } = useGetLocalStorage();
    const {
        quantityCart,
        setQuantityCart,
        empty,
        setEmpty,
    } = useGlobalContext();

    const [count, setCount] = useState(0);
    const [localData, setLocalData] = useState({
        name: "",
        slug: "",
        price: 0,
        quantity: count
    });

    // Local Storage
    const [storage, setStorage] = useLocalStorage(localData.name, localData);

    useEffect(() => { request(`/Api/products`) }, []);
    productKeys = data.map((product: any) => product.key);

    const [quantity, setQuantity]= useState(0)
    qnt = productKeys.map((key) => getLocalStorage(key) && getLocalStorage(key).quantity)
    let newQnt = qnt?.filter(e => e !== undefined)



    const updateCart = () => {
        let currentProducts: object[] = [];

        productKeys.map((key) => {
            if (getLocalStorage(key)) {
                currentProducts.push(getLocalStorage(key));
                setQuantityCart(currentProducts.length)
                setQuantity(getLocalStorage(key).quantity)
                setEmpty(false)
            }
        });
    };

    const removeAllProducts = () => {
        setEmpty(true);
        productKeys.map((key) => {
            if (getLocalStorage(key)) {
                localStorage.removeItem(key)
            }
        })
    }

    useEffect(() => { 
        updateCart()
     }, [updateCart, empty]);

    useEffect(() => { 
            if(count) {
                setStorage(localData)
            }
    }, [count]);

    function test(value: any) {
        setLocalData({
            name: value.name,
            slug: value.slug,
            price: value.price,
            quantity: count
        })
    }
    

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
                            <span>{!empty ? `(${quantityCart})` : ""}</span>
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

                    {!empty && productKeys.map((key) => getLocalStorage(key) && (
                        <CartProduct 
                            name={getLocalStorage(key).name}
                            price={getLocalStorage(key).price}
                            quantity={getLocalStorage(key).quantity}
                        />
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