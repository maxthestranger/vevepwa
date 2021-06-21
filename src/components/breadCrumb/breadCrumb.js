//styles
import styles from './breadCrumb.module.scss';
import Title from "../title/title";

export default function BreadCrumb({title}){
    return (
        <div className={styles.bread}>
            <div>
                <p>⬅</p>
            </div>
            <div>
                <Title title={title} fs="small" />
            </div>
        </div>
    )
}