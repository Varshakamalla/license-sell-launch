
const Testimonials = () => {
  const testimonials = [
    {
      quote: "SoftSell helped us recover over $45,000 from unused enterprise software licenses. The process was seamless and their valuation was higher than we expected.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechNova Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "As a fast-growing startup, we often ended up with surplus licenses. SoftSell's marketplace gave us a way to quickly liquidate these assets and reinvest in our growth.",
      name: "Michael Chen",
      role: "Operations Director",
      company: "Gradient Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-softsell-light">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-softsell-dark mb-6">What Our Customers Say</h2>
          <p className="text-lg text-slate-600">
            Thousands of businesses trust SoftSell to maximize the value of their software investments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-lg shadow-md opacity-0 ${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-softsell-teal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-slate-600 mb-6 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold text-softsell-dark">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
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

export default Testimonials;
