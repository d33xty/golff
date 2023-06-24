import React from 'react'
import HeaderLink from './HeaderLink'
import { NavLink } from 'react-router-dom'
import styles from './HeaderNav.module.scss'

export default function HeaderNav({children, imagem}) {
    return (
        <header style={{backgroundImage: `url(/imgs/${imagem}-banner.png)`}} className={styles.header}>
            <div className={styles.headerNav}>
                <NavLink className={styles.headerNav__home} to={'/'}>Inicio</NavLink>
                <nav>
                    <HeaderLink>Portfólio</HeaderLink>
                    <HeaderLink>A comunicação empresarial</HeaderLink>
                    <HeaderLink>Notícia</HeaderLink>
                    <HeaderLink>Fale Conosco!</HeaderLink>
                </nav>
            </div>
            <div className={styles.headerContainer}>
                {children}
            </div>
        </header>
    )
}
