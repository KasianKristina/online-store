import styles from './styles.module.css'
import product from '../../assets/product.jpg'

export const Product = () => {
    return (
       
                <div className={styles.product_cart}>
                    <img className={styles.photo} src={product} width='237px' height='180px' ></img>
                    <div className={styles.product_title}>Fish</div>
                    <div className={styles.product_description}>This is fish</div>

                    <div className={styles.bottom}>
                        <div className={styles.price}>1.48 USD</div>
                        <button className={styles.like}></button>
                        <button className={styles.buy}>Buy now</button>
                    </div>
                    
                </div>
    )
}