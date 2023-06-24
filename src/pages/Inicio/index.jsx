import React from   'react' 
import HeaderNav from '../../components/HeaderNav'
import styles from './Inicio.module.scss'
import Objectives from '../../components/Objectives'
import Rodape from '../../components/Rodape'

export default function Inicio() {
    return (
        <>
            <div className={styles.bodyContainer}>

            <HeaderNav imagem={'home'}>
                <div className={styles.headerContainer}>
                    <img src="/imgs/logo.png" alt="logo" />
                    <h1>Descubra o par perfeito entre qualidade e economia no Super Golff, o supermercado que transforma suas compras em uma tacada certeira!</h1>
                </div>
            </HeaderNav>
            <section className={styles.historyContainer}>
                <h2>Nossa História</h2>
                <div className={styles.historyContainer__container}>
                    <p>A história do Supermercado Super Golff começou em 1991, quando Manoel Arilton Salles deixou sua profissão de caminhoneiro para se aventurar no setor de supermercados. Ele fundou sua primeira loja, o Mercado Nossa Senhora Aparecida, localizado em Cambé, PR. Sete anos depois, abriu a primeira loja com o nome de Supermercado Golfinho, também na mesma região. Com o passar do tempo, expandiu a rede, abrindo mais quatro lojas na cidade. O Supermercado Super Golff conquistou respeito e confiança dos clientes, negociando melhores condições com fornecedores devido ao aumento do poder de compra. Em 2003, venceram uma concorrência e abriram uma loja em Londrina, PR, fortalecendo sua presença na região. A história da empresa é marcada por perseverança, dedicação e compromisso em oferecer um serviço de qualidade para atender às necessidades dos clientes, sempre focados em crescer e se tornar referência no setor de supermercados.</p>
                    <div>
                        <img src="/imgs/manoel.png" alt="" />
                        <p>Manoel Arilton Salles</p>
                    </div>
                </div>
            </section>
            <section className={styles.objectivesContainer}>
                <Objectives icon={<i class="fa-solid fa-bullseye"></i>} titlle={'Missão'}>
                    <ul>
                        <li>Oferecer uma ampla gama de produtos de qualidade a preços acessíveis, proporcionando escolhas acessíveis para nossos clientes.</li>
                        <li>
                        Prestar um atendimento diferenciado e eficiente, garantindo a satisfação e fidelidade dos nossos clientes.
                        </li>
                        <li>Contribuir ativamente para o desenvolvimento da nossa região, promovendo empregos, apoiando fornecedores locais.</li>
                        <li>Ser uma empresa ética, responsável e comprometida com a qualidade dos produtos e serviços que oferecemos.</li>
                    </ul>
                </Objectives>
                <Objectives icon={<i class="fa-solid fa-eye"></i>} titlle={'Missão'}>
                    <ul>
                        <li>Tornar a marca Super Golff uma referência em atendimento e qualidade no comércio varejista da nossa região, sendo reconhecidos como líderes nesses aspectos.</li>
                        <li>
                        Ser reconhecidos como a melhor opção de preço na nossa região, proporcionando aos nossos clientes uma excelente relação custo-benefício.
                        </li>
                        <li>Valorizar e fortalecer os laços com nossos clientes, fornecedores e colaboradores, construindo relacionamentos sólidos baseados na confiança, respeito e parceria.</li>
                        <li>Construir uma marca sólida e confiável, que seja sinônimo de excelência, valor e satisfação para nossos clientes.</li>
                    </ul>
                </Objectives>
                <Objectives icon={<i class="fa-solid fa-heart"></i>} titlle={'Missão'}>
                    <ul>
                        <li>tica profissional e respeito em todas as nossas relações, agindo de forma íntegra e transparente em todas as nossas interações com clientes, fornecedores e colaboradores.</li>
                        <li>
                        Capacitação e desenvolvimento dos nossos colaboradores, promovendo um ambiente de trabalho inclusivo, incentivando o aprendizado contínuo e o crescimento profissional.
                        </li>
                        <li>Melhoria contínua dos processos, buscando constantemente maneiras de aprimorar a eficiência, qualidade e produtividade em todas as áreas do nosso negócio.</li>
                        <li>Credibilidade e qualidade dos produtos e serviços prestados, garantindo que nossos clientes recebam produtos de alta qualidade e um atendimento excepcional.</li>
                    </ul>
                </Objectives>
            </section>
            <section className={styles.explorationContainer}>
                <h2>PROCESSO DE EXPANSÃO <br></br> DA EMPRESA:</h2>
                <p>Somos uma Rede Mercadista Familiar em constante crescimento e desenvolvimento. Nossa missão é oferecer produtos de qualidade a preços mais acessíveis para atender às necessidades da população em geral. Atualmente, contamos com 18 lojas e temos a previsão de inaugurar mais 1 lojas em Londrina ao longo de 2023 e em constante transformação e reforma das lojas existentes. Contribuímos para a geração de mais de 1.600 empregos diretos e 1.200 empregos indiretos, e estamos orgulhosos de sermos reconhecidos como a segunda marca mais lembrada em nosso segmento na pesquisa top de marcas 2022.
                Buscamos o crescimento da nossa Rede em conjunto com a comunidade, contribuindo para a construção de uma sociedade mais igualitária. Valorizamos os relacionamentos construídos em parceria com nossos clientes, fornecedores, colaboradores e comunidade. O nosso slogan reflete o nosso compromisso: “Super Golff – Juntos Construindo um Futuro Melhor!”</p>
            </section>
            <Rodape></Rodape>
            </div>
        </>
    )
}
