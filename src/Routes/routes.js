import Home from '../Pages/Home/home';
import Login from '../Pages/Login/login';

import { BrowserRouter, Route, Switch } from "react-router-dom";


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} exact path="/home" />
      <Route component={Login} exact path="/" />
    </Switch>
  </BrowserRouter>
);


export default Routes;
