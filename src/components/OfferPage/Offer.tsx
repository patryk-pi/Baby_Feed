import Title from "../AboutMePage/Components/Title/Title";
import OfferText from "./Components/OfferText";
import OfferBox from "./Components/OfferBox";

import {
    offerHeader1,
    offerHeader2,
    offerParagraph1,
    offerParagraph2,
    offers,
} from "@/constants/constants";

const Offer = () => {
    return (
        <section className="offer">
            <div className="offer__container">
                <Title header="Oferta" />
                <OfferText header={offerHeader1} paragraph={offerParagraph1} />
                <OfferText header={offerHeader2} paragraph={offerParagraph2} />
                <div className="offer__boxcontainer">
                    {offers.map((offer, index) => (
                        <OfferBox
                            key={index}
                            offerName={offer.offerName}
                            offerDetails={offer.offerDetails}
                            label={offer.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Offer;
