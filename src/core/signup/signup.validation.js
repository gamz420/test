export function signupFormValidation(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } 
  
  return errors;
}
