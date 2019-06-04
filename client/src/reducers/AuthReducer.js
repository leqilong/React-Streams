import {SIGN_IN, SIGN_OUT} from '../actions/types';
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
}
export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SIGN_IN:
      //take the state object out and put it into an new object using '...' syntax, then update the isSignedIn value
      return {...state, isSignedIn: true, userId: action.payload}
    case SIGN_OUT:
      //when a user signs out, we should clear the userId property
      return {...state, isSignedIn: false, userId: null}
    default:
      return state;
  }
}
