import React, {useState} from 'react';
import api from '../../services/api';
import Nav from '../../components/nav'
import { useHistory} from 'react-router-dom';
import {connect} from 'react-redux';


function CriarPostagem({token}){
  const [text, setText] = useState('');
  const history = useHistory();
  
  async function handleSubmit(){
    let content = {"content": text};
    console.log(`token: ${token} & ${content}`)

    await api.post('posts/', content,
    {headers: {'Authorization': `token ${token}`}})
      .then(response=>{
          alert("post criado com sucesso!");
          history.push('/feed')
      }).catch(error=>{
        alert(error.message);
        console.log(error.message)
      })
  }

  return(
    <div>
      <Nav/>
      <div className="row" >
        <div className="col s12 m4 offset-m4">
          <div className="card">
            <div className="card-content">
              <div className="center-align">
                <textarea onChange={(s)=>setText(s.target.value)}></textarea>
                <button type="button" onClick={handleSubmit}>Publicar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default connect(state=>({token: state.header}))(CriarPostagem);