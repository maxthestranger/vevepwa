import Link from 'next/link';

//styles
import styles from './button.module.scss';

export default function Button({link, value, color}){
    return (
        <Link href={link}>
            <a className={styles[color]}>{value}</a>
        </Link>
    )
}