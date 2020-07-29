import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Forgot from '../pages/Forgot';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Dashboard} isClosed />
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/forgot" component={Forgot} />
      <MyRoute exact path="/register" component={Register} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
