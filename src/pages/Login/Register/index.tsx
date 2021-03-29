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
    <div className="min-h-screen bg-green-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <span>{reqInfo.response}</span>
        <span>{reqInfo.error}</span>
        <span>{warning}</span>
        <form onChange={isValid} onSubmit={submit}>
          <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            disabled={!isSubmitable}
            className="bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white p-2 rounded-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
