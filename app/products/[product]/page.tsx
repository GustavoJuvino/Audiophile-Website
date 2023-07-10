"use client";
import ProductContainer from "@/app/Components/ProductContainer";
import Features from "./Features";
import Gallery from "./Gallery";
import { ProductProps } from "@/app/[category]/page";
import { useRouter } from "next/navigation";
import getData from "@/app/Helper/getData";
import Recommendations from "./Recommendations";

const products = [
    "xx99-mark-two-headphones",
    "xx99-mark-one-headphones",
] as const;
type Product = (typeof products)[number];

export type IncludesProps = {
    quantity: number;
    item: string;
}

type OthersProps = {
    slug: string;
    name: string;
}

interface ItemsProps extends ProductProps {
    slug: string;
    price: number;
    cart: boolean;
    features: string;
    includes: IncludesProps[]
    others: OthersProps[]
}

export default async function page({params}: {params: {product: string}}) {
    const router = useRouter();
    const { product } = params

    // user-defined guard
    const isProduct = (value: any): value is Product => products.includes(value);

    // Data Products
    const items = isProduct(product) && await getData("products");

    if(isProduct(product)) {
        return (
            <main className="w-full h-auto flex flex-col items-center">
                <section className="
                        xl:w-[1110px]
                        w-full
                        h-auto
                        max-xl:sm:px-8
                        max-sm:px-6
                        overflow-x-hidden
                    "
                >
                    <div className=" w-ful h-auto lg:mt-20 sm:mt-8 mt-4">
                        <div onClick={() => router.back()} className=" lg:mb-14 sm:mb-6 mb-4">
                            <span className="font-bold opacity-50 cursor-pointer"> 
                                Go Back
                            </span>
                        </div>

                        {items.map((item: ItemsProps) => item.slug === product && (
                            <div>
                                <ProductContainer
                                    key={item.id}
                                    newProduct={item.new}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                    cart={true}
                                    src={item.image.desktop}
                                    srcMobile={item.image.mobile}
                                />

                                <Features 
                                    feature={item.features}
                                    includes={item.includes}
                                />

                                <Gallery product={item.slug} />

                                {/* Recommendations */}
                                <div className="text-center lg:mt-[10rem] mt-[7.5rem]">
                                    <h1 className="sm:text-4xl text-xl lg:mb-16 sm:mb-14 mb-10  uppercase">
                                        you may also like
                                    </h1>
                                    <div className="flex max-sm:flex-col lg:gap-[30px] sm:gap-3 gap-14 justify-between">
                                        {item.others.map((item: OthersProps) => (
                                            <Recommendations 
                                                key={item.name}
                                                product={item.name}
                                                slug={item.slug}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                
                

                </section>
            </main>
        )
    } else return <h1>Not Founded</h1>
}