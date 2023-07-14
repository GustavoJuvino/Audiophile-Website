"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    userId: number;
    setUserId: Dispatch<SetStateAction<number>>
}

const GlobalContext = createContext<ContextProps>({
    userId: 0,
    setUserId: (): number => 0
});

export const GlobalContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(0);

    return (
        <GlobalContext.Provider value={{ userId, setUserId }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);