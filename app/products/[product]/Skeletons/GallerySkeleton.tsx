import React from 'react'
import Skeleton from "react-loading-skeleton"

const GallerySkeleton = () => {
    return (
        <div className="
                w-full
                xl:h-[592px]
                flex
                items-center
                max-sm:flex-col
                sm:gap-[30px]
                gap-5
                lg:mt-[10rem]
                sm:mt-[7.5rem]
                mt-[5.5rem]
            "
        >
            <div className="md:w-[445px] sm:w-[227px] w-[327px] flex flex-col gap-8">
                <Skeleton count={1} height={280} />
                <Skeleton count={1} height={280} />
            </div>

            <div className="md:w-[635px] sm:w-[395px] w-[327px] ">
                <Skeleton count={1} height={592} />
            </div>
        </div>
    )
}

export default GallerySkeleton