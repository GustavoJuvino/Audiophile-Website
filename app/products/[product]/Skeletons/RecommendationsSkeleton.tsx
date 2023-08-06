import React from 'react'
import Skeleton from "react-loading-skeleton";

const RecomSkeleton = () => {
  return (
    <div className="flex flex-col items-center w-full md:mt-[160px] sm:mt-[120px] mt-[88px]">
      <div className="w-full">
        <Skeleton count={1} height={318} />
      </div>
    </div>
  )
}

export default RecomSkeleton;