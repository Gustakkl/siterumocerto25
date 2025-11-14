import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">Nossa Missão é a Sua Recuperação</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative w-full rounded-lg shadow-2xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/8o8xap05ack" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="space-y-6">
              <p className="text-lg text-slate-400 leading-relaxed">
                No Hospital Rumo Certo, acreditamos que toda jornada de recuperação é única. Oferecemos um tratamento humanizado e individualizado, focado não apenas na desintoxicação, mas na reconstrução de vidas, laços familiares e sonhos.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Nossa equipe multidisciplinar de médicos, psicólogos e terapeutas está dedicada a fornecer o mais alto padrão de cuidado em um ambiente que promove paz, reflexão e crescimento pessoal.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;