"use client";

import React from 'react';
import { useRouter } from "next/navigation";

const Back = () => {
  const router = useRouter();

  return (
    <div 
        onClick={() => {
          router.back()
        }}
        className="w-[70px] lg:mb-14 sm:mb-6 mb-4"
    >
    <span className="font-bold opacity-50 cursor-pointer">
        Go Back
    </span>
</div>
  )
}

export default Back;