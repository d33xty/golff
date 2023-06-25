import React from 'react'
import HeaderLink from './HeaderLink'
import { NavLink } from 'react-router-dom'
import styles from './HeaderNav.module.scss'
import {AiOutlineMenu} from 'react-icons/ai'

export default function HeaderNav({children, imagem}) {
    return (
        <header style={{backgroundImage: `url(/imgs/${imagem}-banner.png)`}} className={styles.header}>
            <div className={styles.headerNav}>
                <NavLink className={styles.headerNav__home} to={'/'}>Inicio</NavLink>
                <nav>
                    <HeaderLink url={'/portifolio'}>Portfólio</HeaderLink>
                    <HeaderLink url={'/comunicacao'}>A comunicação empresarial</HeaderLink>
                    <HeaderLink url={'/noticia'}>Notícia</HeaderLink>
                    <HeaderLink url={'/contato'}>Fale Conosco!</HeaderLink>
                </nav>
                <button><AiOutlineMenu></AiOutlineMenu></button>
            </div>
            <div className={styles.headerContainer}>
                {children}
            </div>
        </header>
    )
}
