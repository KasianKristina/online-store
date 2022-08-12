import styles from './styles.module.css'

export const Comments = () => {
    return (
        <>
        <div className={styles.comments}>
            <div>Our customers says</div>
        </div>

        <div className={styles.carousel}>
            <button className={styles.arrow_prev}></button>
            <div className={styles.gallery}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        </>
    )
}