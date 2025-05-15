
const Stats = () => {
  const stats = [
    { number: "35,368", label: "Active partners" },
    { number: "7,065", label: "Partner agents" },
    { number: "$700M", label: "Total partner earnings" }
  ];

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Network By The Numbers
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Join thousands of successful partners who have transformed their business with WhiteVill
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
              <p className="text-5xl font-bold mb-2 text-primary-foreground">{stat.number}</p>
              <p className="text-xl font-medium text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
