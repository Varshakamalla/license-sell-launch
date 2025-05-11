
import { FileUp, DollarSign, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileUp size={48} className="text-softsell-blue" />,
      title: "Upload License",
      description: "Submit your software license details through our secure portal. We support all major vendors."
    },
    {
      icon: <CheckCircle size={48} className="text-softsell-blue" />,
      title: "Get Valuation",
      description: "Receive a competitive market-based valuation within 24 hours from our expert team."
    },
    {
      icon: <DollarSign size={48} className="text-softsell-blue" />,
      title: "Get Paid",
      description: "Accept our offer and get paid immediately through your preferred payment method."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-softsell-light">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-softsell-dark mb-6">How It Works</h2>
          <p className="text-lg text-slate-600">
            Our streamlined process makes selling your unused software licenses quick, safe, and profitable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-softsell-dark">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1E64EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
