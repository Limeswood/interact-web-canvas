
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/placeholder.svg')" 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-2xl text-white animate-fade-in">
          <p className="text-gold-light mb-2 uppercase tracking-widest font-medium">Exclusive Opportunity</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight mb-6">
            JOIN OUR PARTNERSHIP PROGRAM AND EARN WITH WHITEVILL
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-lg">
            Be part of an exclusive network of real estate professionals earning commissions with WhiteVill's premium properties.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary text-lg px-8 py-6" size="lg">
              Join Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black transition-colors text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
