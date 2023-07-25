import React from 'react';
import { IconRight } from "@/public/assets/svgs";
import { ButtonProps } from "@/app/types/types";

const ShopButton: React.FC<ButtonProps> = ({
    value,
    click
}) => {
  return (
    <button
        onClick={click}
        className="
                w-auto
                h-12
                uppercase
                text-subTitle
                text-black
                opacity-50
                duration-300
                hover:text-raw-sienna
                hover:opacity-100
            "
        >
            <span className="flex items-center">
                {value}
                <IconRight className="ml-3" />
            </span>
        </button>
  )
}

export default ShopButton;