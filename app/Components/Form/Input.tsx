import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

export function Input(props: InputProps) {
    return (
        <input 
            id={props.name}
            className="
                w-[310px]
                h-14
                border-[1px]
                pl-6
                border-[#CFCFCF]
                rounded-lg
                outline-none
                text-black
                font-bold
            "
            {...props}
        />
    )
}