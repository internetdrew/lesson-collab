export const validateLogin = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.password) {
    errors.password = 'Password is required for login';
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Passwords must be 8 to 20 characters long.';
  }

  if (values.password.includes(' ')) {
    errors.password = 'Passwords cannot contain any spaces.';
  }

  return errors;
};
