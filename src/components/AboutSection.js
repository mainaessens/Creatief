import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Sobre</span> Creatief
            </h2>
            <p className="text-lg leading-relaxed">
              Soy Mai, fundadora de Creatief Studio. Soy estudiante avanzada en Ingeniería Informática y una apasionada del marketing digital y las redes sociales. A lo largo de los años, he logrado combinar mis conocimientos técnicos con mi creatividad para desarrollar soluciones digitales únicas que hacen que las marcas se destaquen.
            </p>
            <p className="text-lg leading-relaxed">
              Somos un equipo de profesionales capacitados con un enfoque claro: brindarle a tu marca ese toque distintivo que necesita para brillar en el mundo digital. Desde la creación de identidades visuales hasta estrategias personalizadas de redes sociales, nos encargamos de que tu marca se conecte de manera auténtica con tu público.
            </p>
            <p className="text-lg leading-relaxed">
              Nuestra misión es ayudarte a construir una presencia sólida y memorable en las plataformas digitales, transformando tu visión en un proyecto real que capture la atención de todos. Con una mezcla de creatividad, estrategia y tecnología, trabajamos para que tu marca sea más que solo una imagen, sino una experiencia única.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <span className="font-medium">Creatividad + Tecnología</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <span className="font-medium">Conexión auténtica</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-purple-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Mai</h3>
                  <p className="text-purple-300">Fundadora & Directora Creativa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
