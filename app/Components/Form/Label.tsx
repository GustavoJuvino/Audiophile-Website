import { LabelHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    error?: FieldError
}


export function Label({error, ...props}: LabelProps) {
    return (
        <div>
            <label 
                className={`text-[14px] font-bold ${error && "text-red-500"}`}
                {...props}
            />
        </div>
    )
}