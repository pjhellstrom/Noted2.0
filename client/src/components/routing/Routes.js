import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../tabs/Dashboard";
import CodeTab from "../tabs/CodeTab";
import CreateNote from "../notes/CreateNote";
import NotFound from "../layout/NotFound";
import PrivateRoute from "../routing/PrivateRoute";

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/code' component={CodeTab} />
        <PrivateRoute exact path='/create' component={CreateNote} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
