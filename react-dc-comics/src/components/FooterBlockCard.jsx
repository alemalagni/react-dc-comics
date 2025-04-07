import style from "./FooterBlockCard.module.css"

const FooterBlockCard = ({ label }) => {
    return (
        <div className={style.style}>
            {label}
        </div>
    );
};

export default FooterBlockCard;