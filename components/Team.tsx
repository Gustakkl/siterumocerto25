import React from 'react';
import AnimatedSection from './AnimatedSection';

const teamHighlights = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "Corpo Clínico Especializado",
    description: "Quatro psiquiatras, clínicos gerais e psicólogos trabalhando de forma integrada para o seu bem-estar."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    title: "Atendimento Completo e Humanizado",
    description: "Acolhimento desde o primeiro momento, com exames e uma entrevista individual para um plano de cuidado completo."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Recuperação Eficaz e Sustentável",
    description: "Tratamento personalizado com base em necessidades individuais para promover uma recuperação duradoura."
  }
];

const Team: React.FC = () => {
  return (
    <section id="equipe" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">Nossa Equipe de Excelência</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Profissionais dedicados ao tratamento psiquiátrico e da dependência química, proporcionando um atendimento humanizado e de ponta.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection>
            <img src="https://i.postimg.cc/cJ6bLrwc/esquipe-medica-uniformaizada-com-essa-logo.jpg" alt="Equipe Médica" className="rounded-lg shadow-2xl w-full h-full object-cover" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="space-y-6">
                <p className="text-lg text-slate-400 leading-relaxed">
                O Hospital Rumo Certo conta com uma equipe médica altamente qualificada, composta por quatro psiquiatras, além de clínicos gerais, psicólogos e uma equipe multidisciplinar. Trabalhamos de forma integrada para garantir o melhor cuidado para cada paciente.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                Desde a sua chegada, o paciente é acolhido e passa por uma entrevista individual e exames detalhados. A partir daí, iniciamos um tratamento com orientação médica completa, explicando as regras e o cronograma para uma jornada de recuperação transparente e segura.
                </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {teamHighlights.map((highlight, index) => (
            <AnimatedSection key={index}>
              <div className="bg-slate-900 border border-slate-700/50 p-8 rounded-lg shadow-xl text-center h-full flex flex-col items-center justify-start transform hover:-translate-y-2 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(251,191,36,0.4)]">
                 <div className="mb-6 flex justify-center items-center h-16 w-16 mx-auto bg-slate-800 rounded-full group-hover:bg-amber-500 transition-colors duration-300">
                    {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-3">{highlight.title}</h3>
                <p className="text-slate-400 flex-grow">{highlight.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;