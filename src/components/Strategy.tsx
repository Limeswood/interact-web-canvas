import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
const Strategy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    threshold: 0.2
  });
  return <section id="strategy" className="section bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Choose your work strategy</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-appear" className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-appear ${isInView ? 'active' : ''}`}>
          <div className="bg-whitevill-beige p-8 rounded-lg shadow-sm hover-scale">
            <div className="mb-6">
              <span className="text-5xl text-gold-dark font-playfair">%</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Daily rewards on your balance</h3>
            <p className="text-gray-700 mb-6">Earn passive income with competitive rewards on your account balance</p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <span className="text-whitevill-red mr-2">✓</span>
                <span>Automatic payouts</span>
              </li>
              <li className="flex items-start">
                <span className="text-whitevill-red mr-2">✓</span>
                <span>Competitive referal system</span>
              </li>
              <li className="flex items-start">
                <span className="text-whitevill-red mr-2">✓</span>
                <span>No minimum referal requirements</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-whitevill-beige p-8 rounded-lg shadow-sm hover-scale">
            <div className="mb-6">
              <span className="text-5xl text-gold-dark font-playfair">$</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Work independently and earn commissions</h3>
            <p className="text-gray-700 mb-6">
              Generate your own leads and earn substantial commissions on successful transactions
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <span className="text-whitevill-red mr-2">✓</span>
                <span>Higher commission rates</span>
              </li>
              <li className="flex items-start">
                <span className="text-whitevill-red mr-2">✓</span>
                <span>Access to premium listings</span>
              </li>
              <li className="flex items-start">
                <span className="text-whitevill-red mr-2">✓</span>
                <span>Marketing support materials</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2 lg:col-span-1 bg-whitevill-beige p-8 rounded-lg shadow-sm hover-scale">
            <div className="mb-6">
              <img alt="Dashboard" className="w-full h-48 object-cover rounded" src="/lovable-uploads/1568b690-c5a6-4d76-b8e8-0c9049d59df2.jpg" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Advanced Partner Dashboard</h3>
            <p className="text-gray-700 mb-6">
              Access our state-of-the-art platform to manage your portfolio, track commissions,
              and access exclusive marketing materials
            </p>
            <Button className="btn-primary w-full">Request Demo Access</Button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button className="btn-secondary px-10 hover:scale-105 transition-transform">See All Benefits</Button>
        </div>
      </div>
    </section>;
};
export default Strategy;