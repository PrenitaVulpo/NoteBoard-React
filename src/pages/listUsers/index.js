import React from 'react';
import Nav from '../../components/nav';
import UsersList from '../../components/usersList';
import {connect} from 'react-redux';

// import { Container } from './styles';

function listUsers({token}) {
  return (
    <div>
      <Nav/>
      <UsersList token={token}/>
    </div>

  );
}

export default connect(state=>({token: state.header}))(listUsers);