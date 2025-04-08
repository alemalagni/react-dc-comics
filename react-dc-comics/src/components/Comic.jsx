import style from "./Comic.module.css";

export default function Comic({ image, title }) {
    return (
        <div className={style.style}>
            <div><img src={image} alt="" /></div>
            <div><p>{title}</p></div>
        </div>
    );
}