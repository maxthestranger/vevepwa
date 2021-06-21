//styles
import styles from './title.module.scss';

export default function Title({title, fs}){
    return (
        <p className={styles[fs]}>{title}</p>
    )
}