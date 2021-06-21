//next
import Image from 'next/image';
import Link from 'next/link';

//styles
import styles from './home.module.scss';

//components
import Title from "../components/title/title";
import Info from "../components/info/info";
import Button from "../components/button/button";
import BreadCrumb from "../components/breadCrumb/breadCrumb";
import Search from "../components/search/search";

export default function Home() {
    return (
        <div className={styles.container}>
            <Search placeholder="Search for supplier" />
            <Title title="Categories" fs="small" />
        </div>
    )
}
