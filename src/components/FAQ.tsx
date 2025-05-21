import React, { useState } from "react";

const faqs = [
  {
    question: "How quickly can I expect my payout?",
    answer: `Your referral commission will be paid to you approximately 14 days after we have received payment from the developer. You can follow the status of each transaction and receive important notifications on our convenient online partner platform.`
  },
  {
    question: "Are there any special terms for those who've made the most client referrals?",
    answer: `The terms are not subject to change based on the number of clients referred.`
  },
  {
    question: "What other relevant information will I receive aside from being given access to the real estate database?",
    answer: `You will receive training materials that will introduce you to the UAE real estate market and its advantages, as well as receive access to a private Telegram channel with all the most recent offers for our partners. You will also get access to training webinars and the possibility to have an individual session with a company representative.`
  },
  {
    question: "Are there are differences in the terms of the program for individuals and legal entities?",
    answer: `No, the terms of the program are the same for both individuals and legal entities.`
  },
  {
    question: "Is it possible to get residency in the country?",
    answer: `Yes, it is possible to get residency in the country with a total purchase of at least AED 750,000 (USD 204,000).`
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white via-limeswood-beige to-white">
      <div className="container-custom max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-playfair text-limeswood-red">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className="rounded-xl shadow-md bg-white/90 border border-limeswood-beige overflow-hidden transition-all"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-lg md:text-xl font-semibold text-left focus:outline-none focus:ring-2 focus:ring-limeswood-red transition-colors hover:bg-limeswood-beige/40"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span>{faq.question}</span>
                <span className={`ml-4 transform transition-transform ${openIndex === idx ? 'rotate-45 text-limeswood-red' : 'rotate-0 text-gray-400'}`}>+</span>
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`px-6 pb-4 text-gray-700 text-base transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                style={{
                  transitionProperty: 'max-height, opacity',
                }}
                aria-hidden={openIndex !== idx}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 