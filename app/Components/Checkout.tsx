"use client";

import React, { useState } from 'react';
import { Form } from "./Form";
import { CheckoutDetails } from "./CheckoutDetails";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form";

let paymentMethods = [
    {
        value: "e-Money",
        name: "e-money",
        inputsMoney: [
            {
                label: "e-Money Number",
                value: 238521993
            },
            {
                label: "e-Money PIN",
                value: 6891
            }
        ]
    },
    {
        value: "Cash on Delivery",
        name: "cash"
    }
];

const CheckoutFormSchema = z.object({
    name: z.string().nonempty({
        message: "Can't be empty"
    }),
    phone: z.string().nonempty({
        message: 'A senha é obrigatória',
      }).min(8, {
        message: 'O numéro precisa ter no mínimo 8 caracteres',
      }),
});

type CheckoutFormData = z.infer<typeof CheckoutFormSchema>;

const Checkout = () => {
    const createCheckoutForm = useForm<CheckoutFormData>({
        resolver: zodResolver(CheckoutFormSchema),
    });

    const {
        handleSubmit,
        formState: { errors }
    } = createCheckoutForm;

    const [selectedRadioBtn, setSelectedRadionBtn] = useState("e-money");

    const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;
    const handleRadioCheck = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadionBtn(e.currentTarget.value);

    if (errors.name) console.log(errors.name)

    return (
        <FormProvider {...createCheckoutForm}>
            <form
                onSubmit={handleSubmit((data) => console.log(data))}
                className="
                        w-[730px]
                        h-full
                        bg-white
                        flex
                        flex-col
                        px-12
                    "
            >
                <h1 className="mt-[54px] text-4xl uppercase">
                    Checkout
                </h1>

                <CheckoutDetails.Section>
                    <CheckoutDetails.Legend> Billing Details </CheckoutDetails.Legend>

                    <CheckoutDetails.Wrapper>
                        <Form.Field>
                            <Form.Label htmlFor="name">
                                Name
                            </Form.Label>

                            <Form.Input
                                type="name"
                                name="name"
                            />
                            {errors.name && <span>{errors.name.message}</span>}
                        </Form.Field>

                        <Form.Field>
                            <Form.Label htmlFor="email">
                                Email Adress
                            </Form.Label>

                            <Form.Input
                                type="email"
                                name="email"
                                placeholder="alexei@mail.com"
                            />
                        </Form.Field>

                        <Form.Field>
                            <Form.Label htmlFor="phone-number">
                                Phone Number
                            </Form.Label>

                            <Form.Input
                                type="number"
                                name="phone"
                                placeholder="+1 202-555-0136"
                            />
                        </Form.Field>
                    </CheckoutDetails.Wrapper>
                </CheckoutDetails.Section>

                <CheckoutDetails.Section className="mt-[54px]">
                    <CheckoutDetails.Legend> Shipping Info </CheckoutDetails.Legend>

                    <CheckoutDetails.Wrapper>
                        <Form.Field>
                            <Form.Label htmlFor="phone-number">
                                Address
                            </Form.Label>

                            <Form.Input
                                type="string"
                                name="address"
                                placeholder="1137 Williams Avenue"
                                className="w-[634px]"
                            />
                        </Form.Field>

                        <Form.Field>
                            <Form.Label htmlFor="zip-code">
                                ZIP Code
                            </Form.Label>

                            <Form.Input
                                type="number"
                                name="zip-code"
                                placeholder="10001"
                            />
                        </Form.Field>

                        <Form.Field>
                            <Form.Label htmlFor="city">
                                City
                            </Form.Label>

                            <Form.Input
                                type="string"
                                name="city"
                                placeholder="New York"
                            />
                        </Form.Field>

                        <Form.Field>
                            <Form.Label htmlFor="country">
                                Country
                            </Form.Label>

                            <Form.Input
                                type="string"
                                name="country"
                                placeholder="United States"
                            />
                        </Form.Field>
                    </CheckoutDetails.Wrapper>
                </CheckoutDetails.Section>


                <CheckoutDetails.Section className="mt-[60px">
                    <CheckoutDetails.Legend> Payment Details </CheckoutDetails.Legend>

                    <div className="w-full flex justify-between">
                        <h2> Payment Method </h2>

                        <CheckoutDetails.Wrapper className="flex-col gap-4 flex-nowrap">
                            {paymentMethods.map((payment) => (
                                <Form.Field className={`
                                        flex
                                        items-center
                                        pl-4
                                        pt-[14px]
                                        gap-4
                                        w-[309px]
                                        h-14
                                        border-[1px]
                                        rounded-lg
                                        duration-300
                                        ${selectedRadioBtn === payment.name && "border-raw-sienna"}
                                    `}
                                >
                                    <Form.Input
                                        type="radio"
                                        name={payment.name}
                                        value={payment.name}
                                        checked={isRadioSelected(payment.name)}
                                        onChange={handleRadioCheck}
                                        className={selectedRadioBtn === payment.name ? "selected" : ""}
                                    />

                                    <Form.Label htmlFor="e-money">
                                        {payment.value}
                                    </Form.Label>
                                </Form.Field>
                            ))}
                        </CheckoutDetails.Wrapper>
                    </div>

                    {selectedRadioBtn === "e-money"} {
                        <div className="flex justify-between mt-6">
                            {paymentMethods[0].inputsMoney?.map((input) => (
                                <Form.Field>
                                    <Form.Label htmlFor={input.label.toLocaleLowerCase()}>
                                        {input.label}
                                    </Form.Label>

                                    <Form.Input
                                        type="number"
                                        name={input.label.toLocaleLowerCase()}
                                        placeholder={input.value.toString()}
                                    />
                                </Form.Field>
                            ))}
                        </div>
                    }
                </CheckoutDetails.Section>

                <button type="submit" className="mt-4"> CHECKOUT </button>
            </form>
        </FormProvider>
    )
}
export default Checkout;