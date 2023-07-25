import React from 'react';
import LargeButton from "../Components/Buttons/LargeButton";

const Summary = () => {
  return (
    <section className="w-[350px] h-auto rounded-lg bg-white px-[33px]">
      <h1 className="text-lg uppercase mt-8">
        summary
      </h1>

    <section className="mt-8">
      <div className="w-full h-16 flex justify-between items-center">

        <div className="flex items-center gap-x-4">
          <div className="w-16 h-16 rounded-lg bg-gray-500"></div>
          <div>
            <h2 className="font-bold">XX99 MK II</h2>
            <span className="text-sm font-bold opacity-50">$ 2,999</span>
          </div>
        </div>

        <span className="font-bold opacity-50"> x1 </span>
      </div>
    </section>

      <div className="flex justify-between my-8">
        <div className="font-medium opacity-50 uppercase flex flex-col gap-y-2">
          <h2>total</h2>
          <h2>shipping</h2>
          <h2>vat {"(included)"}</h2>
        </div>

        <div className="flex flex-col items-end gap-y-2 text-lg">
          <span>$ 5,396</span>
          <span>$ 50</span>
          <span>$ 1,079</span>
        </div>
      </div>

      <LargeButton 
        value="continue & pay"
        type="submit"
      />
    </section>
  )
}

export default Summary;