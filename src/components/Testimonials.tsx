import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Real Estate Agent, New York",
    image: "/lovable-uploads/15187.jpg",
    quote: "Partnering with Limeswood has been transformative for my business. Their premium listings and marketing support have helped me close deals I wouldn't have access to otherwise.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor, London",
    image: "/lovable-uploads/3961.jpg",
    quote: "The Limeswood partnership program has exceeded all my expectations. The support team is responsive, the properties are exceptional, and the commission structure is the best I've seen.",
  },
  {
    id: 3,
    name: "Anna Garcia",
    role: "Luxury Real Estate Specialist, Dubai",
    image: "/lovable-uploads/17285.jpg",
    quote: "As someone focusing exclusively on high-end properties, Limeswood provides exactly what I need - access to extraordinary listings and clients with discerning taste.",
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'right' | 'left'>('right');
  const [visibleTestimonials, setVisibleTestimonials] = useState(testimonials.slice(0, 2));

  const updateVisibleTestimonials = useCallback((newIndex: number) => {
    const nextIndex = (newIndex + 1) % testimonials.length;
    setVisibleTestimonials([testimonials[newIndex], testimonials[nextIndex]]);
  }, []);

  useEffect(() => {
    updateVisibleTestimonials(currentIndex);
  }, [currentIndex, updateVisibleTestimonials]);

  const handleTestimonialChange = useCallback((newIndex: number, direction: 'right' | 'left') => {
    if (isAnimating || newIndex === currentIndex) return;
    
    setIsLoading(true);
    setIsAnimating(true);
    setAnimationDirection(direction);
    
    // First update the animation state
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsLoading(false);
      
      // Then remove the animation state after the transition
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Reduced from 500ms to 300ms for smoother transition
    }, 150); // Reduced from 300ms to 150ms for faster response
  }, [currentIndex, isAnimating]);

  const nextTestimonial = useCallback(() => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    handleTestimonialChange(nextIndex, 'right');
  }, [currentIndex, handleTestimonialChange]);

  const prevTestimonial = useCallback(() => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    handleTestimonialChange(prevIndex, 'left');
  }, [currentIndex, handleTestimonialChange]);

  const selectTestimonial = useCallback((index: number) => {
    const direction = index > currentIndex ? 'right' : 'left';
    handleTestimonialChange(index, direction);
  }, [currentIndex, handleTestimonialChange]);

  return (
    <section id="partners" className="section bg-limeswood-beige">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Feedback from our partners</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 relative min-h-[250px]">
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${currentIndex}`}
              className={`
                bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 ease-in-out
                ${isAnimating ? 
                  (animationDirection === 'right' ? 
                    (index === 0 ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0') :
                    (index === 0 ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0')
                  ) : 
                  'translate-x-0 opacity-100'
                }
              `}
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity'
              }}
            >
              <div className={`flex items-center mb-6 ${isLoading ? 'animate-pulse' : ''}`}>
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 transform hover:scale-105 transition-transform">
                  <img 
                    src={testimonial.image} 
                    alt={`Portrait of ${testimonial.name}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.quote}</p>
              <Button variant="link" className="text-limeswood-red mt-4 p-0">
                Read full story
              </Button>
            </div>
          ))}
          
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-limeswood-beige/50 backdrop-blur-sm">
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
                  ? "bg-limeswood-red scale-110"
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
