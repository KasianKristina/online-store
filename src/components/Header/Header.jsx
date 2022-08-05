import styles from './styles.module.css'
import classnames from 'classnames'
import {Menu} from './Menu/Menu'
import {Info} from './Info/Info'
import {Navigation} from './Navigation/Navigation'

export const Header = () => {
    return (
        <header>
            <Info />
            <Navigation />
            <Menu />
        </header>
    )
}