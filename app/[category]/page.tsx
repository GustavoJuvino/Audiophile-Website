import getData from "../Helper/getData";
import ProductContainer from "./ProductContainer";

const categories = ["headphones", "speakers", "earphones"] as const;
type Category = (typeof categories)[number];

export default async function page({params}: {params: {category: string}}) {
    const { category } = params;

    // user-defined guard
    const isCategory = (value: any): value is Category => categories.includes(value);

    // Data Products
    const products = isCategory(category) && await getData(category);

    if(isCategory(category)) {
        return (
            <main>
                <div className="w-full sm:h-[336px] h-[192px] bg-black flex justify-center items-center">
                    <h1 className="sm:text-5xl text-2xl text-white uppercase">
                        {category}
                    </h1>
                </div>

                <section className="
                        w-full
                        h-auto
                        flex
                        flex-col
                        items-center
                        lg:gap-[10rem]
                        gap-[7.5rem]
                        lg:mt-[10rem]
                        sm:mt-[7.5rem]
                        mt-16
                        mb-[10rem]
                        sm:px-8
                        px-6
                    "
                >
                    <ProductContainer />
                </section>


                {/* <h1>{category}</h1> */}
                {/* {products.map((product: any) => (
                    <div>
                        {product.name}
                    </div>
                ))} */}
            </main>
        )
    } else return <h1>Not Founded</h1>
}