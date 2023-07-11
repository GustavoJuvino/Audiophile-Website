import { IconRight } from "@/public/assets/svgs";
import React from 'react'

type ButtonTypes = 1 | 2 | 3 | 4 | 5

interface ButtonProps {
    type: ButtonTypes,
    value: string;
    click?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
    type,
    value,
    click
}) => {
    return(
        <button 
            onClick={click}
            className={`
                w-40
                h-12
                text-subTitle
                uppercase
                duration-300
                ${type === 1 && `
                    bg-raw-sienna
                    text-white
                    hover:bg-light-raw-sienna
                `}
                ${type === 2 && `
                    border-[1px]
                    border-black
                    text-black
                    hover:bg-black
                    hover:text-white
                `}
                ${type === 3 && `
                    text-white
                    bg-black
                    hover:bg-[#4C4C4C]
                `}
                ${type === 4 && `
                    w-auto
                    text-black
                    opacity-50
                    hover:text-raw-sienna
                    hover:opacity-100
                `}
                ${type === 5 && `
                    w-full
                    h-[48px]
                    text-center
                    text-white
                    bg-raw-sienna
                    hover:bg-light-raw-sienna
                `}
            `}
        >
            {type === 4 ? 
                <span className="flex items-center">
                    {value}
                    <IconRight className="ml-3" />
                </span>
            : <p>{value}</p>}
        </button>
    )

}

export default Button;