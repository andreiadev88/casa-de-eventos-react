import styled from 'styled-components';

const LogoContainer = styled.div`
width: 250px;
`
const LogoImage = styled.img`
heigth: 120px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src="public\images\Logotipo de loja de aromas e essências minimalista floral verde e branco (1).png" alt='Logo AS casa de Eventos' />
        </LogoContainer>
    )
}

export default Logo