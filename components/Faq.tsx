import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const faqData = [
  {
    question: "Quais tipos de tratamento o Hospital Rumo Certo oferece?",
    answer: "Oferecemos uma gama completa de tratamentos para saúde mental e dependência química, incluindo alcoolismo, dependência de drogas, depressão, esquizofrenia, e mais. Cada tratamento é personalizado para atender às necessidades individuais do paciente."
  },
  {
    question: "Vocês aceitam convênios médicos?",
    answer: "Sim, aceitamos uma ampla variedade de convênios para facilitar o acesso ao tratamento. Você pode ver a lista completa de nossos parceiros na seção 'Convênios' em nosso site."
  },
  {
    question: "Como funciona o processo de internação?",
    answer: "O processo começa com uma avaliação confidencial com nossa equipe. A partir daí, definimos o plano de tratamento mais adequado. A internação pode ser voluntária, quando o paciente concorda com o tratamento, ou involuntária, quando há risco para si ou para outros, sempre seguindo a legislação vigente."
  },
  {
    question: "A família pode participar do tratamento?",
    answer: "Com certeza. Acreditamos que o apoio familiar é um pilar fundamental na recuperação. Encorajamos a participação da família em sessões de terapia e oferecemos orientação para ajudar nesse processo."
  },
  {
    question: "O tratamento é confidencial?",
    answer: "Sim. A confidencialidade e o sigilo de todas as informações dos nossos pacientes são tratados com a máxima seriedade e respeito, seguindo todas as normas éticas e legais."
  },
  {
    question: "O que é a UPTI?",
    answer: "A UPTI (Unidade Psiquiátrica de Tratamento Intensivo) é uma ala especializada para pacientes em crises agudas que necessitam de monitoramento contínuo e cuidados intensivos em um ambiente seguro e controlado."
  }
];

interface FaqItemProps {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, isOpen, onClick }) => (
    <div className="border-b border-slate-700/50 py-4">
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center text-left text-lg font-semibold text-slate-200 focus:outline-none group"
        >
            <span className="group-hover:text-amber-500 transition-colors duration-300">{faq.question}</span>
            <svg
                className={`w-6 h-6 transform transition-transform duration-300 text-amber-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
        >
            <p className="text-slate-400 leading-relaxed pr-8">{faq.answer}</p>
        </div>
    </div>
);


const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 md:py-32 bg-transparent">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">Perguntas Frequentes</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Esclareça suas principais dúvidas sobre nossos tratamentos e estrutura.
                        </p>
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-700/50 p-6 md:p-8 rounded-lg shadow-2xl">
                        {faqData.map((faq, index) => (
                            <FaqItem
                                key={index}
                                faq={faq}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Faq;