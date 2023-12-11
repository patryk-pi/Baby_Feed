const Video = () => {
    return (
        <section className="video">
            <video autoPlay loop muted>
                <source src="/DJVid.mp4" type="video/mp4" />
            </video>
        </section>
    );
};
export default Video;
