import { useFormik } from "formik";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const serviceID = process.env.SERVICE_ID as string;
    const templateID = process.env.TEMPLATE_ID as string;
    const key = process.env.PUBLIC_KEY as string;

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: Event) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(serviceID, templateID, form.current, key).then(
                (result) => {
                    console.log(result.text);
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
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <section className="contactform">
            <form ref={form} onSubmit={formik.handleSubmit}>
                <div className="contactform__container"></div>
            </form>
        </section>
    );
};
export default ContactForm;
