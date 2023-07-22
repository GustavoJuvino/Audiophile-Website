"use client";
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import useClickOutside from "@/app/hooks/useClickOutside";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

export function Input(props: InputProps) {
    const [selected, setSelected] = useState(false);
    const inputRef = useRef(null);
    const { register } = useFormContext();
    const { clickOutside } = useClickOutside();

    useEffect(() => {
        if(inputRef) clickOutside(inputRef, setSelected)
    }, [])

    return (
        <input
            id={props.name}
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
            {...register(props.name)} 
            {...props}
            ref={inputRef}
        />
    )
}