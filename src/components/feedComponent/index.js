import React, {Component} from 'react';
import api from '../../services/api';
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
      loaderContainer: null,
      postContainer: null,
      offset: 0,
    };
    this.showLoader = this.showLoader.bind(this);
    this.getMorePosts = this.getMorePosts.bind(this);
    this.addPostsIntoDOM = this.addPostsIntoDOM.bind(this);
  }

  async addPostsIntoDOM(){
    if(this.state.offset != 0){
      this.state.offset = this.state.offset-10
      console.log("offset", this.state.offset)
      let priorState = this.state.posts;
      let changes = await api.get(`posts/?limit=10&offset=${this.state.offset}`,
      {headers: {'Authorization': `token ${this.props.token}`}})
      .then(response=>{
        return response.data.results
      }).catch(error=>{
        alert(error.message);
      })
      changes = changes.reverse()
      //console.log("changes",changes);
      changes.map(item=>priorState.unshift(item))
      //console.log("final state",priorState)
      this.setState({posts: priorState})
    }
  }

  async getMorePosts() {
      await this.addPostsIntoDOM()
      this.state.loaderContainer.classList.remove('show')
      
  }

  showLoader(){
    this.state.loaderContainer.classList.add('show')
    this.getMorePosts()
  }

  async componentDidMount(){
    //set states
    this.state.loaderContainer = document.querySelector('.loader');
    this.state.postContainer = document.querySelector('#main');
    this.setState({session: this.props.name})

    //adding window event listener for posts call
    window.addEventListener('scroll', () =>{
      const {clientHeight, scrollHeight, scrollTop} = document.documentElement;
      const isPageBottomAlmostReached = scrollTop + clientHeight >= scrollHeight - 10;
      if (isPageBottomAlmostReached){
        this.showLoader()
      }
    })

    //getposts
    let start = await api.get(`posts/`,
    {headers: {'Authorization': `token ${this.props.token}`}})
      .then(response=>{
        let count = response.data.count
        return (Math.floor(count /10)*10)
      }).catch(error=>{
        alert(error.message);
    })
    this.state.offset = start
    await api.get(`posts/?limit=10&offset=${start}`,
    {headers: {'Authorization': `token ${this.props.token}`}})
      .then(response=>{
        console.log(response.data.results)
        this.setState({posts: response.data.results})
      }).catch(error=>{
        alert(error.message);
      })
  
  }

render(){
    return (
      <div id="main" className="">
        <div id="feed">
          {this.state.posts.reverse().map(post=>{
            if(post.author_name === this.props.name){
              return (
                <Card key={post.id} id="card" post={post} editable={true}  
                  user={this.props.user} token={this.props.token} />
                )
            } else { 
              return(
                <Card key={post.id} post={post} editable={false} token={this.props.token} user={this.props.user}/>
              )
              }
            })
          }
        </div>
        <div className="loader">
          <div className="circulo"/>
          <div className="circulo"/>
          <div className="circulo"/>
        </div>
      </div>

    )
  }
}

export default Feed;