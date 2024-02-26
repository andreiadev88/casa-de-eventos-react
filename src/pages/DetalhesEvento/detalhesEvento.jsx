import { useParams } from "react-router-dom";

import Cabecalho from "../../components/Cabecalho/cabecalho";
import Rodape from "../../components/Rodape/rodape";


function DetalhesEvento() {

    const { id } = useParams();

    return (
        <>

            <Cabecalho />
            <h1>Detalhes do Evento { id }</h1>
            <Rodape />

        </>
    )
}

export default DetalhesEvento