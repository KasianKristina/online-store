import styles from './styles.module.css'
import classnames from 'classnames'

export const Navigation = () => {
    return (
        <>
        <div className={styles.line}></div>
        <div className={styles.navigation}>
        
        <div className={styles.information}>
            <div className={classnames(styles.logo, styles.nav)}>Freshnesecom</div>
            <form className={styles.nav}>
                <select className={styles.select_product}>
                        <option>All categories</option>
                        <option>Bakery</option>
                        <option>Fruit and vegetables</option>
                        <option>Meat and fish</option>
                        <option>Drinks</option>
                        <option>Kitchen</option>
                        <option>Special nutrition</option>
                        <option>Baby</option>
                        <option>Pharmacy</option>
                </select>
                <input className={styles.search_product} placeholder="Search products, categories..." type="search"/>
                <button className={styles.button_search} type="submit"></button>
            </form>
            

            <div className={classnames(styles.pictures, styles.nav)}>
                <button className={styles.person}></button>
                <button className={styles.basket}></button>
            </div>

        </div>
        </div>
        </>
    )
}