import style from "./Comic.module.css";

export default function Comic({ image, title }) {
    return (
        <div className={style.style}>
            <a href="">
                <div className={style.image}><img src={image} alt="" /></div>
                <div className={style.text}><p>{title}</p></div>
            </a>
        </div>
    );
}