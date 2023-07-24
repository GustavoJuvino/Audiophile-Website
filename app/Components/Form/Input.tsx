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
    }, [])

    return (
        <div className="flex flex-col relative" ref={inputRef}>
            {error && (
                <span className="absolute top-[-1.7rem] right-0 text-xs font-medium text-red-500">
                    {error.message}
                </span>
            )}

            <input
                id={name}
                {...register(name)} 
                {...props}
                onClick={() => setSelected(true)}
                className={twMerge(`
                        w-[309px]
                        h-14
                        border-[1px]
                        pl-6
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