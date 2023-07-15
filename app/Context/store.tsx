"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    quantityProducts: number;
    setQuantityProducts: Dispatch<SetStateAction<number>>
}

const GlobalContext = createContext<ContextProps>({
    quantityProducts: 0,
    setQuantityProducts: (): number => 0
});

export const GlobalContextProvider = ({ children }) => {
    const [quantityProducts, setQuantityProducts] = useState(0);

    return (
        <GlobalContext.Provider value={{ quantityProducts, setQuantityProducts }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);