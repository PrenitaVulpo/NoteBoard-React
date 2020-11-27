import React, {Component} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';


class Feed extends Component{

  constructor(props){
    super(props)
    this.state ={
      posts: [
        {
          "author_name": "Loading",
          "content": "Loading"
        }
      ],
      name: ''
    }
  }

  async componentDidMount(){
    console.log(this.props.token)
    console.log(this.props.name)
    this.setState({session: this.props.name})
    console.log(`state: ${this.props.name}`)
    await api.get('posts/',
    {headers: {'Authorization': `token ${this.props.token}`}})
      .then(response=>{
        this.setState({posts: response.data.results})
      }).catch(error=>{
        console.log(error.message);
        alert(error.message);
      })
  
  }

render(){
    return (
      <div id="main">
        <div id="feed">
          {this.state.posts.reverse().map(post=>{
            if(post.author_name == this.props.name){
              return (
                <div id="post">
                  <div className="col s12 m3">
                    <div class="card">
                      <div class="card-content">
                        <p>{post.content}</p>
                      </div>
                      <div class="card-action">
                        <p>{post.author_name}</p>
                      </div>
                      <div class="card-action">
                        <Link to="/">editar</Link>
                      </div>
                    </div>
                  </div>
                </div>
                )
            } else { 
              return(
                <div id="post">
                  <div className="col s12 m3">
                    <div class="card">
                      <div class="card-content">
                        <p>{post.content}</p>
                      </div>
                      <div class="card-action">
                        <p>{post.author_name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
              }
            })
          }
        </div>
      </div>
    )
  }
}

export default Feed;