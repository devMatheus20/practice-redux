import { useState, useEffect } from 'react';

import { api } from '../../services/api'

import { MdFlightTakeoff } from 'react-icons/md'

import styles from './styles.module.scss'



interface Trip {
    id: number;
    title: string;
    status: boolean;
    image: string
}


export default function Home() {

    const [trips, setTrips] = useState<Trip[]>([])

    useEffect(() => {
        async function loadApi() {
            const response = await api.get('/trips')

            setTrips(response.data)
        }

        loadApi()
    }, [])


    return (
        <div>
            <div className={styles.box}>
                {trips.map(trip =>
                    <li key={trip.id}>
                        <img src={trip.image} alt={trip.title} />
                        <strong>{trip.title}</strong>
                        <span>Status: {trip.status ? 'Disponível' : "Indisponível"}</span>

                        <button
                            type="button"
                            onClick={() => { }}
                        >
                            <div>
                                <MdFlightTakeoff size={16} color="#fff" />
                            </div>
                            <span>Solicitar a reserva</span>
                        </button>
                    </li>
                )}
            </div>
        </div>
    )
}