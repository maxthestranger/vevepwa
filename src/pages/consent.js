//next image
import Image from "next/image";

//styles
import styles from './consent.module.scss';
import Title from "../components/title/title";
import Info from "../components/info/info";
import Button from "../components/button/button";

export default function Consent() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/images/brand/logo_trans.svg" alt="Veve" width={218} height={83} />
            </div>
            <div className={styles.info}>
                <Title title="This app is only for persons over the age of 18" fs="medium" />
                <Info info="This app is an e-commerce store for alcohol products and is not suitable for persons under the age of 18." align="center" />
            </div>
            <div className={styles.btn}>
                <Button link="/login" color="primary" value="I am over 18" />
                <Button link="/" color="secondary" value="I am under 18" />
            </div>
        </div>
    )
}
