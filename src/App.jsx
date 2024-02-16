import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './pages/Login/login'
import Homepage from './pages/Homepage/homepage'
import Contato from './pages/Contato/contato'

import './index.css'

function App () {
    return (
        <BrowserRouter>
        <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/homepage' element={<Homepage />}/>
            <Route path='/contato' element={<Contato />} />
            
        </Routes>
        </BrowserRouter>
    )
}

export default App