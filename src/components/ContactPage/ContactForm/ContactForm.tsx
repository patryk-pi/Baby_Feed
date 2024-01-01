"use client";

import { useForm } from "react-hook-form";
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const serviceID = process.env.SERVICE_ID as string;
    const templateID = process.env.TEMPLATE_ID as string;
    const publicKey = process.env.PUBLIC_KEY as string;

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (values: { [key: string]: string }) => {
        const { name, email, phone, message } = values;

        console.log(values);

        // if (form.current) {
        //     emailjs
        //         .sendForm(serviceID, templateID, form.current, publicKey)
        //         .then(
        //             (result) => {
        //                 console.log(result.text);
        //             },
        //             (error) => {
        //                 console.log(error.text);
        //             }
        //         );
        // }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <section className="contactform">
            <form
                ref={form}
                onSubmit={handleSubmit((values) => sendEmail(values))}
            >
                <div className="contactform__container">
                    <div>
                        <input
                            {...register("name")}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Imię"
                            className="contactform__input"
                        />
                        <label className="contactform__label" htmlFor="name">
                            Imię
                        </label>
                    </div>
                    <div>
                        <input
                            {...register("email", {
                                required: "Pole wymagane",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Podaj maila",
                                },
                            })}
                            id="email"
                            name="email"
                            placeholder="Email"
                            className={`contactform__input ${
                                errors && errors.email ? "error" : ""
                            }`}
                        />
                        <label className="contactform__label" htmlFor="email">
                            Email
                        </label>
                        {errors.email && <p className="error-message">LFDSD</p>}
                    </div>
                    <div>
                        <input
                            {...register("phone")}
                            type="number"
                            id="phone"
                            name="phone"
                            placeholder="Numer telefonu"
                            className="contactform__input"
                        />
                        <label className="contactform__label" htmlFor="phone">
                            Numer telefonu
                        </label>
                    </div>
                </div>
                <div className="contactform__textarea">
                    <textarea
                        {...register("message")}
                        name="message"
                        id="message"
                        placeholder="Wiadomość"
                        className="contactform__input"
                    ></textarea>
                    <label className="contactform__label" htmlFor="message">
                        Wiadomość
                    </label>
                </div>
                <button className="contactform__button" type="submit">
                    Wyślij!
                </button>
            </form>
        </section>
    );
};
export default ContactForm;
