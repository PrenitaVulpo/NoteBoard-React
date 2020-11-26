import React, {useState} from 'react';
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import api from '../../services/api';
//import api from '../../services/MockAPIs/posts-no-header';
import Logo from '../../assets/images/logo.png';
import 'materialize-css/dist/css/materialize.min.css';

function Landing({username, header, dispatch}){

  function toggleSession(user, senha){
    return{
      type: 'TOGGLE_SESSION',
      user, 
      token

    }
  }
  //dispatch(toggleSession(login, 'udashfusdufhudsahifuhdsaiugfuadsguhuvhuhdsiahih'))

  async function apiCall(){
    let parameters = {"username": login, "password": senha}
    let res = ''
    await api.post('auth',parameters, {
      header: {
        'Content-Type': "application/json"
      }
    })
      .then(response=>{
        console.log(response.data);
        res = response.data.token
      }).catch(err => {
        console.log(err.message)
      }
    )
  }

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [token, setToken] = useState('');

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
                <a to="/cadastro" id="routea">Não tem conta? Cadastre-se aqui!</a>
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