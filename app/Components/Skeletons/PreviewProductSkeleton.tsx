import Skeleton from "react-loading-skeleton"

const products = [1, 2, 3]

const PreviewProductSkeleton = () => {

    return (
        <section className="[&>*:nth-child(2)]:lg:flex-row-reverse">
            {
                products.map(() => (
                    <div className="
                            w-full
                            h-auto
                            flex
                            max-lg:flex-col
                            items-center
                            lg:gap-[10rem]
                            gap-[7.5rem]
                            lg:mt-[10rem]
                            sm:mt-[7.5rem]
                            mt-16
                        "
                    >
                        <div className="lg:w-[540px] md:w-[689px] w-full">
                            <Skeleton count={1} className="lg:h-[540px] h-[327px]" />
                        </div>


                        <section className="lg:w-[445px] md:w-[572px] w-full flex flex-col max-lg:items-center">
                            <div className="sm:w-[283px] w-[180px]">
                                <Skeleton count={2} />
                            </div>

                            <div className="mt-8 max-lg:hidden">
                                <Skeleton count={5} />
                            </div>

                            <div className="lg:hidden w-full mt-8">
                                <Skeleton count={3} />
                            </div>

                            <Skeleton count={1} width={"160px"} height={"48px"} className="mt-10" />
                        </section>
                    </div>
                ))
            }
        </section>

    )
}

export default PreviewProductSkeleton