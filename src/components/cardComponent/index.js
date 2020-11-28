import React, {useState} from 'react';
import api from '../../services/api';
import { useHistory} from 'react-router-dom';



function CardComponent (props){
  const [show, setShow] = useState(true);


  const history = useHistory();


  //console.log("updated on: ", props.post)
  

  function deletePost() {
    api.delete(`https://paguru-challenge.herokuapp.com/api/v1/posts/${props.post.id}/`,
    {headers: {'Authorization': `token ${props.token}`}})
      .then(response=>{
        alert("postagem deletada com sucesso!");
        setShow(false)
      }).catch(err=>{
        alert(err.message);
        console.log(err.message);
      });
    console.log("apagar")
  }

  function openModal(){

    history.push(`posts/${props.post.id}`)
  }

  function editPost() {
    api.put(`https://paguru-challenge.herokuapp.com/api/v1/posts/${props.post.id}/`,
    {headers: {'Authorization': `token ${props.token}`}})
      .then(response=>{
        alert("postagem deletada com sucesso!");
        window.location.reload();
      }).catch(err=>{
        alert(err.message);
        console.log(err.message);
      });
    console.log("editar");
  }

  if (show === true){
    return (
      <div key={props.post.id} id="post">
        <div className="col s12 m3">
          <div class="card">
            <div class="card-content">
              <p>{props.post.content}</p>
            </div>
            <div class="card-action">
              <p>{props.post.author_name}</p>
            </div>
            {props.editable ? <div class="card-action">
              <button onClick={openModal}>editar</button>
              <button onClick={deletePost}>apagar</button>
            </div>: null}
            <div class="card-action">
              {props.post.created_at.substring(11,19) !== props.post.updated_at.substring(11,19) 
              ? <p>editado</p> : null}
            </div>
          </div>
        </div>
      </div>
    );
    } else {
      return <div/>
    }
  }


export default CardComponent;