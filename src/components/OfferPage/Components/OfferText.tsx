type OfferTextProps = {
    header: string;
    paragraph: string;
};

const OfferText = ({ header, paragraph }: OfferTextProps) => {
    return (
        <div className="offer__text">
            <h3 className="offer__text-header">{header}</h3>
            <p className="offer__text-paragraph">{paragraph}</p>
        </div>
    );
};
export default OfferText;
