import { Link } from "react-router-dom"
import styled from "styled-components"
import ShowPassButton from "../components/showPass"

const Container = styled.div`
    display: flex;
    height: 80%;
`

const ToSingIn = styled.div`
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

    & button#create{
        border: 1px solid transparent;
        background-color: #58AF9C;
        color: #fff;
        padding: 10px 20px;
        border-radius: 15px;
    }
    
    & button#create:hover{
        border: 1px solid #58AF9C;
        background-color: #fff;
        color: #58AF9C;
    }

    & label.label_data{
        background-color: rgba(0,0,0,0.1);
        padding: 10px;
        width: 60%;
        border-radius: 5px;
    }

    & label.showPass_button{
        display: flex;
        justify-content: center;
        cursor: pointer;
        color: #429988;
        width: 62%;
        border: 1px solid transparent;
        padding: 5px;
        border-radius: 5px;
        user-select: none;
    }

    & label.showPass_button:hover{
        cursor: pointer;
    }

    & label.showPass_button p{
        margin: 0;
    }

    @media (max-width: 768px) {
        & label.label_data{
            width: 45%;
        }

        & label.label_data input{
            width: 70%;
        }

    }

    @media (max-width: 768px) {
        & label.label_data{
            width: 90%;
    }

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
`

function SingUp() {
    return (
        <Container>
            <ToSingIn>
                <h1>Bem vindo(a)</h1>
                <p>Para continuar conectado(a) ao nosso sistema, faça login ou se registre-se</p>
                <Link to={'/singin'}>
                    <button>Entre</button>
                </Link>
            </ToSingIn>
            <Fields>
                <h1>Criar conta</h1>
                <label className="label_data">
                    <i className="fa-solid fa-user"></i>
                    <input placeholder="Nome" />
                </label>
                <label className="label_data">
                    <i className="fa-solid fa-envelope"></i>
                    <input placeholder="Email" />
                </label>
                <label className="label_data">
                    <i className="fa-solid fa-lock"></i>
                    <input placeholder="Senha" type="password" id="input_Senha_singUp"/>
                </label>
                <label className="label_data">
                    <i className="fa-solid fa-lock"></i>
                    <input placeholder="Confirme a Senha" type="password" id="input_Senha_very_singUp"/>
                </label>
                <label className="showPass_button">
                    <p>
                        Mostrar Senha
                    </p>
                    <ShowPassButton inputPass='input_Senha_singUp' segInputPass='input_Senha_very_singUp'/>
                </label>
                <button id="create">Criar Conta</button>
            </Fields>
        </Container>
    )
}

export default SingUp