"use client";
import React, { useEffect, useRef, useState } from 'react';
import { CartIcon, Logo } from "@/public/assets/svgs";
import MobileMenu from "../MobileMenu";
import Link from "next/link";
import CartMenu from "../Cart/CartMenu";
import styles from "./Mobile.module.css";
import { usePathname } from 'next/navigation'
import useClickOutside from "@/app/hooks/useClickOutside";

export const headerItems = [
    "home",
    "headphones",
    "speakers",
    "earphones"
]

const Header = () => {
    const pathname = usePathname();
    const [active, setActive] = useState(false);
    const [activeCart, setActiveCart] = useState(false);
    
    // Click Outside - Cart
    const cartRef = useRef(null);
    const { clickOutside } = useClickOutside();

    useEffect(() => {
        if(cartRef) clickOutside(cartRef, setActiveCart);
    }, [cartRef, clickOutside, setActiveCart])

  return (
    <header className={`
            w-full
            h-[100px]
            flex
            justify-center
            ${pathname === "/" ? "bg-onyx" : "bg-black" }
        `}
    >
        <div className="
                w-[1110px]
                mt-8
                max-xl:sm:mx-8
                h-auto
                flex
                justify-between
                relative
            "
        >
            {/* Mobile Button */}
            <div className="md:hidden max-sm:ml-4 cursor-pointer">
                <span
                    id={styles.hamburger}
                    className={active ? styles.active : ""}
                    onClick={() => setActive(!active)}
                />
            </div>

            <Link href="/" className="h-[20px]">
                <Logo className="cursor-pointer" />
            </Link>
            <ul className="w-[430px] flex justify-between max-md:hidden">
                {headerItems.map((item) => 
                    <li key={item} >
                        <Link href={item === "home" ? "/" : item}
                            className="
                                text-subTitle
                                text-white
                                uppercase
                                cursor-pointer
                                duration-300
                                hover:text-raw-sienna
                            "
                        >
                            {item}
                        </Link>
                    </li>
                )}
            </ul>

            {/* Cart */}
            <div ref={cartRef} className="relative">
                <CartIcon 
                    onClick={() => setActiveCart(!activeCart)}
                    className="max-sm:mr-4 cursor-pointer"
                />
                
                <span className="
                        w-7
                        h-5
                        bg-white
                        rounded-full
                        absolute
                        top-[0.8rem]
                        right-[-1rem]
                        flex
                        items-center
                        justify-center
                        text-subTitle
                    "
                >
                    1
                </span>

                <CartMenu activeCart={activeCart} />
            </div>

            <hr className={`
                    w-full
                    h-[1px]
                    absolute
                    mt-14
                    opacity-20
                    animate-divider
                    ${pathname.includes("products") && "hidden"}
                `}    
            /> 

        </div>
        <MobileMenu active={active} />
    </header>
  )
}

export default Header;