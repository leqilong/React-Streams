import React from 'react';
//Field is a React component that will eventually show up on screen
//reduxForm is a redux-form function, it has exact fuctionality as connect from react-redux
//reduxForm makes sure we can call action creators and get form data into our component; happens automatically
import { Field, reduxForm } from 'redux-form';

//The Field component is just about hooking up the infrastructure, but is not responsible for showing anything on screen
//We need a prop in Field, in this case "component", to actually render stuff on screen
class StreamCreate extends React.Component {

  renderError({error, touched}){
    if(touched && error){
      return(
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }
  renderInput = ({input, label, meta}) => {
    //{...formProps.input} syntax - taking the entire properties in formProps.input and put them as props in the <input />element
    //we can further deconstruct the syntax to be ({input})
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    )
  }

  //reduxForm can handle passing the form value over in the props
  onSubmit(formValues){
    console.log(formValues);
  }

  render(){
    //console.log(this.props);
    return(
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description"/>
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues)=>{
  const errors = {};
  if (!formValues.title){
    errors.title = 'You must enter a title';
  }

  if (!formValues.description){
    errors.description = 'You must enter a description';
  }

  return errors;

}
//reduxForm function receives a single object as argument
//as soon as reduxForm is hooked up to this component, it receives a lot of props
export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
