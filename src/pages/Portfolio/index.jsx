import React from   'react' 
import HeaderNav from '../../components/HeaderNav'
import TextoSimples from '../../components/TextoSimples'
import Lista from '../../components/Lista'
import HeaderTitulo from '../../components/HeaderTitulo'

export default function Portifolio() {
    const listaItens = [
        {
            item: 'diferenciais',
            lista: [
                "Preços acessíveis: Um dos principais diferenciais é oferecer produtos e serviços com preços competitivos e acessíveis, levando em conta a capacidade financeira dessa população.",
                "Parcelamento e crédito facilitado oferecido através do cartão GolffCard: Disponibilizar opções de parcelamento e oferecer crédito facilitado pode permitir que pessoas de baixa renda adquiram produtos e serviços que, de outra forma, seriam inacessíveis."
            ]
        },
        {
            item: 'publico',
            lista: [
                "Renda limitada: Pessoas com recursos financeiros mais restritos e menor capacidade de gastos.",
                "Necessidade de produtos acessíveis: Consumidores que valorizam preços competitivos e buscam produtos e serviços que se encaixem em seu orçamento limitado.",
                "Busca por crédito facilitado: Indivíduos que podem se beneficiar de opções de parcelamento e crédito para realizar compras importantes."
            ]
        }
    ]
    return (
        <>
            <HeaderNav imagem={'portifolio'}>
                <HeaderTitulo><h1>Portfólio</h1></HeaderTitulo>
            </HeaderNav>
            <section>
                <TextoSimples titulo={<h2>Portfólio de Produtos</h2>}>
                    <p>
                    Nosso portfólio de produtos abrange marcas famosas e reconhecidas, além de marcas emergentes. Valorizamos a diversidade e oferecemos opções para atender a diferentes preferências. Nossas marcas de fornecedores líderes têm reputação sólida e são sinônimo de qualidade e confiabilidade. Também incluímos marcas de fornecedores menos conhecidas, mas com propostas únicas. Queremos oferecer produtos inovadores a preços acessíveis. Nosso objetivo é proporcionar aos clientes uma escolha informada e uma experiência completa. Estamos comprometidos em oferecer um portfólio diversificado e abrangente, atendendo às necessidades de todos os consumidores em busca de marcas populares ou marcas emergentes promissoras.
                    <br></br>
                    <br></br>
                    Confira nossos Produtos <a href='https://www.sitemercado.com.br/supergolff/'>Clicando aqui…</a>
                    </p>
                </TextoSimples>
            </section>
            <section>
                <TextoSimples titulo={<h2>Diferenciais Mercadológicos</h2>}>
                    <Lista itens={listaItens[0].lista}></Lista>
                    <p>É importante destacar que esses diferenciais mercadológicos devem ser implementados de maneira ética e responsável, priorizando a inclusão e o bem-estar do público-alvo, sem explorar ou estigmatizar a condição socioeconômica desses consumidores.</p>
                </TextoSimples>
            </section>
            <section>
                <TextoSimples titulo={<h2>O Público-Alvo</h2>}>
                    <p>Com base nos diferenciais mercadológicos mencionados, o público-alvo seria a população de classe mais baixa e emergente, com características como:</p>
                    <Lista itens={listaItens[1].lista}></Lista>
                    <p>É importante ressaltar que o público-alvo pode ser mais amplo e variado, incluindo diferentes faixas etárias, gêneros e origens culturais dentro da população de classe baixa e emergente. O entendimento dessas características auxiliará na adequação das estratégias de marketing e comunicação para atender às necessidades e expectativas desse público específico.</p>
                </TextoSimples>
            </section>
        </>
    )
}
