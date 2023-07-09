"use client";
import { ProductProps } from "@/app/[category]/page";
import getData from "@/app/Helper/getData";
import ProductContainer from "@/app/Components/ProductContainer";
import Features from "./Features";
import { useRouter } from "next/navigation";

const products = [
    "xx99-mark-two-headphones",
    "xx99-mark-one-headphones",
] as const;
type Product = (typeof products)[number];

export type IncludesProps = {
    quantity: number;
    item: string;
}

interface ItemsProps extends ProductProps {
    slug: string;
    price: number;
    cart: boolean;
    features: string;
    includes: IncludesProps[]
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
                    "
                >
                    <div className="
                            w-full
                            h-auto
                            lg:mt-20
                            sm:mt-8
                            mt-4
                        "
                    >
                        <div
                            onClick={() => router.back()}
                            className=" lg:mb-14 sm:mb-6 mb-4"
                        >
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
                            </div>
                            
                        ))}
                    </div>
                
                    <div></div>

                </section>
            </main>
        )
    } else return <h1>Not Founded</h1>
}