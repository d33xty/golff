import React from 'react'
import HeaderNav from '../../components/HeaderNav'
import HeaderTitulo from '../../components/HeaderTitulo'
import TextoSimples from '../../components/TextoSimples'

export default function Comunicacao() {
    return (
        <>
            <HeaderNav imagem={'comunicacao'}>
                <HeaderTitulo><h1>A Comunicação <br></br> Empresarial</h1></HeaderTitulo>
            </HeaderNav>
            <section>
                <TextoSimples titulo={<h2>comunicação empresarial:</h2>}>
                    <p>
                        No centro de distribuição administrativo da empresa, observa-se um fluxo comunicacional vertical, ocorrendo nos dois sentidos: ascendente e descendente. Isso se deve ao fato de o Diretor e proprietário circular livremente pelos setores da empresa, estabelecendo uma comunicação direta com os colaboradores. Nas filiais, a comunicação vertical é predominantemente descendente, sendo realizada por meio de ligações telefônicas ou encontros presenciais na matriz. Além disso, ocorre também um fluxo de comunicação horizontal entre os departamentos, embora nem sempre de maneira eficiente. As comunicações informais tendem a ocorrer durante os intervalos de trabalho.
                        <br></br>
                        <br></br>
                        A empresa utiliza uma variedade de canais de comunicação internos e externos. Internamente, são utilizados o telefone, aplicativos de mensagens, mensagens via sistema ERP interno, e-mail e murais. Além disso, as reuniões presenciais também são um canal importante de comunicação interna. Externamente, a empresa se comunica por meio de telefone, mídias sociais e e-mail.
                        <br></br>
                        <br></br>
                        Um dos problemas comunicacionais identificados é a existência de várias fontes de comunicação interna utilizadas pelos funcionários, cabendo a cada um selecionar a sua preferida. Isso pode levar a informações dispersas e dificultar a disseminação eficiente de mensagens importantes.
                        <br></br>
                        <br></br>
                        Uma possível solução para esse problema seria a definição de um meio principal de comunicação entre os setores e departamentos, estabelecendo uma centralização das informações importantes para a empresa. Isso poderia envolver a identificação de um sistema de comunicação interno padrão, como o uso de uma plataforma colaborativa específica, em que todas as informações relevantes sejam compartilhadas de forma organizada e acessível a todos os funcionários. Além disso, seria importante promover a conscientização e a adesão dos colaboradores a esse meio de comunicação principal, por meio de treinamentos e diretrizes claras.
                        <br></br>
                        <br></br>
                        Essas soluções propostas visam garantir uma comunicação mais eficiente, reduzindo a dispersão de informações e facilitando o acesso aos conteúdos relevantes para o bom funcionamento da empresa. É importante adaptar as soluções às necessidades e características específicas da empresa, levando em consideração sua cultura organizacional e os recursos disponíveis.
                        <br></br>
                        <br></br>
                        INFOGRÁFICO.:
                        <br></br>
                        <br></br>
                        <div style={{textAlign: 'center'}}>
                            <img style={{width: '100%'}} src='/imgs/infografico.png' alt='infografico empresarial'></img>
                        </div>
                    </p>
                </TextoSimples>
            </section>
        </>
    )
}
