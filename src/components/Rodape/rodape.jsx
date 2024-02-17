import styled from "styled-components";

const ContainerRodape = styled.div `
    width: 100%;
    height: 120px;
    display: flex;
    justfy-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: #5F6F52;
    color: #FEFAE0;
`


function Rodape() {
    return (
        <ContainerRodape>
            <h1>Isso é um rodapé</h1>
        </ContainerRodape>
    )
}

export default Rodape