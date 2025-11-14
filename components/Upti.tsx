import React from 'react';
import AnimatedSection from './AnimatedSection';

const uptiFeatures = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Atenção 24 horas",
    description: "Equipe multidisciplinar, composta por psiquiatras, enfermeiros e psicólogos, oferece cuidados constantes e imediatos."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Ambiente Seguro",
    description: "Estrutura adaptada para garantir a segurança, com medidas para prevenir automutilações ou situações de risco."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Tratamento Intensivo",
    description: "Intervenções farmacológicas, psicoterapia e contenção emocional para estabilizar o quadro clínico do paciente."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Gestão de Crises",
    description: "Foco na estabilização de crises psicóticas, episódios maníacos ou depressivos graves e risco iminente."
  }
];

const Upti: React.FC = () => {
  return (
    <section id="upti" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">UPTI - Cuidado Intensivo e Especializado</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            A Unidade Psiquiátrica de Tratamento Intensivo (UPTI) é dedicada ao cuidado de pacientes em crises agudas, oferecendo monitoramento contínuo e um ambiente seguro para estabilização e recuperação.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
                <img src="https://i.postimg.cc/hPYGZSkg/a9117387c63c73453c16bad68115e3e1-1.jpg" alt="UPTI - Unidade de Tratamento Intensivo" className="rounded-lg shadow-2xl w-full h-full object-cover" />
            </AnimatedSection>
            <div className="space-y-8">
                {uptiFeatures.map((feature, index) => (
                    <AnimatedSection key={index}>
                    <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0 bg-slate-800 p-4 rounded-full shadow-md">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-200 mb-2">{feature.title}</h3>
                            <p className="text-slate-400">{feature.description}</p>
                        </div>
                    </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Upti;