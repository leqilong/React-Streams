const INITIAL_STATE = {
  isSignedIn: null
}
export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'SIGN_IN':
      //take the state object out and put it into an new object using '...' syntax, then update the isSignedIn value
      return {...state, isSignedIn: true}
    case 'SIGN_OUT':
      return {...state, isSignedIn: false}
    default:
      return state;
  }
}
