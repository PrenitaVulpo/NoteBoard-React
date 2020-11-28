import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import api from '../../services/api'



class cardComponent extends Component{

  //console.log("updated on: ", props.post)
  state ={
    show: true
  }
  

  deletePost() {
    api.delete(`https://paguru-challenge.herokuapp.com/api/v1/posts/${this.props.post.id}/`,
    {headers: {'Authorization': `token ${this.props.token}`}})
      .then(response=>{
        alert("postagem deletada com sucesso!");
        this.setState({show: false})
      }).catch(err=>{
        alert(err.message);
        console.log(err.message);
      });
    console.log("apagar")
  }

  editPost() {
    alert("função desabilitada");  
    api.put(`https://paguru-challenge.herokuapp.com/api/v1/posts/${this.props.post.id}/`,
    {headers: {'Authorization': `token ${this.props.token}`}})
      .then(response=>{
        alert("postagem deletada com sucesso!");
        window.location.reload();
      }).catch(err=>{
        alert(err.message);
        console.log(err.message);
      });
    console.log("editar");
  }

  render(){
    if (this.state.show == true){
    return (
      <div key={this.props.post.id} id="post">
        <div className="col s12 m3">
          <div class="card">
            <div class="card-content">
              <p>{this.props.post.content}</p>
            </div>
            <div class="card-action">
              <p>{this.props.post.author_name}</p>
            </div>
            {this.props.editable ? <div class="card-action">
              <button onClick={this.editPost.bind(this)}>editar</button>
              <button onClick={this.deletePost.bind(this)}>apagar</button>
            </div>: null}
            <div class="card-action">
              {this.props.post.created_at.substring(11,19) !== this.props.post.updated_at.substring(11,19) 
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
}

export default cardComponent;