import React from 'react'
import Skeleton from "react-loading-skeleton"

const ProductSkeleton = () => {

  return (
    <div className="
        w-full
        xl:h-[560px]
        h-full
        flex
        max-md:flex-col
        justify-between
      "
    >
      <div className="
          lg:w-[540px]
          md:w-[281px]
          w-full
          lg:h-[560px]
          md:h-[480px]
          h-[500px]
        "
      >

        <Skeleton
          count={1}
          height={560}
        />
      </div>
      <div className="
          md:w-[40%]
          mobile:w-[327px]
          h-auto
          max-lg:mt-8    
          max-md:mt-[100px]
          flex
          flex-col
          gap-y-8
        "
      >
        <Skeleton count={2} width={286} height={40} />
        <Skeleton count={4} />
        <Skeleton count={1} width={73} height={25} />

        <div className="flex justify-between w-[296px]">
          <Skeleton count={1} width={120} height={48} />
          <Skeleton count={1} width={160} height={48} />
        </div>
      </div>
    </div>
  )

  {/* 
    return (
        <section>
          <div className="w-full h-[560px] flex max-md:flex-col justify-between">
            <div className="
                lg:w-[540px]
                md:w-[281px]
                w-full
                lg:h-[560px]
                md:h-[480px]
                h-[500px]
              "
            >

              <Skeleton
                count={1}
                height={560}
              />

            </div>

            <div className="w-[445px] flex flex-col gap-8">
              <Skeleton count={2} width={286} height={40} />

              <Skeleton count={4} width={380} />

              <Skeleton count={1} width={73} height={25} />

              <div className="flex justify-between w-[296px]">
                <Skeleton count={1} width={120} height={48} />
                <Skeleton count={1} width={160} height={48} />
              </div>
            </div>
          </div>
        </section>
      )
  */}

}

export default ProductSkeleton;