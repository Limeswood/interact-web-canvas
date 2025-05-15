
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';

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
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('right');
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsLoading(true);
    setIsAnimating(true);
    setAnimationDirection('right');
    
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
      setIsLoading(false);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 300);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsLoading(true);
    setIsAnimating(true);
    setAnimationDirection('left');
    
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
      setIsLoading(false);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 300);
  };

  const selectTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsLoading(true);
    setIsAnimating(true);
    setAnimationDirection(index > currentIndex ? 'right' : 'left');
    
    setTimeout(() => {
      setCurrentIndex(index);
      setIsLoading(false);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 300);
  };
  
  return (
    <section id="partners" className="section bg-whitevill-beige">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Feedback from our partners</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 relative min-h-[250px]">
          {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`
                bg-white p-8 rounded-lg shadow-md transition-all duration-500 transform
                ${isAnimating && index === 0 ? 
                  (animationDirection === 'right' ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full') : 
                  'opacity-100 translate-x-0'}
              `}
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <div className={`flex items-center mb-6 ${isLoading ? 'animate-pulse' : ''}`}>
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 transform hover:scale-105 transition-transform">
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
          
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <RefreshCw className="h-8 w-8 text-primary animate-spin" />
            </div>
          )}
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevTestimonial}
            className="rounded-full transition-transform hover:scale-110"
            disabled={isAnimating}
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex || index === (currentIndex + 1) % testimonials.length
                  ? "bg-whitevill-red scale-110"
                  : "bg-gray-300"
              }`}
              onClick={() => selectTestimonial(index)}
              disabled={isAnimating}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextTestimonial}
            className="rounded-full transition-transform hover:scale-110"
            disabled={isAnimating}
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
