import React from 'react';
import { CategoriesItems } from "../Categories";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ShopButton from "../Buttons/ShopButton";

const MobileCategories = () => {
    const router = useRouter();

    return (
        <section className="
                w-full
                h-auto
                flex
                items-center
                px-10
                sm:pt-14
                pt-[89px]
            "
        >
            <div className="
                    w-full
                    h-[212px]
                    flex
                    max-sm:flex-col
                    justify-between
                    sm:gap-x-[10px]
                    gap-y-[5rem]
                    items-center
                    sm:[&>*:nth-child(2)]:pt-2
                    sm:[&>*:nth-child(3)]:pt-5
                "
            >
                {CategoriesItems.map((category) => (
                    <div 
                        key={category.id}
                        className="
                                sm:w-[223px]
                                w-full
                                mobile:w-[327px]
                                h-[165px]
                                flex
                                flex-col
                                items-center
                                justify-center
                                gap-y-9
                                bg-seashell
                                rounded-lg
                                relative
                            "
                        >
                        <Image
                            width={100}
                            height={100}
                            alt="Product"
                            src={`/assets/shared/image-category-thumbnail-${category.product}.png`}
                            className="w-[80px] h-auto absolute top-[-3.5rem]"

                        />
                        <div className="sm:mt-9 mt-14 flex flex-col items-center">
                            <h3 className="sm:text-lg text-[15px] font-bold uppercase">
                                {category.product}
                            </h3>
                            <ShopButton
                                click={() => router.push(`/${category.product}`)}
                                value="shop"
                            />
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default MobileCategories