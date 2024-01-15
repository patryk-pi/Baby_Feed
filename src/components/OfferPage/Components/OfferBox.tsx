"use client";

import { useEffect, useRef, useState } from "react";

type OfferBoxProps = {
    offerName: string;
    offerDetails: string[];
    label: boolean;
    boxNumber: number;
};

const OfferBox = ({
    offerName,
    offerDetails,
    label,
    boxNumber,
}: OfferBoxProps) => {
    const offer = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                setVisible(entry.isIntersecting);

                if (entry.isIntersecting) {
                    observer?.disconnect();
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (offer.current) {
            observer.observe(offer.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section
            ref={offer}
            className={`offer__box offer__box-${boxNumber} ${
                visible ? "visible" : ""
            }`}
        >
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
