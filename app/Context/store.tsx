"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    quantityCart: number;
    setQuantityCart: Dispatch<SetStateAction<number>>
    
    empty: boolean;
    setEmpty: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    quantityCart: 0,
    setQuantityCart: (): number => 0,
    empty: true,
    setEmpty: (): boolean => true
});

export const GlobalContextProvider = ({ children }) => {
    const [quantityCart, setQuantityCart] = useState(0);
    const [empty, setEmpty] = useState(true);

    return (
        <GlobalContext.Provider value={{ 
                quantityCart,
                setQuantityCart,
                empty,
                setEmpty
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);