import React from 'react'
import styles from './LIsta.module.scss'

export default function Lista({itens}) {
    return (
        <ul className={styles.Lista}>
            {itens.map(itemAtual => <li>{itemAtual}</li>)}
        </ul>
    )
}
