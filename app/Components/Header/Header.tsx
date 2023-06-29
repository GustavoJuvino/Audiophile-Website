import React from 'react';
import { Cart, Logo } from "@/public/assets/svgs";
import MobileMenu from "../MobileMenu";

const headerItems = [
    "home",
    "headphones",
    "speakers",
    "earphones"
]

const Header = () => {
  return (
    <header className="w-full h-auto flex justify-center bg-onyx">
        <div className="
                w-[1110px]
                mt-8
                max-xl:mx-8
                h-auto
                flex
                justify-between
                relative

            "
        >
            <div className="md:hidden">
                <MobileMenu />
            </div>
            <Logo className="cursor-pointer" />
            <ul className="w-[430px] flex justify-between cursor-pointer max-md:hidden">
                {headerItems.map((item) => 
                    <li 
                        key={item}
                        className="
                            text-subTitle
                            text-white
                            uppercase
                            duration-300
                            hover:text-raw-sienna
                        "
                        >
                        {item}
                    </li>
                )}
            </ul>
            <Cart className="cursor-pointer" />
            <hr className="
                    w-full
                    h-[1px]
                    absolute
                    mt-14
                    opacity-20
                    animate-divider
                "
            /> 
        </div>
    </header>
  )
}

export default Header;