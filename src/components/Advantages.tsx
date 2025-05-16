import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Advantage {
  number: number;
  title: string;
  description: string | string[];
}

const advantages: Advantage[] = [
  {
    number: 1,
    title: 'Instant Payouts',
    description: 'We pay in advance within 14 days when the developer confirms the payment fact. You will get the remaining 70% after we receive the rest of commission.'
  },
  {
    number: 2,
    title: 'Exclusive Properties',
    description: 'Get access to the properties database with current listings and exclusive commissions.'
  },
  {
    number: 3,
    title: 'Work with Experts',
    description: 'We\'ll arrange a property tour, take care of any legal matters and help with the settlement.'
  },
  {
    number: 4,
    title: 'The Partner Program',
    description: [
      "Every client's step is digitised. Your applications are instantly downloaded to our CRM and then are distributed among departments and brokers based on budget or purpose.",
      "Reports are available at any time."
    ]
  }
];

export default function Advantages() {
  return (
    <section className="relative py-24 bg-white overflow-x-hidden">
      <div className="container-custom relative z-10">
        <h2 className="section-title text-center mb-16">Advantages</h2>
        <div className="relative grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {advantages.map((adv, i) => (
            <div
              key={adv.number}
              className={cn(
                'relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group',
                'flex flex-col'
              )}
              style={{ zIndex: 10 - i }}
            >
              <span className="absolute -top-6 -left-6 md:static md:mb-4 flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold-dark bg-white text-gold-dark font-playfair text-2xl font-bold shadow-md group-hover:bg-gold-light group-hover:text-white transition-colors">
                {adv.number}
              </span>
              <h3 className="text-xl font-bold mb-2 mt-8 md:mt-0">{adv.title}</h3>
              <div className="text-gray-700 text-base">
                {Array.isArray(adv.description) ? (
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {adv.description.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                ) : (
                  <p>{adv.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Large gold outline text in the background */}
        <span className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[12rem] font-playfair font-bold text-gold-dark/20 whitespace-nowrap z-0" style={{letterSpacing: '0.05em'}}>Advantages</span>
      </div>
    </section>
  );
} 