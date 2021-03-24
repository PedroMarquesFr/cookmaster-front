import newRegister from "../../../services/register";
import TasksTypes from "./types";

const requestingData = () => {
  return { type: TasksTypes.REQUESTING_DATA };
};
const receivedData = ({ items }, lastId) => {
  return { type: TasksTypes.RECEIVED_PAGE, resp: items, lastId };
};
const failedRequest = (error) => {
  return { type: TasksTypes.FAILED_REQUEST, resp: error };
};
export default function handleAsyncRegister(
  name: string,
  email: string,
  password: string
) {
  return async (dispatch) => {
    dispatch(requestingData());
    const resp = await newRegister(name, email, password);
    console.log(resp);
    // return dispatch(receivedData(resp, id));
  };
}
