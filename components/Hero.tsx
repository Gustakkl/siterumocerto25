import React from 'react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section id="início" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 min-w-full min-h-full"
          style={{
            width: '177.77vh', /* 16/9 ratio */
            height: '100vh',
            minWidth: '100vw',
            minHeight: '56.25vw', /* 16/9 ratio */
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.3}px)`,
          }}
          src="https://www.youtube.com/embed/h0hi4bwMFmU?autoplay=1&mute=1&loop=1&playlist=h0hi4bwMFmU&controls=0&showinfo=0&autohide=1&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div 
        className="relative z-20 px-6"
        style={{ transform: `translateY(-${scrollY * 0.2}px)` }}
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wider filter drop-shadow-xl mb-4">
          Um Novo Começo
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 filter drop-shadow-lg">
          Encontre a esperança e o caminho para a recuperação em um ambiente seguro e acolhedor.
        </p>
        <a 
          href="https://wa.me/5511988104793?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20tratamento."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-500 text-white font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-amber-400 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out animate-pulse"
        >
          Fale Conosco
        </a>
      </div>
    </section>
  );
};

export default Hero;