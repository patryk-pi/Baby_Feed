import Hero from "@/components/AboutMePage/Components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Video from "@/components/Video/Video";

import { useRef, useEffect, useState } from "react";

const Home = () => {
    return (
        <>
            <Navbar />

            <Hero />
            <Video
                source="/dyrygent.mp4"
                parallax={true}
                speed={-800}
                marTop={0}
            />

            <Footer />
        </>
    );
};
export default Home;
