import React, { useState } from 'react';
import NavItem from './NavItem';
const navItems = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOP'];

const NavCard = () => {
    const [active, setActive] = useState('COMICS');
    return (
        <nav style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            {navItems.map((item) => (
                <NavItem
                    key={item}
                    label={item}
                    isActive={active === item}
                    onClick={() => setActive(item)}
                />
            ))}
        </nav>
    );
};

export default NavCard;