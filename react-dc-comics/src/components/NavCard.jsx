import NavItem from './NavItem';
const navItems = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOP'];

const NavCard = () => {
    return (
        <nav style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
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