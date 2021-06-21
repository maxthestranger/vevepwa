
//styles
import styles from './info.module.scss';

export default function Info({info, align}){
    return (
        <p className={styles[align]}>{info}</p>
    )
}