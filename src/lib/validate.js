export const validateLogin = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required for login.';
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

export const validateRegistration = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username is required to sign up.';
  }

  if (values.username.includes(' ')) {
    errors.username = 'Usernames cannot contain spaces.';
  }

  if (!values.email) {
    errors.email = 'Email is required for registration.';
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

  if (values.password2 !== values.password) {
    errors.password2 = 'Your passwords do not match. Please try again.';
  }

  if (values.password2.includes(' ')) {
    errors.password2 = 'Your password cannot contain any blank spaces';
  }

  return errors;
};
