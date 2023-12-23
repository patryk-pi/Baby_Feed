import { ReactNode } from "react";

type ContactOptionProps = {
    icon: ReactNode;
    text: string;
};

export type IconProps = {
    className: string;
};

const ContactOption = ({ icon, text }: ContactOptionProps) => {
    return (
        <div className="contactoption">
            {icon}
            <p>{text}</p>
        </div>
    );
};
export default ContactOption;
