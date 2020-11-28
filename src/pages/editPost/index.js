import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import Nav from '../../components/nav'
import { useHistory} from 'react-router-dom';
import {connect} from 'react-redux';


function EditPost({token, match}){
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const history = useHistory();

  var id = match.params.id;


  useEffect(()=>{
    api.get(`posts/${id}`,
    {headers: {'Authorization': `token ${token}`}})
      .then(response=>{
          setDisplayText(response.data.content)
      }).catch(error=>{
        alert("problema na criação do post");
        console.log(error.message)
      })
      document.getElementById("my_textarea2").innerText = displayText
    console.log("inner text", displayText)

  },[])
  
  async function handleSubmit(){
    let content = {"content": text};
    console.log(`token: ${token} & ${content}`)

    await api.post('posts/', content,
    {headers: {'Authorization': `token ${token}`}})
      .then(response=>{
          alert("post criado com sucesso!");
          history.push('/feed')
      }).catch(error=>{
        alert("problema na criação do post");
        console.log(error.message)
      })
  }

  function handleNoSubmit(){
    history.push('/feed')
  }

  return(
    <div>
      <Nav/>
      <div className="row" >
        <div className="col s12 m4 offset-m4">
          <div className="card">
            <div className="card-content">
              <div className="center-align">
                <textarea onChange={(s)=>setText(s.target.value)} 
                  placeholder={displayText} id="my_textarea2">{displayText}</textarea>
                <button type="button" onClick={handleSubmit}>Postar edição</button>
                <button type="button" onClick={handleNoSubmit}>Sair sem editar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default connect(state=>({token: state.header}))(EditPost);