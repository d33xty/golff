import React from 'react'
import styles from './HeaderLink.module.scss'
import { NavLink } from 'react-router-dom'

export default function HeaderLink({children,url,color}) {
    return (
        <div className={styles.headerLink}>
            <NavLink style={{color: color}} to={url} className={styles.headerLink__link}>{children}</NavLink>
        </div>
    )
}
