import { useCallback } from "react";

const useGetLocalStorage = () => {
    const dataProducts = useCallback((key: string) => {
        const localJSON = localStorage.getItem(key)
        if(localJSON) return JSON.parse(localJSON)
    }, [])

    return {
        dataProducts
    }
}

export default useGetLocalStorage;