"use client";
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useLocalStorage } from "usehooks-ts";
import useGetLocalStorage from "@/app/hooks/useGetLocalStorage";
import { useGlobalContext } from "@/app/Context/store";
import { productKeys } from "./CartMenu";
import Button from "../Button";

interface LocalProducts {
  key: string;
  slug: string;
  price: number;
}

export let quantityProducts: object[] = [];

const CartButton = () => {
  const pathname = usePathname();
  const [count, setCount] = useState(0);
  const [localData, setLocalData] = useState({
    name: "",
    slug: "",
    price: 0,
    quantity: 0
  });
  const { dataProducts } = useGetLocalStorage(); 
  const { userId, setUserId } = useGlobalContext();

  // Local Storage
  const [storage, setStorage] = useLocalStorage(localData.name, localData);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/Api/products");
      const data = await res.json();

      data.map((item: LocalProducts) => `/products/${item.slug}` === pathname && 
        setLocalData({
          name: item.key,
          slug: item.slug,
          price: item.price,
          quantity: count
        }),
      )       
    }

    fetchProducts();

    setUserId("teste");
  }, [count]);

  if(userId) console.log(userId)

  // Quantity Products
  // function checkQuantityProducts() {
  //   productKeys.map((key) => {
  //     if(dataProducts(key)) {
  //       quantityProducts.push(dataProducts(key))
  //     }
  //   });
  // }

  return (
    <div className="small-mobile:w-[296px] h-auto flex justify-between">
      <div className="w-[120px] flex justify-around items-center font-bold bg-seashell">
      <span 
          onClick={() => {
            setCount(count > 0 ? count - 1 : count )
          }}
          className="
            cursor-pointer
            opacity-25
            duration-300
            hover:text-raw-sienna
            hover:opacity-100
          "
        >
          -
        </span>
        <p>
          {count}
        </p>
        <span 
          onClick={() => {
            setCount(count + 1)
          }}
          className="
            cursor-pointer
            opacity-25
            duration-300
            hover:text-raw-sienna
            hover:opacity-100
          "
        >
          + 
        </span>
      </div>

      <Button 
        click={() => {
          setStorage(localData && localData)
        }}
        type={1}
        value="add to cart" 
      />
    </div>
  )
}

export default CartButton;