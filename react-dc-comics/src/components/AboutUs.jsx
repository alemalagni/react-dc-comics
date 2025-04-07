import AboutUsList from "./AboutUsList";
const CardItems0 = ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News'];
const CardItems1 = ['Shop DC', 'Shop DC Collectibles'];
const CardItems2 = ['Terms Of Use', 'Privacy policy (New)', 'Ad Choices', 'Advertising', 'Jobs', 'Subscriptions', 'Talent Workshops', 'CPSC Certificates', 'Ratings', 'Shop Help', 'Contact Us'];
const CardItems3 = ['DC', 'MAD Magazine', 'DC Kids', 'DC Universe', 'DC Power Visa']

const AboutUs = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div>
                <strong>DC COMICS</strong>
                {CardItems0.map((item) => (
                    <AboutUsList
                        key={item}
                        label={item}
                    />
                ))}
                <strong>SHOP</strong>
                {CardItems1.map((item) => (
                    <AboutUsList
                        key={item}
                        label={item}
                    />
                ))}
            </div>
            <div>

            </div>
        </div>
    );
};

export default AboutUs