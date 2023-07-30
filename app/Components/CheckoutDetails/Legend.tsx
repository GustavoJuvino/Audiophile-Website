import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Legend({...props}: HTMLAttributes<HTMLLegendElement>) {
    return (
        <legend 
            {...props}
            className={twMerge(`
                font-bold
                max-sm:text-[13px]
                mb-4
                uppercase
                tracking-[0.93px]
                text-raw-sienna
            `, props.className)} 
        />
    )
}