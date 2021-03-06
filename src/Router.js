import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/landing';
import FeedPage from './pages/feedPage';
import PostPost from './pages/criarPostagem';
import ListUsers from './pages/listUsers';
import ListPosts from './pages/userPage';
import EditPost from './pages/editPost';
import Cadastro from './pages/cadastro';
import Error404 from './pages/404';
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
          <CustomRoute exact path="/feed/posts/:id" component={EditPost}/>
          <CustomRoute exact path="/posts/:id" component={EditPost}/>
          <Route path="*" component={Error404}/>
        </Switch>
      </BrowserRouter>    
  )
}

export default Router;