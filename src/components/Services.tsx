
import { CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Agencies",
      description: "Partner with established agencies looking to expand their portfolio with premium properties",
      features: ["Higher commission rates", "Exclusive property access", "Marketing support"]
    },
    {
      title: "Independent Professionals",
      description: "Support for solo professionals seeking access to exclusive properties and higher commissions",
      features: ["Flexible schedules", "On-demand training", "Personal branding tools"]
    },
    {
      title: "Property Management",
      description: "Specialized partnerships for companies managing high-value residential and commercial assets",
      features: ["Streamlined operations", "Technology integration", "Legal compliance support"]
    },
    {
      title: "Investment Groups",
      description: "Tailored solutions for investment companies seeking premium real estate opportunities",
      features: ["Market analysis", "ROI optimization", "Portfolio diversification"]
    }
  ];

  return (
    <section className="section bg-background">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="section-title">Types of Companies We Work With</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Customized partnership solutions for various real estate businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="feature-card card-highlight group">
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
