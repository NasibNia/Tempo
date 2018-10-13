export const validations = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'You must enter your email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Please enter your valid email address'
    }
    if (!values.password) {
      errors.password = 'Your password is required'
    } else if (values.password.length < 5) {
      errors.password = 'Your password is at least 6 characters long'
    }
    return errors;
  };