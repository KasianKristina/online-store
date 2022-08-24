import styles from './styles.module.css'
import post_1 from '../../assets/post_1.jpg'
import post_2 from '../../assets/post_2.jpg'
import person1 from '../../assets/person1.jpg'
import note_1 from '../../assets/note_1.jpg'
import note_2 from '../../assets/note_2.jpg'
import note_3 from '../../assets/note_3.jpg'
import classnames from 'classnames'

export const Blog = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.header_text}>Read our Blog posts</div>
                <div className={styles.header_go}>Go to Blog</div>
            </div>

            <div className={styles.post}>

                <div className={styles.post_first}>
                    <img className={styles.post_photo} width='469px' height='340px' src={post_1}></img>
                    <div className={styles.post_first_text}>
                        Our chef tips for a great and tasty dinner ready in 20 minutes
                        </div>
                        <div className={classnames(styles.info, styles.info_first)}>
                            <img className={styles.post_author_photo} src={person1}></img>
                            <div className={classnames(styles.post_first_author, styles.post_author)}>Author</div>
                            <div className={classnames(styles.post_first_data, styles.post_data)}>22.08.2022</div>
                        </div>
                </div>

                <div className={styles.post_second}>
                    <img className={styles.post_photo} width='269px' height='180px' src={post_2}></img>
                    <div className={styles.post_second_tag}>Vegetable</div>
                    <div className={styles.post_second_text}>Which vegetable your family will love and want’s eat each day</div>
                    <div className={styles.info}>
                        <img className={styles.post_author_photo} src={person1}></img>
                        <div className={styles.post_author}>Author</div>
                        <div className={styles.post_data}>18.08.2022</div>
                    </div>
                </div>

                <div className={styles.post_third}>

                    <div className={styles.post_note}>
                        <div className={styles.post_info}>
                            <div className={styles.text}>Salat is kinda good start to your morning routines</div>
                            <div className={styles.info}>
                                <img className={styles.post_author_photo} src={person1}></img>
                                <div className={styles.post_author}>Author</div>
                                <div className={styles.post_data}>19.08.2022</div>
                            </div>
                        </div>
                        <img className={styles.photo} width='96px' height='96px' src={note_1}></img>
                    </div>

                    <div className={styles.post_note}>
                        <div className={styles.post_info}>
                            <div className={styles.text}>Our chef tips for a great and healthy breakfast</div>
                            <div className={styles.info}>
                                <img className={styles.post_author_photo} src={person1}></img>
                                <div className={styles.post_author}>Author</div>
                                <div className={styles.post_data}>22.08.2022</div>
                            </div>
                        </div>
                        <img className={styles.photo} width='96px' height='96px' src={note_2}></img>
                    </div>

                    <div className={styles.post_note}>
                        <div className={styles.post_info}>
                            <div className={styles.text}>Prepare a simple and delicious breads</div>
                            <div className={styles.info}>
                                <img className={styles.post_author_photo} src={person1}></img>
                                <div className={styles.post_author}>Author</div>
                                <div className={styles.post_data}>23.08.2022</div>
                            </div>
                        </div>
                        <img className={styles.photo} width='96px' height='96px' src={note_3}></img>
                    </div>
                </div>

            </div>
        </>
    )
}