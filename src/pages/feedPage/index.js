import React from 'react';
import Nav from '../../components/nav/index';
import Feed from '../../components/feedComponent';
import { Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


// import { Container } from './styles';

function FeedPage({token, username}){



    return(
      <div className="feed">
        <Nav />
        <Feed classname="container" token={token} name={username}/>
      </div>
    )
    
}

export default connect(state=>({
  token: state.header,
  username: state.user  }))(FeedPage)