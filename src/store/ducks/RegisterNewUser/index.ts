import TasksTypes from "./types";
console.log(TasksTypes.REQUESTING_DATA);
const initialState = {
  isFetching: false,
  response:"",
  error: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TasksTypes.REQUESTING_DATA:
      return { ...state, isFetching: true };
    case TasksTypes.RECEIVED_PAGE:
      return {
        ...state,
        isFetching: false,
        response: action.resp,
        error: ""
      };
    case TasksTypes.FAILED_REQUEST:
      return { ...state, error: action.error, isFetching: false, response:"" };
    default:
      return state;
  }
}