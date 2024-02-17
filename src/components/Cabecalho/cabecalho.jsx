import styled from 'styled-components';

import Logo from '../Logo/logo';
import Menu from '../Menu/menu';

const CabecalhoContainer = styled.div `
    width: 100%;
    height: 120px;
    display: flex;
    justfy-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: #5F6F52;
    color: #FEFAE0;
`

function Cabecalho() {
    return(
        <CabecalhoContainer>
            <Logo />
            <Menu />
       </CabecalhoContainer>
    )
}

export default Cabecalho