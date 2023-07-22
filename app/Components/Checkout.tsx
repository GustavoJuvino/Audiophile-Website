"use client";

import React, { useState } from 'react';
import { Form } from "./Form";

let paymentMethods = [
    {
        value: "e-Money",
        name: "e-money"
    },
    {
        value: "Cash on Delivery",
        name: "cash"
    }
];

const Checkout = () => {
    const [selectedRadioBtn, setSelectedRadionBtn] = useState("e-money");

    const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;
    const handleRadioCheck = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadionBtn(e.currentTarget.value);

    return (
        <form className="w-[730px] h-full bg-white flex flex-col px-12">
            <h1 className="mt-[54px] text-4xl uppercase">
                Checkout
            </h1>

            <section className="mt-10">
                <legend className="
                            font-bold
                            mb-4
                            uppercase
                            tracking-[0.93px]
                            text-raw-sienna
                        "
                >
                    Billing Details
                </legend>

                <div className="flex gap-x-4 gap-y-6 flex-wrap">
                    <Form.Field>
                        <Form.Label htmlFor="name">
                            Name
                        </Form.Label>

                        <Form.Input
                            type="string"
                            name="name"
                            placeholder="Alexei Ward"
                        />
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
                            name="phone-number"
                            placeholder="+1 202-555-0136"
                        />
                    </Form.Field>
                </div>
            </section>

            <section className="mt-[54px]">
                <legend className="
                            font-bold
                            mb-4
                            uppercase
                            tracking-[0.93px]
                            text-raw-sienna
                        "
                >
                    Shipping Info
                </legend>

                <div className="flex flex-wrap gap-x-4 gap-y-6">
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
                </div>
            </section>

            <section className="mt-[60px]">
                <legend className="
                            font-bold
                            mb-4
                            uppercase
                            tracking-[0.93px]
                            text-raw-sienna
                        "
                >
                    Payment Details
                </legend>

                <div className="w-full flex justify-between">
                    <h2>
                        Payment Method
                    </h2>

                    <div className="flex flex-col gap-4">
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
                    </div>
                </div>
            </section>
        </form>
    )
}

export default Checkout;