import React from 'react';
import ReactDOM from 'react-dom';


const Modal = props => {
  //the outter div with "dimmer" classname is the outer part of the modal
  //when the dimmer class is clicked on, the modal should exit
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div onClick={(e)=> e.stopPropagation()}className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
