import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import del from '../../assets/images/delete.svg';
import edit from '../../assets/images/edit.svg';


// import { Container } from './styles';

class cardComponent extends Component {

  constructor(props){
    super(props)
    this.state ={
      post: {},
      editable: false,
      edited: false
    }
  }

  componentDidMount(){
    this.setState({
      post: this.props.post,
      editable: this.props.editable,
      edited: this.props.edited
    })
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
              <Link to="/" id="edit">editar</Link>
              <Link to="/" id="delete">apagar</Link>
            </div>: null}
            <div class="card-action">
              {this.props.edited ? <p>editado</p> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cardComponent;