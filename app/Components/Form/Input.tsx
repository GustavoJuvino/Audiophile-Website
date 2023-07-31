"use client";
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FieldError, useFormContext } from "react-hook-form";
import useClickOutside from "@/app/hooks/useClickOutside";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    error?: FieldError
}

export function Input({name, error, ...props}: InputProps) {
    const [selected, setSelected] = useState(false);
    const inputRef = useRef(null);
    const { register } = useFormContext();
    const { clickOutside } = useClickOutside();

    useEffect(() => {
        if(inputRef) clickOutside(inputRef, setSelected)
    }, []);

    return (
        <div ref={inputRef}>
            <input
                id={name}
                {...register(name)} 
                {...props}
                onClick={() => setSelected(true)}
                className={twMerge(`
                        xl:w-[309px]
                        lg:w-auto
                        md:w-[309px]
                        max-sm:w-[280px]
                        max-small-mobile:w-[180px]
                        h-14
                        pl-6
                        border-[1px]
                        rounded-lg
                        outline-none
                        text-black
                        font-bold
                        duration-300
                        ${selected ? "border-raw-sienna" : "border-[#CFCFCF]"}
                        ${error && "border-2 border-red-600"} */}
                    `, props.className)
                }
            />
        </div>
    )
}