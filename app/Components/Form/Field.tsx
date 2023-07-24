import { HTMLAttributes } from "react";

interface FieldProps extends HTMLAttributes<HTMLFieldSetElement> {};

export function Field(props: FieldProps) {
    return (
        <fieldset className="flex flex-col gap-[10px]" {...props} />
    )
}