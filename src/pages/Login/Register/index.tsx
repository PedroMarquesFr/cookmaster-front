import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import handleAsyncRegister from "../../../store/ducks/RegisterNewUser/actions";
import { State } from "../../../Types/interfaces";

// import { Container } from './styles';

const Register: React.FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const reqInfo = useSelector((state: State) => state.RegisterNewUser);

  const history = useHistory();

  const isValid = async () => {
    dispatch(handleAsyncRegister(name, email, password));

    setWarning("Type valid values");
  };

  useEffect(() => {
    console.log("entrou");
    if (reqInfo.response) {
      history.push("/");
    }
  }, [reqInfo, history]);

  return (
    <div>
      <span>{reqInfo.response}</span>
      <span>{reqInfo.error}</span>
      <span>{warning}</span>
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
