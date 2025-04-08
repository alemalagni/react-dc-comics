import style from "./FooterBlock.module.css"

import FooterBlockCard from './FooterBlockCard.jsx';
const CardItems = [
    { text: 'DIGITAL COMICS', image: 'digital-comics.png' },
    { text: 'DC MERCHANDISE', image: 'merchandise.png' },
    { text: 'SUBSCRIPTION', image: 'subscriptions.png' },
    { text: 'COMIC SHOP LOCATOR', image: 'shop-locator.png' },
    { text: 'DC POWER VISA', image: 'power-visa.svg' }]
    ;

const FooterBlock = () => {
    return (
        <div className={style.style}>
            <div>
                {CardItems.map((item) => (
                    <FooterBlockCard
                        image={item.image}
                        label={item.text}
                    />
                ))}
            </div>
        </div>
    );
};


export default FooterBlock;