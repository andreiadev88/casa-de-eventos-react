import styled from 'styled-components';

const LogoContainer = styled.div`
width: 250px;
`
const LogoImage = styled.img`
heigth: 50px;
width: 80px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src="public\images\logo.png" alt='Logo AS casa de Eventos' />
        </LogoContainer>
    )
}

export default Logo