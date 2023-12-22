type ArrowProps = {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
};

const Arrow = ({ state, setState }: ArrowProps) => {
    return (
        <section className={`${"arrow"} ${state ? "hidden" : ""}`}>
            &darr;
        </section>
    );
};
export default Arrow;
