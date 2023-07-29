import { HTMLAttributes } from "react";

export function Legend({...props}: HTMLAttributes<HTMLLegendElement>) {
    return (
        <legend 
            {...props}
            className="
                font-bold
                max-sm:text-[13px]
                mb-4
                uppercase
                tracking-[0.93px]
                text-raw-sienna
            "
        />
    )
}