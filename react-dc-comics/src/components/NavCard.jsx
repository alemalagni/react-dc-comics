import React, { useState } from 'react';
import NavItem from './NavItem';
const navItems = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOP'];

const NavCard = () => {
    const [active, setActive] = useState('COMICS');

};

export default NavCard;