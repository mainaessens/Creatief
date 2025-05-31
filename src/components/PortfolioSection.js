import React from 'react';

const projects = [
  {
    name: 'GBC HOME',
    category: 'Diseño Web, Contenido & Redes Sociales',
    image: '/placeholder-gbc.png',
    instagram: 'https://www.instagram.com/gbchome/'
  },
  {
    name: 'El Norteño Parquet',
    category: 'Branding & Redes Sociales',
    image: '/placeholder-norteno.jpg',
    instagram: 'https://www.instagram.com/elnortenoparquet/'
  },
  {
    name: 'GCTecno',
    category: 'Branding',
    image: '/placeholder-gctecno.jpg',
  },
  {
    name: 'Marino Brimer',
    category: 'Estrategia Digital & Redes Sociales',
    image: '/placeholder-marino.jpg',
    instagram: 'https://www.instagram.com/marinobrimer/'
  },
  {
    name: 'Gran Bazar Chino',
    category: 'Contenido & Redes Sociales',
    image: '/placeholder-bazar.jpg',
    instagram: 'https://www.instagram.com/elgranbazarchino/'
  },
  {
    name: 'Siempre Lindas',
    category: 'Fotografía, Contenido & Redes Sociales',
    image: '/placeholder-siempre.jpg',
    instagram: 'https://www.instagram.com/siemprelindas_tuc/'
  },
  {
    name: 'GLOW',
    category: 'Contenido & Redes Sociales',
    image: '/placeholder-glow.jpg',
    instagram: 'https://www.instagram.com/glow.vodka/'
  },
  {
    name: 'Club Bambú',
    category: 'Branding, Contenido & Redes Sociales',
    image: '/placeholder-bambu.jpg',
    instagram: 'https://www.instagram.com/clubbambu/'
  },
  {
    name: '23 Producciones',
    category: 'Estrategia Digital, Contenido & Spots Publicitarios',
    image: '/placeholder-23producciones.jpg',
    instagram: 'https://www.instagram.com/23producciones_/'
  },
  {
    name: 'It´s Groove',
    category: 'Estrategia Digital, Contenido & Spots Publicitarios',
    image: '/placeholder-23producciones.jpg',
    instagram: 'https://www.instagram.com/its.groove/'
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">proyectos</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Marcas que confiaron en nuestra creatividad y expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gray-800">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
              </div>
              <div className="relative z-20 h-full flex flex-col justify-end p-8 space-y-2">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-purple-300 transition-colors duration-300">{project.name}</h3>
                <p className="text-gray-300">{project.category}</p>
                {project.instagram && (
                  <a 
                    href={project.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-pink-400 hover:text-pink-300 transition underline"
                  >
                    Ver en Instagram
                  </a>
                )}
              </div>
              <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full bg-gray-700"></div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-lg text-gray-400 italic">
          Y muchos proyectos más...
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
