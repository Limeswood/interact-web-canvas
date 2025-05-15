
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Real Estate Agent, New York",
    image: "/placeholder.svg",
    quote: "Partnering with WhiteVill has been transformative for my business. Their premium listings and marketing support have helped me close deals I wouldn't have access to otherwise.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor, London",
    image: "/placeholder.svg",
    quote: "The WhiteVill partnership program has exceeded all my expectations. The support team is responsive, the properties are exceptional, and the commission structure is the best I've seen.",
  },
  {
    id: 3,
    name: "Anna Garcia",
    role: "Luxury Real Estate Specialist, Dubai",
    image: "/placeholder.svg",
    quote: "As someone focusing exclusively on high-end properties, WhiteVill provides exactly what I need - access to extraordinary listings and clients with discerning taste.",
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="partners" className="section bg-whitevill-beige">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Feedback from our partners</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.quote}</p>
              <Button variant="link" className="text-whitevill-red mt-4 p-0">
                Read full story
              </Button>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevTestimonial}
            className="rounded-full"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex || index === (currentIndex + 1) % testimonials.length
                  ? "bg-whitevill-red"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextTestimonial}
            className="rounded-full"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
