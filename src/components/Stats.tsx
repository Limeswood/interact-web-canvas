
import { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";

const Stats = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [visibleStats, setVisibleStats] = useState<{
    number: string;
    label: string;
    value: number;
  }[]>([]);

  const stats = [{
    number: "468",
    label: "Active partners",
    value: 468
  }, {
    number: "1,065",
    label: "Partner agents",
    value: 1065
  }, {
    number: "$70M",
    label: "Total partner earnings",
    value: 70
  }];

  useEffect(() => {
    // Simulate loading data
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + 20;
      });
    }, 200);

    // Animate stats counting up
    const statsTimer = setTimeout(() => {
      setVisibleStats(stats);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(statsTimer);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Network By The Numbers
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Join thousands of successful partners who have transformed their business with Limeswood
          </p>
          
          {loading && (
            <div className="mt-6">
              <Progress value={progress} className="h-2 bg-primary-foreground/20" />
              <p className="text-sm mt-2">Loading network statistics...</p>
            </div>
          )}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm transition-all duration-500 transform ${!loading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {loading ? (
                <>
                  <Skeleton className="h-12 w-24 mx-auto mb-2 bg-primary-foreground/20" />
                  <Skeleton className="h-6 w-32 mx-auto bg-primary-foreground/20" />
                </>
              ) : (
                <>
                  <p className="text-5xl font-bold mb-2 text-primary-foreground">{stat.number}</p>
                  <p className="text-xl font-medium text-primary-foreground/80">{stat.label}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
