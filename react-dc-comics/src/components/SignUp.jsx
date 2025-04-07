import SignUpSocial from "./SignUpSocial";
const social = ['facebook', 'twitter', 'youtube', 'pinterest', 'periscope']

const SignUp = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong> SIGN UP NOW! </strong>
            <div>
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