import React, {useState} from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import api from '../../services/api';
import Logo from '../../assets/images/logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import * as LoginAction from '../../store/actions/login';


function Landing({username, header, dispatch}){

  const history= useHistory()
  
  ;
  async function apiCall(){
    let parameters = {"username": login, "password": senha}
    let res = ''
    await api.post('auth/',parameters)
      .then(response=>{
        //console.log(response.data);
        res = response.data.token;
        dispatch(LoginAction.toggleSession(login,res));
        history.push('feed/')
      }).catch(err => {
        console.log(err.message)
      }
    )
    
  }

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  return(
    <>

      <div className="row" >
        <div className="col s12 m4 offset-m4">
          <div className="card">
            <div className="card-content">
              <div className="center-align">
                <img src={Logo} alt="Paguru" />
                <h4>Login</h4>
              </div>
              <div className="inputs">
                <div className="input-block">
                  <label htmlFor="usuario" id="label">Usuário</label><br />
                  <input type="text" name="usuario" id="input"
                    onChange={(s) => setLogin(s.target.value)} />
                </div>
                <div className="input-block">
                  <label htmlFor="senha" id="label">Senha</label><br />
                  <input type="password" name="senha" id="input"
                    onChange={(s) => setSenha(s.target.value)} />
                </div>
              </div>
              <div className="center-align">
                <button onClick={apiCall}>entrar</button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <strong>{username}</strong>
      <br></br>
      <span>{header}</span>
    </>


  )
}

export default connect(state=>({username: state.user, header: state.header}))(Landing);