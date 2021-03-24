import api from "./api";

const newRegister = async (name: string, email: string, password: string) => {
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
