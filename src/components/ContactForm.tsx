
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { LoaderCircle } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormState('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form submitted!",
        description: "We'll be in touch with you shortly.",
      });
      setLoading(false);
      setFormState('success');
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      
      setTimeout(() => {
        setFormState('idle');
      }, 3000);
    }, 1500);
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
                src="/placeholder.svg" 
                alt="WhiteVill Headquarters" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="bg-whitevill-beige p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="bg-white border-gray-300 transition-all focus:ring-2 focus:ring-primary/20"
                  disabled={loading}
                />
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
                  placeholder="you@example.com"
                  required
                  className="bg-white border-gray-300 transition-all focus:ring-2 focus:ring-primary/20"
                  disabled={loading}
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block mb-2 font-medium">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="bg-white border-gray-300 transition-all focus:ring-2 focus:ring-primary/20"
                  disabled={loading}
                />
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
                  placeholder="Tell us about your experience and interests"
                  rows={4}
                  className="bg-white border-gray-300 transition-all focus:ring-2 focus:ring-primary/20"
                  disabled={loading}
                />
              </div>
              
              <Button 
                type="submit" 
                className={`bg-whitevill-red hover:bg-opacity-90 text-white w-full py-6 transition-all ${
                  formState === 'success' ? 'bg-green-600' : 
                  formState === 'error' ? 'bg-red-600' : 
                  'bg-whitevill-red'
                }`}
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
