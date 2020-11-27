import React from 'react';

// import { Container } from './styles';

function editableCard({user}) {
  return (
    <div id="post">
      <div className="col s12 m3">
        <div class="card">
          <div class="card-content">
            <p>{props.content}</p>
          </div>
          <div class="card-action">
            <p>{props.author_name}</p>
          </div>
          <div class="card-action">
            <p>editar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(state=>({username: state.user}))(editableCard);