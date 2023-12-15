"use client";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Video = () => {
    return (
        <ParallaxProvider>
            <section className="video">
                <video autoPlay loop muted playsInline>
                    <source src="/DJVid.mp4" type="video/mp4" />
                </video>
            </section>
        </ParallaxProvider>
    );
};
export default Video;
