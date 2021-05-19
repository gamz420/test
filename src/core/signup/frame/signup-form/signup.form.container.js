import React from 'react';
import { Formik } from 'formik';
import { SignupFormComponent } from './signup.form.component';
import { SIGNUP_FORM_FIELD_KEY } from './signup.form.type';

export function SignFormContainer(props) {
  console.log(SIGNUP_FORM_FIELD_KEY, 'this SIGNUP_FORM_FIELD_KEY');
  console.log(props, 'this props');

  const LOGIN_NAME = props.filedName[SIGNUP_FORM_FIELD_KEY.LOGIN];
  const PASSWORD_NAME = props.filedName[SIGNUP_FORM_FIELD_KEY.PASSWORD];

  
  return (
    <div>
      <Formik
        initialValues={props.initialValue}
        validate={props.validation}
        onSubmit={props.onSubmitForm}
      >
        {(props) => (
          <SignupFormComponent
            fieldLogin={LOGIN_NAME}
            fieldPassword={PASSWORD_NAME}
            {...props}
          />
        )}
      </Formik>
    </div>
  );
}
