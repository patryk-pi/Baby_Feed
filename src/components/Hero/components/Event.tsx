type EventProps = {
    title: string;
    text1: string;
    text2?: string;
    text3?: string;
};

const Event = ({ title, text1, text2, text3 }: EventProps) => {
    return (
        <section className="event">
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
