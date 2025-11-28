import { FormEvent, useState } from "react";
import { RoundedButton } from "./RoundedButton";
import Modal from "./Modal";
import { useTranslations } from "@/i18n/LanguageContext";

interface FormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const { t } = useTranslations();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invalidFields, setInvalidFields] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Check required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
    const emptyFields = requiredFields.filter(field => !formData[field as keyof FormData]);
    
    if (emptyFields.length > 0) {
      setInvalidFields(emptyFields);
      setError(t.contactForm.errors.fillRequired);
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setInvalidFields([]);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');
      
      setIsModalOpen(true);
      setError(null);
      setFormData({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(t.contactForm.errors.sendFailed);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-neutral-950 text-white py-6 px-4">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-12">
          <FormField
            number="01"
            label={t.contactForm.fields.name.label}
            name="name"
            value={formData.name}
            onChange={(value) => {
              setFormData({ ...formData, name: value });
              setInvalidFields(prev => prev.filter(f => f !== 'name'));
            }}
            required
            isInvalid={invalidFields.includes('name')}
            placeholder={t.contactForm.fields.name.placeholder}
            errorPlaceholder={t.contactForm.fields.name.error}
          />

          <FormField
            number="02"
            label={t.contactForm.fields.email.label}
            name="email"
            type="email"
            value={formData.email}
            onChange={(value) => {
              setFormData({ ...formData, email: value });
              setInvalidFields(prev => prev.filter(f => f !== 'email'));
            }}
            required
            isInvalid={invalidFields.includes('email')}
            placeholder={t.contactForm.fields.email.placeholder}
            errorPlaceholder={t.contactForm.fields.email.error}
          />

          <FormField
            number="03"
            label={t.contactForm.fields.organization.label}
            name="organization"
            value={formData.organization}
            onChange={(value) => setFormData({ ...formData, organization: value })}
            placeholder={t.contactForm.fields.organization.placeholder}
          />

          <FormField
            number="04"
            label={t.contactForm.fields.subject.label}
            name="subject"
            value={formData.subject}
            onChange={(value) => {
              setFormData({ ...formData, subject: value });
              setInvalidFields(prev => prev.filter(f => f !== 'subject'));
            }}
            required
            isInvalid={invalidFields.includes('subject')}
            placeholder={t.contactForm.fields.subject.placeholder}
            errorPlaceholder={t.contactForm.fields.subject.error}
          />

          <FormField
            number="05"
            label={t.contactForm.fields.message.label}
            name="message"
            type="textarea"
            value={formData.message}
            onChange={(value) => {
              setFormData({ ...formData, message: value });
              setInvalidFields(prev => prev.filter(f => f !== 'message'));
            }}
            required
            isInvalid={invalidFields.includes('message')}
            placeholder={t.contactForm.fields.message.placeholder}
            errorPlaceholder={t.contactForm.fields.message.error}
          />

          {error && (
            <p className="text-indigo-600 flex items-center gap-2 justify-center">
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

          <div className="flex justify-center">
            <RoundedButton
              href="#"
              onClick={(e: any) => handleSubmit(e)}
              color="light"
              size="custom"
              customSize={{ width: 'w-[220px]', padding: 'py-7' }}
            >
              {isSubmitting ? t.contactForm.button.sending : t.contactForm.button.send}
            </RoundedButton>
          </div>
        </form>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        setIsOpen={setIsModalOpen}
      />
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
  isInvalid?: boolean;
  placeholder?: string;
  errorPlaceholder?: string;
}

const FormField = ({ number, label, name, type = "text", value, onChange, required, isInvalid, placeholder, errorPlaceholder }: FormFieldProps) => {
  const defaultPlaceholders: { [key: string]: string } = {
    name: "Samuel Coelho",
    email: "samuel.coelho@voidsoftware.pro",
    organization: "Void Software",
    subject: "Website Development Project",
    message: "Tell me about your project...",
  };

  const defaultErrorPlaceholders: { [key: string]: string } = {
    name: "Name required",
    email: "Email required",
    subject: "Subject required",
    message: "Message required",
  };

  const actualPlaceholder = placeholder || defaultPlaceholders[name];
  const actualErrorPlaceholder = errorPlaceholder || defaultErrorPlaceholders[name];

  const baseInputClasses = "w-full bg-transparent text-base sm:text-lg text-neutral-400 focus:outline-none focus:text-neutral-200 transition-colors [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:text-neutral-400 [&:-webkit-autofill]:shadow-[0_0_0_30px_rgb(10_10_10)_inset] md:pl-[84px] pl-[32px] -mt-8";
  const placeholderClasses = isInvalid 
    ? "placeholder:text-indigo-600" 
    : "placeholder:text-neutral-600";


  return (
    <div className={`border-b border-neutral-800 pb-6 ${number === "01" ? "border-t pt-6" : ""} ${name === "message" ? "pb-24" : ""}`}>
      <div className="flex mb-8">
        <span className="text-xs flex items-center text-neutral-500 w-[24px] md:w-[40px] mr-[8px] md:mr-[44px] opacity-50">{number}</span>
        <label htmlFor={name} className="text-md sm:text-xl text-neutral-300 font-light">
          {label}
          {required && <span className="text-indigo-600 ml-1">*</span>}
        </label>
      </div>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={isInvalid ? actualErrorPlaceholder : actualPlaceholder}
        autoComplete="off"
        className={`${baseInputClasses} ${placeholderClasses}`}
      />
    </div>
  );
};

export default ContactForm;