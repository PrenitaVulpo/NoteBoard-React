import React, {Component} from 'react';
import api from '../../services/api';

class UserDetails extends Component{
  constructor(props){
    super(props)
    this.state ={
      user: {
        "username": "Loading",
        "email": "Loading"
      },
      posts: []
    }
  }

  async componentDidMount(){
    console.log(`id: ${this.props.id}`)
    await api.get(`users/${this.props.id}/`,
    {headers: {'Authorization': `token ${this.props.token}`}})
      .then(response=>{
        console.log(response.data)
        this.setState({user: response.data,
          posts: response.data.posts
        })
      }).catch(error=>{
        console.log(error.message);
        alert(error.message);
      })
  }
  render(){  
    
    return (
      <div>
        <h1>{this.state.user.username}</h1>
        <p>{this.state.user.email}</p>
        <table>
          <tr>
            <th>Post</th>
            <th>Crado em:</th>
            <th>Modificado em:</th>
          </tr>
          {this.state.posts.map(post=>{
            return( 
              <tr>
                <th>{post.content}</th>
                <th>{post.created_at}</th>
                <th>{post.updated_at}</th>
              </tr>
            )
           })
          }
        </table>
      </div>
    )
  }
}

export default UserDetails;