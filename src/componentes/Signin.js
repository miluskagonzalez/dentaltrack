import React, { Fragment, useCallback, useState } from 'react';
import { withRouter } from 'react-router';
import app from '../firebase/base'
import logo from '../images/logo-small.png'

const Signin = ({history}) => {

  const [hidden, setHidden] = useState(true);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userError, setUserError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  
  const db = app.firestore();

  const checkAvailability = useCallback((field, value) => db.collection('usernames').where(field, '==', value).get().then(querySnapshot => querySnapshot.empty), [db])

  const handleBlur = ({target: { name, value}}) => {
    if(value.length) {
      switch (name) {
        case 'username':  
            checkAvailability(name, value).then((available)=> {
              if(!available) setUserError("Este usuario no está disponible");
            });
          break;
        case 'email':
            if(/^[a-zA-Z0-9]+([_.-]?[a-zA-Z0-9]+)*@([a-zA-Z0-9-])+(\.[a-zA-Z]{2,4})+$/.test(value)) {
              checkAvailability(name, value).then((available) => {
                if(!available) setEmailError("Este email ya está siendo utilizado");
              });
            } else {
              setEmailError("Ingresa un email válido");
            }
          break;
        case 'password':
            value.length < 6 ? setPassError("La contraseña debe tener al menos 6 caracteres") : setPassError("");
          break;
        // no default
      }
    }
  };

  const handleChange = ({target: {name, value}}) => {
    switch (name) {
      case 'username':
          if(/^[ña-z0-9_-]{0,16}$/igm.test(value)) {
            setUsername(value);
            value.length === 0 ? setUserError("Ingresa un nombre de usuario") : setUserError("");
            if (value.length > 0) {
              checkAvailability(name, value).then((available)=> {
                if(!available) setUserError("Este usuario no está disponible");
              });
            }
          }
        break;
      case 'email':
          if(/^[\S]+$/gm.test(value) || value.length === 0) {
            setEmail(value);
            value.length === 0 || !/^[a-zA-Z0-9]+([_.-]?[a-zA-Z0-9]+)*@([a-zA-Z0-9-])+(\.[a-zA-Z]{2,4})+$/.test(value) ? setEmailError("Ingresa un email") : setEmailError("");
            if (/^[a-zA-Z0-9]+([_.-]?[a-zA-Z0-9]+)*@([a-zA-Z0-9-])+(\.[a-zA-Z]{2,4})+$/.test(value)) {
              checkAvailability(name, value).then((available) => {
                if(!available) setEmailError("Este email ya está siendo utilizado");
              });
            }
          }
        break;
      case 'password':
          setPassword(value);
          value.length === 0 ? setPassError("La contraseña debe tener al menos 6 caracteres") : setPassError("");
        break;
      // no default
    }
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    checkAvailability("username", username).then(available => {
      !available
        ? setUserError("Este usuario no está disponible")
        : app.auth().createUserWithEmailAndPassword(email, password)
            .then(({user}) => user.uid)
            .then(id => db.collection("usernames").doc(id).set({email, username}))
            .then(() => history.push('/'))
            .catch(console.log)
    })
  }, [history, checkAvailability, username, email, password, db]);

  return (
  <Fragment>
    <main className="flex-container section">
      <div className="container">
        <div className="section center-align">
          <img src={logo} alt=""/>
        </div>
        <h6 className="center-align brand-text"><b>FORMULARIO DE REGISTRO</b></h6>
        <form className="section row" onSubmit={handleSubmit}>
          <div className="input-field col s12 m6 offset-m3 l4 offset-l4">
            <input type="text" name='username' onChange={handleChange} value={username} onBlur={handleBlur} maxLength="16"/>
            <label>Usuario</label>
            { userError && <span className="helper-text">{userError}</span> }
          </div>
          <div className="input-field col s12 m6 offset-m3 l4 offset-l4">
            <i className="material-icons suffix pointer" onClick={() => setHidden(!hidden)}>{hidden ? 'visibility' : 'visibility_off'}</i>
            <input type={hidden ? 'password' : 'text'} name='password' onChange={handleChange} value={password} onBlur={handleBlur} />
            <label>Contraseña</label>
            { passError && <span className="helper-text">{passError}</span> }
          </div>
          <div className="input-field col s12 m6 offset-m3 l4 offset-l4">
            <input type="text" name='email' onChange={handleChange} value={email} onBlur={handleBlur}/>
            <label>E-mail</label>
            { emailError && <span className="helper-text">{emailError}</span> }
          </div>
          <div className="input-field col s12 center-align">
            <button className="waves-effect waves-light btn brand-bg" disabled={!username || userError || !email || emailError || !password || passError }>
              REGISTRARME
            </button>
          </div>
        </form>
        <div className="center-align">
          ¿Ya tienes una cuenta? <span className="light-blue-text text-darken-1 pointer" onClick={() => history.push('/login')}>Inicia sesión</span>
        </div>
      </div>
    </main>
    <footer className="fixed-footer center-align">
      <p><small>Software DentalTrack v.1 by Agencia Misterio 2019</small></p>
    </footer>
  </Fragment>
  )
}

export default withRouter(Signin)