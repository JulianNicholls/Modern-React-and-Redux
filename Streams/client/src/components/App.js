import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';

import Header from './Header';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />

        <Route path="/" exact component={StreamList} />
        <Route path="/streams/show/:id" component={StreamShow} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit/:id" component={StreamEdit} />
        <Route path="/streams/delete/:id" component={StreamDelete} />
      </Router>
    </div>
  );
};

export default App;
