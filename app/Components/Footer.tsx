"use client";
import React from 'react';
import { Facebook, Instagram, Logo, Twitter } from "@/public/assets/svgs";
import { headerItems } from "./Header/Header";

const Footer = () => {
  return (
    <footer className="
            w-full
            lg:h-[365px]
            sm:h-[400px]
            h-[654px]
            bg-onyx
            flex
            justify-center
            items-center
            max-xl:px-10
            relative
        "
    >
        <section className="xl:w-[1110px] w-full h-full relative flex flex-col justify-center max-sm:items-center">
            <div className="flex max-lg:flex-col max-sm:items-center justify-between">
                <hr className="
                        w-[101px]
                        h-1
                        absolute
                        top-0
                        sm:left-0
                        bg-raw-sienna
                    "
                />
                <Logo className="cursor-pointer mb-9" />

                <ul className="sm:w-[430px] h-auto max-lg:mb-8 flex max-sm:flex-col justify-between max-sm:items-center max-sm:gap-4">
                    {headerItems.map((item) => (
                        <li key={item} className="text-subTitle uppercase text-white">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <p className="lg:w-[52%] sm:w-[75%] text-white max-sm:text-center opacity-50 lg:mb-14 mb-20">
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team 
                of music lovers and sound specialists who are devoted to helping you get the 
                most out of personal audio. Come and visit our demo facility - we’re open 7 
                days a week. 
            </p>
            <div className="flex max-sm:flex-col justify-between max-sm:items-center gap-12">
                <span className="text-white opacity-50">
                    Copyright 2021. All Rights Reserved
                </span>

                <div className="w-[104px] h-auto lg:absolute right-0 bottom-[80px] flex items-center justify-between">
                    <Facebook />
                    <Twitter />
                    <Instagram />
                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer;