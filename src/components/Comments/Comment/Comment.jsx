import styles from './styles.module.css'
import photo from '../../../assets/person1.jpg'

export const Comment = () => {
    return (
        <div className={styles.comment}>
            <div className={styles.text}>
            “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “
            </div>
            <div className={styles.name}>
                Name and Surname
            </div>
            <img className={styles.photo} src={photo} width="50px" height="50px"></img>
        </div>
    )
}