import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Portifolio from './pages/Portfolio'
import BodyContainer from './components/BodyContainer'
import Rodape from './components/Rodape'
import Comunicacao from './pages/Comunicacao'
import Noticia from './pages/Noticia'
import FaleConosco from './pages/FaleConosco'
import { BotaoMenuProvider } from './context/BotaoMenu'

export default function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <BotaoMenuProvider>
                    <BodyContainer>
                        <Routes>
                            <Route path='/' element={<Inicio></Inicio>}></Route>
                            <Route path='/portifolio' element={<Portifolio></Portifolio>}></Route>
                            <Route path='/comunicacao' element={<Comunicacao></Comunicacao>}></Route>
                            <Route path='/noticia' element={<Noticia></Noticia>}></Route>
                            <Route path='/contato' element={<FaleConosco></FaleConosco>}></Route>
                        </Routes>
                    </BodyContainer>
                </BotaoMenuProvider>
            </BrowserRouter>
            <Rodape></Rodape>
        </div>
    )
}
