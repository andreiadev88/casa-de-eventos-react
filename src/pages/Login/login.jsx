import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import {
    LoginContainer,
    LoginContent,
    LoginBox,
    LoginTitle,
    FormBox,
    FormItem,
    FormLabel,
    FormInput,
    FormButton,
    Sidebar,
    SidebarContainer,
    LogoContainer,
    Logo,
    ErrorMessage
} from './login.styles'

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

            if (usuarioEncontrado) {
                navigate('/homepage');
            } else {
                setErro('Nome ou senha invalido');
            }

        } catch (error) {
            console.error('Erro ao buscar evento', error)
        }
    };
    return (
        <LoginContainer>
        <Sidebar>
            <SidebarContainer>
                <LogoContainer>
                    <Logo src="../images/logo.svg" alt="Logomarca da casa de eventos" />
                </LogoContainer>
            </SidebarContainer>
        </Sidebar>
        <LoginContent>
            <LoginBox>
                <LoginTitle>Área de login</LoginTitle>
                <FormBox>
                    <FormItem>
                        <FormLabel>Nome:</FormLabel>
                        <FormInput type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Senha:</FormLabel>
                        <FormInput type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
                    </FormItem>
                    <FormItem>
                        <FormButton onClick={EfetuarLogin}>Entrar</FormButton>
                    </FormItem>
                    {erro && <ErrorMessage>{erro}</ErrorMessage>}
                </FormBox>
            </LoginBox>
        </LoginContent>          
    </LoginContainer>
    );
}
export default Login