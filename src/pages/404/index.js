import React from 'react';
import {Link} from 'react-router-dom';

// import { Container } from './styles';




function Error404() {
  return (
    <div>
      <h1>404</h1>
      <Link to="/cadastro" className="linkText">Voltar à página de login</Link>
      <Link to="/cadastro" className="linkText">Voltar ao feed</Link>
    </div>
  );
}

export default Error404;