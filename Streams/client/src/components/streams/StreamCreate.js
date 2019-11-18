import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions';

const StreamCreate = ({ handleSubmit, createStream }) => {
  const onSubmit = formValues => {
    createStream(formValues);
  };

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Title" />
      <Field name="description" component={renderInput} label="Description" />

      <button className="ui button primary">Create Stream</button>
    </form>
  );
};

// This is moved outside of the StreamCreate component, because it was
// being recreated on each render, losing focus after the first character.

const renderInput = ({ input, label, meta: { touched, error } }) => {
  const classname = `field ${touched && error ? 'error' : ''}`;

  return (
    <div className={classname}>
      <label htmlFor={input.name}>{label}</label>
      <input id={input.name} {...input} autoComplete="off" />
      {touched && error && (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )}
    </div>
  );
};

const validate = ({ title, description }) => {
  const errors = {};

  if (!title || title.length < 10) {
    errors.title = 'You must enter a title of at least 10 characters';
  }

  if (!description || description.length < 20) {
    errors.description = 'You must enter a description of at least 20 characters';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'StreamCreate',
  validate,
})(StreamCreate);

export default connect(null, actions)(formWrapped);
