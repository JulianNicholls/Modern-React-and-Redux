import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <div>
      <Router>
        <>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/show" component={StreamShow} />
          <Route path="/streams/delete" component={StreamDelete} />
        </>
      </Router>
    </div>
  );
};

export default App;
