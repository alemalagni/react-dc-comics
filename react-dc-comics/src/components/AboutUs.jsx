import AboutUsList from "./AboutUsList";
const CardItems0 = ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News']

const AboutUs = () => {
    return (
        <div>
            <strong>DC COMICS</strong>
            {CardItems0.map((item) => (
                <AboutUsList
                    key={item}
                    label={item}
                />
            ))};
        </div>
    );
};

export default AboutUs