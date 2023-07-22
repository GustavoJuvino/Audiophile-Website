import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {};

export function Wrapper({...props}: WrapperProps) {
    return (
        <div 
            {...props}
            className={twMerge("flex gap-x-4 gap-y-6 flex-wrap", props.className)}
        />
    )
}