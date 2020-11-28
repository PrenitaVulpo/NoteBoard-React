import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {connect} from 'react-redux';

// import { Container } from './styles';

function CustomRoutes({token, component: Component, ...rest}) {
  return (
    <Route {...rest}
      render={props => {
        if (token){
          return <Component {...props}/>
        } else {
          return <Redirect to={{
            pathname: "/",
            state: {
              from: props.location
            }
          }}/>
        }
      }}
      />
  );
}

export default connect(state => ({token: state.header}))(CustomRoutes);