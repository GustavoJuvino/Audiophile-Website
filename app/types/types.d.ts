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
    reverse: boolean
    slug: string;
}

interface LocalProductProps {
    name: string;
    price: number;
    quantity: number;
    slug?: string;
}