import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";


function Routes() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;