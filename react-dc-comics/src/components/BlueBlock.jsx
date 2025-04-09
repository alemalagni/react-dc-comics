import style from "./BlueBlock.module.css"

const BlueBlock = ({ label, elementStyle }) => {
    return (
        <div className={style.style}
            style={elementStyle}
        >
            {label}
        </div>
    );
};

export default BlueBlock;