import React from 'react';
import './style.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from '../Register';
import Preview from '../Preview';
import { RegisterProvider } from '../../services/register-service';


function App() {
  return (
    <div className="main-container">

      <div className="app">
        <RegisterProvider>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/preview" component={Preview} />
            <Redirect from="/" to="register" />
          </Switch>
        </RegisterProvider>

      </div>
    </div>

  );
}

export default App;
