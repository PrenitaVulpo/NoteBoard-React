import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api'



class cardComponent extends Component{

  //console.log("updated on: ", props.post)

  deletePost() {
    alert("função desabilitada")
    console.log("apagar")
  }

  editPost() {
    alert("função desabilitada")
    console.log("editar")
  }

  render(){
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
  }
}

export default cardComponent;