import React, {Component} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import Card from '../cardComponent'
import './style.css'


class Feed extends Component{

  constructor(props){
    super(props)
    this.state ={
      posts: [
        {
          "id": 0,
          "content": "Loading",
          "author_name": "Loading", 
          "created_at": "Loading",
          "updated_at": "Loading"
        }
      ],
      name: '',
    }
  }



  async moreposts(data){
    
    const response = await fetch(data.next, {
      method: 'GET',
      headers: {'Authorization': `token ${this.props.token}`}
    });

    console.log("moreposts", response.data);

    while (data.next){
      this.moreposts()
    }
  }

  async componentDidMount(){
    this.setState({session: this.props.name})
    let limit = await api.get(`posts/`,
    {headers: {'Authorization': `token ${this.props.token}`}})
      .then(response=>{
        return response.data.count
      }).catch(error=>{
        console.log(error.message);
        alert(error.message);
      })
    await api.get(`posts/?limit=${limit}`,
    {headers: {'Authorization': `token ${this.props.token}`}})
      .then(response=>{
        this.setState({posts: response.data.results})
      }).catch(error=>{
        console.log(error.message);
        alert(error.message);
      })
  
  }

render(){
  var handleRefreshPage = this.handleRefreshPage
    return (
      <div id="main">
        <div id="feed">
          {this.state.posts.reverse().map(post=>{
            if(post.author_name === this.props.name){
              return (
                <Card id="card" post={post} editable={true}  
                  user={this.props.user} token={this.props.token} />
                )
            } else { 
              return(
                <Card post={post} editable={false} token={this.props.token} user={this.props.user}/>
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