import { Link } from "react-router-dom"

import styles from './styles.module.scss';

import LogoImg from '../../assets/logo.svg'


export default function Header() {
    return(
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <img src={LogoImg} alt='Logo'/>
            </Link>

            <Link to="/reservations" className={styles.reserva}>
                <div>
                    <strong>Minhas reservas</strong>
                    <span>0 reservas</span>
                </div>
            </Link>
        </header>
    )
}