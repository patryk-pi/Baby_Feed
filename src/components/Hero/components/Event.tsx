import { ReactElement, ReactNode, useEffect, useRef } from "react";

type EventProps = {
    icon: ReactNode;
    title: string;
    text1: string;
    text2?: string;
    text3?: string;
    color?: string;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    number: number;
};

const Event = ({
    icon,
    title,
    text1,
    text2,
    text3,
    color,
    visible,
    setVisible,
    number,
}: EventProps) => {
    const section = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisible(entry.isIntersecting);

            if (entry.isIntersecting) {
                observer?.disconnect();
            }
        });

        if (section.current) {
            observer.observe(section.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section
            className={`event event-${number} ${visible ? "visible" : ""}`}
            ref={section}
        >
            {icon}
            <div className="event__title">
                {" "}
                <h3>{title}</h3>
            </div>
            <div className="event__text">
                <p>{text1}</p>
                {text2 && <p>{text2}</p>}
                {text3 && <p>{text3}</p>}
            </div>
        </section>
    );
};
export default Event;
