import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return <section className="relative py-20 md:py-32 overflow-hidden hero-pattern">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
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
            <div className="aspect-square rotate-3 rounded-2xl bg-muted object-cover shadow-xl hidden md:block">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400 to-indigo-600 opacity-20"></div>
              <img src="/placeholder.svg" alt="Property image" className="h-full w-full rounded-2xl object-cover mix-blend-overlay" />
            </div>
            
            <div className="absolute -bottom-12 -left-12 aspect-square w-64 rounded-2xl bg-muted object-cover shadow-xl hidden lg:block">
              <img src="/placeholder.svg" alt="Interior image" className="h-full w-full rounded-2xl object-cover" />
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
              {[1, 2, 3, 4].map(i => <div key={i} className="h-8 w-28 bg-muted rounded-md"></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;