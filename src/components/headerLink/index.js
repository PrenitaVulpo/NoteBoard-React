import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HeaderLink extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  
  render(){
    return(
    <Link to={this.props.destination} id="headerLink">
      <p>{this.props.content}</p>
    </Link>
    )
  } 
}

export default HeaderLink;