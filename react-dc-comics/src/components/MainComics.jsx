import style from "./MainComics.module.css";
import comicArray from "../comics.js";
import Comic from "./Comic.jsx";

export default function MainComic(image, title) {
    return (
        <div className={style.style}>
            {comicArray.map((item) => (
                <Comic
                    image={item.thumb}
                    title={item.title}
                />
            ))}
        </div>
    );
}