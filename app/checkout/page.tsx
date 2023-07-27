"use client";

import React from 'react';
import Checkout from "./Checkout";
import Summary from "./Summary";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const CheckoutFormSchema = z.object({
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
    message: "Can't be empty",
  }),
  moneyPIN: z.string().nonempty({
    message: "Can't be empty",
  }).min(4, {
    message: "At least 4 characters long",
  }),
});

type CheckoutFormData = z.infer<typeof CheckoutFormSchema>;

const page = () => {
  const createCheckoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors }
  } = createCheckoutForm;


  return (
    <main className="w-full h-auto flex justify-center">
      <section className="lg:w-[1110px] w-full h-full mx-8 mt-20 mb-12">
        <span className="font-medium opacity-50">
          Go back
        </span>

        <FormProvider {...createCheckoutForm}>
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="w-full h-full mt-[38px] flex justify-between"
          >
            <Checkout errors={errors} />
            <Summary />
          </form>
        </FormProvider>

      </section>
    </main>
  )
}

export default page;