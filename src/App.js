import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';
import M from "materialize-css";
import Login from './componentes/Login';
import Home from './componentes/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './firebase/Auth';
import PrivateRoute from './firebase/PrivateRoute'

class App extends Component {
  
  componentDidMount() {
    M.AutoInit();
  }
  
  render () {
    return (
      <AuthProvider>
        <Router>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
