import React from 'react'
import styles from './Objectives.module.scss'

export default function Objectives({icon,titlle,children}) {
    return (
        <div className={styles.container}>
            <div>
                {icon}
                <p>{titlle}</p>
            </div>
            {children}
        </div>
    )
}
