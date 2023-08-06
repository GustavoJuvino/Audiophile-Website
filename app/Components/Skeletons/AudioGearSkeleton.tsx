import React from 'react'
import Skeleton from "react-loading-skeleton";

const AudioGearSkeleton = () => {
  return (
    <div className="
                xl:w-[1110px]
                w-full
                lg:h-[588px]
                h-auto
                flex
                max-lg:flex-col-reverse
                justify-between
                items-center
                mt-[160px]
                max-xl:sm:px-8
                max-sm:px-4
            "
        >
            <div className="lg:w-[45%] sm:w-[68%] lg:pr-4 max-lg:mt-16 flex flex-col max-lg:items-center">
                <div className="w-[388px]">
                    <Skeleton count={2} />
                </div>

                <div className="w-full mt-8">
                    <Skeleton count={7} />
                </div>
            </div>

            <div className="lg:w-[540px] w-full">
                <Skeleton count={1} className="lg:h-[588px] h-[300px]" />
            </div>
        </div>
  )
}

export default AudioGearSkeleton;