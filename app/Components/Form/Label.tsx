import { LabelHTMLAttributes } from "react";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
    return (
        <label 
            className="text-[14px] font-bold"
            {...props}
        />
    )
}