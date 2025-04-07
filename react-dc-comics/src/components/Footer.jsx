import FooterBlock from "./FooterBlock";
import AboutUs from "./AboutUs";
import SignUp from "./SignUp";

import style from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={style.style}>
            <FooterBlock></FooterBlock>
            <AboutUs></AboutUs>
            <SignUp></SignUp>
        </footer>
    );
}