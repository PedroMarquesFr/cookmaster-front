import React from "react";
import { Link } from "react-router-dom";


// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <div>
      Login <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
