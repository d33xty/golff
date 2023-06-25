import React from 'react'
import HeaderNav from '../../components/HeaderNav'
import HeaderTitulo from '../../components/HeaderTitulo'
import TextoSimples from '../../components/TextoSimples'

export default function FaleConosco() {
    return (
        <>
            <HeaderNav imagem={'faleConosco'}>
                <HeaderTitulo><h1>Fale Conosco!</h1></HeaderTitulo>
            </HeaderNav>
            <section>
                <TextoSimples titulo={<h2>ATENDIMENTO</h2>}>
                    <p>Telefone:<a href="tel:433174-6700">(43) 3174-6700</a></p>
                    <br></br>
                    <br></br>
                    <p>WhatsApp:<a href="tel43:99830-5086">(43) 99830-5086</a></p>
                    <br></br>
                    <br></br>
                    <p>E-mail:<a href="mailto:sac@supergolff.com.br">sac@supergolff.com.br</a></p>
                    <br></br>
                    <br></br>
                    <p>Atendemos de Segunda à Sexta: 8h às 12h das 13h as 18h. <br></br>
                    Sábado: 8h às 11h, exceto domingos e feriados.</p>
                    <br></br>
                    <br></br>
                    <div style={{marginBottom: '4rem'}}>
                        <p>Redes socias:</p>
                        <p>Instagram:<a href="https://www.instagram.com/supermercadossupergolff/">https://www.instagram.com/supermercadossupergolff/</a></p>
                        <p>Facebook:<a href="https://pt-br.facebook.com/ssupergolff/">https://pt-br.facebook.com/ssupergolff/</a></p>
                    </div>
                </TextoSimples>
            </section>
        </>
    )
}
