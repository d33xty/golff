import React from 'react'
import Titulo from '../Titulo'
import styles from './TextoSimples.module.scss'

export default function TextoSimples({titulo, children}) {
    return (
        <div className={styles.container}>
            <Titulo>{titulo}</Titulo>
            {children}
        </div>
    )
}
