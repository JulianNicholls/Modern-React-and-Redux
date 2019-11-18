import React from 'react';
import { Field, reduxForm } from 'redux-form';

// This is moved outside of the StreamCreate component, // because it was
// being recreated on each render, losing focus after the first character.

const renderInput = ({ input, label, meta: { touched, error } }) => {
  const classname = `field ${touched && error ? 'error' : ''}`;
  return (
    <div className={classname}>
      <label htmlFor={input.name}>{label}</label>
      <input id={input.name} {...input} autoComplete="off" />
      {touched && (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )}
    </div>
  );
};

const StreamCreate = ({ handleSubmit }) => {
  const onSubmit = formValues => {
    console.log({ formValues });
  };

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Title" />
      <Field name="description" component={renderInput} label="Description" />

      <button className="ui button primary">Create Stream</button>
    </form>
  );
};

const validate = ({ title, description }) => {
  const errors = {};

  if (!title || title.length < 15) {
    errors.title = 'You must enter a title of at least 15 characters';
  }

  if (!description || description.length < 30) {
    errors.description = 'You must enter a description of at least 30 characters';
  }

  return errors;
};

export default reduxForm({
  form: 'StreamCreate',
  validate,
})(StreamCreate);
