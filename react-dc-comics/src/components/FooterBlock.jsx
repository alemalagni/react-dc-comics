import FooterBlockCard from './FooterBlockCard';
const CardItems = ['DIGITAL COMICS', 'DC MERCHANDISE', 'SUBSCRIPTION', 'COMIC SHOP LOCATOR', 'DC POWER VISA'];

const FooterBlock = () => {
    return (
        <div>
            {CardItems.map((item) => (
                <FooterBlockCard
                    key={item}
                    label={item}
                />
            ))};
        </div>
    );
};


export default FooterBlock;