import React from 'react'
import HeaderNav from '../../components/HeaderNav'
import HeaderTitulo from '../../components/HeaderTitulo'
import TextoSimples from '../../components/TextoSimples'

export default function Noticia() {
    return (
        <>
            <HeaderNav imagem={'noticia'}>
                <HeaderTitulo><h1>Notícia</h1></HeaderTitulo>
            </HeaderNav>
            <section>
                <TextoSimples>
                    <p>
                        <strong>REDE VAREJISTA ANUNCIA INVESTIMENTOS DE R$ 40 MILHÕES EM DUAS NOVAS UNIDADES EM LONDRINA</strong> 
                        <br></br>
                        <br></br>
                        A Rede Super Golff está em constante crescimento na cidade de Londrina, expandindo suas operações para incluir duas novas unidades de supermercados. As novas lojas serão localizadas na região norte, próximo ao Estádio do Café, e na região leste, próxima à Universidade Tecnológica do Paraná (UTFPR). Com um investimento total de R$ 40 milhões, essa expansão resultará na criação de 1.200 empregos, sendo 400 empregos diretos e 800 empregos indiretos.
                        <br></br>
                        <br></br>
                        Os proprietários da Rede Super Golff compartilharam essa novidade durante uma reunião com o presidente do Instituto de Desenvolvimento de Londrina (Codel), no gabinete do prefeito. A prefeitura tem fornecido suporte no processo de abertura dos novos empreendimentos, auxiliando em questões burocráticas e licenciamento.
                        <br></br>
                        <br></br>
                        O secretário municipal do Trabalho, Emprego e Renda também se colocou à disposição para ajudar na seleção de funcionários, utilizando o banco de cadastros e fornecendo espaço para entrevistas. O objetivo é agilizar o processo de contratação e promover a criação de novos postos de trabalho.
                        <br></br>
                        <br></br>
                        Os sócios-proprietários do grupo investidor expressaram confiança no potencial de crescimento contínuo da Rede Super Golff em Londrina, mesmo considerando o cenário pós-pandemia.
                        <br></br>
                        <br></br>
                        Além do presidente da Codel, a reunião também contou com a participação de vereadores locais.
                        <br></br>
                        <br></br>
                        fonte: <a href='https://blog.londrina.pr.gov.br/?p=91293'>https://blog.londrina.pr.gov.br/?p=91293</a>
                    </p>
                </TextoSimples>
            </section>
        </>
    )
}
