//styles
import styles from './login.module.scss';

//components
import Title from "../components/title/title";
import Info from "../components/info/info";
import Button from "../components/button/button";
import Input from "../components/input/input";

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <Title title="Login Account" fs="large" />
                <Info info="Hello, Welcome to the app" align="left" />
            </div>
            <form className={styles.form}>
                <Title title="Phone Number" fs="small" />
                <Input placeholder="07XXXXXXXX" />
                <div className={styles.group}>
                    <Button link="/otp" color="primary" value="Request OTP" />
                </div>
            </form>
            <div className={styles.mt}>
                <Info info="By logging in, you are agreeing to the Terms of Service. And that you are 18+" align="left" />
            </div>
        </div>
    )
}
