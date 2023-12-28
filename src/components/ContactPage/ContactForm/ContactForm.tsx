import { useFormik } from "formik";

const ContactForm = () => {
    const serviceID = process.env.SERVICE_ID as string;
    const templateID = process.env.TEMPLATE_ID as string;
    const key = process.env.PUBLIC_KEY as string;

    const sendEmail = (e: Event) => {
        e.preventDefault;
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
            <form onSubmit={formik.handleSubmit}>
                <div className="contactform__container"></div>
            </form>
        </section>
    );
};
export default ContactForm;
