import { BrowserRouter, Route, Routes } from 'react-router-dom'



import Login from './pages/Login/login'
import ListaEventos from './pages/ListaEventos/listaEventos'
import AdicionarEvento from './pages/AdicionarEvento/adicionarEvento'
import Homepage from './pages/Homepage/homepage'
import DetalhesEvento from './pages/DetalhesEvento/detalhesEvento'
import Contato from './pages/Contato/contato'

import Exercicios from './pages/Exercicio/exercicios'


import './index.css'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<ListaEventos />} />
                <Route path="/adicionar-evento" element={<AdicionarEvento />} />
                <Route path="/evento/:id" element={<DetalhesEvento />} />
                <Route path="/contato" element={<Contato />} />
                <Route path='/exercicios' element={<Exercicios />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App