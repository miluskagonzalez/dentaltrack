import React, { Fragment, useCallback, useState,useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../firebase/base.js'
import { AuthContext } from '../firebase/Auth'
import logo from '../images/logo-small.png'

const Login = ({history}) => {

  const [hidden, setHidden] = useState(true)

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
  }, [history])

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to="/" />;
  }
    return (
    <Fragment>
      <main className="flex-container section">
        <div className="container">
          <div className="section center-align">
            <img src={logo} alt=""/>
          </div>
          <h6 className="center-align brand-text"><b>'INICIAR SESIÓN' 'REGISTRARME'</b></h6>
          <form className="section row" onSubmit={handleSubmit}>
            <div className="input-field col s12 m6 offset-m3 l4 offset-l4">
              <input type="text" name='username'/>
              <label>Usuario</label>
            </div>
              <div className="input-field col s12 m6 offset-m3 l4 offset-l4">
                <input type="email" name='email'/>
                <label>E-mail</label>
              </div>
            <div className="input-field col s12 m6 offset-m3 l4 offset-l4">
              <i className="material-icons suffix pointer" onClick={() => setHidden(!hidden)}>{hidden ? 'visibility' : 'visibility_off'}</i>
              <input type={hidden ? 'password' : 'text'} name='password'/>
              <label>Contraseña</label>
            </div>
            <div className="input-field col s12 center-align">
              <button className="waves-effect waves-light btn brand-bg">'INICIAR SESIÓN' : 'REGISTRARME'</button>
            </div>
          </form>
          <div className="center-align">
            <span className="light-blue-text text-darken-1">¿Olvidaste tu contraseña?</span>
            <br/>¿No tienes cuenta? <span className="light-blue-text text-darken-1 pointer" onClick={() => history.push('/signin')}>Regístrate</span>
          </div>
        </div>
      </main>
      <footer className="fixed-footer center-align">
        <p><small>Software DentalTrack v.1 by Agencia Misterio 2019</small></p>
      </footer>
    </Fragment>
    )
}

export default withRouter(Login)