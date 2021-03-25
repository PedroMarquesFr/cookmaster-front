import api from "../api";

interface Resp {
  user?: {
    name: string;
    email: string;
    role: string;
    _id: string;
  };
  message?: string;
  status?: number;
}


const newRegister = async (
  name: string,
  email: string,
  password: string
): Promise<Resp> => {
  try {
    const resp = await api.post("/users", {
      name,
      email,
      password,
    });
    return resp.data;
  } catch (err) {
    console.log("err.response: ", err.response);
    return err.response.data;
  }
};

export default newRegister;
