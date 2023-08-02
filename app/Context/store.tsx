"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    localProducts: LocalProductProps[],
    setLocalProducts: Dispatch<SetStateAction<LocalProductProps[]>>,

    quantityCart: number;
    setQuantityCart: Dispatch<SetStateAction<number>>

    total: number;
    setTotal: Dispatch<SetStateAction<number>>;

    empty: boolean;
    setEmpty: Dispatch<SetStateAction<boolean>>;

    currentRadioValue: string;
    setCurrentRadioValue: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
    localProducts: [],
    setLocalProducts: (): LocalProductProps[] => [],

    quantityCart: 0,
    setQuantityCart: (): number => 0,

    total: 0,
    setTotal: (): number => 0,
    
    empty: true,
    setEmpty: (): boolean => true,

    currentRadioValue: "",
    setCurrentRadioValue: (): string => ""
});

// @ts-ignore
export const GlobalContextProvider = ({ children }) => {
    const [localProducts, setLocalProducts] = useState<LocalProductProps[]>([]);
    const [quantityCart, setQuantityCart] = useState(0);
    const [total, setTotal] = useState(0)
    const [empty, setEmpty] = useState(true);
    const [currentRadioValue, setCurrentRadioValue] = useState("e-money");

    return (
        <GlobalContext.Provider value={{
                localProducts,
                setLocalProducts, 
                quantityCart,
                setQuantityCart,
                total,
                setTotal,
                empty,
                setEmpty,
                currentRadioValue,
                setCurrentRadioValue,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);