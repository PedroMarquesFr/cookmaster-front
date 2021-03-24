import newRegister from "../../../services/register";
import TasksTypes from "./types";

const requestingData = () => {
  return { type: TasksTypes.REQUESTING_DATA };
};
const receivedData = (resp) => {
  return { type: TasksTypes.RECEIVED_PAGE, resp };
};
const failedRequest = (error) => {
  console.log("entrou");
  return { type: TasksTypes.FAILED_REQUEST, error };
};
export default function handleAsyncRegister(
  name: string,
  email: string,
  password: string
) {
  return async (dispatch) => {
    dispatch(requestingData());

    const resp = await newRegister(name, email, password);
    console.log("resp: ",resp)
    if (resp.message) {
      return dispatch(failedRequest(resp.message));
    }
    dispatch(receivedData("ok"));
    setTimeout(() => {
      dispatch(receivedData(""));
    }, 1000);
  };
}
