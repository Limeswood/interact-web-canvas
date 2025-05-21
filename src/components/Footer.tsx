import { Instagram, Facebook, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold font-playfair mb-4">
              <span className="text-limeswood-red">Limes</span>wood
            </h2>
            <p className="text-gray-400 mb-4">
              Premium real estate partnerships for discerning professionals and agencies.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/limeswood_realestate/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram />
              </a>
              <a href="https://www.facebook.com/LimeswoodRealEstateBrokers/" className="text-gray-400 hover:text-white transition-colors">
                <Facebook />
              </a>
              <a href="https://www.linkedin.com/company/limeswood-real-estate-brokers/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News & Press</a></li>
              <li><a href="https://limeswood.ae" target="_blank" rel="noopener noreferrer" className="text-limeswood-red hover:text-white font-semibold transition-colors">Visit limeswood.ae</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Partnership</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commission Structure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partner Portal</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">1304 Control Tower, Motor City, Dubai, UAE</p>
              
              <p className="mb-2">Email: partners@limeswood.ae</p>
              <p>Phone: +971 55 870 2565</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Limeswood Real Estate. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://limeswood.ae/privacy-policy/" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="https://limeswood.ae/terms-and-conditions/" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;