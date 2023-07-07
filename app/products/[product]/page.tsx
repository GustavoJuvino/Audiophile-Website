import getData from "@/app/Helper/getData";

const products = [
    "xx99-mark-two-headphones",
    "xx99-mark-one-headphones",
] as const;
type Product = (typeof products)[number];

export default async function page({params}: {params: {product: string}}) {
    const { product } = params

    // user-defined guard
    const isProduct = (value: any): value is Product => products.includes(value);

    // Data Products
    const items = isProduct(product) && await getData("products");
    items?.map((item: any) => item.slug === product && console.log(item.name))

    if(isProduct(product)) {
        return (
            <main className="w-full h-[600px] flex flex-col items-center">
                <h1>{product}</h1>
                {items?.map((item: any) => item.slug === product && (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <h2>{item.description}</h2>
                    </div>
                ))}
            </main>
        )
    } else return <h1>Not Founded</h1>
}