import React from 'react';
import { Form } from "../Components/Form";

const page = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center">
        <section className="xl:w-[1110px] h-[1126px] mt-20">
            <form className="w-[730px] h-full bg-white flex flex-col pl-12">
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
                        <fieldset className="flex flex-col gap-[10px]">
                            <label
                                htmlFor="name"
                                className="text-[14px] font-bold"
                            >
                                Name
                            </label>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Alexei Ward"
                                className="
                                    w-[310px]
                                    h-14
                                    border-[1px]
                                    pl-6
                                    border-[#CFCFCF]
                                    rounded-lg
                                    outline-none
                                    text-black
                                    font-bold
                                "
                            />
                        </fieldset>

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
                            <Form.Label htmlFor="email">
                                Email Adress
                            </Form.Label>

                            <Form.Input 
                                type="email"
                                name="email"
                                placeholder="alexei@mail.com"
                            />
                        </Form.Field>
                    </div>
                </section>
            </form>
        </section>
    </main>
  )
}

export default page;