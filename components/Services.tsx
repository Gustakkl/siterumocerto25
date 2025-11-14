import React from 'react';
import AnimatedSection from './AnimatedSection';

interface Service {
  image: string;
  title: string;
  description: string;
}

const servicesData: Service[] = [
    {
      image: "https://i.postimg.cc/bvVyMD9N/alcoolismo.jpg",
      title: "Alcoolismo",
      description: "Programas especializados para a superação da dependência do álcool, com suporte médico e terapêutico contínuo."
    },
    {
      image: "https://i.postimg.cc/RhNM4MGt/dependencia-quimica.jpg",
      title: "Dependência Química",
      description: "Tratamento completo para a dependência de substâncias, com foco na desintoxicação segura e reabilitação psicossocial."
    },
    {
      image: "https://i.postimg.cc/wjBnrWfs/dependencia-quimica-5.png",
      title: "Dependência Química Feminina",
      description: "Cuidado especializado para mulheres, em um ambiente seguro que aborda as particularidades da dependência feminina."
    },
    {
      image: "https://i.postimg.cc/J4FQ1P7y/15408585952414799.jpg",
      title: "Depressão",
      description: "Suporte psiquiátrico e terapêutico para o tratamento da depressão e transtornos de humor associados."
    },
    {
      image: "https://i.postimg.cc/9MzMFtQy/esquizofrenia-em-homem.jpg",
      title: "Esquizofrenia",
      description: "Manejo e tratamento da esquizofrenia com acompanhamento psiquiátrico, visando a estabilidade e qualidade de vida."
    },
    {
      image: "https://i.postimg.cc/jjSyVFBb/farmaco.jpg",
      title: "Farmacodependência",
      description: "Programas de desintoxicação e reabilitação para dependência de medicamentos, com supervisão médica rigorosa."
    },
    {
      image: "https://i.postimg.cc/pVzhSvyg/fg307979.jpg",
      title: "Prevenção ao Suicídio",
      description: "Apoio emergencial e contínuo para pessoas em crise, com foco na valorização da vida e saúde mental."
    },
    {
      image: "https://i.postimg.cc/tJkXH2K6/Saude-Mental.jpg",
      title: "Saúde Mental",
      description: "Cuidado integral da saúde mental, tratando ansiedade, transtornos bipolares e outras condições com abordagens modernas."
    },
    {
      image: "https://i.postimg.cc/fbcpFJnJ/transtornos-alimentares.webp",
      title: "Transtornos Alimentares",
      description: "Tratamento multidisciplinar para anorexia, bulimia e compulsão alimentar, com foco na recuperação da relação saudável com a comida e o corpo."
    }
  ];

const Services: React.FC = () => {
  return (
    <section id="serviços" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">Nossos Tratamentos</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Abordagens especializadas para cada jornada de recuperação, com cuidado, respeito e profissionalismo.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <AnimatedSection key={index}>
              <div className="bg-slate-900 rounded-lg shadow-xl overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.4)] hover:-translate-y-2 border border-slate-700/50">
                <div className="overflow-hidden h-48">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-200 mb-3">{service.title}</h3>
                  <p className="text-slate-400 flex-grow text-sm">{service.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;