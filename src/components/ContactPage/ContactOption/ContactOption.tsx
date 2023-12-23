import { ReactNode } from "react";

type ContactOptionProps = {
    icon: ReactNode;
    text?: string;
    link?: string;
};

export type IconProps = {
    className: string;
};

const ContactOption = ({ icon, text, link }: ContactOptionProps) => {
    return (
        <a href={link} target="_blank" className="contactoption">
            {icon}
            {text && <p>{text}</p>}
        </a>
    );
};
export default ContactOption;
