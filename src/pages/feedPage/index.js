import React from 'react';
import Nav from '../../components/nav/index';
import Feed from '../../components/feedComponent';
import {connect} from 'react-redux';



function FeedPage({token, username}){



    return(
      <div className="feed">
        <Nav />
        <Feed className="container" token={token} name={username}/>
      </div>
    )
    
}

export default connect(state=>({
  token: state.header,
  username: state.user  }))(FeedPage)