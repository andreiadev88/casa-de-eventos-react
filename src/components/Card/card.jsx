import { EventosItem, EventoTitulo, EventoImagem, EventoDataHora, EventoLink } from "./cards.styles"


function Card ({ titulo, urlImagem, data, horario, id}) {
    return (
        <EventosItem>
            <EventoTitulo>{titulo}</EventoTitulo>
            <EventoImagem src={urlImagem} alt={titulo} />
            <br />
            <EventoDataHora>Data e Hora: {data} - {horario}</EventoDataHora>
            <EventoLink  to={`/evento/${id}`}>Mais informações</EventoLink>
        </EventosItem>
    )
}

export default Card