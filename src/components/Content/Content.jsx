import styles from './styles.module.css'
import banner_1 from '../../assets/banner_1.jpg'
import banner_2 from '../../assets/banner_2.jpg'
import classnames from 'classnames'

export const Content = () => {
    return (
        <div className={styles.content}>

            <div className={styles.menu}>
                <div className={styles.category_menu}>Category menu</div>
                <a href='#' className={styles.category}>Bakery</a>
                <a href='#' className={styles.category}>Fruit and vegetables</a>
                <a href='#' className={styles.category}>Meat and Fish</a>
                <a href='#' className={styles.category}>Drinks</a>
                <a href='#' className={styles.category}>Kitchen</a>
                
                <button className={styles.button_categories}>More categories</button>
            </div>

            <div className={styles.container}>
            
            <div className={styles.banner_text}>Bowl with salmon and avocado</div>
            <img src={banner_1} width='412px' height='290px' className={classnames(styles.banner_1, styles.banners)}></img>
            <button className={styles.bunner_button}>Read recipe</button>
            </div>

            <div className={styles.container}>
            <div className={styles.banner_text}>Summer salad</div>
            <img src={banner_2} width='412px' height='290px' className={classnames(styles.banner_2, styles.banners)}></img>
            <button className={styles.bunner_button}>Read recipe</button>
            </div>

        </div>
    )
}