import Image from 'next/image';

//styles
import styles from './input.module.scss';

export default function Input({placeholder}){
    return (
       <div className={styles.form}>
           <span className={styles.flag}>
               <Image src="/images/icons/kenya.svg" alt="Kenya" width={30.71} height={36} />
           </span>
           <input className={styles.input} type="tel" placeholder={placeholder} />
       </div>
    )
}