const Video = () => {
    return (
        <section className="video">
            <video autoPlay loop muted playsInline>
                <source src="/DJVid.mp4" type="video/mp4" />
            </video>
        </section>
    );
};
export default Video;
