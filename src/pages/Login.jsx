import {FaUser, FaLock} from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      if (password.length > 8) {
        navigate('/');
    } else {
        alert("A senha deve ter mais de 8 caracteres.");
    }
      console.log("Dados de Login:", { username, password });
    };
  
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Acesse o sistema</h1>
          <div className="input-field">
            <input
              type="text"
              placeholder="E-mail"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
  
          <div className="recall-forget">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <a href="#">Esqueceu sua senha?</a>
          </div>
          <button type="submit">Login</button>
          <div className="signup-link">
            <p>
              Não tem uma conta? <a href="#">Registar</a>{" "}
            </p>
          </div>
        </form>
      </div>
    );
  };
  
  export default Login;