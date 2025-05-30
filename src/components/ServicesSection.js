import React from 'react';

const services = [
  {
    title: 'Social Media Management',
    description: 'Estrategias personalizadas para potenciar tu presencia en redes sociales.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
      </svg>
    ),
    color: 'from-purple-500 to-purple-700'
  },
  {
    title: 'Diseño de Identidad Visual',
    description: 'Branding completo que comunique la esencia de tu marca.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path>
      </svg>
    ),
    color: 'from-pink-500 to-pink-700'
  },
  {
    title: 'Creación de Contenido',
    description: 'Fotografía profesional y contenido audiovisual para destacar.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
      </svg>
    ),
    color: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Diseño Web',
    description: 'Sitios web atractivos y funcionales para tu negocio.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    ),
    color: 'from-pink-500 to-purple-500'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">servicios</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Soluciones integrales para llevar tu presencia digital al siguiente nivel
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
            >
              <div className={`w-16 h-16 rounded-xl mb-6 bg-gradient-to-br ${service.color} flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;