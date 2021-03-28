import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

const Login: React.FC = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const { email, password } = login;
    if (email.length < 7 && password.length < 7) {
      return setMessage("Dados invalidos");
    }
  };

  return (
    <div>
      <span>{message}</span>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        onChange={({ target: { value } }) =>
          setLogin({ ...login, email: value })
        }
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        onChange={({ target: { value } }) =>
          setLogin({ ...login, password: value })
        }
      />
      <button onClick={handleSubmit}>Login</button>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
