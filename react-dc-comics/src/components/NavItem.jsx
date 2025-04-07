import style from "./NavItem.module.css";

const NavItem = ({ label, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={style.style}
        >
            {label}
        </div>
    );
};

export default NavItem;
