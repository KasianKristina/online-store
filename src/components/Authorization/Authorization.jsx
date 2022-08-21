import styles from './styles.module.css'
import classnames from 'classnames'

export const Authorization = () => {
    return (
        <div className={styles.auth}>
            <div className={styles.auth_header}>Sign in</div>
            <div className={styles.auth_form}>
                <input className={classnames(styles.auth_form_input, styles.auth_form_element)} placeholder='Login'></input>
                <input className={classnames(styles.auth_form_input, styles.auth_form_element)} placeholder='Password'></input>
                <button className={classnames(styles.auth_form_enter, styles.auth_form_element)}>Sign in</button>
                <div className={styles.auth_form_line}>or</div>
                <button className={classnames(styles.auth_form_apple, styles.auth_form_element)}>Sign in with Apple</button>
                <a href="#" className={styles.auth_form_mail}>Sign in with mail</a>
            </div>
        </div>
    )
}