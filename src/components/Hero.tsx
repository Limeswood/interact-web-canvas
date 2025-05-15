import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const rotatingElementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsLoaded(true);

    // 3D rotation effect
    const rotatingElement = rotatingElementRef.current;
    if (!rotatingElement) return;
    let rotationX = 0;
    let rotationY = 0;
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      rotationX = y;
      rotationY = -x;
    };
    const animate = () => {
      if (rotatingElement) {
        rotatingElement.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotate3d(1, 1, 1, ${rotationY}deg)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    window.addEventListener('mousemove', handleMouseMove);
    animate();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return <section className="relative py-20 md:py-32 overflow-hidden hero-pattern">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className={`space-y-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Exclusive Partnership Opportunity
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Join Our Partnership <br className="hidden md:inline" />
              <span className="text-gradient">Program with Limeswood</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Be part of an exclusive network of real estate professionals earning premium commissions with WhiteVill's luxury properties.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Join Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div ref={rotatingElementRef} className={`aspect-square rotate-3 rounded-2xl bg-muted object-cover shadow-xl hidden md:block transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.1s ease-out'
          }}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400 to-indigo-600 opacity-20"></div>
              <img alt="Property image" className="h-full w-full rounded-2xl object-cover mix-blend-overlay" src="/lovable-uploads/da4a6f5b-508e-4167-9ff9-abfc587997c3.jpg" />
            </div>
            
            <div className={`absolute -bottom-12 -left-12 aspect-square w-64 rounded-2xl bg-muted object-cover shadow-xl hidden lg:block transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <img alt="Interior image" className="h-full w-full rounded-2xl object-cover" src="/lovable-uploads/d70deec2-6e99-4f1c-ba3a-371bb0f79f5a.jpg" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 border-t bg-background/50 py-8 backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between">
            <p className="text-center text-sm font-medium md:text-left">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 grayscale">
              {[1, 2, 3, 4].map(i => <div key={i} className={`h-8 w-28 bg-muted rounded-md transition-all duration-700 delay-${i * 100} ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;