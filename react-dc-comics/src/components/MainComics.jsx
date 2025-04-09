import style from "./MainComics.module.css";
import comicArray from "../comics.js";
import Comic from "./Comic.jsx";
import BlueBlock from "./BlueBlock.jsx";

export default function MainComic(image, title) {
    return (
        <div className={style.main}>
            <BlueBlock
                label={'CURRENT SERIES'}
                elementStyle={{ fontSize: '24px', position: 'absolute', top: '-4%', left: '9%', padding: '7px 15px' }}
            />
            <div className={style.style}>
                {comicArray.map((item) => (
                    <Comic
                        image={item.thumb}
                        title={item.series}
                    />
                ))}
            </div>
            <a href="#">
                <BlueBlock
                    label={'LOAD MORE'}
                    elementStyle={{ fontSize: '11px', position: 'absolute', bottom: '5%', justifySelf: 'anchor-center', padding: '7px 60px' }}
                />
            </a>
        </div>
    );
}