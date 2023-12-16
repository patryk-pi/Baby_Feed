import {
    weddingTitle,
    weddingText1,
    // weddingText2,
    // weddingText3,
    companyTitle,
    companyText,
    partyTitle,
    partyText,
} from "@/constants/constants";
import Event from "./components/Event";
import Link from "next/link";
import WeddingIcon from "./components/WeddingIcon";
import PartyIcon from "./components/PartyIcon";
import BallonIcon from "./components/BallonIcon";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__box">
                <h1 className="hero__header">DJ na każdy event!</h1>
                <div className="hero__container">
                    <Event
                        icon={<WeddingIcon />}
                        title={weddingTitle}
                        text1={weddingText1}
                        // text2={weddingText2}
                        // text3={weddingText3}
                    />
                    <Event
                        icon={<PartyIcon />}
                        title={companyTitle}
                        text1={companyText}
                    />
                    <Event
                        icon={<BallonIcon />}
                        title={partyTitle}
                        text1={partyText}
                    />
                </div>
                <Link href="/oferta" className="hero__button">
                    Zobacz ofertę
                </Link>
            </div>
        </section>
    );
};
export default Hero;
