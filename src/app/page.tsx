import Arrow from "@/components/Arrow/Arrow";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Video from "@/components/Video/Video";

const Home = () => {
    return (
        <>
            <Navbar />
            <Video
                source={"/DJVid.mp4"}
                parallax={true}
                speed={-200}
                marTop={"-6rem"}
            />
            <Hero />
            <Footer />
        </>
    );
};

export default Home;
