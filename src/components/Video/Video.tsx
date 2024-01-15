"use client";

import { Children } from "react";
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
    targetElement?: HTMLElement;
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
                    <div className="video__container">
                        <video autoPlay loop muted playsInline>
                            <source src={source} type="video/mp4" />
                        </video>
                    </div>
                </Parallax>
            </section>
            <section className="video__mobile">
                <div className="video__container-mobile">
                    <video autoPlay loop muted playsInline>
                        <source src={source} type="video/mp4" />
                    </video>
                </div>
            </section>
        </ParallaxProvider>
    );
};
export default Video;
