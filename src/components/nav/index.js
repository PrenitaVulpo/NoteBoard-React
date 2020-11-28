import React, { useEffect } from 'react';
import Logo from '../../assets/images/logo.svg';
import {useHistory} from 'react-router-dom';
import M from 'materialize-css';
import HeaderLink from '../headerLink';
import {connect} from 'react-redux';
import * as LoginAction from '../../store/actions/login';
import './style.css'


function Nav({dispatch}) {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
  })

  let user = '';
  let token = '';
  let history = useHistory();

  async function Logout(){
    localStorage.removeItem("teste")
    await dispatch(LoginAction.toggleSession(user,token))
    history.goBack();

  }

  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <img src={Logo} alt="Paguru" id="logo"/>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><HeaderLink destination="/feed" content="Feed" /></li>
            <li><HeaderLink destination="/users" content="Usuários" /></li>
            <li><HeaderLink destination="/post" content="Postar" /></li>
            <li ><button className="button" id="navButton" onClick={Logout}>Sair</button></li>
          </ul>
        </div>
      </nav>
    </>
  )
};
export default connect(state=>({}))(Nav)