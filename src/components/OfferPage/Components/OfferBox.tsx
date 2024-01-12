type OfferBoxProps = {
    offerName: string;
    offerDetails: string[];
};

const OfferBox = ({ offerName, offerDetails }: OfferBoxProps) => {
    return (
        <section className="offer__box">
            <h4>{offerName}</h4>
            <ul className="offer__box-list">
                {offerDetails.map((element, index) => (
                    <li key={index} className="offer__box-listitem">
                        {element}
                    </li>
                ))}
            </ul>
        </section>
    );
};
export default OfferBox;
