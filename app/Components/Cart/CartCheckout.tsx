"use client";
import React from 'react';
import { useGlobalContext } from "@/app/Context/store";
import LargeButton from "../Buttons/LargeButton";

const CartCheckout = () => {
    const { total } = useGlobalContext();
    
    return (
        <div>
            <div className="flex justify-between mt-8 mb-6">
                <h2 className="uppercase opacity-50">
                    Total
                </h2>
                <span className="text-lg">
                    {`$ ${total ? total.toLocaleString("en-US") : 0}`}
                </span>
            </div>

            <div className="mb-8">
                <LargeButton value="checkout"/>
            </div>
        </div>
    )
}

export default CartCheckout;