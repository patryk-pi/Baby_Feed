import { useRef, useState, useEffect } from "react";

const Title = () => {
    const myRef = useRef<HTMLHeadingElement>(null);
    const [isElementVisible, setIsElementVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsElementVisible(entry.isIntersecting);

            if (entry.isIntersecting) {
                // Stop observing when element is visible
                observer?.disconnect();
            }
        });

        if (myRef.current) {
            observer.observe(myRef.current);
        }
    }, []);
    return (
        <h1
            className={`${"hero__header"} ${isElementVisible ? "visible" : ""}`}
            ref={myRef}
        >
            DJ na każdy event!
        </h1>
    );
};
export default Title;
