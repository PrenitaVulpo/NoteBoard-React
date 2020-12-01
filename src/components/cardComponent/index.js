import React, {useState} from 'react';
import api from '../../services/api';
import { useHistory} from 'react-router-dom';



function CardComponent (props){
  const [show, setShow] = useState(true);


  const history = useHistory();


  

  function deletePost() {
    api.delete(`https://paguru-challenge.herokuapp.com/api/v1/posts/${props.post.id}/`,
    {headers: {'Authorization': `token ${props.token}`}})
      .then(response=>{
        alert("postagem deletada com sucesso!");
        setShow(false)
      }).catch(err=>{
        alert(err.message);
        
      });
  }

  function openEdit(){

    history.push(`posts/${props.post.id}`)
  }

  if (show === true){
    return (
      <div key={props.post.id} id="post">
        <div className="col s12 m3">
          <div className="card">
            <div className="card-content">
              <p>{props.post.content}</p>
            </div>
            <div className="card-content">
              <p>{props.post.author_name}</p>
            </div>
            {props.editable ? <div className="card-action">
              <button onClick={openEdit}>editar</button>
              <button onClick={deletePost}>apagar</button>
            </div>: null}
            <div className="card-content">
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