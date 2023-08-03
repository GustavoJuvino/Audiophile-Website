import { useCallback } from "react";
import { useGlobalContext } from "../Context/store";
import { productKeys } from "../Components/Cart/CartMenu";
import useGetLocalStorage from "./useGetLocalStorage";

const useRemoveAllProducts = () => {
    const {
        empty,
        setEmpty,
    } = useGlobalContext();
    const { getLocalStorage } = useGetLocalStorage();

    const removeAllProducts = useCallback(() => {
        setEmpty(true);
        productKeys.map((key) => {
            if (getLocalStorage(key)) {
                localStorage.removeItem(key)
            }
        })
    }, [])

    return {
        removeAllProducts
    }
}

export default useRemoveAllProducts;