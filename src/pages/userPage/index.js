import React from 'react';
import Nav from '../../components/nav';
import UserPostList from '../../components/userPostList';
import {connect} from 'react-redux';

// import { Container } from './styles';

function userPage({token, match}) {
  let id = match.params.id;
  return (
    <div>
      <Nav/>
      <UserPostList token={token} id={id}/>
    </div>

  );
}

export default connect(state=>({token: state.header}))(userPage);