
import { Shield, Handshake, DollarSign, Award } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Shield size={40} className="text-softsell-blue" />,
      title: "Secure Transactions",
      description: "Bank-level encryption and compliance with all software license transfer regulations."
    },
    {
      icon: <Handshake size={40} className="text-softsell-blue" />,
      title: "Expert Guidance",
      description: "Our license transfer specialists ensure smooth, compliant transactions every time."
    },
    {
      icon: <DollarSign size={40} className="text-softsell-blue" />,
      title: "Best Market Rates",
      description: "We leverage our extensive network to get you the highest possible value for your licenses."
    },
    {
      icon: <Award size={40} className="text-softsell-blue" />,
      title: "Fast Turnaround",
      description: "From valuation to payment, our process typically completes within 48-72 hours."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-softsell-dark mb-6">Why Choose SoftSell</h2>
          <p className="text-lg text-slate-600">
            With years of experience in the software license market, we provide unmatched service and value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-softsell-dark">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-softsell-blue to-blue-700 rounded-lg p-8 text-white text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-semibold mb-4">Ready to convert your unused licenses to revenue?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Join thousands of businesses that have already unlocked the value of their software assets with SoftSell.
          </p>
          <button className="bg-white text-softsell-blue hover:bg-blue-50 py-3 px-8 rounded-md font-medium transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
