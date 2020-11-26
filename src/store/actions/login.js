export function toggleSession(user, token){
  return{
    type: 'TOGGLE_SESSION',
    user, 
    token

  }
}