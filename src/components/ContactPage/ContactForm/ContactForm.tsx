"use client";

import { useFormik } from "formik";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const serviceID = process.env.SERVICE_ID as string;
    const templateID = process.env.TEMPLATE_ID as string;
    const publicKey = process.env.PUBLIC_KEY as string;

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (values: { [key: string]: string }) => {
        const { name, email, phone, message } = values;

        if (form.current) {
            emailjs
                .sendForm(serviceID, templateID, form.current, publicKey)
                .then(
                    (result) => {
                        console.log(result.text);
                        formik.resetForm();
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
        onSubmit: (values) => sendEmail(values),
    });

    return (
        <section className="contactform">
            <form ref={form} onSubmit={formik.handleSubmit}>
                <div className="contactform__container">
                    <label htmlFor="name">Imię</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder="Imię"
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="Email"
                    />
                    <label htmlFor="phone">Numer telefonu</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        placeholder="Numer telefonu"
                    />
                </div>
                <label htmlFor="message">Napisz wiadomość</label>
                <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    placeholder="Napisz wiadomość"
                ></textarea>
                <button type="submit">Wyślij!</button>
            </form>
        </section>
    );
};
export default ContactForm;
