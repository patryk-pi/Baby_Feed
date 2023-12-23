import { ReactNode } from "react";

type ContactOptionProps = {
    icon: ReactNode;
    text: string;
    link?: string;
};

export type IconProps = {
    className: string;
};

const ContactOption = ({ icon, text, link }: ContactOptionProps) => {
    return (
        <div className="contactoption">
            {icon}
            <a href={link} target="_blank">
                {text}
            </a>
        </div>
    );
};
export default ContactOption;
