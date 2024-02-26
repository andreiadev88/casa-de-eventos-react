import { useState, useEffect, useMemo } from 'react';
import { Container, Title, Slogan, Eventos, EventosLista } from './homepage.styles';
import axios from 'axios';


import Cabecalho from '../../components/Cabecalho/cabecalho'
import Rodape from '../../components/Rodape/rodape'
import Card from '../../components/Card/card'

function Homepage() {
    const [eventos, setEventos] = useState([]);
    const [filtroTitulo, setFiltroTitulo] = useState('');

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
    });

    const eventosFiltrados = useMemo(() => {
        return eventos.filter(evento =>
            evento.titulo.toLowerCase().includes(filtroTitulo.toLowerCase())
        );
    }, [eventos, filtroTitulo]);

    const handleInputChange = (e) => {
        setFiltroTitulo(e.target.value);
    };
    return (
        <>
            <Cabecalho />
            <Container>
                <Title>Bem Vindxs a AS!</Title>
                <Slogan>Perfeito para celebrar.</Slogan>
                <input
                    type="text"
                    placeholder="Procure por eventos"
                    value={filtroTitulo}
                    onChange={handleInputChange}
                />
                <Eventos>
                    <EventosLista>
                        {eventosFiltrados.map((evento, index) => (
                            <Card
                                key={index}
                                titulo={evento.titulo}
                                urlImagem={evento.url_da_imagem}
                                data={evento.data}
                                horario={evento.horario}
                                id={evento.id}
                            />
                        ))}
                    </EventosLista>

                </Eventos>

            </Container>
            < Rodape />
        </>
    );
}

export default Homepage;
