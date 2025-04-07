import style from "./AboutUs.module.css"

import AboutUsList from "./AboutUsList";
const CardItems0 = ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News'];
const CardItems1 = ['Shop DC', 'Shop DC Collectibles'];
const CardItems2 = ['Terms Of Use', 'Privacy policy (New)', 'Ad Choices', 'Advertising', 'Jobs', 'Subscriptions', 'Talent Workshops', 'CPSC Certificates', 'Ratings', 'Shop Help', 'Contact Us'];
const CardItems3 = ['DC', 'MAD Magazine', 'DC Kids', 'DC Universe', 'DC Power Visa']

const AboutUs = () => {
    return (
        <div className={style.style}>
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
                <strong>DC</strong>
                {CardItems2.map((item) => (
                    <AboutUsList
                        key={item}
                        label={item}
                    />
                ))}
            </div>
            <div>
                <strong>SITES</strong>
                {CardItems3.map((item) => (
                    <AboutUsList
                        key={item}
                        label={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutUs