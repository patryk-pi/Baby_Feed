type ArrowProps = {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
};

const Arrow = ({ state, setState, id }: ArrowProps) => {
    return (
        <section className={`${"arrow"} ${state ? "hidden" : ""}`}>
            &darr;
        </section>
    );
};
export default Arrow;
