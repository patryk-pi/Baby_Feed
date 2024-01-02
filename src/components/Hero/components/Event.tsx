import { ReactElement, ReactNode, useEffect, useRef } from "react";

type EventProps = {
    icon: ReactNode;
    title: string;
    text1: string;
    text2?: string;
    text3?: string;
    color?: string;
};

const Event = ({ icon, title, text1, text2, text3, color }: EventProps) => {
    const section = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            console.log(entries);

            if (entry.isIntersecting) {
                observer?.disconnect();
            }
        });

        if (section.current) {
            observer.observe(section.current);
        }
    }, []);

    return (
        <section className="event" ref={section}>
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
