import Hero from "@/components/AboutMePage/Components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Video from "@/components/Video/Video";

import { useRef, useEffect, useState } from "react";

const Home = () => {
    return (
        <>
            <Navbar />
            <Video
                source="/dyrygent.mp4"
                parallax={false}
                speed={-800}
                marTop={0}
            />
            <Hero />

            <Footer />
        </>
    );
};
export default Home;
