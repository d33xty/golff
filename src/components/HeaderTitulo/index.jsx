import React from 'react'
import styles from './HeaderTitulo.module.scss'

export default function HeaderTitulo({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
