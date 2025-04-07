import style from "./NavItem.module.css";

const NavItem = ({ label, onClick }) => {
    return (
        <a href="#">
            <div
                onClick={onClick}
                className={style.style}
            >
                {label}
            </div>
        </a>
    );
};

export default NavItem;
