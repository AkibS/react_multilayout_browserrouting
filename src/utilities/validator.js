//Check for Spaces
export const required = value => value && value.trim() !== "" ? undefined : `Required`;

// Check if atleast one checkbox is clicked
export const requiredCheckbox = value => value ? undefined : `Required`;

// Email Validation
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

// Minimum 8 characters
export const minimum8 = value => value && !/^.{8,}$/.test(value) ? 'Password must be minimum 8 character' : undefined;

// Compare Password
export const validate = values => {
    const errors = {};

    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Confirm password must be the same as password"
    }
    return errors;
}

export const onlyNumber = value => value && !/^\d{10}$/.test(value) ? 'Please enter 10 digit number' : undefined;