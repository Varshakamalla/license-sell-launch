
const Testimonials = () => {
  const testimonials = [
    {
      quote: "SoftSell helped us recover over $45,000 from unused enterprise software licenses. The process was seamless and their valuation was higher than we expected.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechNova Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      delay: "0.3s"
    },
    {
      quote: "As a fast-growing startup, we often ended up with surplus licenses. SoftSell's marketplace gave us a way to quickly liquidate these assets and reinvest in our growth.",
      name: "Michael Chen",
      role: "Operations Director",
      company: "Gradient Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      delay: "0.5s"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-softsell-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-softsell-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-softsell-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="inline-block rounded-full bg-gradient-to-r from-softsell-purple/20 to-softsell-teal/20 px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-softsell-purple">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-softsell-dark mb-6">What Our Customers Say</h2>
          <p className="text-lg text-slate-600">
            Thousands of businesses trust SoftSell to maximize the value of their software investments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white p-0 rounded-2xl shadow-xl opacity-0 ${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'} overflow-hidden`}
              style={{ animationDelay: testimonial.delay }}
            >
              <div className="flex flex-col h-full">
                <div className="bg-gradient-to-r from-softsell-blue to-softsell-purple p-1">
                  <div className="bg-white p-8">
                    <div className="mb-8">
                      <svg className="h-10 w-10 text-softsell-teal" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-slate-600 mb-8 text-lg italic leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center mt-auto">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-softsell-teal" 
                      />
                      <div>
                        <h4 className="font-semibold text-softsell-dark text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="inline-flex items-center gap-1 text-softsell-blue font-medium">
            <span>View more success stories</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
