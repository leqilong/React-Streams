import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  //This is a callback function we would pass down to the child component StreamForm, so that this parent component can tell
  //child component StreamForm how to handle submit
  onSubmit = (formValues) =>{
    this.props.createStream(formValues);
  }

  render(){
    return(
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}


export default connect(null, { createStream })(StreamCreate);
