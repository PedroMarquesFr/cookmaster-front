import axios from "axios";

const newRegister = async (name: string, email: string, password: string) => {
  try {
    const resp = await axios.post("http://localhost:3333/users", {
      name,
      email,
      password,
    });
    console.log(resp);
    return resp;
  } catch (error) {
    console.log("deu pau",error);
  }
};

export default newRegister;
