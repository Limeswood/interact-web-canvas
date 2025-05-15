import { Button } from "@/components/ui/button";
const About = () => {
  return <section id="about" className="section bg-whitevill-beige">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">We sell real estate to clients all over the world</h2>
            <p className="mb-6 text-lg">Limeswood is a premier luxury real estate company with a global presence. Our expertise spans residential, commercial, and investment properties across exclusive locations in UAE.</p>
            <p className="mb-8 text-lg">With over 9+ years of experience, we've established ourselves as industry leaders, connecting clients with exceptional properties and investment opportunities.</p>
            <Button className="btn-primary">Discover Our Portfolio</Button>
          </div>
          
          <div className="relative">
            <div className="h-[400px] md:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
              <img src="/placeholder.svg" alt="Luxury Property" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-white p-6 md:p-8 rounded-tr-lg">
                <p className="text-3xl font-playfair font-bold text-gold-dark">+9</p>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="section-title">The process is automated</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover-scale">
              <div className="text-whitevill-red text-4xl font-playfair mb-4">01</div>
              <h3 className="text-2xl font-bold mb-3">Register Your Account</h3>
              <p className="text-gray-600">
                Complete our simple registration process to join our exclusive partnership network
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover-scale">
              <div className="text-whitevill-red text-4xl font-playfair mb-4">02</div>
              <h3 className="text-2xl font-bold mb-3">Access Listings</h3>
              <p className="text-gray-600">
                Browse our premium property portfolio and access detailed marketing materials
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover-scale">
              <div className="text-whitevill-red text-4xl font-playfair mb-4">03</div>
              <h3 className="text-2xl font-bold mb-3">Earn Commissions</h3>
              <p className="text-gray-600">
                Receive competitive commissions for each successful property transaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;