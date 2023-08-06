"use client";

import React from 'react';
import Image from "next/image";
import DefaultButton from "@/app/Components/Buttons/DefaultButton";
import { useRouter } from "next/navigation";

interface RecommendationsProps {
    product: string;
    slug: string;
}

const Recommendations: React.FC<RecommendationsProps> = ({
    product,
    slug
}) => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center">
            <Image
                width={350}
                height={318}
                alt="Recommendation-Image"
                src={`/assets/products/${slug}/mobile/image-category-page-preview.jpg`}
            />

            <h1 className="text-xl mt-10 mb-8 uppercase">
                {product}
            </h1>
            <DefaultButton
                click={() => router.push(slug)}
                value="see product"
            />
        </div>
    )
}

export default Recommendations;