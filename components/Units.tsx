import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const maleUnitImages1 = [
  "https://iili.io/KWCbuf4.jpg", "https://iili.io/KWCbzWG.jpg", "https://iili.io/KWCbA0l.jpg",
  "https://iili.io/KWCbIsf.jpg", "https://iili.io/KWCbRg2.jpg", "https://iili.io/KWCb7JS.jpg",
  "https://iili.io/KWCbY57.jpg", "https://iili.io/KWCbae9.jpg", "https://iili.io/KWCbEsj.jpg",
  "https://iili.io/KWCb0zu.jpg", "https://iili.io/KWCbMqx.jpg", "https://iili.io/KWCb1Wb.jpg"
];
const femaleUnitImage = "https://iili.io/KWno8gI.jpg";
const maleUnitImage3 = "https://iili.io/KWsHb0G.jpg";

const Units: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + maleUnitImages1.length) % maleUnitImages1.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % maleUnitImages1.length);
  };
  
  return (
    <section id="unidades" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">Nossas Unidades</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Ambientes projetados para o conforto, segurança e bem-estar durante a jornada de recuperação.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-200 mb-8 text-center">Unidade Masculina 1</h3>
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-96 md:h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
                 {maleUnitImages1.map((src, index) => (
                    <div
                      key={index}
                      className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                        currentIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {currentIndex === index && (
                          <img 
                            src={src} 
                            alt={`Unidade Masculina 1 - Imagem ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                      )}
                    </div>
                  ))}
              </div>
               
                <button 
                  onClick={prevImage} 
                  className="absolute top-1/2 left-0 md:-left-16 transform -translate-y-1/2 bg-slate-800/50 hover:bg-amber-500 text-slate-200 hover:text-white rounded-full p-3 transition-all duration-300 z-10 active:scale-90"
                  aria-label="Imagem anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>

                <button 
                  onClick={nextImage} 
                  className="absolute top-1/2 right-0 md:-right-16 transform -translate-y-1/2 bg-slate-800/50 hover:bg-amber-500 text-slate-200 hover:text-white rounded-full p-3 transition-all duration-300 z-10 active:scale-90"
                  aria-label="Próxima imagem"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>

                <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                    {currentIndex + 1} / {maleUnitImages1.length}
                </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-200 mb-8">Unidade Feminina</h3>
                 <div className="overflow-hidden rounded-lg shadow-xl group">
                    <img 
                        src={femaleUnitImage} 
                        alt="Unidade Feminina" 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-200 mb-8">Unidade Masculina 3</h3>
                    <div className="overflow-hidden rounded-lg shadow-xl group">
                        <img 
                            src={maleUnitImage3} 
                            alt="Unidade Masculina 3" 
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </AnimatedSection>
        </div>

      </div>
    </section>
  );
};

export default Units;