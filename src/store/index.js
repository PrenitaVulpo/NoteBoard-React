import {createStore} from 'redux';

const INITIAL_STATE = {
  isConnected: false,
  loading: false,
  user: 'No user',
  header: 'No token'
}


function reducer(state = INITIAL_STATE, action){
  console.log(action)

  return {
    ...state,
    user: action.user, 
    header: action.token
  }
}

const store = createStore(reducer);

export default store;