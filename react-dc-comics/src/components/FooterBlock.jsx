import style from "./FooterBlock.module.css"

import FooterBlockCard from './FooterBlockCard.jsx';
const CardItems = ['DIGITAL COMICS', 'DC MERCHANDISE', 'SUBSCRIPTION', 'COMIC SHOP LOCATOR', 'DC POWER VISA'];

const FooterBlock = () => {
    return (
        <div className={style.style}>
            {CardItems.map((item) => (
                <FooterBlockCard
                    key={item}
                    label={item}
                />
            ))}
        </div>
    );
};


export default FooterBlock;