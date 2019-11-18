import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StreamCreate = ({ handleSubmit }) => {
  const renderInput = ({ input, label }) => {
    return (
      <div className="field">
        <label htmlFor={input.name}>{label}</label>
        <input {...input} />
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

export default reduxForm({
  form: 'StreamCreate',
})(StreamCreate);
