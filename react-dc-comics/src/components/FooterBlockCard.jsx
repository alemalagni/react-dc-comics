import style from "./FooterBlockCard.module.css"

const FooterBlockCard = ({ label, image }) => {
    return (
        <a href="#" className={style.style}>
            <img src={`./img/buy-comics-${image}`} alt="" className={style.img} />
            <div>{label}</div>
        </a>
    );
};

export default FooterBlockCard;