import streams from '../apis/streams';
import history from '../history';
import {SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM} from './types';

export const signIn = (userId) =>{
  return {
    type: SIGN_IN,
    payload: userId
  };
};


export const signOut = () =>{
  return {
    type: SIGN_OUT
  };
};

//When we return a function from an action creator, the function gets called automatically by redux-thunk w/two arguments
//the first argument is dispatch, the second argument is the getState function
//getState function allows us to reach into the redux store and pull out some piece of information
//In this case, it allows us to pull out userId from Auth
export const createStream = formValues => async (dispatch, getState) => {
  const {userId} = getState().auth;
  const response = await streams.post('/streams', {...formValues, userId});
  dispatch({type: CREATE_STREAM, payload: response.data});
  //Do some programmatic navigation to get the user back to the root route
  //.push() is how we navigate a user around
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({type: FETCH_STREAMS, payload: response.data});
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({type: FETCH_STREAM, payload: response.data});
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues);
  dispatch({type: EDIT_STREAM, payload: response.data});
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({type: DELETE_STREAM, payload: id});
};
