import { Link } from "react-router-dom"
import styled from "styled-components"
import ShowPassButton from "../components/showPass"

const Container = styled.div`
    display: flex;
    height: 80%;
`

const ToSingUp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #58AF9C;
    padding: 10px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 50%;

    & h1{
        color: #fff;
    }

    & p{
        color: #fff;
    }

    @media (max-width: 425px) {
        & h1{
            font-size: 1.5rem;
        }
    
        & p{
            font-size: 15px;
        }
    }

    & button{
        border: 1px solid #fff;
        background-color: transparent;
        color: #fff;
        padding: 10px 20px;
        border-radius: 15px;
    }
    
    & button:hover{
        background-color: rgba(0, 0, 0, 0.1);
    }
`

const Fields = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 70%;
    background-color: #fff;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    & h1{
        text-align: center;
        color: #58AF9C;
    }

    @media (max-width: 425px) {
        & h1{
            font-size: 1.5rem;
        }
    }

    & button#join{
        border: 1px solid transparent;
        background-color: #58AF9C;
        color: #fff;
        padding: 10px 20px;
        border-radius: 15px;
    }
    
    & button#join:hover{
        border: 1px solid #58AF9C;
        background-color: #fff;
        color: #58AF9C;
    }

    & label{
        background-color: rgba(0,0,0,0.1);
        padding: 10px;
        width: 60%;
        border-radius: 5px;
    }
    
    & input{
        border: 0;
        outline: none;
        background-color: transparent;
        margin: 5px;
    }

    & i{
        color: #429988;
    }
    
    .forget_password{
        width: 60%;
        text-align: right;
        color: #429988;
        font-size: 0.7rem;
        margin: 0;
    }

    @media (max-width: 768px) {
        & label{
            width: 95%;
        }

        & input{
            width: 70%;
        }

        .forget_password{
            width: 95%;
        }
    }

    .forget_password:hover{
        text-decoration: underline;
        cursor: pointer;
    }

`

function SingIn() {
    return (
        <Container>
            <ToSingUp>
                <h1>Bem vindo(a)</h1>
                <p>Para continuar conectado(a) ao nosso sistema faça login ou se registre-se</p>
                <Link to={'/singup'}>
                    <button>Cadastre-se</button>
                </Link>
            </ToSingUp>
            <Fields>
                <h1>Entrar na conta</h1>
                <label>
                    <i className="fa-solid fa-envelope"></i>
                    <input placeholder="Email" />
                </label>
                <label>
                    <i className="fa-solid fa-lock"></i>
                    <input placeholder="Senha" type="password" id="input_password"/>
                    <ShowPassButton inputPass='input_password'/>
                </label>
                <p className="forget_password">Esqueceu a Senha?</p>
                <button id="join">Entre</button>
            </Fields>
        </Container>
    )
}

export default SingIn