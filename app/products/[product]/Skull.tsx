import React from 'react'
import Skeleton from "react-loading-skeleton"

const Skull = () => {
  return (
    <section>
      <div className="w-full h-[560px] flex justify-between">
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

      <section className="mt-40 w-full h-auto flex justify-between">
        <div className="w-[635px]">
          <Skeleton count={1} height={36} width={172} />

          <div className="mt-8">
            <Skeleton count={4} width={635} />
          </div>

          <div className="mt-8">
            <Skeleton count={5} width={635} />
          </div>
        </div>

        <div className="w-[350px]">
          <Skeleton count={1} height={36} width={184} />

          <div className="mt-8">
            <Skeleton count={5} width={154} />
          </div>
        </div>


      </section>
      Skull
    </section>
  )
}

export default Skull