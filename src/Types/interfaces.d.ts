export interface RegisterNewUser {
  isFetching: boolean;
  response: string;
  error: string;
}

export interface State {
  RegisterNewUser: RegisterNewUser;
}
