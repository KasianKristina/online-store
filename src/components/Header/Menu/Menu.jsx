import styles from './styles.module.css'

export const Menu = () => {
    return (
    <div className={styles.menu}>
        <select className={styles.minimenu}>
            <option>Bakery</option>
            <option>else</option>
        </select>
        <select className={styles.minimenu} id="">
            <option>Fruit and vegetables</option>
            <option>else</option>
        </select>
        <select className={styles.minimenu} id="">
            <option>Meat and Fish</option>
            <option>else</option>
        </select>
        <select className={styles.minimenu} id="">
            <option>Drinks</option>
            <option>else</option>
        </select>
        <select className={styles.minimenu} id="">
            <option>Special nutrition</option>
            <option>else</option>
        </select>
        <select className={styles.minimenu} id="">
            <option>Baby</option>
            <option>else</option>
        </select>
        <select className={styles.minimenu} id="">
            <option>Pharmacy</option>
            <option>else</option>
        </select>
    </div>
    )
}