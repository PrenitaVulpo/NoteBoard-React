import React from 'react';
import Nav from '../../components/nav/index';
import Feed from '../../components/feedComponent';
import { useHistory, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


// import { Container } from './styles';

function FeedPage({token}){

  const history= useHistory()

  if(token){
    console.log(`token da sessão = ${token}`)
    return(
      <div className="feed">
        <Nav />
        <Feed classname="container" token={token}/>
      </div>
    )
    } else {
      alert("Você precisa iniciar a sua sessão");
      return <Redirect to="/"/>
    }
}

export default connect(state=>({token: state.header}))(FeedPage)