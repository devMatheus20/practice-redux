import { MdDelete } from 'react-icons/md'

import styles from './styles.module.scss'


export default function Reservas() {
    return (
        <div>
            <h1 className={styles.title}>Você solicitou 1 reservas</h1>

            <div className={styles.reservas}>
                <img src="" alt="" />
                <strong>Viagem Maceio 7 dias</strong>
                <span>Quantidade: 2</span>
                <button
                    type='button'
                    onClick={() => {}}
                >
                    <MdDelete size={20} color="#191919" />
                </button>
            </div>

            <footer>
                <button
                    type='button'
                >
                    Solicitar reservas
                </button>
            </footer>
        </div>
    )
}