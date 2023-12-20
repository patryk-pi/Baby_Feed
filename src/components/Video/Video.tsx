"use client";

import {
    Parallax,
    ParallaxBanner,
    ParallaxProvider,
} from "react-scroll-parallax";

type VideoProps = {
    source: string;
    parallax: boolean;
};

const Video = ({ source, parallax }: VideoProps) => {
    if (!parallax) {
        return (
            <section className="video">
                <video autoPlay loop muted playsInline>
                    <source src={source} type="video/mp4" />
                </video>
            </section>
        );
    }

    return (
        <ParallaxProvider>
            <section className="video">
                <Parallax
                    speed={-200}
                    style={{
                        marginTop: "-6rem",
                    }}
                >
                    <video autoPlay loop muted playsInline>
                        <source src={source} type="video/mp4" />
                    </video>
                </Parallax>
            </section>
        </ParallaxProvider>
    );
};
export default Video;
