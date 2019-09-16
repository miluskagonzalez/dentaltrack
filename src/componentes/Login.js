import React, { Component, Fragment } from 'react';
import M from "materialize-css";
import logo from '../images/logo-small.png'
/*
const LoginView = ({state: {username, password, hidden}}) => (
  <Fragment>
    <h6 className="center-align brand-text"><b>{login ? 'INICIAR SESIÓN' : 'REGISTRARME'}</b></h6>
    <form className="section row" onSubmit={handleSubmit}>
      <div className="input-field col s12 m6 offset-m3 l4 offset-l4">
        <input type="text" name='username' value={username} onChange={onChange}/>
        <label>Usuario</label>
      </div>
      <div className="input-field col s12 m6 offset-m3 l4 offset-l4">
        <i className="material-icons suffix pointer" onClick={toggleHidden}>{hidden ? 'visibility' : 'visibility_off'}</i>
        <input type={hidden ? 'password' : 'text'} name='password' value={password} onChange={onChange}/>
        <label>Contraseña</label>
      </div>
      <div className="input-field col s12 center-align">
        <button className="waves-effect waves-light btn brand-bg">{login ? 'INICIAR SESIÓN' : 'REGISTRARME'}</button>
      </div>
    </form>
    <div className="center-align">
      <span class="light-blue-text text-darken-1">¿Olvidaste tu contraseña?</span>
      <br/>¿No tienes cuenta? <span class="light-blue-text text-darken-1 ">Regístrate</span>
    </div>
  </Fragment>
)*/

class Login extends Component {

  state = {
    login: true,
    username: '',
    email: '',
    password: '',
    hidden: true,
  }

  componentDidMount() {
    M.AutoInit();
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  toggleHidden = () => {
    this.setState({
      hidden: !this.state.hidden,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  changeView = () => {
    this.setState({
      login: false,
    })
  }

  render () {
    const {state: {view, username, email, password, hidden, login}, onChange, toggleHidden, handleSubmit, changeView} = this;

    return (
    <Fragment>
      <main className="flex-container">
        <div className="container">
          <div className="section center-align">
            <img src={logo} alt=""/>
          </div>
          <h6 className="center-align brand-text"><b>{login ? 'INICIAR SESIÓN' : 'REGISTRARME'}</b></h6>
          <form className="section row" onSubmit={handleSubmit}>
            <div className="input-field col s12 m6 offset-m3 l4 offset-l4">
              <input type="text" name='username' value={username} onChange={onChange}/>
              <label>Usuario</label>
            </div>
            {!login &&
              <div className="input-field col s12 m6 offset-m3 l4 offset-l4">
                <input type="email" name='email' value={email} onChange={onChange}/>
                <label>E-mail</label>
              </div>
            }
            <div className="input-field col s12 m6 offset-m3 l4 offset-l4">
              <i className="material-icons suffix pointer" onClick={toggleHidden}>{hidden ? 'visibility' : 'visibility_off'}</i>
              <input type={hidden ? 'password' : 'text'} name='password' value={password} onChange={onChange}/>
              <label>Contraseña</label>
            </div>
            <div className="input-field col s12 center-align">
              <button className="waves-effect waves-light btn brand-bg">{login ? 'INICIAR SESIÓN' : 'REGISTRARME'}</button>
            </div>
          </form>
          <div className="center-align">
            <span class="light-blue-text text-darken-1">¿Olvidaste tu contraseña?</span>
            <br/>¿No tienes cuenta? <span class="light-blue-text text-darken-1" onClick={changeView}>Regístrate</span>
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