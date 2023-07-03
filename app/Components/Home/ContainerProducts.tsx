import React from 'react';
import ZX9_Speaker from "./Products/ZX9_Speaker";
import ZX7_Speaker from "./Products/ZX7_Speaker";
import YX1_Earphones from "./Products/YX1_Earphones";

const ContainerProducts = () => {
  return (
    <section className="
        xl:w-[1110px]
        w-full
        h-auto
        flex
        flex-col
        gap-12
        lg:mt-[10.5rem]
        mt-24
        mb-[12.5rem]
        max-xl:sm:px-8
        max-sm:px-4
      "
      >
        <ZX9_Speaker />
        <ZX7_Speaker />
        <YX1_Earphones />
    </section>
  )
}

export default ContainerProducts;