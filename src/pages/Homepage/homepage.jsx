import { useState, useEffect } from 'react';
import {Container, Slogan, Title, Eventos, EventosLista} from './homepage.styles';
import axios from 'axios';


import Cabecalho from '../../components/Cabecalho/cabecalho'
import Rodape from '../../components/Rodape/rodape'
import Card from '../../components/Card/card'

function Homepage() {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const listarEventos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/eventos');
                setEventos(response.data);

            } catch (error) {
                console.error('Erro ao buscar evento', error);
            }

        }
        listarEventos();
    })
    return (
        <>
            <Cabecalho />
            <Container>
                <Title>Bem Vindxs a AS!</Title>
                <Slogan>Perfeito para celebrar.</Slogan>
                <Eventos>
                    <EventosLista>
                        {eventos.map((evento, index) => (
                            <Card
                                key={ index }
                                titulo={ evento.titulo }
                                urlImagem={ evento.url_da_Imagem }
                                data={ evento.data }
                                horario={ evento.horario }
                                id={ evento.id}
                            />
                        ))}
                    </EventosLista>

                </Eventos>

            </Container>
            < Rodape />
        </>
    )
}

export default Homepage
