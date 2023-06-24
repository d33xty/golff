import React from 'react'
import styles from './HeaderLink.module.scss'
import { NavLink } from 'react-router-dom'

export default function HeaderLink({children}) {
    return (
        <div className={styles.headerLink}>
            <NavLink className={styles.headerLink__link}>{children}</NavLink>
        </div>
    )
}
