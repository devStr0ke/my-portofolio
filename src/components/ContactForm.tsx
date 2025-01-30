import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-neutral-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-12">
          <FormField
            number="01"
            label="What's your name?"
            name="name"
            value={formData.name}
            onChange={(value) => setFormData({ ...formData, name: value })}
          />

          <FormField
            number="02"
            label="What's your email?"
            name="email"
            type="email"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
            required
          />

          <FormField
            number="03"
            label="What's the name of your organization?"
            name="organization"
            value={formData.organization}
            onChange={(value) => setFormData({ ...formData, organization: value })}
          />

          <FormField
            number="04"
            label="What's the subject of your message?"
            name="subject"
            value={formData.subject}
            onChange={(value) => setFormData({ ...formData, subject: value })}
            required
          />

          <FormField
            number="05"
            label="What's your message?"
            name="message"
            type="textarea"
            value={formData.message}
            onChange={(value) => setFormData({ ...formData, message: value })}
            required
          />

          {error && (
            <p className="text-red-500 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
              {error}
            </p>
          )}

          {success && (
            <p className="text-green-500 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              Message sent successfully!
            </p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black px-8 py-3 rounded-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

interface FormFieldProps {
  number: string;
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const FormField = ({ number, label, name, type = "text", value, onChange, required }: FormFieldProps) => {
  const placeholders: { [key: string]: string } = {
    name: "Baki Hanma",
    email: "baki@example.com",
    organization: "Void Software",
    subject: "Website Development Project",
    message: "Tell us about your project...",
  };

  return (
    <div className="border-b border-neutral-800 pb-6">
      <div className="flex gap-4 items-baseline mb-4">
        <span className="text-sm text-neutral-500">{number}</span>
        <label htmlFor={name} className="text-2xl font-light">
          {label}
        </label>
      </div>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          rows={4}
          placeholder={placeholders[name]}
          autoComplete="off"
          className="w-full bg-transparent text-xl text-neutral-400 focus:outline-none focus:text-white transition-colors resize-none placeholder:text-neutral-600 [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:text-neutral-400 [&:-webkit-autofill]:shadow-[0_0_0_30px_rgb(10_10_10)_inset]"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholders[name]}
          autoComplete="off"
          className="w-full bg-transparent text-xl text-neutral-400 focus:outline-none focus:text-white transition-colors placeholder:text-neutral-600 [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:text-neutral-400 [&:-webkit-autofill]:shadow-[0_0_0_30px_rgb(10_10_10)_inset]"
        />
      )}
    </div>
  );
};

export default ContactForm;