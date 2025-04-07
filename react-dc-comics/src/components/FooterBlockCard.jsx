import style from "./FooterBlockCard.module.css"

const FooterBlockCard = ({ label, image }) => {
    return (
        <div className={style.style}>
            <img src={`./img/buy-comics-subscriptions.png`} alt="" className={style.img} />
            <div>{label}</div>
        </div>
    );
};

export default FooterBlockCard;