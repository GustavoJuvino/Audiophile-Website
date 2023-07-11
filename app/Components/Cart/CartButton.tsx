"use client";
import React, { useState } from 'react'
import { useLocalStorage } from "usehooks-ts";
import Button from "../Button";

const CartButton = () => {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useLocalStorage("quantity", count)

  return (
    <div className="small-mobile:w-[296px] h-auto flex justify-between">
      <div className="w-[120px] flex justify-around items-center font-bold bg-seashell">
      <span 
          onClick={() => {
            setCount(count > 0 ? count - 1 : count )
          }}
          className="
            cursor-pointer
            opacity-25
            duration-300
            hover:text-raw-sienna
            hover:opacity-100
          "
        >
          -
        </span>
        <p>
          {count}
        </p>
        <span 
          onClick={() => {
            setCount(count + 1)
          }}
          className="
            cursor-pointer
            opacity-25
            duration-300
            hover:text-raw-sienna
            hover:opacity-100
          "
        >
          + 
        </span>
      </div>

      <Button click={() => setQuantity(count)} type={1} value="add to cart" />
    </div>
  )
}

export default CartButton;