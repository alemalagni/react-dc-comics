import style from "./SignUp.module.css"

import SignUpSocial from "./SignUpSocial";
const social = ['facebook', 'twitter', 'youtube', 'pinterest', 'periscope']

const SignUp = () => {
    return (
        <div className={style.style}>
            <div>
                <a href="#" className={style.button}><div><strong className={style.buttonText}> SIGN UP NOW! </strong></div></a>
                <div className={style.social}>
                    <strong className={style.follow}> FOLLOW US </strong>
                    {social.map((item) => (
                        <SignUpSocial
                            social={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SignUp;