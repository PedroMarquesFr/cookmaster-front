import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import newRegister from "../../services/register";

// import { Container } from './styles';

const Login: React.FC = () => {
  const element = async ()=>{
    console.log("chamou")
    const lol = await newRegister("dorivaldo","dorivaldoFODA@gmail.com","3123123123");
  }
  useEffect(() => {
    element()
  }, []);
  return (
    <div>
      Login <Link to="/home">Entrar</Link>
    </div>
  );
};

export default Login;
