//next
import Image from 'next/image';
import Link from 'next/link';

//styles
import styles from './htw.module.scss';

//components
import Title from "../components/title/title";
import Info from "../components/info/info";
import Button from "../components/button/button";
import BreadCrumb from "../components/breadCrumb/breadCrumb";

export default function Htw() {
    return (
        <div className={styles.container}>
            <div className={styles.ill}>
                <Image src="/images/illustrations/htw.svg" alt="How it works" width={412.59} height={495.66} />
            </div>
            <div className={styles.info}>
                <Title title="On-demand Veve Delivery Solution" fs="large" />
                <Info info="Recommended features for the assignment of orders to trucks and drivers available nearby" align="left" />
            </div>
            <div className={styles.btn}>
                <Link href="/home">
                    <a>&gt;</a>
                </Link>
            </div>
        </div>
    )
}
