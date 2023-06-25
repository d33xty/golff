import React, { useContext } from 'react'
import HeaderLink from './HeaderLink'
import styles from './HeaderNav.module.scss'
import {AiOutlineMenu} from 'react-icons/ai'
import {BiExit} from 'react-icons/bi'
import { botaoMenuContexto } from '../../context/BotaoMenu'

export default function HeaderNav({children, imagem}) {
    const {ativo,SetAtivo} = useContext(botaoMenuContexto)
    return (
        <header style={{backgroundImage: `url(/imgs/${imagem}-banner.png)`}} className={styles.header}>
            <div className={styles.headerNav}>
                <HeaderLink color={'var(--branco)'} url={'/'}>Inicio</HeaderLink>
                <nav>
                    <HeaderLink color={'var(--branco)'} url={'/portifolio'}>Portfólio</HeaderLink>
                    <HeaderLink color={'var(--branco)'} url={'/comunicacao'}>A comunicação empresarial</HeaderLink>
                    <HeaderLink color={'var(--branco)'} url={'/noticia'}>Notícia</HeaderLink>
                    <HeaderLink color={'var(--branco)'} url={'/contato'}>Fale Conosco!</HeaderLink>
                </nav>
                <button className={styles.headerNav__button} onClick={() => SetAtivo(true)}><AiOutlineMenu></AiOutlineMenu></button>
                <div style={ativo ? {display: 'inline-block'} : {display: 'none'}} className={styles.menuArea }>
                    <button onClick={() => SetAtivo(false)} className={styles.menuArea__exit}><BiExit color='#000' size={20}></BiExit></button>
                    <HeaderLink color={'var(--preto)'} url={'/portifolio'}>Portfólio</HeaderLink>
                    <HeaderLink color={'var(--preto)'} url={'/comunicacao'}>A comunicação empresarial</HeaderLink>
                    <HeaderLink color={'var(--preto)'} url={'/noticia'}>Notícia</HeaderLink>
                    <HeaderLink color={'var(--preto)'} url={'/contato'}>Fale Conosco!</HeaderLink>
                </div>
            </div>
            <div className={styles.headerContainer}>
                {children}
            </div>
        </header>
    )
}
