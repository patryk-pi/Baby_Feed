import ContactOption from "../ContactOption/ContactOption";
import Envelope from "../Icons/Envelope";
import Phone from "../Icons/Phone";
import Instagram from "../Icons/Instagram";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__container">
                <h2 className="contact__header">Kontakt</h2>
                <h3 className="contact__text">
                    Jeśli chcesz się ze mną skontaktować i omówić ofertę
                    skorzystaj z poniższych informacji lub użyj formularza
                    kontaktowego.
                </h3>
                <div className="contact__options">
                    <ContactOption
                        icon={<Phone className="contactoption__icon" />}
                        text="+48 730 722 030"
                        link={"tel:+48740722030"}
                    />
                    <ContactOption
                        icon={<Envelope className="contactoption__icon" />}
                        text="djaworskimusic@gmail.com"
                        link={"mailto:djawroskimusic@gmail.com"}
                    />

                    <ContactOption
                        icon={<Instagram className="contactoption__icon" />}
                        text="jaworskimusic"
                        link={"https://instagram.com/jaworskimusic"}
                    />
                </div>
                <ContactForm />
            </div>
        </section>
    );
};
export default Contact;
