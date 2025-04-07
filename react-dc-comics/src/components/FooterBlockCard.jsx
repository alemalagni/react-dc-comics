import style from "./FooterBlockCard.module.css"

const FooterBlockCard = ({ label, image }) => {
    return (
        <div className={style.style}>
            {`<img src = "./img/buy-comics-${image}.png" alt="" />`}
            {label}
        </div>
    );
};

export default FooterBlockCard;