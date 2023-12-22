import { useRef, useState, useEffect } from "react";

type TitleProps = {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
};

const Title = ({ state, setState, id }: TitleProps) => {
    const myRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setState(entry.isIntersecting);

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
            className={`${"hero__header"} ${state ? "visible" : ""}`}
            ref={myRef}
            id={id}
        >
            DJ na każdy event!
        </h1>
    );
};
export default Title;
