import style from "./Main.module.css";
import MainComics from "./MainComics.jsx"
import MainBG from "./MainBG.jsx"

export default function Main() {
    return (
        <main className={style.main} >
            <MainBG />
            <MainComics />
        </main >
    );
}