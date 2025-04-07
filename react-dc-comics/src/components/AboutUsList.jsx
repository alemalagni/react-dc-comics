import style from "./AboutUsList.module.css"

const AboutUsList = ({ label }) => {
    return (
        <div className={style.style}>
            {label}
        </div>
    );
};

export default AboutUsList;