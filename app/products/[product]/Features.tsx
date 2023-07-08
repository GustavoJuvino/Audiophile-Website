import React from 'react';
import { IncludesProps } from "./page";

interface FeaturesProps {
    feature: string;
    includes: IncludesProps[]
}

const Features: React.FC<FeaturesProps> = ({
    feature,
    includes
}) => {
  return (
    <div className="
            w-full
            h-auto
            mt-[10rem]
            flex
            justify-between
        "
    >
        <div className="w-[660px] h-auto">
            <h1 className="text-4xl uppercase">
                Features
            </h1>
            <p className="opacity-50 mt-8 whitespace-pre-wrap">
                {feature}
            </p>
        </div>

        <div className="w-[350px]">
            <h1 className="text-4xl uppercase">
                in the box
            </h1>
            <ul className="mt-8 flex flex-col gap-2">
                {includes.map((item) =>
                    <li
                        key={item.item}
                        className="
                            w-auto
                            h-auto
                            flex
                        "
                    >
                        <span className="text-raw-sienna font-bold">
                            {`${item.quantity}x`}
                        </span>
                        <p className="opacity-50 font-medium pl-6">
                            {item.item}
                        </p>
                    </li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Features;