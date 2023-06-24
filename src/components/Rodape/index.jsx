import React from 'react'
import styles from './Rodape.module.scss'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div style={{backgroundImage: 'url(/imgs/onda2.svg)'}}></div>
            <p>℗ super golff</p>
            <div style={{backgroundImage: 'url(/imgs/onda1.svg)'}}>
            </div>
        </footer>
    )
}
