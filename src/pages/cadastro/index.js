import React, {useState} from 'react';
import api from '../../services/api';
import Logo from '../../assets/images/logo.png';
import {Link, useHistory} from 'react-router-dom';



function Cadastro(){
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');
  const [email, setEmail] = useState('');
  let history = useHistory();

  async function handleSignUp(){
    if(senha===senha2){
      let credentials = {"username": login, "password": senha, "email": email};
      
      await api.post('users/', credentials,{
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        console.log(response);
        alert("Sucesso!");
        history.push("/");
      })
      .catch(error=>{
        console.log(error)
        alert(error.message)
      })
    } else {
      alert("as senhas precisam ser iguais")
    }
  } 
  
  return (
    <div className="row" >
      <div className="col s12 m4 offset-m4">
        <div className="card">
          <div className="card-content">
            <div className="center-align">
              <img src={Logo} alt="Paguru" />
              <h4>Cadastro</h4>
            </div>
            <form>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" 
                  onChange={(s)=>setEmail(s.target.value)}/>
              </div>
              <div className="input-block">
                <div className="input-field">
                  <label htmlFor="user">Nome de usuário:</label>
                  <input type="text" name="user" 
                    onChange={(s)=>setLogin(s.target.value)}/>
                </div>
                <div className="input-field">
                  <label htmlFor="senha">Senha:</label>
                  <input type="password" name="senha" 
                    onChange={(s)=>setSenha(s.target.value)}/>
                </div>
                <div className="input-field">
                  <label htmlFor="senha">Confirme a senha:</label>
                  <input type="password" name="senha" 
                    onChange={(s)=>setSenha2(s.target.value)}/>
                </div>
              </div>


              <div className="center-align">
                <button className="button" type="button" onClick={handleSignUp}>
                  Cadastre-se</button>
                <br />
                <Link to="/" id="routeLink" className="linkText">Já possui uma conta? Faça Login!</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Cadastro;