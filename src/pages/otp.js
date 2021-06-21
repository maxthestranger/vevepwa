//next
import Image from 'next/image';

//styles
import styles from './otp.module.scss';

//components
import Title from "../components/title/title";
import Info from "../components/info/info";
import Button from "../components/button/button";
import BreadCrumb from "../components/breadCrumb/breadCrumb";

export default function Otp() {
    return (
        <div className={styles.container}>
            <BreadCrumb title="OTP" />
            <div className={styles.ill}>
                <Image src="/images/illustrations/otp.svg" alt="illustration" width={235} height={199} />
            </div>
            <div className={styles.info}>
                <Title title="Verification code" fs="small" />
                <Info info="We have the code verification to Your Mobile number" align="center" />
                <Title title="+2547XXXXXXXX" fs="small" />
            </div>
            <div className={styles.code}>
                <div>
                    3
                </div>
                <div>
                    7
                </div>
                <div>
                    7
                </div>
                <div>
                    2
                </div>
            </div>

            <Button link="/htw" value="Submit" color="primary" />
        </div>
    )
}
