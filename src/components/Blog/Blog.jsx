import styles from './styles.module.css'
import post_1 from '../../assets/post_1.jpg'
import person1 from '../../assets/person1.jpg'

export const Blog = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_text}>Read our Blog posts</div>
                <div className={styles.header_go}>Go to Blog</div>
            </div>
            <div className={styles.post}>
                <div className={styles.post_first}>
                    <img className={styles.post_first_photo} width='469px' height='340px' src={post_1}></img>
                    <div className={styles.post_first_text}>
                        Our chef tips for a great and tasty dinner ready in 20 minutes
                        </div>
                        <div className={styles.info}>
                            <img className={styles.post_first_author_photo} src={person1}></img>
                            <div className={styles.post_first_author}>Author</div>
                            <div className={styles.post_first_data}>22.08.2022</div>
                        </div>
                </div>
                <div className={styles.post_second}></div>
                <div className={styles.post_third}></div>
            </div>
        </>
    )
}