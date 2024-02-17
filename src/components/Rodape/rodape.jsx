import styled from "styled-components";

const RodapeContainer = styled.div `
    width: 100%;
    height: 120px;
    display: flex;
    justfy-content: left;
    align-items: center;
    background-color: #5F6F52;
    color: #FEFAE0;
`
const RodapeText = styled.p`
  padding: 0 15px;
`


function Rodape() {
    return (
        <RodapeContainer>
            <RodapeText>Copyright &copy; 2024 | Site desenvolvido por AS.</RodapeText>
        </RodapeContainer>
    )
}

export default Rodape