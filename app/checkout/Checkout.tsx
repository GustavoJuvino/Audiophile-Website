"use client";

import React, { useState } from 'react';
import { Form } from "../Components/Form";
import { CheckoutDetails } from "../Components/CheckoutDetails";
import { CashIcon } from "@/public/assets/svgs";
import { FieldErrors } from "react-hook-form";

let paymentMethods = [
    {
        value: "e-Money",
        name: "e-money",
        inputsMoney: [
            {
                label: "e-Money Number",
                value: 238521993,
                name: "moneyNumber",
            },
            {
                label: "e-Money PIN",
                value: 6891,
                name: "moneyPIN",
            }
        ]
    },
    {
        value: "Cash on Delivery",
        name: "cash"
    }
];

interface CheckoutProps {
    errors: FieldErrors<{
        address: string;
        name: string;
        email: string;
        phone: string;
        zip_code: string;
        city: string;
        country: string;
        moneyNumber: string;
        moneyPIN: string;
    }>;
}

const Checkout: React.FC<CheckoutProps> = ({ errors }) => {

    const [selectedRadioBtn, setSelectedRadionBtn] = useState("e-money");

    const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;
    const handleRadioCheck = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadionBtn(e.currentTarget.value);

    return (
        <main className="bg-gray-800 xl:w-[730px] lg:w-auto md:w-[689px] h-full rounded-lg">
            <section className="lg:px-12 px-7 pb-12">
                <h1 className="mt-[54px] text-4xl uppercase">
                    Checkout
                </h1>

                <CheckoutDetails.Section>
                    <CheckoutDetails.Legend> Billing Details </CheckoutDetails.Legend>

                    <CheckoutDetails.Wrapper>
                        <Form.Field>
                            <Form.Label htmlFor="name" error={errors.name}>
                                Name
                            </Form.Label>

                            <Form.Input
                                type="name"
                                name="name"
                                error={errors.name}
                                placeholder="Alexei Ward"
                            />
                        </Form.Field>

                        <Form.Field>
                            <Form.Label htmlFor="email" error={errors.email} >
                                Email Adress
                            </Form.Label>

                            <Form.Input
                                type="email"
                                name="email"
                                error={errors.email}
                                placeholder="alexei@mail.com"
                            />
                        </Form.Field>
                    </CheckoutDetails.Wrapper>

                    <Form.Field className="mt-6">
                        <Form.Label htmlFor="phone" error={errors.phone} >
                            Phone Number
                        </Form.Label>

                        <Form.Input
                            type="number"
                            name="phone"
                            error={errors.phone}
                            placeholder="+1 202-555-0136"
                            className="max-xl:w-[50%]"
                        />
                    </Form.Field>
                </CheckoutDetails.Section>

                <CheckoutDetails.Section className="mt-[53px] flex flex-col gap-y-6">
                    <CheckoutDetails.Legend> Shipping Info </CheckoutDetails.Legend>

                    <Form.Field>
                        <Form.Label htmlFor="address" error={errors.address} >
                            Address
                        </Form.Label>

                        <Form.Input
                            type="string"
                            name="address"
                            error={errors.address}
                            placeholder="1137 Williams Avenue"
                            className="xl:w-[634px] md:w-[92%] w-[460px]"
                        />
                    </Form.Field>

                    <CheckoutDetails.Wrapper>
                        <Form.Field>
                            <Form.Label htmlFor="zip_code" error={errors.zip_code} >
                                ZIP Code
                            </Form.Label>

                            <Form.Input
                                type="number"
                                name="zip_code"
                                error={errors.zip_code}
                                placeholder="10001"
                            />
                        </Form.Field>

                        <Form.Field>
                            <Form.Label htmlFor="city" error={errors.city} >
                                City
                            </Form.Label>

                            <Form.Input
                                type="string"
                                name="city"
                                error={errors.city}
                                placeholder="New York"
                            />
                        </Form.Field>
                    </CheckoutDetails.Wrapper>

                    <Form.Field>
                        <Form.Label htmlFor="country" error={errors.country} >
                            Country
                        </Form.Label>

                        <Form.Input
                            type="string"
                            name="country"
                            error={errors.country}
                            placeholder="United States"
                            className="max-xl:w-[50%]"
                        />
                    </Form.Field>
                </CheckoutDetails.Section>

                <CheckoutDetails.Section className="max-md:w-[475px] mt-[60px]">
                    <CheckoutDetails.Legend> Payment Details </CheckoutDetails.Legend>

                    <div className="w-full flex justify-between">
                        <h2 className="font-bold"> Payment Method </h2>

                        <CheckoutDetails.Wrapper className="flex-col gap-4 flex-nowrap">
                            {paymentMethods.map((payment) => (
                                <Form.Field
                                    key={payment.name}
                                    className={`
                                        flex
                                        items-center
                                        py-3
                                        pl-5
                                        gap-4
                                        md:w-[289px]
                                        w-[190px]
                                        h-auto
                                        border-[1px]
                                        rounded-lg
                                        duration-300
                                        ${selectedRadioBtn === payment.name && "border-raw-sienna"}
                                    `}
                                >
                                    <Form.Input
                                        type="radio"
                                        value={payment.name}
                                        name={payment.name}
                                        checked={isRadioSelected(payment.name)}
                                        onChange={handleRadioCheck}
                                        className={selectedRadioBtn === payment.name ? "selected" : ""}
                                    />

                                    <Form.Label htmlFor={payment.name}>
                                        {payment.value}
                                    </Form.Label>
                                </Form.Field>
                            ))}
                        </CheckoutDetails.Wrapper>
                    </div>

                    {selectedRadioBtn === "e-money" && (
                        <div className="flex gap-4 justify-between mt-6">
                            {paymentMethods[0].inputsMoney?.map((input) => (
                                <Form.Field key={input.name}>
                                    <Form.Label
                                        htmlFor={input.name}
                                        error={input.name === "moneyPIN" ? errors.moneyPIN : errors.moneyNumber}
                                    >
                                        {input.label}
                                    </Form.Label>

                                    <Form.Input
                                        type="number"
                                        name={input.name}
                                        error={input.name === "moneyPIN" ? errors.moneyPIN : errors.moneyNumber}
                                        placeholder={input.value.toString()}
                                        className="xl:w-[285px]"
                                    />
                                </Form.Field>
                            ))}
                        </div>
                    )}

                    {selectedRadioBtn === "cash" && (
                        <div className="w-full h-auto flex gap-x-8 mt-[30px]">
                            <CashIcon />
                            <p className="text-[15px] opacity-50 font-medium">
                                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery <br />
                                courier arrives at your residence. Just make sure your address is correct so <br />
                                that your order will not be cancelled.
                            </p>
                        </div>
                    )}
                </CheckoutDetails.Section>
            </section>
        </main>
    )
}
export default Checkout;