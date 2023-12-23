type ArrowProps = {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
};

const Arrow = ({ state, setState, id }: ArrowProps) => {
    const handleClick = () => {
        const offset = 100; // Adjust this value based on your requirements
        const targetElement = document.getElementById(id);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            className={`${"arrow"} ${state ? "hidden" : ""}`}
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="arrow__icon"
                viewBox="0 0 384 512"
            >
                <path
                    opacity="1"
                    d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                />
            </svg>
        </section>
    );
};
export default Arrow;
