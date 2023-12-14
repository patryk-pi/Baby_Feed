import {
    weddingTitle,
    weddingText1,
    weddingText2,
    weddingText3,
    companyTitle,
    companyText,
    partyTitle,
    partyText,
} from "@/constants/constants";
import Event from "./components/Event";

const Hero = () => {
    return (
        <section className="hero">
            <h1 className="hero__header">DJ na każdy event</h1>
            <div className="hero__container">
                <Event
                    title={weddingTitle}
                    text1={weddingText1}
                    text2={weddingText2}
                    text3={weddingText3}
                />
                <Event title={companyTitle} text1={companyText} />
                <Event title={partyTitle} text1={partyText} />
            </div>
        </section>
    );
};
export default Hero;
