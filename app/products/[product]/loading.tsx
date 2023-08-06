import ProductSkeleton from "@/app/Components/Skeletons/ProductSkeleton";
import FeaturesSkeleton from "./Skeletons/FeaturesSkeleton";
import RecomSkeleton from "./Skeletons/RecommendationsSkeleton";
import CategoriesSkeleton from "@/app/Components/Skeletons/CategoriesSkeleton";
import AudioGearSkeleton from "@/app/Components/Skeletons/AudioGearSkeleton";

export default function LoadingProduct() {
    return (
        <main className="w-full h-auto flex flex-col items-center">
            <section className="
                    xl:w-[1110px]
                    w-full
                    h-full
                    max-xl:sm:px-8
                    max-sm:px-6
                    overflow-x-hidden
                "
            >
                <div className="w-full h-auto lg:mt-20 sm:mt-8 mt-4 md:mb-[160px] mb-[120px]">
                    <ProductSkeleton />
                    <FeaturesSkeleton />
                    <RecomSkeleton />
                    <CategoriesSkeleton />
                    <AudioGearSkeleton />
                </div>
            </section>
        </main>
    )
}