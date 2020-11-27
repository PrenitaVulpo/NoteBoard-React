export function toggleSession(user, token){
  return{
    type: 'TOGGLE_SESSION',
    user, 
    token

  }
}

export function toggleLogout(user, token){
  return{
    type: 'TOGGLE_LOGOUT',
    user, 
    token

  }
}