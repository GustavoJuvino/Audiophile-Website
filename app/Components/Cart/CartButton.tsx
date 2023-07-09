import React from 'react'
import Button from "../Button";

const CartButton = () => {
  return (
    <div className="small-mobile:w-[296px] h-auto flex justify-between">
      <div className="w-[120px] flex justify-around items-center font-bold bg-seashell">
        <span className="cursor-pointer opacity-25 duration-300 hover:text-raw-sienna hover:opacity-100">
          - 
        </span>
        <p>
          1
        </p>
        <span className="cursor-pointer opacity-25 duration-300 hover:text-raw-sienna hover:opacity-100">
          + 
        </span>
      </div>

      <Button type={1} value="add to cart" />
    </div>
  )
}

export default CartButton;