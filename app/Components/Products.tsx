import React from 'react';
import Image from "next/image";
import Button from "./Button";

const ProductsItems = [
  {
    id: 1,
    product: "headphones"
  },
  {
    id: 2,
    product: "speakers"
  },
  {
    id: 3,
    product: "earphones"
  },
]

const Products = () => {
  return (
    <section className="
        xl:w-[1110px]
        w-full
        h-auto
        lg:mt-[7.5rem]
        sm:mt-24
        mt-28
        mb-[7.5rem]
        flex
        max-sm:flex-col
        justify-between
        max-sm:items-center
        max-sm:gap-[5.25rem]
        max-xl:px-4
      "
    >
      {ProductsItems.map((item) =>
        <div 
          key={item.id}
          className="
            sm:w-[350px]
            w-full
            h-[200px]
            rounded-lg
            bg-seashell
            flex
            flex-col
            items-center
            justify-center
            relative
            max-xl:mx-4
          "
        >
          <Image
            width={126}
            height={126}
            alt="Product"
            src={`/assets/shared/image-category-thumbnail-${item.product}.png`}
            className="w-auto h-36 absolute top-[-4rem]"
          />
          <div className="mt-16 flex flex-col items-center">
            <h3 className="text-lg uppercase">
              {item.product}
            </h3>
            <Button type={3} value="shop" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Products;