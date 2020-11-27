import React, {Component} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';

class ListUsers extends Component{
  constructor(props){
    super(props)
    this.state ={
      users: [
        {"username": "Loading",
        "email": "Loading"}
      ]
    }
  }

  async componentDidMount(){
    console.log(this.props.token);
    await api.get('users/',
    {headers: {'Authorization': `token ${this.props.token}`}})
      .then(response=>{
        console.log(response.data)
        this.setState({users: response.data.results})
      }).catch(error=>{
        console.log(error.message);
        alert(error.message);
      })
  }
  render(){  
    return (
      <>
        <div className="container" >
          <div className="row" >
            <div className="col s12 m8 offset-m2">
              <div className="card">
                <div className="card-content">
                  <div className="center-align">
                    <h4>Usuários</h4>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.users.map(user => {
                        return (
                          <tr>
                            <td><Link to={`/user/${user.id}`}>{user.username}</Link></td>
                            <td>{user.email}</td>
                          </tr>
                        )
                      })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>


      </>
    )
  }
}

export default ListUsers;