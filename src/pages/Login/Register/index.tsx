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
  const [isSubmitable, setIsSubmitable] = useState(false);
  const reqInfo = useSelector((state: State) => state.RegisterNewUser);

  const history = useHistory();

  const isValid = async () => {

    if (name.length < 6 || email.length < 6 || password.length < 6) {
      setWarning("All camps must be valid");
      return setIsSubmitable(false);
    }
    setWarning("");
    setIsSubmitable(true);
  };

  const submit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(handleAsyncRegister(name, email, password));
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
      <form onChange={isValid} onSubmit={submit}>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={!isSubmitable}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
