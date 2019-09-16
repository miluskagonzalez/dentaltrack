import React, { Component, Fragment } from 'react';
import M from "materialize-css";
import logo from '../images/logo-small.png'

class Login extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render () {
    return (
    <Fragment>
      <main className="flex-container">
        <div className="container">
          <div className="section center-align">
            <img src={logo} alt=""/>
          </div>
          <h6 className="center-align brand-text"><b>INICIAR SESIÓN</b></h6>
          <form className="section row">
            <div className="input-field col s12 m6 offset-m3 l4 offset-l4">
              <input type="text" />
              <label>Usuario</label>
            </div>
            <div className="input-field col s12 m6 offset-m3 l4 offset-l4">
              <input type="password" />
              <label>Contraseña</label>
            </div>
            <div className="input-field col s12 center-align">
              <div className="waves-effect waves-light btn brand-bg">INICIAR SESIÓN</div>
            </div>
          </form>
          <div className="center-align">
            <a href="">¿Olvidaste tu contraseña?</a><br/>¿No tienes cuenta? <a href="">Registrate</a>
          </div>
        </div>
      </main>
      <footer className="fixed-footer center-align">
        <p><small>Software DentalTrack v.1 by Agencia Misterio 2019</small></p>
      </footer>
    </Fragment>
    )
  }
}

export default Login