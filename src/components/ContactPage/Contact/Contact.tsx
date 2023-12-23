import { text } from "stream/consumers";
import ContactOption from "../ContactOption/ContactOption";
import Envelope from "../Icons/Envelope";

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__container">
                <ContactOption
                    icon={<Envelope className="contactoption__icon" />}
                    text="djaworskimusic@gmail.com"
                />
            </div>
        </section>
    );
};
export default Contact;
