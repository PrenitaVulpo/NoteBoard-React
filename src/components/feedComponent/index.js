import React, {Component} from 'react';
import api from '../../services/api';

class Feed extends Component{

  constructor(props){
    super(props)
    this.state ={
      posts: [
        {
          "author_name": "Loading",
          "content": "Loading"
        }
      ]
    }
  }

  async componentDidMount(){
    console.log(this.props.token)
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
          {this.state.posts.map(post=>{
            return(
              <div id="post">
                <div className="col s12 m3">
                  <div class="card" /*style="{background-image:}"*/ >
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
            })
          }
        </div>
      </div>
    )
  }
}

export default Feed;