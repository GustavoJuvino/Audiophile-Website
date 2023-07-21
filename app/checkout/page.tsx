import React from 'react';
import Checkout from "../Components/Checkout";

const page = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center">
        <section className="xl:w-[1110px] h-[1126px] mt-20">
            <Checkout />
        </section>
    </main>
  )
}

export default page;