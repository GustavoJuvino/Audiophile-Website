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
            max-lg:flex-col
            max-lg:sm:gap-[7.5rem]
            gap-[5.5rem]
            justify-between
        "
    >
        <div className="md:w-[660px] w-full h-auto">
            <h1 className="text-4xl uppercase">
                Features
            </h1>
            <p className="opacity-50 mt-8 whitespace-pre-wrap">
                {feature}
            </p>
        </div>

        <div className="
                lg:w-[350px]
                md:w-[549px]
                w-full
                max-lg:sm:flex
                justify-between
            "
        >
            <h1 className="text-4xl uppercase">
                in the box
            </h1>
            <ul className="lg:mt-8 max-sm:mt-6 flex flex-col gap-2">
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