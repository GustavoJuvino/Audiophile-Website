import Skeleton from "react-loading-skeleton";
import PreviewProductSkeleton from "../Components/Skeletons/PreviewProductSkeleton";
import CategoriesSkeleton from "../Components/Skeletons/CategoriesSkeleton";
import AudioGearSkeleton from "../Components/Skeletons/AudioGearSkeleton";

export default function LoadinCategory() {
    return (
        <main className="w-full h-auto flex flex-col items-center md:mb-[160px] mb-[120px]">
            <div className="w-full sm:h-[336px] h-[192px] bg-black flex justify-center items-center">
                <Skeleton count={1}  className="sm:w-[283px] w-[200px] h-[44px]" />
            </div>

            <section className="xl:w-[1110px] w-full h-auto max-xl:sm:px-8 max-sm:px-6">
            <PreviewProductSkeleton />
            <CategoriesSkeleton />
            <AudioGearSkeleton />
            </section>
        </main>
    )
}