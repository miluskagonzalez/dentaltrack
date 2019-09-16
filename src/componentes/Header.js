import React, { Component, Fragment } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import M from "materialize-css";
import logo from '../images/logo-small.png'

class Login extends Component {

  componentDidMount() {
    let element = document.querySelectorAll('.dropdown-trigger');
    let instance = M.Dropdown.init(element, {inDuration: 300, outDuration: 225});
    this.element = element;
    this.instance = instance;
  }

  render () {
    return (
      <Fragment>
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">Cerrar sesión<i className="material-icons">exit_to_app</i></a></li>
        </ul>
        <div className="navbar-fixed">
          <nav className="white grey-text">
            <div className="nav-wrapper">
              <a className="brand-logo ml-3">
                <img src={logo} alt="DentalTrack"/>
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <button className="btn brand-outline waves-effect waves-light" type="button" name="action">
                    Nuevo Pedido
                    <i className="material-icons left">add</i>
                  </button>
                </li>
                <li>
                  <a className="grey-text" href="#!">
                    <Progress
                      type="circle"
                      percent={25}
                      width={40}
                      strokeWidth={15}
                      style={{ color: 'transparent', marginRight: 15 }}
                    />
                    SALDO: <span className="bold-text grey-text text-darken-2">S/ 2,500.00</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-trigger grey-text" href="#!" data-target="dropdown1">
                    <i className="material-icons avatar">account_circle</i>Odontología San Pedro
                    <i className="material-icons right">arrow_drop_down</i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </Fragment>
    )
  }
}

export default Login