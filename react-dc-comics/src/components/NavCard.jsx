import style from "./NavCard.module.css"

import NavItem from './NavItem';
const navItems = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOP'];

const NavCard = () => {
    return (
        <nav className={style.style}>
            {navItems.map((item) => (
                <NavItem
                    key={item}
                    label={item}
                />
            ))}
        </nav>
    );
};

export default NavCard;