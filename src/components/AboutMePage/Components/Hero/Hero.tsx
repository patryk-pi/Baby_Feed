import Title from "../Title/Title";
import Image from "next/image";
import Point from "./Point";

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
    return (
        <section className="abouthero">
            <Title />
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
        </section>
    );
};
export default Hero;
