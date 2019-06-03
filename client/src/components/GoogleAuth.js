import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount(){
    //the window here indicates the gapi is available on the window scope in our browser
    //load up the client portion of the google api libary as soon as the component loads
    //the library load might take sometime, so we add a callback function here to notify when loading completes
    window.gapi.load('client:auth2', ()=>{
      window.gapi.client.init({
        clientId: '838108508480-ovmenjam0rimej65sb41k2n3s061q5ql.apps.googleusercontent.com',
        scope: 'email'
      //the .then will be invoked after api client has successfully initialized itself
      }).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance();
        //Update the auth state inside our redux store by calling action creators
        this.onAuthChange(this.auth.isSignedIn.get());
        //wait for auth state to change some point in future
        this.auth.isSignedIn.listen(this.onAuthChange)
      });
    });
  }

  onAuthChange = (isSignedIn) =>{
    //if isSignedIn is equal to true
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () =>{
    this.auth.signIn();
  }

  onSignOutClick = () =>{
    this.auth.signOut();
  }

  renderAuthButton(){
    if(this.props.isSignedIn === null){
      return null;
    } else if (this.props.isSignedIn){
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }
  render(){
    return(
      <div>{this.renderAuthButton()}</div>
    )
  }
}

const mapStateToProps = state => {
  return {isSignedIn: state.auth.isSignedIn}
};
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
