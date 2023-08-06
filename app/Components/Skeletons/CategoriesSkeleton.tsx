"use client";

import React from 'react'
import Skeleton from "react-loading-skeleton";
import { CategoriesItems } from "../Categories";

const CategoriesSkeleton = () => {
    return (
        <div className="
            xl:w-[1110px]
            w-full
            h-auto
            mt-[172px]
            flex
            gap-x-8
            max-sm:flex-col
            justify-between
            max-sm:items-center
            max-sm:gap-[5.25rem]
            max-xl:px-4
        "
        >
            {CategoriesItems.map((category) => (
                <div key={category.id} className="w-full h-auto relative">
                    <Skeleton count={1} height={204} />
                </div>
            ))}

        </div>
    )
}

export default CategoriesSkeleton;