"use client";

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

import { useState } from "react";
import Event from "./components/Event";
import Link from "next/link";
import WeddingIcon from "./components/WeddingIcon";
import PartyIcon from "./components/PartyIcon";
import BallonIcon from "./components/BallonIcon";
import Title from "./components/Title";
import Arrow from "../Arrow/Arrow";

const Hero = () => {
    const [isElementVisible, setIsElementVisible] = useState<boolean>(false);

    return (
        <section className="hero">
            <div className="hero__box">
                <Title
                    state={isElementVisible}
                    setState={setIsElementVisible}
                />
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
            <Arrow state={isElementVisible} setState={setIsElementVisible} />
        </section>
    );
};
export default Hero;
