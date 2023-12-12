type EventProps = {
    title: string;
    text1: string;
    text2?: string;
    text3?: string;
};

const Event = ({ title, text1, text2, text3 }: EventProps) => {
    return (
        <section className="event">
            <h3 className="event__title">{title}</h3>
            <p className="event__text">{text1}</p>
            {text2 && <p className="event__text">{text2}</p>}
            {text3 && <p className="event__text">{text3}</p>}
        </section>
    );
};
export default Event;
