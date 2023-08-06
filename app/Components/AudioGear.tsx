import React from 'react';
import Image from "next/image";

const AudioGear = () => {
    return (
        <div className="
                xl:w-[1110px]
                w-full
                lg:h-[588px]
                h-auto
                flex
                max-lg:flex-col-reverse
                justify-between
                items-center
                max-xl:sm:px-8
                max-sm:px-4
            "
        >
            <div className="lg:w-[45%] sm:w-[68%] lg:pr-4 max-lg:mt-16 max-lg:text-center">
                <h1 className="sm:text-5xl text-2xl uppercase mb-8">
                    Bringing you the <br className="max-small-mobile:hidden" />
                    <span className="text-raw-sienna"> best </span>
                    audio gear
                </h1>
                <p className="opacity-50">
                    Located at the heart of New York City, Audiophile is the premier
                    store for high end headphones, earphones, speakers, and audio
                    accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store to
                    meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                </p>
            </div>

            <Image
                width={540}
                height={588}
                alt="Audio Gear Image"
                src="/assets/shared/image-best-gear.jpg"
                className="rounded-lg max-lg:w-full max-lg:h-[300px] object-cover"
            />
        </div>
    )
}

export default AudioGear;