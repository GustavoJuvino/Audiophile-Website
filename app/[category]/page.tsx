import getData from "../Helper/getData";


const categories = ["headphones", "speakers", "earphones"] as const;
type Category = (typeof categories)[number];

export default async function page({params}: {params: {category: string}}) {
    const { category } = params;

    // user-defined guard
    const isCategory = (value: any): value is Category => categories.includes(value);

    // Data Products
    const products = isCategory(category) && await getData("products");
    

    if(isCategory(category)) {
        return (
            <main className="w-full h-[500px] flex justify-center">
                {/* <h1>{category}</h1> */}
                {products.map((product: any) => (
                    <div>
                        {product.category}
                    </div>
                ))}
            </main>
        )
    } else return <h1>Not Founded</h1>
}