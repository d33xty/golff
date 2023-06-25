import React from 'react'
import styles from './BodyContainer.module.scss'

export default function BodyContainer({children}) {
    return (
        <div className={styles.bodyContainer}>
            {children}
        </div>
    )
}
