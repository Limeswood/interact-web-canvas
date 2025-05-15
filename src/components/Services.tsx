
const Services = () => {
  return (
    <section className="section bg-whitevill-beige">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Types of companies we work with</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm hover-scale">
            <div className="text-4xl text-gold-dark font-playfair mb-6">1</div>
            <h3 className="text-xl font-bold mb-3">Real Estate Agencies</h3>
            <p className="text-gray-600">
              Partner with established agencies looking to expand their portfolio with premium properties
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover-scale">
            <div className="text-4xl text-gold-dark font-playfair mb-6">2</div>
            <h3 className="text-xl font-bold mb-3">Independent Agents</h3>
            <p className="text-gray-600">
              Support for solo professionals seeking access to exclusive properties and higher commissions
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover-scale">
            <div className="text-4xl text-gold-dark font-playfair mb-6">3</div>
            <h3 className="text-xl font-bold mb-3">Property Management</h3>
            <p className="text-gray-600">
              Specialized partnerships for companies managing high-value residential and commercial assets
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover-scale">
            <div className="text-4xl text-gold-dark font-playfair mb-6">4</div>
            <h3 className="text-xl font-bold mb-3">Investment Groups</h3>
            <p className="text-gray-600">
              Tailored solutions for investment companies seeking premium real estate opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
