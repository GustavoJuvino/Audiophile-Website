import React from 'react';
import Image from "next/image";

interface GalleryProps {
    product: string;
}

const Gallery: React.FC<GalleryProps> = ({ product }) => {
    return (
        <div className="
                w-full
                xl:h-[592px]
                flex
                max-sm:flex-col
                sm:gap-[30px]
                gap-5
                lg:mt-[10rem]
                sm:mt-[7.5rem]
                mt-[5.5rem]
            "
        >
            <div className="flex flex-col lg:gap-8 gap-5">
                <Image
                    width={445}
                    height={280}
                    alt="Grid-Image-1"
                    src={`/assets/products/${product}/desktop/image-gallery-1.jpg`}
                    className="lg:w-[445px] lg:h-[280px] sm:w-[277px] w-full h-[174px] rounded-lg object-cover"
                />
                <Image
                    width={445}
                    height={280}
                    alt="Grid-Image-2"
                    src={`/assets/products/${product}/desktop/image-gallery-2.jpg`}
                    className="lg:w-[445px] lg:h-[280px] sm:w-[277px] w-full h-[174px] rounded-lg object-cover"
                />
            </div>
            <Image
                width={635}
                height={592}
                alt="Grid-Image-3"
                src={`/assets/products/${product}/desktop/image-gallery-3.jpg`}
                className="
                    lg:w-[635px]
                    lg:h-[592px]
                    sm:w-[395px]
                    h-[368px]
                    rounded-lg
                    object-cover
                "
            />
        </div>
    )
}

export default Gallery;