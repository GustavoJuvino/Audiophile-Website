import { LabelHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    error?: FieldError
}


export function Label({error, ...props}: LabelProps) {
    return (
        <div className="flex justify-between">
            <label 
                className={`sm:text-[14px] text-[12px] font-bold relative ${error && "text-red-500"}`}
                {...props}
            />
            {error && (
                <span className="text-xs font-medium text-red-500">
                    {error.message}
                </span>
            )}
        </div>
    )
}