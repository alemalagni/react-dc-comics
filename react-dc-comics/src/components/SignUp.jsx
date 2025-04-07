import SignUpSocial from "./SignUpSocial";
const social = ['facebook', 'twitter', 'youtube', 'pinterest', 'periscope']

const SignUp = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong> SIGN UP NOW! </strong>
            {social.map((item) => {
                <SignUpSocial
                    key={item}
                    social={item}
                />
            })}
        </div>
    );
}

export default SignUp;