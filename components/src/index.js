import React from 'react';
import { render } from 'react-dom';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="Avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 9:16am</span>
          </div>
          <div className="text">Nice blog post, dude!</div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="Avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Dave
          </a>
          <div className="metadata">
            <span className="date">Today at 7:21am</span>
          </div>
          <div className="text">Hurrah!</div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="Avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Dee
          </a>
          <div className="metadata">
            <span className="date">Yesterday at 6:00pm</span>
          </div>
          <div className="text">Well done!</div>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
