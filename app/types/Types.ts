export type ImageProps = {
    desktop: string,
    mobile: string,
}

export interface ProductProps {
    id: number,
    new: boolean,
    name: string,
    category: string
    image: ImageProps,
    description: string,
    reverse?: boolean
}
