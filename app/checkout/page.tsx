"use client";

import React, { useEffect, useRef, useState } from 'react';
import Checkout from "./Checkout";
import Summary from "./Summary";
import Receipt from "./Receipt";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGlobalContext } from "../Context/store";

let CheckoutFormSchema = z.object({
  name: z.string().nonempty({
    message: "Can't be empty"
  }),
  email: z.string().nonempty({
    message: "E-mail is required",
  }).email({
    message: "Wrong Format",
  }),
  phone: z.string().nonempty({
    message: "Can't be empty",
  }).min(8, {
    message: "At least 8 characters long",
  }),
  address: z.string().nonempty({
    message: "Can't be empty",
  }),
  zip_code: z.string().nonempty({
    message: "Can't be empty",
  }).min(5, {
    message: "At least 5 characters long",
  }),
  city: z.string().nonempty({
    message: "Can't be empty",
  }),
  country: z.string().nonempty({
    message: "Can't be empty",
  }),
  moneyNumber: z.string().nonempty({
    message: "Can't be empty"
  }).min(9, {
    message: "At least 9 characters long",
  }),
  moneyPIN: z.string().nonempty({
    message: "Can't be empty",
  }).min(4, {
    message: "At least 4 characters long",
  }),
});

type CheckoutFormData = z.infer<typeof CheckoutFormSchema>;

const page = () => {
  const [receipt, setReceipt] = useState(false)
  const { currentRadioValue } = useGlobalContext();

  const createCheckoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutFormSchema),
  });

  const {
    handleSubmit,
    resetField,
    formState: { errors }
  } = createCheckoutForm;

  useEffect(() => {
    if(currentRadioValue === "cash") {
      resetField("moneyNumber", {defaultValue: "         "})
      resetField("moneyPIN", {defaultValue: "    "})
    }
  }, [currentRadioValue, resetField])


  return (
    <main className="w-full h-auto flex justify-center">
      <section className="
            lg:w-[1110px]
            w-full
            h-full
            lg:mx-8
            max-lg:md:px-8
            max-md:px-6
            md:mt-20
            sm:mt-12
            mt-4
            mb-12
          "
      >
        <span className="font-medium opacity-50">
          Go back
        </span>

        <FormProvider {...createCheckoutForm}>
          <form
            onSubmit={handleSubmit((data) => {
              if(currentRadioValue === "cash") {
                // @ts-ignore
                delete data["moneyNumber"]
                // @ts-ignore
                delete data["moneyPIN"]
              } 
              console.log(data)
              setReceipt(true)
            })}
            className="w-full h-full mt-[38px] flex max-lg:flex-col justify-between"
          >
            <Checkout errors={errors} />
            <Summary />
          </form>
        </FormProvider>
      </section>

      {receipt && (
        <>
          <div
            className="
              w-full
              h-auto
              bg-black
              opacity-40
              z-[90]
              absolute
              top-[6rem]
              bottom-0
            "
          />
          <Receipt />
        </>
      )}

    </main>
  )
}

export default page;