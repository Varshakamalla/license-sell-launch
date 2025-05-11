
import { Shield, Handshake, DollarSign, Award } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Shield size={40} className="text-softsell-orange" />,
      title: "Secure Transactions",
      description: "Bank-level encryption and compliance with all software license transfer regulations.",
      delay: "0.2s"
    },
    {
      icon: <Handshake size={40} className="text-softsell-blue" />,
      title: "Expert Guidance",
      description: "Our license transfer specialists ensure smooth, compliant transactions every time.",
      delay: "0.3s"
    },
    {
      icon: <DollarSign size={40} className="text-softsell-purple" />,
      title: "Best Market Rates",
      description: "We leverage our extensive network to get you the highest possible value for your licenses.",
      delay: "0.4s"
    },
    {
      icon: <Award size={40} className="text-softsell-teal" />,
      title: "Fast Turnaround",
      description: "From valuation to payment, our process typically completes within 48-72 hours.",
      delay: "0.5s"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-radial from-softsell-purple/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-radial from-softsell-blue/10 to-transparent blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-radial from-softsell-teal/5 to-transparent blur-3xl"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="inline-block rounded-full bg-gradient-to-r from-softsell-teal/20 to-softsell-orange/20 px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-softsell-orange">Why You'll Love SoftSell</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-softsell-dark mb-6">Why Choose SoftSell</h2>
          <p className="text-lg text-slate-600">
            With years of experience in the software license market, we provide unmatched service and value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: benefit.delay }}
            >
              <div className="mb-6 p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl inline-block">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-softsell-dark">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 rounded-2xl overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-softsell-blue to-softsell-purple p-10 text-white text-center relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-3xl font-bold mb-4 relative z-10">Ready to convert your unused licenses to revenue?</h3>
            <p className="mb-8 max-w-2xl mx-auto text-white/90 relative z-10">
              Join thousands of businesses that have already unlocked the value of their software assets with SoftSell.
            </p>
            <button className="bg-white text-softsell-blue hover:bg-blue-50 py-4 px-10 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform relative z-10">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
