import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Landing from './pages/landing';
import FeedPage from './pages/feedPage';


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
        </Switch>
      </BrowserRouter>    
  )
}

export default Router;