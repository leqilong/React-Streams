import React from 'react';
//BrowserRouter is a React component
//Link is used anytime you want to use an anchor tag
//Use Router instead of BrowserRouter because we're creating our own custom history object
import {Router, Route, Link} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
//Our own custom history object
import history from '../history';

const App = () => {
  //the :id can be named anything there. It's the ":" that turns whatever comes after into a variable
  return(
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  )
};

export default App;
