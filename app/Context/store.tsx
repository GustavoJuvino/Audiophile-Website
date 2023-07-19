"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    localData: LocalProductProps;
    setLocalData: Dispatch<SetStateAction<LocalProductProps>>;

    quantityCart: number;
    setQuantityCart: Dispatch<SetStateAction<number>>
    
    empty: boolean;
    setEmpty: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    localData: {
        name: "",
        price: 0,
        quantity: 0
    },
    setLocalData: () => {},

    quantityCart: 0,
    setQuantityCart: (): number => 0,
    
    empty: true,
    setEmpty: (): boolean => true
});

// @ts-ignore
export const GlobalContextProvider = ({ children }) => {
    const [localData, setLocalData] = useState<LocalProductProps>({
        name: "",
        slug: "",
        price: 0,
        quantity: 0
    });
    const [quantityCart, setQuantityCart] = useState(0);
    const [empty, setEmpty] = useState(true);

    return (
        <GlobalContext.Provider value={{ 
                localData,
                setLocalData,
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