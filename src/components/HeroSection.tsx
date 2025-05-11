
import { Button } from "@/components/ui/button";
import { MicrosoftIcon, AdobeIcon, OracleIcon, SalesforceIcon, AtlassianIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-softsell-purple/20 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-softsell-teal/20 rounded-full blur-3xl"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
          <div className="lg:w-1/2 space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="inline-block rounded-full bg-gradient-to-r from-softsell-purple/20 to-softsell-blue/20 px-4 py-1.5 mb-2">
              <span className="text-sm font-medium bg-gradient-to-r from-softsell-purple to-softsell-blue bg-clip-text text-transparent">
                Turn Unused Assets Into Revenue
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Monetize Your <span className="bg-gradient-to-r from-softsell-teal to-softsell-blue bg-clip-text text-transparent">Unused</span> Software Licenses
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-xl">
              Stop losing money on idle software. SoftSell's marketplace helps you recover up to <span className="font-semibold text-softsell-blue">70%</span> of your original investment through our secure, enterprise-grade platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <Button className="bg-gradient-to-r from-softsell-blue to-softsell-purple hover:opacity-90 text-white px-8 py-7 text-lg rounded-xl shadow-lg shadow-softsell-blue/20 transition-all duration-300 hover:shadow-xl hover:shadow-softsell-purple/30">
                Sell My Licenses
              </Button>
              <Button variant="outline" className="border-2 border-softsell-blue text-softsell-blue hover:bg-softsell-blue/5 px-8 py-7 text-lg rounded-xl transition-all duration-300">
                Get a Free Valuation
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative animate-float">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-softsell-orange/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-12 w-40 h-40 bg-softsell-purple/20 rounded-full blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=90"
                alt="Software License Management" 
                className="w-full rounded-2xl shadow-2xl z-10 relative"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-5 -right-5 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">Average Recovery</p>
                    <p className="text-softsell-blue font-bold">$32,500</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">Time to Cash</p>
                    <p className="text-softsell-blue font-bold">48 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="flex items-center opacity-60 hover:opacity-100 transition-opacity h-10">
            <MicrosoftIcon className="h-10 w-auto" />
            <span className="ml-2 font-semibold">Microsoft</span>
          </div>
          <div className="flex items-center opacity-60 hover:opacity-100 transition-opacity h-10">
            <AdobeIcon className="h-10 w-auto" />
            <span className="ml-2 font-semibold">Adobe</span>
          </div>
          <div className="flex items-center opacity-60 hover:opacity-100 transition-opacity h-10">
            <OracleIcon className="h-10 w-auto" />
            <span className="ml-2 font-semibold">Oracle</span>
          </div>
          <div className="flex items-center opacity-60 hover:opacity-100 transition-opacity h-10">
            <SalesforceIcon className="h-10 w-auto" />
            <span className="ml-2 font-semibold">Salesforce</span>
          </div>
          <div className="flex items-center opacity-60 hover:opacity-100 transition-opacity h-10">
            <AtlassianIcon className="h-10 w-auto" />
            <span className="ml-2 font-semibold">Atlassian</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
