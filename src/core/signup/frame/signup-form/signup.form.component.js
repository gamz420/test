import React from 'react';

export function SignupFormComponent(props) {
  const {
    fieldLogin,
    fieldPassword,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name={fieldLogin}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value[fieldLogin]}
        />
        {isFieldError(fieldLogin)}
        <input
          type="password"
          name={fieldPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value[fieldPassword]}
        />
        {isFieldError(fieldPassword)}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
