import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Users, Briefcase, GaugeCircle } from "lucide-react";

const strategies = [
  {
    icon: <Users className="h-10 w-10 text-limeswood-red mb-4" />,
    badge: "Most Popular",
    title: "Refer your clients to our brokers",
    description: (
      <>
        Refer clients and get up to <span className="font-bold">30%</span> from our commission for real estate deals, and <span className="font-bold">10%</span> for referring real estate owners.
      </>
    ),
    cta: "Refer Now",
    ctaLink: "https://wa.me/971558702565?text=I'm%20Interested%20in%20Referral%20Program"
  },
  {
    icon: <Briefcase className="h-10 w-10 text-limeswood-red mb-4" />,
    badge: "Best for Agencies",
    title: "Work independently and secure clients for our projects",
    description: (
      <>
        Refer customers for our exclusive deals and earn a <span className="font-bold">fixed commission</span> from the deal.
      </>
    ),
    cta: "Get Started",
    ctaLink: "https://wa.me/971558702565?text=I'm%20Interested%20in%20Referral%20Program"
  },
  {
    icon: <GaugeCircle className="h-10 w-10 text-limeswood-red mb-4" />,
    badge: "All Access",
    title: "Advanced Partner Dashboard",
    description: (
      <>
        Access our state-of-the-art platform to manage your portfolio, track commissions, and access exclusive marketing materials.
      </>
    ),
    cta: "Request Demo",
    ctaLink: "https://wa.me/971558702565?text=I'm%20Interested%20in%20Referral%20Program"
  }
];

const Strategy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    threshold: 0.2
  });
  return (
    <section id="strategy" className="section bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Choose your work strategy</h2>
        </div>
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-appear ${isInView ? 'active' : ''}`}>
          {strategies.map((s, i) => (
            <div
              key={i}
              className="relative bg-limeswood-beige p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-limeswood-red group cursor-pointer overflow-hidden"
            >
              {/* Badge */}
              <span className="absolute top-6 right-6 bg-limeswood-red text-white text-xs font-semibold px-3 py-1 rounded-full shadow group-hover:scale-105 transition-transform">{s.badge}</span>
              {/* Icon */}
              <div className="flex justify-center mb-4">{s.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-center group-hover:text-limeswood-red transition-colors">{s.title}</h3>
              {/* Description */}
              <p className="text-gray-700 mb-6 text-center">{s.description}</p>
              {/* CTA Button */}
              <div className="flex justify-center">
                <Button className="btn-primary px-6 py-2 rounded-full shadow group-hover:scale-105 transition-transform" asChild>
                  <a href={s.ctaLink} target="_blank" rel="noopener noreferrer">{s.cta}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button className="btn-secondary px-10 hover:scale-105 transition-transform" asChild>
            <a href="https://wa.me/971558702565?text=I'm%20Interested%20in%20Referral%20Program" target="_blank" rel="noopener noreferrer">
              See All Benefits
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Strategy;