import React from 'react';
import { render } from 'react-dom';
import faker from 'faker';

import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  return (
    <>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#333',
          color: '#eee',
          height: '2rem',
          marginBottom: '1rem',
          justifyContent: 'center',
        }}
      >
        Components
      </header>
      <div className="ui container comments">
        <ApprovalCard>
          <div>
            <h4>Warning</h4>
            Are you sure you want to do this?
          </div>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            avatar={faker.image.avatar()}
            author="Sam"
            date="Today at 9:16am"
            text="Nice blog post, dude!"
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            avatar={faker.image.avatar()}
            author="Dave"
            date="Today at 7:21am"
            text="Hurrah!!"
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            avatar={faker.image.avatar()}
            author="Dee"
            date="Yesterday at 8:14pm"
            text="Well done!"
          />
        </ApprovalCard>
      </div>
    </>
  );
};

render(<App />, document.getElementById('root'));
