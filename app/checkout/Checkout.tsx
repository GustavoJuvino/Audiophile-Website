"use client";

import React from 'react';
import { Form } from "../Components/Form";
import { CheckoutDetails } from "../Components/CheckoutDetails";
import { CashIcon } from "@/public/assets/svgs";
import { FieldErrors } from "react-hook-form";
import { useGlobalContext } from "../Context/store";

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
    const { currentRadioValue, setCurrentRadioValue } = useGlobalContext();

    const isRadioSelected = (value: string): boolean => currentRadioValue === value;
    const handleRadioCheck = (e: React.ChangeEvent<HTMLInputElement>): void => setCurrentRadioValue(e.currentTarget.value);

    return (
        <main className="
                bg-white
                xl:w-[730px]
                lg:w-auto
                md:w-[689px]
                w-auto
                h-full
                rounded-lg
            "
        >
            <section className="flex flex-col max-sm:items-center lg:px-12 px-7 pb-12">
                <h1 className="
                        mt-[54px]
                        max-sm:mr-[10.5rem]
                        max-small-mobile:ml-[5.5rem]
                        sm:text-4xl
                        mobile:text-2xl
                        text-lg
                        uppercase
                    "
                >
                    Checkout
                </h1>

                <CheckoutDetails.Section>
                    <CheckoutDetails.Legend> Billing Details </CheckoutDetails.Legend>

                    <CheckoutDetails.Wrapper className="max-sm:flex-col">
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


                    <Form.Field className="w-fit mt-6">
                        <Form.Label htmlFor="phone" error={errors.phone} >
                            Phone Number
                        </Form.Label>

                        <Form.Input
                            type="number"
                            name="phone"
                            error={errors.phone}
                            placeholder="+1 202-555-0136"
                            className="max-sm:mobile:w-[280px]"
                        />
                    </Form.Field>
                </CheckoutDetails.Section>

                <CheckoutDetails.Section className="mt-[53px] flex flex-col">
                    <CheckoutDetails.Legend className="mb-[16px]"> Shipping Info </CheckoutDetails.Legend>

                    <Form.Field className="xl:w-fit max-md:w-fit">
                        <Form.Label htmlFor="address" error={errors.address} >
                            Address
                        </Form.Label>

                        <Form.Input
                            type="string"
                            name="address"
                            error={errors.address}
                            placeholder="1137 Williams Avenue"
                            className="xl:w-[634px] lg:w-full md:w-full sm:w-[455px]"
                        />
                    </Form.Field>

                    <CheckoutDetails.Wrapper className="max-sm:flex-col mt-6">
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

                    <Form.Field className="w-fit mt-6">
                        <Form.Label htmlFor="country" error={errors.country} >
                            Country
                        </Form.Label>

                        <Form.Input
                            type="string"
                            name="country"
                            error={errors.country}
                            placeholder="United States"
                            className="max-sm:mobile:w-[280px]"
                        />
                    </Form.Field>
                </CheckoutDetails.Section>


                <CheckoutDetails.Section className="max-md:sm:w-[455px] sm:w-full mobile:w-[280px] mt-[60px]">
                    <CheckoutDetails.Legend> Payment Details </CheckoutDetails.Legend>

                    <div className="w-full flex max-sm:flex-col justify-between">
                        <h2 className="font-bold max-sm:text-xs"> Payment Method </h2>

                        <CheckoutDetails.Wrapper className="flex flex-col gap-4 max-sm:mt-4">
                            {paymentMethods.map((payment) => (
                                <Form.Field
                                    key={payment.name}
                                    className={`
                                        flex
                                        items-center
                                        py-3
                                        pl-5
                                        gap-4
                                        xl:w-[309px]
                                        lg:w-[220px]
                                        md:w-[309px]
                                        sm:w-[220px]
                                        h-auto
                                        border-[1px]
                                        rounded-lg
                                        duration-300
                                        ${currentRadioValue === payment.name && "border-raw-sienna"}
                                    `}
                                >
                                    <Form.Input
                                        type="radio"
                                        value={payment.name}
                                        name={payment.name}
                                        checked={isRadioSelected(payment.name)}
                                        onChange={handleRadioCheck}
                                        className={currentRadioValue === payment.name ? "selected" : ""}
                                    />

                                    <Form.Label htmlFor={payment.name}>
                                        {payment.value}
                                    </Form.Label>
                                </Form.Field>
                            ))}
                        </CheckoutDetails.Wrapper>
                    </div>

                    {currentRadioValue === "e-money" && (
                        <div className="flex max-sm:flex-col sm:gap-4 gap-6 justify-between sm:mt-6 mt-6">
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
                                        className="max-sm:w-[280px]"
                                    />
                                </Form.Field>
                            ))}
                        </div>
                    )}

                    {currentRadioValue === "cash" && (
                        <div className="w-full h-auto flex gap-x-8 mt-[30px]">
                            <CashIcon />
                            <p className="sm:text-[15px] text-[13px] max-sm:w-[50%] opacity-50 font-medium">
                                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery <br className="max-sm:hidden" />
                                courier arrives at your residence. Just make sure your address is correct so <br className="max-sm:hidden" />
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