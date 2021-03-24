import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import handleAsyncRegister from "../../../store/ducks/RegisterNewUser/actions";

// import { Container } from './styles';

const Register: React.FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const state = useSelector((state) => state);
  console.log(state);

  const history = useHistory();

  const isValid = async () => {
    dispatch(handleAsyncRegister(name, email, password));

    setWarning("digite o valores validos");
  };

  return (
    <div>
      <span>{state}</span>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={isValid}>Register</button>
    </div>
  );
};

export default Register;
