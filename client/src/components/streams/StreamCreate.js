import React from 'react';
//Field is a React component that will eventually show up on screen
//reduxForm is a redux-form function, it has exact fuctionality as connect from react-redux
//reduxForm makes sure we can call action creators and get form data into our component; happens automatically
import { Field, reduxForm } from 'redux-form';

//The Field component is just about hooking up the infrastructure, but is not responsible for showing anything on screen
//We need a prop in Field, in this case "component", to actually render stuff on screen
class StreamCreate extends React.Component {
  renderInput = ({input, label}) => {
    //{...formProps.input} syntax - taking the entire properties in formProps.input and put them as props in the <input />element
    //we can further deconstruct the syntax to be ({input})
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input}/>
      </div>
    )
  }

  render(){
    //console.log(this.props);
    return(
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description"/>
      </form>
    )
  }
}

//reduxForm function receives a single object as argument
//as soon as reduxForm is hooked up to this component, it receives a lot of props
export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
