import style from "./Header.module.css"

import NavCard from "./NavCard.jsx";

export default function Header() {
    return (
        <header className={style.style}>
            <><img src="../../img/dc-logo.png" className={style.logo} /></>
            <><NavCard></NavCard></>
        </header>
    );
}