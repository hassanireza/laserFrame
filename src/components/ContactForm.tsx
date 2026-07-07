import { useMemo, useState, type FormEvent } from "react";
import type { ContactFormValues, FormErrors } from "../types";
import { ContactFormValidator } from "../services/ContactFormValidator";
import { siteConfig } from "../data/site";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const validator = useMemo(() => new ContactFormValidator(), []);
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    field: keyof ContactFormValues,
    value: string,
  ): void => {
    setValues((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const validationErrors = validator.validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const subject = encodeURIComponent(`New project inquiry from ${values.name}`);
      const body = encodeURIComponent(
        `${values.message}\n\nFrom: ${values.name} (${values.email})`,
      );
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
      setValues(INITIAL_VALUES);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          type="text"
          value={values.name}
          onChange={(event) => handleChange("name", event.target.value)}
          placeholder="Your full name"
          data-cursor-hover
        />
        {errors.name && <p className="form-error">{errors.name}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          value={values.email}
          onChange={(event) => handleChange("email", event.target.value)}
          placeholder="you@company.com"
          data-cursor-hover
        />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Project Details</label>
        <textarea
          id="contact-message"
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          placeholder="Tell us about your vision, timeline, and goals."
          data-cursor-hover
        />
        {errors.message && <p className="form-error">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-glow" data-cursor-hover>
        Send Inquiry
      </button>

      {isSubmitted && (
        <p className="form-status" role="status">
          Thanks for reaching out. Your email client should now be open with
          your message ready to send.
        </p>
      )}
    </form>
  );
}
