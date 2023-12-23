import Link from "next/link";
import Image from "next/image";
import ContactOption from "../ContactPage/ContactOption/ContactOption";
import Phone from "../ContactPage/Icons/Phone";
import Envelope from "../ContactPage/Icons/Envelope";
import Instagram from "../ContactPage/Icons/Instagram";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <Link href={"/"}>
                    <Image
                        src={"/Logo.png"}
                        height={100}
                        width={100}
                        alt="Jaworski Music Logo"
                    />
                </Link>
                <div className="footer__icons">
                    <ContactOption
                        icon={<Phone className="footer__icon" />}
                        link={"tel:+48740722030"}
                    />
                    <ContactOption
                        icon={<Envelope className="footer__icon" />}
                        link={"mailto:djawroskimusic@gmail.com"}
                    />

                    <ContactOption
                        icon={<Instagram className="footer__icon" />}
                        link={"https://instagram.com/jaworskimusic"}
                    />
                </div>
            </div>
        </footer>
    );
};
export default Footer;
