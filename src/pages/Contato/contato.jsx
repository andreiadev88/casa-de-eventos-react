import { Container, Title } from './contato.styles'
import Cabecalho from '../../components/Cabecalho/cabecalho'
import Rodape from '../../components/Rodape/rodape'

function Contato() {
    return (
        <>
            <Cabecalho />
            <Container>
                <Title>Contato</Title>
            </Container>
            <Rodape />
        </>
    )
}

export default Contato