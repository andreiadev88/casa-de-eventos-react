import { Container, Slogan, Title } from './homepage.styles';


import Cabecalho from '../../components/Cabecalho/cabecalho'
import Rodape from '../../components/Rodape/rodape'

function Homepage() {
    return (
        <>
            <Cabecalho />
            <Container>
                <Title>Bem Vindxs a AS!</Title>
                <Slogan>Perfeito para celebrar</Slogan>
            </Container>
            < Rodape />
        </>
    )
}

export default Homepage
