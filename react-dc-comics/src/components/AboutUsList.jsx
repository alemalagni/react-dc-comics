import style from "./AboutUsList.module.css"

const AboutUsList = ({ label }) => {
    return (
        <div>
            <a href="#" className={style.style}>
                {label}
            </a>
        </div>
    );
};

export default AboutUsList;