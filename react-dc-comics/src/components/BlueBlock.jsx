import style from "./BlueBlock.module.css"

const BlueBlock = ({ label }) => {
    return (
        <div className={style.style}>
            {label}
        </div>
    );
};

export default BlueBlock;