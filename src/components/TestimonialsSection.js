import React from 'react';

const testimonials = [
  {
    quote: "Creatief Studio transformó completamente nuestra presencia digital. Los resultados superaron nuestras expectativas.",
    author: "El Norteño Parquet",
    role: "Cliente desde 2021"
  },
  {
    quote: "El equipo de Maia entendió perfectamente nuestra esencia y la tradujo a un branding impecable.",
    author: "GBC HOME",
    role: "Branding & Web"
  },
  {
    quote: "Profesionales, creativos y con un enfoque estratégico que marca la diferencia.",
    author: "Marino Brimer",
    role: "Identidad Corporativa"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Lo que dicen <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">nuestros clientes</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="text-2xl mb-6 leading-relaxed">"{testimonial.quote}"</div>
              <div className="border-t border-gray-700/50 pt-6">
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-purple-300 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;