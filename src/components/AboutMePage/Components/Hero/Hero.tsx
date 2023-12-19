import Title from "../Title/Title";
import Image from "next/image";

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
                <div className="abouthero__text"></div>
            </div>
        </section>
    );
};
export default Hero;
