import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import {fetchStream, deleteStream} from '../../actions';

class StreamDelete extends React.Component {

  componentDidMount(){
    //the id in props are passed down from defined Route to this component in App.js
    this.props.fetchStream(this.props.match.params.id);
  }
  //the buttons tag are wrapped in a dig because it's not correct JS syntax to assign multiple jsx to a variable
  renderActions(){
    const {id} = this.props.match.params;
    return (
      <React.Fragment>
        <button onClick={()=> this.props.deleteStream(id)}className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent(){
    if(!this.props.stream){
      return 'Are you sure you want to delete this stream?'
    }

    return `Are you sure you want to delete this stream with title: ${this.props.stream.title}?`
  }

  render(){
    return(
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={()=> history.push('/')}
        />
    )
  };
}

//calling state out of the redux store
//the state is empty until we call fetchStream in componentDidMount
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
