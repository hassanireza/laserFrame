import type { ContactFormValues, FormErrors } from "../types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 10;

/**
 * Stateless rule engine for the contact form. Kept separate from the
 * React component so the validation rules are unit-testable in isolation
 * and reusable if the form is ever rendered somewhere else.
 */
export class ContactFormValidator {
  public validate(values: ContactFormValues): FormErrors {
    const errors: FormErrors = {};

    if (!values.name.trim()) {
      errors.name = "Please tell us your name.";
    }

    if (!values.email.trim()) {
      errors.email = "An email address is required.";
    } else if (!EMAIL_PATTERN.test(values.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      errors.message = "Tell us a little about your project.";
    } else if (values.message.trim().length < MIN_MESSAGE_LENGTH) {
      errors.message = `Message should be at least ${MIN_MESSAGE_LENGTH} characters.`;
    }

    return errors;
  }

  public isValid(values: ContactFormValues): boolean {
    return Object.keys(this.validate(values)).length === 0;
  }
}
