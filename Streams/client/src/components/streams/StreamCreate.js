import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StreamCreate = ({ handleSubmit }) => {
  const renderInput = ({ input, label, meta: { touched, error } }) => {
    return (
      <div className="field">
        <label htmlFor={input.name}>{label}</label>
        <input {...input} />
        {touched && <div>{error}</div>}
      </div>
    );
  };

  const onSubmit = formValues => {
    console.log({ formValues });
  };

  return (
    <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
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
