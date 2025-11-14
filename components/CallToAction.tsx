import React from 'react';
import AnimatedSection from './AnimatedSection';

interface CallToActionProps {
  scrollY: number;
}

const CallToAction: React.FC<CallToActionProps> = ({ scrollY }) => {
  const bgImageUrl = 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          transform: `translateY(${scrollY * 0.2}px)`,
          backgroundPositionY: 'center',
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-800/70"></div>

      <div className="relative container mx-auto px-6 text-center text-white z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Sua Jornada Rumo à Recuperação Começa Agora
          </h2>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10 drop-shadow-md">
            Não espere mais para buscar a ajuda que você ou alguém que você ama precisa. Nossa equipe está pronta para ouvir sua história e oferecer o melhor caminho para a recuperação. Dê o primeiro passo.
          </p>
          <a
            href="https://wa.me/5511988104793?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20tratamento."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 text-white font-bold py-4 px-10 rounded-full text-lg uppercase hover:bg-amber-400 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out inline-block"
          >
            Fale com um Especialista
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CallToAction;