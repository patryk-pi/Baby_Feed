"use client";

import {
    Parallax,
    ParallaxBanner,
    ParallaxProvider,
} from "react-scroll-parallax";

const Video = () => {
    return (
        <ParallaxProvider>
            <section className="video">
                <Parallax
                    speed={-200}
                    style={{
                        marginTop: "30rem",
                    }}
                >
                    <video autoPlay loop muted playsInline>
                        <source src="/DJVid.mp4" type="video/mp4" />
                    </video>
                </Parallax>
            </section>
        </ParallaxProvider>
    );
};
export default Video;
