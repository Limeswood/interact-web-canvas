
const Stats = () => {
  const stats = [
    { number: "35,368", label: "Active partners" },
    { number: "7,065", label: "Partner agents" },
    { number: "$700,000,000", label: "Total earnings by our partners" }
  ];

  return (
    <section className="py-20 bg-whitevill-red text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-playfair font-bold mb-2">{stat.number}</p>
              <p className="text-xl opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
