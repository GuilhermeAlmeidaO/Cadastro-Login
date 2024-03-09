import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #58AF9C;
  padding: 10px;
  border-radius: 20px;
  height: 80%;

  & h1{
    color: #fff;
  }

  & p{
    color: #fff;
  }
`

const Buttons = styled.div`
  display: flex;
  gap: 15px;
  
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

function App() {
  return (
    <Container>
      <h1>Bem vindo(a)</h1>
      <p>Para continuar conectado(a) ao nosso sistema faça login ou se registre-se</p>
      <Buttons>
        <Link to={'/singin'}>
          <button>
            ENTRE
          </button>
        </Link>
        <Link to={'/singup'}>
          <button>
            REGISTRE-SE
          </button>
        </Link>
      </Buttons>
    </Container>

  );
}

export default App;
