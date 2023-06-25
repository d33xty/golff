import React from   'react' 
import HeaderNav from '../../components/HeaderNav'
import styles from './Inicio.module.scss'
import Objectives from '../../components/Objectives'
import TextoSimples from '../../components/TextoSimples'
import Lista from '../../components/Lista'

export default function Inicio() {
    const listaItens = [
        {
            item: 'valores',
            lista: [
                "ética profissional e respeito em todas as nossas relações, agindo de forma íntegra e transparente em todas as nossas interações com clientes, fornecedores e colaboradores.",
                "Capacitação e desenvolvimento dos nossos colaboradores, promovendo um ambiente de trabalho inclusivo, incentivando o aprendizado contínuo e o crescimento profissional.",
                "Melhoria contínua dos processos, buscando constantemente maneiras de aprimorar a eficiência, qualidade e produtividade em todas as áreas do nosso negócio.",
                "Credibilidade e qualidade dos produtos e serviços prestados, garantindo que nossos clientes recebam produtos de alta qualidade e um atendimento excepcional."
            ]
        },
        {
            item: 'valores',
            lista: [
                "ética profissional e respeito em todas as nossas relações, agindo de forma íntegra e transparente em todas as nossas interações com clientes, fornecedores e colaboradores.",
                "Capacitação e desenvolvimento dos nossos colaboradores, promovendo um ambiente de trabalho inclusivo, incentivando o aprendizado contínuo e o crescimento profissional.",
                "Melhoria contínua dos processos, buscando constantemente maneiras de aprimorar a eficiência, qualidade e produtividade em todas as áreas do nosso negócio.",
                "Credibilidade e qualidade dos produtos e serviços prestados, garantindo que nossos clientes recebam produtos de alta qualidade e um atendimento excepcional."
            ]
        },
        {
            item: 'valores',
            lista: [
                "ética profissional e respeito em todas as nossas relações, agindo de forma íntegra e transparente em todas as nossas interações com clientes, fornecedores e colaboradores.",
                "Capacitação e desenvolvimento dos nossos colaboradores, promovendo um ambiente de trabalho inclusivo, incentivando o aprendizado contínuo e o crescimento profissional.",
                "Melhoria contínua dos processos, buscando constantemente maneiras de aprimorar a eficiência, qualidade e produtividade em todas as áreas do nosso negócio.",
                "Credibilidade e qualidade dos produtos e serviços prestados, garantindo que nossos clientes recebam produtos de alta qualidade e um atendimento excepcional."
            ]
        }
    ]
    console.log(listaItens[1]);
    return (
        <>
            
                <HeaderNav imagem={'home'}>
                    <div className={styles.headerContainer}>
                        <img src="/imgs/logo.png" alt="logo" />
                        <h1>Descubra o par perfeito entre qualidade e economia no Super Golff, o supermercado que transforma suas compras em uma tacada certeira!</h1>
                    </div>
                </HeaderNav>
                <section>
                    <TextoSimples titulo={<h2>NOSSA HISTÓRIA</h2>}> 
                        <p>A história do Supermercado Super Golff começou em 1991, quando Manoel Arilton Salles deixou sua profissão de caminhoneiro para se aventurar no setor de supermercados. Ele fundou sua primeira loja, o Mercado Nossa Senhora Aparecida, localizado em Cambé, PR. Sete anos depois, abriu a primeira loja com o nome de Supermercado Golfinho, também na mesma região. Com o passar do tempo, expandiu a rede, abrindo mais quatro lojas na cidade. O Supermercado Super Golff conquistou respeito e confiança dos clientes, negociando melhores condições com fornecedores devido ao aumento do poder de compra. Em 2003, venceram uma concorrência e abriram uma loja em Londrina, PR, fortalecendo sua presença na região. A história da empresa é marcada por perseverança, dedicação e compromisso em oferecer um serviço de qualidade para atender às necessidades dos clientes, sempre focados em crescer e se tornar referência no setor de supermercados.</p>
                    </TextoSimples>
                </section>
                <section className={styles.objectivesContainer}>
                    <Objectives icon={<i class="fa-solid fa-bullseye"></i>} titlle={'Missão'}>
                        <Lista itens={listaItens[0].lista} id={listaItens[0].item}></Lista>
                    </Objectives>
                    <Objectives icon={<i class="fa-solid fa-eye"></i>} titlle={'Visão'}>
                        <Lista itens={listaItens[1].lista} id={listaItens[1].item}></Lista>
                    </Objectives>
                    <Objectives icon={<i class="fa-solid fa-heart"></i>} titlle={'Valores'}>
                        <Lista itens={listaItens[2].lista} id={listaItens[2].item}></Lista>
                    </Objectives>
                </section>
                <section>
                    <TextoSimples titulo={<h2 className={styles.textoExpansao}>PROCESSO DE EXPANSÃO <br></br> DA EMPRESA:</h2>}> 
                        <p>Somos uma Rede Mercadista Familiar em constante crescimento e desenvolvimento. Nossa missão é oferecer produtos de qualidade a preços mais acessíveis para atender às necessidades da população em geral. Atualmente, contamos com 18 lojas e temos a previsão de inaugurar mais 1 lojas em Londrina ao longo de 2023 e em constante transformação e reforma das lojas existentes. Contribuímos para a geração de mais de 1.600 empregos diretos e 1.200 empregos indiretos, e estamos orgulhosos de sermos reconhecidos como a segunda marca mais lembrada em nosso segmento na pesquisa top de marcas 2022.
                        Buscamos o crescimento da nossa Rede em conjunto com a comunidade, contribuindo para a construção de uma sociedade mais igualitária. Valorizamos os relacionamentos construídos em parceria com nossos clientes, fornecedores, colaboradores e comunidade. O nosso slogan reflete o nosso compromisso: “Super Golff – Juntos Construindo um Futuro Melhor!”</p>
                    </TextoSimples>
                </section>
        </>
    )
}
