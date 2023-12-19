type PointProps = {
    title: string;
    points: string[];
};

const Point = ({ title, points }: PointProps) => {
    return (
        <section className="point">
            <h3 className="point__title">{title}</h3>
            {points.map((el, index) => (
                <p key={index}>{el}</p>
            ))}
        </section>
    );
};
export default Point;
