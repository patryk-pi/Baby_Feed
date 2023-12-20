import Hero from "@/components/AboutMePage/Components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Video from "@/components/Video/Video";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Video source="/dyrygent.mp4" parallax={false} />
        </>
    );
};
export default Home;
