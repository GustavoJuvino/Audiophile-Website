import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Section(props: HTMLAttributes<HTMLElement>){
    return (
        <section 
            {...props} 
            className={twMerge("mt-10", props.className)}
        />
    )
}