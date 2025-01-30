import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  organization: string;
  services: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    services: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      // Handle success (you could add a success state here)
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
            required
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
            required
          />

          <FormField
            number="04"
            label="What services are you looking for?"
            name="services"
            value={formData.services}
            onChange={(value) => setFormData({ ...formData, services: value })}
            required
          />

          {error && <p className="text-red-500">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black px-8 py-3 rounded-sm font-medium"
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
  return (
    <div className="border-b border-neutral-800 pb-6">
      <div className="flex gap-4 items-baseline mb-4">
        <span className="text-sm text-neutral-500">{number}</span>
        <label htmlFor={name} className="text-2xl font-light">
          {label}
        </label>
      </div>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent text-xl text-neutral-400 focus:outline-none focus:text-white transition-colors"
      />
    </div>
  );
};

export default ContactForm;