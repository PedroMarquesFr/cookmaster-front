import TasksTypes from "./types";
console.log(TasksTypes.REQUESTING_DATA);
const initialState = {
  isFetching: false,
  videos: [],

  error: "",
  lastId:"",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TasksTypes.REQUESTING_DATA:
      return { ...state, isFetching: true };
    case TasksTypes.RECEIVED_PAGE:
      return {
        ...state,
        isFetching: false,
        videos: [...action.resp],//...state.videos,
        lastId: action.lastId,
      };
    case TasksTypes.FAILED_REQUEST:
      return { ...state, error: action.resp, isFetching: false };
    default:
      return state;
  }
}