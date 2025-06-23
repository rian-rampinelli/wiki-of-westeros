import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';
import { FaRegCircleUser } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import enviarEmail from '../components/EnviarEmail';
import './Login.css';

function Login({ onlogin }) {
  const [name, setname] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const username = "rian";
  const usersenha = "111";

  useEffect(() => { 
    enviarEmail("Login");
  }, []);

  function ObterDados(e) {
    e.preventDefault();
    if (name === username && senha === usersenha) {
      onlogin();
      navigate("/");
    } else {
      alert("Código ou senha inválidos");
    }
  }

  return (
    <main id="main-login">
      <div id="div-title">
        <h1>Bem-vindo, viajante!</h1>
        <p>Entre, antes que o inverno paire sobre nós.</p>
      </div>
      <Container id="container-login">
        <Form onSubmit={ObterDados}>
          <Form.Group>
            <Form.Label className='label'>User</Form.Label>
            <div className="input-group">
              <Form.Control
                className="input-login"
                type="text"
                autoComplete="off"
                name="User"
                placeholder='rian'
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <FaRegCircleUser className="input-icon" />
            </div>
          </Form.Group>

        
          <Form.Group>
            <Form.Label className='label'>Senha</Form.Label>
            <div className="input-group">
              <Form.Control
                className="input-login"
                type={mostrarSenha ? "text" : "password"}
                placeholder='111'
                name="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
               <GiPadlock  className="input-icon" />
            </div>
          </Form.Group>

          <div className="checkbox-personalizado">
            <input
              type="checkbox"
              id="mostrarSenha"
              checked={mostrarSenha}
              onChange={(e) => setMostrarSenha(e.target.checked)}
            />
            <label htmlFor="mostrarSenha">Mostrar Senha</label>
          </div>

          <div className="button-login">
            <Button variant="light" type="submit">
              Entrar
            </Button>
          </div>
        </Form>
      </Container>
    </main>
  );
}

export default Login;