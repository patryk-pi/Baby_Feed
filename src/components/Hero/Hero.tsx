const src = "";

const Hero = () => {
    return (
        <section className="hero">
            <video autoPlay muted loop>
                <source src="/DJVid.mp4" type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
        </section>
    );
};
export default Hero;
