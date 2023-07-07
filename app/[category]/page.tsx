import getData from "../Helper/getData";
import ProductContainer from "./ProductContainer";
import Categories from "../Components/Categories";
import AudioGear from "../Components/AudioGear";

const categories = ["headphones", "speakers", "earphones"] as const;
type Category = (typeof categories)[number];

type ImageProps = {
    desktop: string,
    mobile: string,
}

interface ProductProps {
    id: number,
    new: boolean,
    name: string,
    category: string
    image: ImageProps,
    description: string,
    reverse?: boolean
}

export default async function page({params}: {params: {category: string}}) {
    const { category } = params;

    // user-defined guard
    const isCategory = (value: any): value is Category => categories.includes(value);

    // Data Products
    const products = isCategory(category) && await getData("products");

    if(isCategory(category)) {
        return (
            <main className="w-full h-auto flex flex-col items-center">
                <div className="w-full sm:h-[336px] h-[192px] bg-black flex justify-center items-center">
                    <h1 className="sm:text-5xl text-2xl text-white uppercase">
                        {category}
                    </h1>
                </div>
                
                <section className="
                        w-full
                        h-auto
                        flex
                        flex-col-reverse
                        items-center
                        lg:gap-[10rem]
                        gap-[7.5rem]
                        lg:mt-[10rem]
                        sm:mt-[7.5rem]
                        mt-16
                        sm:px-8
                        px-6
                    "
                >
                    {products.map((product: ProductProps) => product.category === category && (
                        <ProductContainer 
                            key={product.id}
                            newProduct={product.new}
                            name={product.name}
                            description={product.description}
                            src={product.image.desktop}
                            srcMobile={product.image.mobile}
                            reverse={product?.reverse}
                        />
                    ))}
                </section>
                
                <Categories />

                <div className="lg:my-[10rem] my-[7.5rem]">
                    <AudioGear />
                </div>

            </main>
        )
    } else return <h1>Not Founded</h1>
}