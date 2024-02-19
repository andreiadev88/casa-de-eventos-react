import { useState } from 'react'
import axios from 'axios'

const AdicionarEvento = () => {

    const [evento, setEvento] = useState({
        titulo: '',
        data: '',
        horario: '',
        preco: 0,
        url_da_imagem: '',
        evento_privado: false
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEvento((prevEvent) => ({
            ...prevEvent,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/eventos', evento);
            console.log(response.data);
            alert('Evento adicionado com sucesso!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h1>Adicionar evento</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Titulo:
                    <input type="text" name="titulo" value={evento.titulo} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Data:
                    <input type="text" name="data" value={evento.data} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Horário:
                    <input type="time" name="horario" value={evento.horario} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Preço:
                    <input type="number" name="preco" value={evento.preco} onChange={handleChange} />
                </label>
                <br />
                <label>
                    URL da imagem:
                    <input type="text" name="url_da_imagem" value={evento.url_da_imagem} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Evento privado:
                    <input type="checkbox" name="evento_privado" checked={evento.evento_privado} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Adicionar evento</button>
            </form>
        </>
    )
}

export default AdicionarEvento