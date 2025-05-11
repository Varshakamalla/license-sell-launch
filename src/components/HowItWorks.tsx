
import { FileUp, DollarSign, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileUp size={48} className="text-white" />,
      title: "Upload License",
      description: "Submit your software license details through our secure portal. We support all major vendors.",
      bgColor: "from-softsell-blue to-softsell-teal",
      delay: "0.2s"
    },
    {
      icon: <CheckCircle size={48} className="text-white" />,
      title: "Get Valuation",
      description: "Receive a competitive market-based valuation within 24 hours from our expert team.",
      bgColor: "from-softsell-purple to-softsell-blue",
      delay: "0.4s"
    },
    {
      icon: <DollarSign size={48} className="text-white" />,
      title: "Get Paid",
      description: "Accept our offer and get paid immediately through your preferred payment method.",
      bgColor: "from-softsell-orange to-softsell-purple",
      delay: "0.6s"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-softsell-light relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-softsell-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-softsell-purple/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="inline-block rounded-full bg-gradient-to-r from-softsell-blue/20 to-softsell-purple/20 px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-softsell-purple">Simple 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-softsell-dark mb-6">How It Works</h2>
          <p className="text-lg text-slate-600">
            Our streamlined process makes selling your unused software licenses quick, safe, and profitable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative opacity-0 animate-fade-in"
              style={{ animationDelay: step.delay }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className={`bg-gradient-to-r ${step.bgColor} p-8 flex justify-center`}>
                  <div className="p-4 rounded-full bg-white/20">
                    {step.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold mb-4 text-softsell-dark">{step.title}</h3>
                  <p className="text-slate-600 flex-grow">{step.description}</p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-softsell-light text-softsell-blue font-bold">
                      {index + 1}
                    </span>
                    
                    {index < steps.length - 1 && (
                      <div className="hidden md:block">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
