import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }
  //This is a callback function we pass down to child StreamForm, so it knows how to handle submit
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  //initialValues is a property that comes with redux form
  render(){
    if(!this.props.stream){
      return <div>Loading...</div>;
    }
    //_.pick function pulls out the properties and their values we care about from the stream object
    return(
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

//This helps get state into this component
//mapStateToProps function always comes with a second, optional argument - ownProps
//ownProps refers to the props in our component
//This allows mapStateToProps to access the stream id in props
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {stream: state.streams[ownProps.match.params.id]};

}
export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
