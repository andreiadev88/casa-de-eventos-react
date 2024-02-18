import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";





const Login = () => {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const EfetuarLogin = async () => {
        try {
            const response = await axios.get('http://localhost:3000/usuarios');
            const usuarios = response.data;
            const usuarioEncontrado = usuarios.find(usuario => usuario.nome === nome && usuario.senha === senha);

            if(usuarioEncontrado) {
                navigate('/homepage');
            }else {
                setErro('Nome ou senha invalido');
            }

        }catch (error) {
            console.error('Erro ao buscar evento', error)
        }
    };
    return (
        <div>
        <h1>Login</h1>
        <input type="text"placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
        <button onClick={EfetuarLogin}>Entrar</button>
        {erro && <p>{erro}</p>}
        </div>
    );
}
export default Login