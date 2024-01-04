"use client";

import {
    Parallax,
    ParallaxBanner,
    ParallaxProvider,
} from "react-scroll-parallax";

type VideoProps = {
    source: string;
    parallax: boolean;
    speed: number;
    marTop?: string | number | undefined;
};

const Video = ({ source, parallax, speed, marTop }: VideoProps) => {
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
                    speed={speed}
                    style={{
                        marginTop: marTop,
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
