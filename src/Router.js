import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Landing from './pages/landing';
import FeedPage from './pages/feedPage';
import PostPost from './pages/criarPostagem';
import ListUsers from './pages/listUsers';
import ListPosts from './pages/userPage';


/*function CustomRoute({isPrivate, ...rest}){
  const {loading, authenticated} = useContext(Context);

  if(loading){
    return <h1>Loading...</h1>
  }

  if (isPrivate && !authenticated){
    return <Redirect to="/"></Redirect>
  } 
  
  //return <Redirect to="/feed"/>
  return <Route {...rest}/>

          <CustomRoute exact path="/" component={Landing} />
          <Route component={Erro404}/> 


}*/


const Router = () => {
  return(
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/feed" component={FeedPage}/>
          <Route exact path="/post" component={PostPost}/>
          <Route exact path="/users" component={ListUsers}/>
          <Route exact path="/user/:id" component={ListPosts}/>
        </Switch>
      </BrowserRouter>    
  )
}

export default Router;