import SignUpSocial from "./SignUpSocial";
const Social = ['facebook', 'twitter', 'youtube', 'pinterest', 'periscope']

const SignUp = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong> SIGN UP NOW! </strong>
            <SignUpSocial />
        </div>
    );
}

export default SignUp;