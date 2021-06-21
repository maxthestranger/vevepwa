//next
import Image from "next/image";

//styles
import styles from './product.module.scss';

const Product = ({title}) => {
    return (
        <div>
            <div className={styles.product}>
                <div className={styles.ImgAsBg}>
                    <Image src="/images/bgs/asili.png" alt="product" height={93} width={112} />
                </div>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Product;