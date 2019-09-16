import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';
import Login from './componentes/Login';
import Home from './componentes/Home'
import { BrowserRouter as Router, Route } from 'react-router'

class App extends Component {
  state = {
    loggedIn: false
  }

  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' Component={Home} />
          <Route exact path='/login' Component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
