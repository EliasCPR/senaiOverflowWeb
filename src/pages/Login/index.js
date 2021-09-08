import { Container, FormContainer } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import { api } from "../../components/Services/api";

function Login (){
    
    const [formLogin, setformLogin] = useState({
        email: "",
        senha: ""
    });

    const handleInput = (e) => {
        setformLogin({...formLogin, [e.target.id]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/sessions",{
                email: formLogin.email,
                password: formLogin.senha
            });
            console.log(response.data)
        } catch (error) {
            console.log(error.response.data);
        }
    }
    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <h1>Bem-Vindo ao</h1>
                <h1>SENAI-Overflow</h1>
                <Input label="E-mail" id="email" type="email" required handler={handleInput}/>
                <Input label="Senha" id="senha" type="password" required handler={handleInput}/>
                <button>Entrar</button>
            </FormContainer>
        </Container>
    );
}

export default Login;