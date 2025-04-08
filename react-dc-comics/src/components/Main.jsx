import style from "./Main.module.css";

export default function Main() {
    return (
        <main className={style.main} >
            <div>
                <div className={style.text}> {'--> Content goes here <--'} </div>
            </div>
        </main >
    );
}