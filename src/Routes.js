import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import App from './App'
import Admin from './components/Admin/Admin'

export default function src() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/inicio" exact component = {Admin} username="teste" type="admin"/>
      </Switch>
    </BrowserRouter>
  );
}
