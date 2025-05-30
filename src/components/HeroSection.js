import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    title.style.opacity = 0;
    title.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      title.style.opacity = 1;
      title.style.transform = 'translateY(0)';
    }, 300);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-pink-500 filter blur-3xl opacity-70"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          Transformamos ideas en <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">experiencias digitales</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 opacity-0 animate-fadeIn [animation-delay:0.8s]">
          Estrategia, creatividad y tecnología para hacer despegar tu marca
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/30 opacity-0 animate-fadeIn [animation-delay:1.2s]">
          Hacé despegar tu marca
        </button>
      </div>
    </section>
  );
};

export default HeroSection;