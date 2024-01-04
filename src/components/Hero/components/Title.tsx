import { BlobOptions } from "buffer";
import { useRef, useState, useEffect } from "react";

type TitleProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
    below: boolean;
    setBelow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Title = ({ visible, setVisible, id, below, setBelow }: TitleProps) => {
    const myRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisible(entry.isIntersecting);
            console.log(entry.boundingClientRect.top);
            setBelow(entry.boundingClientRect.top >= 0 ? true : false);

            if (entry.isIntersecting) {
                observer?.disconnect();
            }
        });

        if (myRef.current) {
            observer.observe(myRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <h1
            className={`${"hero__header"} ${visible ? "visible" : ""}`}
            ref={myRef}
            id={id}
        >
            DJ na każdy event!
        </h1>
    );
};
export default Title;
