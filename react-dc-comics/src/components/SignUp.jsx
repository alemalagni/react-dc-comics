import style from "./SignUp.module.css"

import SignUpSocial from "./SignUpSocial";
const social = ['facebook', 'twitter', 'youtube', 'pinterest', 'periscope']

const SignUp = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className={style.style}>
            <strong> SIGN UP NOW! </strong>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <strong> FOLLOW US </strong>
                {social.map((item) => (
                    <SignUpSocial
                        social={item}
                    />
                ))}
            </div>
        </div>
    );
}

export default SignUp;