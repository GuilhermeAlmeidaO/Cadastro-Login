import styled from "styled-components"
import ShowPassButton from "../components/showPass"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #538d4e;
    padding: 10px;
    border-radius: 15px;
    min-width: 50%;
    color: #fff;

    & i{
        color: #fff;
    }
`

const ShowPassButtonContainer = styled.label`
    display:flex;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    & p{
        margin: 0;
    }
`

const DataUser = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    text-align: center;

    & .box_data{
        background-color: rgba(255,255,255,0.1);
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
    }

    & .box_data .title_data{
        font-weight: bolder;
    }
`

const ChangePass = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & label{
        margin: 5px;
        padding: 5px;
        border: 1px solid #fff;
        background-color: rgba(255,255,255,0.1);
        border-radius: 5px;
        width: 35%;
    }

    & label input{
        border: 0;
        background-color: transparent;
        margin-left: 5px;
        outline: none;
        color: #fff;
    }

    & label input::-webkit-input-placeholder{
        color: #fff;
    }

    & button#changePassword{
        padding: 15px;
        border-radius: 15px;
        border: 1px solid #fff;
        color: #fff;
        background-color: transparent;
    }

    & button#changePassword:hover{
        background-color: rgba(255,255,255,0.1);
    }

`

function Loged() {
    return (
        <Container>
            <DataUser>
                <h2>Dados da sua Conta</h2>
                <div className="box_data">
                    <span className="title_data" id="user_span">Nome do Usuario: </span>
                    <span className="value_data" id="user_field"></span>
                </div>
                <div className="box_data">
                    <span className="title_data" id="email_span">Email: </span>
                    <span className="value_data" id="email_Field"></span>
                </div>
                <div className="box_data">
                    <span className="title_data" id="senha_span">Senha: </span>
                    <span className="value_data" id="senha_field"></span>
                </div>
            </DataUser>

            <ChangePass>
                <h3>Mudar Senha:</h3>
                <label>
                    <i className="fa-solid fa-lock"></i>
                    <input placeholder="Senha Nova" type="password" id="input_pass" />
                </label>
                <label>
                    <i className="fa-solid fa-lock"></i>
                    <input placeholder="Confirme a Senha Nova" type="password" id="input_very_pass" />
                </label>
                <ShowPassButtonContainer>
                    <p>Mostrar Senha</p>
                    <ShowPassButton inputPass='input_pass' segInputPass='input_very_pass' />
                </ShowPassButtonContainer>
                <button id="changePassword">Mudar Senha</button>
            </ChangePass>
        </Container>
    )
}

export default Loged