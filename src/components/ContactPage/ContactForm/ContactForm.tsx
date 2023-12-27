import { useFormik } from "formik";

const ContactForm = () => {
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
