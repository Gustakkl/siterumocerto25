import React from 'react';
import AnimatedSection from './AnimatedSection';

const historyData = [
  {
    year: "2005",
    title: "A Semente da Esperança",
    description: "O Hospital Rumo Certo nasce com a missão de oferecer um tratamento humanizado e eficaz, iniciando suas atividades com uma pequena, mas dedicada equipe de profissionais."
  },
  {
    year: "2012",
    title: "Expansão e Reconhecimento",
    description: "Inauguramos nossa primeira unidade especializada, a UPTI, e recebemos o primeiro prêmio de excelência em cuidados de saúde mental, consolidando nossa reputação."
  },
  {
    year: "2018",
    title: "Inovação no Tratamento",
    description: "Pioneiros na região, introduzimos terapias holísticas como meditação e mindfulness, integrando o cuidado da mente e do corpo para uma recuperação completa."
  },
  {
    year: "Hoje",
    title: "Um Futuro Brilhante",
    description: "Com mais de uma década de história e milhares de vidas transformadas, continuamos comprometidos em ser uma referência de esperança, inovação e acolhimento."
  }
];

const History: React.FC = () => {
  return (
    <section id="historia" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">Nossa Trajetória de Esperança</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Uma linha do tempo que marca nosso compromisso com a vida e a recuperação.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-0.5 bg-slate-700 transform -translate-x-1/2"></div>
          
          {historyData.map((item, index) => (
            <AnimatedSection key={index}>
              <div className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-slate-900 border border-slate-700/50 p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-2xl font-bold text-amber-500 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-slate-200 mb-3">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </div>
                {/* Timeline circle */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-amber-500 rounded-full border-4 border-slate-800 shadow-md"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;