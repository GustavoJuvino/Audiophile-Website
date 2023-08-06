import React from 'react'
import Skeleton from "react-loading-skeleton"

const FeaturesSkeleton = () => {
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
                <Skeleton count={1} width={172} height={36} />

                <div className="mt-8 md:w-[550px]">
                    <Skeleton count={4}  />
                </div>

                <div className="mt-8 md:w-[550px]">
                    <Skeleton count={5} />
                </div>

            </div>

            <div className="
                lg:w-[350px]
                md:w-[549px]
                w-auto
                max-lg:sm:flex
                justify-between
            "
            >
                <Skeleton count={1} width={184} height={35} />

                <div className="mt-8">
                    <Skeleton count={5} width={154} className="mt-2"/>
                </div>
            </div>

    </div>
  )
}

export default FeaturesSkeleton