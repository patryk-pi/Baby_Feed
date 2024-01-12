type OfferBoxProps = {
    offerName: string;
    offerDetails: string[];
    label: boolean;
};

const OfferBox = ({ offerName, offerDetails, label }: OfferBoxProps) => {
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
            {label && <div className="offer__label">BESTSELLER</div>}
        </section>
    );
};
export default OfferBox;
