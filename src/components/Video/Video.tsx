"use client";

import { Children, RefObject } from "react";
import {
    Parallax,
    ParallaxBanner,
    ParallaxBannerLayer,
    ParallaxProvider,
} from "react-scroll-parallax";

type VideoProps = {
    source: string;
    parallax: boolean;
    speed: number;
    marTop?: string | number | undefined;
    targetElement?: HTMLElement;
    ref?: RefObject<HTMLElement>;
};

const Video = ({ source, parallax, speed, marTop, ref }: VideoProps) => {
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
            <section ref={ref} className="video">
                <div className="video__container">
                    <video autoPlay loop muted playsInline>
                        <source src={source} type="video/mp4" />
                    </video>
                </div>
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
