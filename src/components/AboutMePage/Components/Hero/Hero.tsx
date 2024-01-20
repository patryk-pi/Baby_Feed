"use client";
import Image from "next/image";
import Point from "./Point";
import Arrow from "@/components/Arrow/Arrow";
import Title from "../Title/Title";

import { useEffect, useRef, useState } from "react";
import {
    aboutTitle1,
    aboutTitle2,
    aboutTitle3,
    aboutTitle4,
    educationArray,
    carrerArray,
    experienceArray,
    developmentArray,
} from "@/constants/constants";

const Hero = () => {
    const [isElementVisible, setIsElementVisible] = useState<boolean>(false);
    const [isBelow, setIsBelow] = useState<boolean>(true);

    const section = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];

            setIsElementVisible(entry.isIntersecting);

            if (entry.isIntersecting) {
                observer?.disconnect();
            }
        });

        if (section.current) {
            observer.observe(section.current);
        }

        return () => {
            observer.disconnect();
        };
    });

    return (
        <section className="abouthero" id="abouthero" ref={section}>
            <Title header="O mnie" />
            <div className="abouthero__container">
                <Image
                    src={"/profilowe.jpeg"}
                    height={1295}
                    width={1290}
                    alt="Daniel Jaworski"
                    className="abouthero__image"
                />
                <div className="abouthero__text">
                    <Point title={aboutTitle1} points={educationArray} />
                    <Point title={aboutTitle2} points={carrerArray} />
                    <Point title={aboutTitle3} points={experienceArray} />
                    <Point title={aboutTitle4} points={developmentArray} />
                </div>
            </div>
            <Arrow
                id="abouthero"
                state={isElementVisible}
                setState={setIsElementVisible}
                isBelow={isBelow}
            />
        </section>
    );
};

export default Hero;
