"use client";
import React, { useEffect } from 'react';
import CartProduct from "./CartProduct";
import CartCheckout from "./CartCheckout";
import useFetch from "@/app/hooks/useFetch";
import { useGlobalContext } from "@/app/Context/store";
import useGetLocalStorage from "@/app/hooks/useGetLocalStorage";
import useRemoveAllProducts from "@/app/hooks/useRemoveAllProducts";

interface CartProps { activeCart: boolean };

export let productKeys: string[] = [];
export let filteredArrays: LocalProductProps[] = [];

const Cart: React.FC<CartProps> = ({ activeCart }) => {
    const { data, request } = useFetch();
    const { removeAllProducts } = useRemoveAllProducts();
    const { getLocalStorage } = useGetLocalStorage();
    const {
        total,
        setLocalProducts,
        quantityCart,
        setQuantityCart,
        empty,
        setEmpty,
    } = useGlobalContext();


    useEffect(() => { request(`/Api/products`) }, []);
    productKeys = data.map((product: any) => product.key);

    useEffect(() => {
        setLocalProducts(productKeys.map((key) => getLocalStorage(key)).filter(e => e !== undefined));
    }, [quantityCart, total])

    const updateCart = () => {
        let currentProducts: object[] = [];
        productKeys.map((key) => {
            if (getLocalStorage(key)) {
                currentProducts.push(getLocalStorage(key));
                setQuantityCart(currentProducts.length)
                setEmpty(false)
            }
        });
    };


    useEffect(() => { updateCart() }, [updateCart, empty, quantityCart]);

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

                    {productKeys.map((key) => getLocalStorage(key) && (
                        <CartProduct 
                            key={getLocalStorage(key).slug}
                            name={getLocalStorage(key).name}
                            slug={getLocalStorage(key).slug}
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
                        <CartCheckout />
                    )}
                </section>
            </section>
        )
    } else ""
}

export default Cart;