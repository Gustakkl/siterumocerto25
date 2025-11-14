import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const testimonialsData = [
  {
    quote: "A equipe do Hospital Rumo Certo não apenas me ajudou a ficar limpo, mas me ensinou a viver novamente. Sou eternamente grato por esta segunda chance.",
    name: "João P.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Encontrei aqui um lugar sem julgamentos, onde pude me reconectar comigo mesma e com minha família. O apoio que recebi foi fundamental.",
    name: "Maria S.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "O programa é completo e os profissionais são incríveis. Recomendo de olhos fechados para quem busca uma recuperação de verdade.",
    name: "Carlos A.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">Histórias que Inspiram</h2>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="relative max-w-3xl mx-auto">
            {/* Testimonial Content */}
            <div className="relative min-h-[350px] flex items-center justify-center">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute w-full transition-opacity duration-700 ease-in-out ${
                    currentIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {currentIndex === index && (
                    <div className="bg-slate-800 border border-slate-700/50 p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
                      <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-6 border-4 border-amber-500 object-cover"/>
                      <p className="text-slate-400 italic mb-6 text-lg min-h-[100px]">"{testimonial.quote}"</p>
                      <h4 className="font-bold text-slate-200 text-xl">{testimonial.name}</h4>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Previous Button */}
            <button 
              onClick={prevTestimonial} 
              className="absolute top-1/2 left-0 md:-left-20 transform -translate-y-1/2 bg-slate-800/50 hover:bg-amber-500 text-slate-200 hover:text-white rounded-full p-3 transition-all duration-300 z-10 active:scale-90"
              aria-label="Depoimento anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Next Button */}
            <button 
              onClick={nextTestimonial} 
              className="absolute top-1/2 right-0 md:-right-20 transform -translate-y-1/2 bg-slate-800/50 hover:bg-amber-500 text-slate-200 hover:text-white rounded-full p-3 transition-all duration-300 z-10 active:scale-90"
              aria-label="Próximo depoimento"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;