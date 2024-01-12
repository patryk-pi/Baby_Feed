type TitleProps = {
    header: string;
};

const Title = ({ header }: TitleProps) => {
    return (
        <section className="about__title">
            <h2>{header}</h2>
        </section>
    );
};
export default Title;
