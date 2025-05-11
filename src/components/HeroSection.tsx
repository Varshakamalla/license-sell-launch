
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-softsell-dark">
              Turn Unused Software Licenses Into <span className="text-softsell-blue">Instant Cash</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-xl">
              Don't let valuable software licenses sit idle. SoftSell helps businesses unlock the value of their software assets through our secure, transparent marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-softsell-blue hover:bg-blue-700 text-white px-8 py-6 text-lg">
                Sell My Licenses
              </Button>
              <Button variant="outline" className="border-softsell-blue text-softsell-blue hover:bg-blue-50 px-8 py-6 text-lg">
                Get a Valuation
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-softsell-teal/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-softsell-blue/20 rounded-full blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
                alt="Software License Management" 
                className="w-full rounded-lg shadow-xl z-10 relative"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <img src="https://via.placeholder.com/120x40?text=Microsoft" alt="Microsoft" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
          <img src="https://via.placeholder.com/120x40?text=Adobe" alt="Adobe" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
          <img src="https://via.placeholder.com/120x40?text=Oracle" alt="Oracle" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
          <img src="https://via.placeholder.com/120x40?text=Salesforce" alt="Salesforce" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
          <img src="https://via.placeholder.com/120x40?text=Atlassian" alt="Atlassian" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
