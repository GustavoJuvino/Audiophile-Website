"use client";
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import useClickOutside from "@/app/hooks/useClickOutside";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

export function Input({ name, ...props}: InputProps) {
    const [selected, setSelected] = useState(false);
    const inputRef = useRef(null);
    const { clickOutside } = useClickOutside();

    useEffect(() => {
        if(inputRef) clickOutside(inputRef, setSelected)
    }, [])

    return (
        <input
            {...props}
            id={name}
            ref={inputRef}
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
                `, props.className)
            }
        />
    )
}