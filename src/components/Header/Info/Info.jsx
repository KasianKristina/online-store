import styles from './styles.module.css'

export const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.communication}>
                <a href="#" className={styles.contact_green}>Chat with us</a>
                <a href="#" className={styles.contact_black}>+420 336 775 664</a>
                <a href="#" className={styles.contact_black}>info@freshnesecom</a>
            </div>
            <div className={styles.blog}>
                <a href="#" className={styles.contact_green}>Blog</a>
                <a href="#" className={styles.contact_green}>About Us</a>
                <a href="#" className={styles.contact_green}>Careers</a>
            </div>
        </div>
    )
}