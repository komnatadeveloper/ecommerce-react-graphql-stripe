import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { getToken } from './utils';

import 'gestalt/dist/gestalt.css';

import App from './components/App';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import Signup from './components/Signup';
import Signin from './components/Signin';

import registerServiceWorker from './registerServiceWorker';
import Brews from './components/Brews';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    getToken() !== null ?
      <Component {...props} /> : <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
      }} />
  )} />
)



const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route component={ App} exact path="/"/>
        <Route component={ Signin} path="/signin"/>
        <Route component={ Signup} path="/signup"/>
        <PrivateRoute component={ Checkout} path="/checkout"/>
        <Route component={ Brews} path="/:brandId"/>
        
      </Switch>
    </React.Fragment>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
