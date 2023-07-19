import { useCallback } from "react";

const useGetLocalStorage = () => {
    const getLocalStorage = useCallback((key: string) => {
            if(typeof window !== 'undefined') {
                const localJSON = localStorage.getItem(key)
                if(localJSON) return JSON.parse(localJSON)
            }
    }, [])

    return {
        getLocalStorage
    }
}

export default useGetLocalStorage;
