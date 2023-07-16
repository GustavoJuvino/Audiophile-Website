"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    quantityProducts: number;
    setQuantityProducts: Dispatch<SetStateAction<number>>
    
    empty: boolean;
    setEmpty: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    quantityProducts: 0,
    setQuantityProducts: (): number => 0,
    empty: true,
    setEmpty: (): boolean => true
});

export const GlobalContextProvider = ({ children }) => {
    const [quantityProducts, setQuantityProducts] = useState(0);
    const [empty, setEmpty] = useState(true);

    return (
        <GlobalContext.Provider value={{ 
                quantityProducts,
                setQuantityProducts,
                empty,
                setEmpty
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);