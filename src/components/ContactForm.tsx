import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { LoaderCircle, AlertCircle } from "lucide-react";
import { ApiService, ContactFormData, contactFormSchema } from "@/lib/api";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Select } from '@/components/ui/select';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    role: "agent",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateField = (name: keyof ContactFormData, value: string) => {
    try {
      contactFormSchema.shape[name].parse(value);
      setErrors(prev => ({ ...prev, [name]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof Error) {
        setErrors(prev => ({ ...prev, [name]: error.message }));
      }
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name as keyof ContactFormData, value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name as keyof ContactFormData, value);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, role: e.target.value as ContactFormData['role'] }));
    validateField('role', e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Validate all fields
    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      e.preventDefault();
      const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
      validationResult.error.errors.forEach(error => {
        const path = error.path[0] as keyof ContactFormData;
        newErrors[path] = error.message;
      });
      setErrors(newErrors);
      return;
    }
    // If valid, allow the form to submit (Netlify will handle it)
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Fill in the form and become our partner</h2>
            <p className="text-lg text-gray-700 mb-6">
              Join our exclusive network of real estate professionals and access premium
              properties, competitive commissions, and comprehensive support tools.
            </p>
            <div className="rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg">
              <img 
                src="/lovable-uploads/29a0c430-21b8-42cf-836b-1549127e2a49.jpg"
                alt="Limeswood Headquarters" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-xl">
            {formState === 'error' && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  There was an error submitting your form. Please try again.
                </AlertDescription>
              </Alert>
            )}
            
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/success"
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate
            >
              {/* Netlify hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your full name"
                  required
                  className={`bg-white border-gray-300 transition-all focus:ring-2 focus:ring-primary/20 ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  disabled={loading}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="you@example.com"
                  required
                  className={`bg-white border-gray-300 transition-all focus:ring-2 focus:ring-primary/20 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  disabled={loading}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your phone number"
                  required
                  className={`bg-white border-gray-300 transition-all focus:ring-2 focus:ring-primary/20 ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
                  disabled={loading}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="role" className="block mb-2 font-medium">
                  You are
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleRoleChange}
                  onBlur={handleRoleChange}
                  required
                  className={`bg-white border-gray-300 transition-all focus:ring-2 focus:ring-primary/20 ${
                    errors.role ? 'border-red-500' : ''
                  } w-full rounded-md p-2`}
                  disabled={loading}
                  aria-invalid={!!errors.role}
                  aria-describedby={errors.role ? 'role-error' : undefined}
                >
                  <option value="agent">Agent</option>
                  <option value="individual">Individual</option>
                  <option value="agency">Agency</option>
                  <option value="other">Other</option>
                </select>
                {errors.role && (
                  <p id="role-error" className="mt-1 text-sm text-red-500">
                    {errors.role}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your experience and interests (optional)"
                  rows={4}
                  className={`bg-white border-gray-300 transition-all focus:ring-2 focus:ring-primary/20 ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  disabled={loading}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>
              
              <Button
                type="submit"
                className={`w-full py-6 transition-all ${
                  formState === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : formState === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-limeswood-red hover:bg-opacity-90'
                } text-white`}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <LoaderCircle className="animate-spin mr-2" size={20} />
                    Submitting...
                  </span>
                ) : formState === 'success' ? (
                  "Submitted Successfully!"
                ) : (
                  "Submit Application"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;