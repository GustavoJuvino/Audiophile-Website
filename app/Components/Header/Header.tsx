"use client";
import React, { useState } from 'react';
import { CartIcon, Logo } from "@/public/assets/svgs";
import styles from "./Mobile.module.css";
import MobileMenu from "../MobileMenu";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Cart from "../Cart/Cart";


export const headerItems = [
    "home",
    "headphones",
    "speakers",
    "earphones"
]

const Header = () => {
    const pathname = usePathname();
    const [active, setActive] = useState(false);

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
            <CartIcon className="max-sm:mr-4 cursor-pointer" />
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
            <Cart />
        </div>
        <MobileMenu active={active} />
    </header>
  )
}

export default Header;