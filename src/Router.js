import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/landing';
import FeedPage from './pages/feedPage';
import PostPost from './pages/criarPostagem';
import ListUsers from './pages/listUsers';
import ListPosts from './pages/userPage';
import Cadastro from './pages/cadastro';
import CustomRoute from './CustomRoutes';


const Router = () => {
  return(
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/cadastro" component={Cadastro} />
          <CustomRoute exact path="/feed" component={FeedPage}/>
          <CustomRoute exact path="/post" component={PostPost}/>
          <CustomRoute exact path="/users" component={ListUsers}/>
          <CustomRoute exact path="/user/:id" component={ListPosts}/>
          <Route path="*" component={()=><strong>404</strong>}/>
        </Switch>
      </BrowserRouter>    
  )
}

export default Router;