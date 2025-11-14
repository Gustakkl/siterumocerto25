import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const treatmentModalities = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    title: "Psicoterapia",
    description: "Sessões com psicólogos e psiquiatras para explorar emoções e modificar padrões de pensamento disfuncionais com técnicas como a TCC."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>,
    title: "Tratamento Medicamentoso",
    description: "Uso de antidepressivos, ansiolíticos e outros medicamentos sob supervisão médica para controlar sintomas e restaurar o equilíbrio."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    title: "Terapia Ocupacional",
    description: "Desenvolvimento de habilidades para a vida cotidiana, estimulando a criatividade, interação social e independência."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    title: "Terapias Holísticas",
    description: "Práticas como meditação e mindfulness para promover a conexão entre mente e corpo e a autorregulação emocional."
  }
];

const mentalHealthImages = [
  "https://i.postimg.cc/d1dxPgc9/1.jpg",
  "https://i.postimg.cc/JnJ2VSCp/2.jpg",
  "https://i.postimg.cc/RFfD52xP/3.jpg",
  "https://i.postimg.cc/mDM5fKW6/4.jpg",
  "https://i.postimg.cc/pT86b3MS/5.jpg",
  "https://i.postimg.cc/mks6bVTn/6.jpg",
  "https://i.postimg.cc/6qX19zBb/7.jpg",
  "https://i.postimg.cc/Bb0wqNq0/8.jpg"
];

const MentalHealth: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mentalHealthImages.length) % mentalHealthImages.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mentalHealthImages.length);
  };

  return (
    <section id="saude-mental" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">Tratamento de Saúde Mental</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Um caminho para o equilíbrio e bem-estar, com abordagens modernas e humanizadas para transtornos como ansiedade, depressão e esquizofrenia.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="relative h-96 md:h-[500px] w-full overflow-hidden rounded-lg shadow-xl bg-slate-900">
              {mentalHealthImages.map((src, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                    currentIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {currentIndex === index && (
                    <img 
                      src={src} 
                      alt={`Tratamento de Saúde Mental - Imagem ${index + 1}`} 
                      className="w-full h-full object-contain"
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
              {currentIndex + 1} / {mentalHealthImages.length}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatmentModalities.map((modality, index) => (
            <AnimatedSection key={index}>
              <div className="bg-slate-900 border border-slate-700/50 p-8 rounded-lg shadow-xl text-center h-full flex flex-col items-center justify-start transform hover:-translate-y-2 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(251,191,36,0.4)]">
                <div className="mb-6 flex justify-center items-center h-16 w-16 mx-auto bg-slate-800 rounded-full group-hover:bg-amber-500 transition-colors duration-300">
                  {modality.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-3">{modality.title}</h3>
                <p className="text-slate-400 flex-grow">{modality.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentalHealth;