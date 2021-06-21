//next
import Image from 'next/image';

//styles
import styles from './search.module.scss';

const Search = ({placeholder}) => {
    return (
        <div className={styles.search}>
            <input className={styles.searchInput} type="text" placeholder={placeholder} />
            <span className={styles.filter}>
                <Image src="/images/icons/filter.svg" alt="filter" width={24} height={24} />
            </span>
        </div>
    )
}

export default Search;