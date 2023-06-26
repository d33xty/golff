import React from 'react'
import HeaderNav from '../../components/HeaderNav'
import HeaderTitulo from '../../components/HeaderTitulo'
import {AiOutlineWhatsApp,AiOutlineMail,AiOutlinePhone,AiOutlineInstagram,AiOutlineFacebook} from 'react-icons/ai'
import styles from './Contato.module.scss'

export default function FaleConosco() {
    return (
        <>
            <HeaderNav imagem={'faleConosco'}>
                <HeaderTitulo><h1>Fale Conosco!</h1></HeaderTitulo>
            </HeaderNav>
            <section className={styles.container}>
                <h2>Contato</h2>
                <section style={{padding: '0px'}}>
                    <div>
                        <p><AiOutlinePhone></AiOutlinePhone>Telefone:</p>
                        <a href="tel:433174-6700">(43) 3174-6700</a>
                    </div>
                    <div>
                        <p><AiOutlineWhatsApp></AiOutlineWhatsApp>WhatsApp:</p>
                        <a href="tel:4399830-5086">(43) 99830-5086</a>
                    </div>
                    <div>
                        <p><AiOutlineMail></AiOutlineMail>E-mail:</p>
                        <a href="mailto:sac@supergolff.com.br">sac@supergolff.com.br</a>
                    </div>
                </section>
                <p>Atendemos de Segunda à Sexta: 8h às 12h das 13h as 18h. <br></br>
                    Sábado: 8h às 11h, exceto domingos e feriados.</p>
                <h2 style={{marginTop: '1rem'}}>Redes sociais</h2>
                <section style={{padding: '0px', marginBottom: "8rem"}}>
                    <div>
                        <p><AiOutlineInstagram></AiOutlineInstagram>Instagram:</p>
                        <a href="https://www.instagram.com/supermercadossupergolff/">acesse aqui!</a>
                    </div>
                    <div>
                        <p><AiOutlineFacebook></AiOutlineFacebook>Facebook:</p>
                        <a href="https://pt-br.facebook.com/ssupergolff/">acesse aqui!</a>
                    </div>
                </section>
            </section>
        </>
    )
}
