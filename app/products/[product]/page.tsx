import ProductContainer from "@/app/Components/ProductContainer";
import Features from "./Features";
import Gallery from "./Gallery";
import Recommendations from "./Recommendations";
import Categories from "@/app/Components/Categories";
import AudioGear from "@/app/Components/AudioGear";
import Back from "./Back";
import getData from "@/app/Helper/getData";
import { notFound } from "next/navigation";

const products = [
    "yx1-earphones",
    "xx59-headphones",
    "xx99-mark-two-headphones",
    "xx99-mark-one-headphones",
    "zx7-speaker",
    "zx9-speaker",
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

export default async function page({ params }: { params: { product: string } }) {
    const { product } = params

    // user-defined guard
    const isProduct = (value: any): value is Product => products.includes(value);

    // Data Products
    const items = isProduct(product) && await getData("products");

    if (isProduct(product)) {
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
                    <div className="w-full h-auto lg:mt-20 sm:mt-8 mt-4">

                        <Back />

                        {items.map((item: ItemsProps) => item.slug === product && (
                            <div key={item.id}>
                                <ProductContainer
                                    newProduct={item.new}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                    cart={true}
                                    src={item.image.desktop}
                                    srcMobile={item.image.mobile}
                                    slug={item.slug}
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

                    <Categories />

                    <div className="lg:my-[10rem] my-[7.5rem]">
                        <AudioGear />
                    </div>
                </section>
            </main>
        )
    } else notFound()
}