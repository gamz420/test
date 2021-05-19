import React from 'react';

import { signupFormValidation } from './signup.validation';
import { SIGNUP_FIELD_NAME, SIGNUP_FORM_FIELD_NAME } from './signup.type';
import { SignFormContainer } from './frame/signup-form/signup.form.container';

export function SignupContainer() {
  const signupSendData = (values) => {
    console.log(values);
  };

  const signupFormGetInitialValue = () => {
    return {
      [SIGNUP_FIELD_NAME.LOGIN]: '',
      [SIGNUP_FIELD_NAME.PASSWORD]: '',
    };
  };

  return (
    <SignFormContainer
      validation={signupFormValidation}
      initialValue={signupFormGetInitialValue()}
      onSubmitForm={signupSendData}
      fieldName={SIGNUP_FORM_FIELD_NAME}
    />
  );
}
