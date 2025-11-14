import React from 'react';
import AnimatedSection from './AnimatedSection';

const partnersLogos = [
  { name: "Cassi", url: "https://iili.io/KWC9gzF.png" },
  { name: "Real Grandeza", url: "https://iili.io/KWC9kJV.png" },
  { name: "Geap Saúde", url: "https://iili.io/KWC98OP.png" },
  { name: "Dona Saúde", url: "https://iili.io/KWC9Sb1.png" },
  { name: "Gama Saúde", url: "https://iili.io/KWC9rWg.png" },
  { name: "PHS Saúde Samaritano", url: "https://iili.io/KWC94sa.png" },
  { name: "Select Saúde", url: "https://iili.io/KWC9PqJ.png" },
  { name: "Porto Saúde", url: "https://iili.io/KWC9i0v.png" },
  { name: "Saúde Itaú", url: "https://iili.io/KWC9sgR.png" },
  { name: "Bradesco Saúde", url: "https://iili.io/KWC9QJp.png" },
  { name: "Blue Med", url: "https://iili.io/KWC9Z5N.png" },
  { name: "IPREF", url: "https://iili.io/KWC9teI.png" },
  { name: "Blue Med Saúde Consciente", url: "https://iili.io/KWC9Dbt.png" },
  { name: "São Luiz Saúde", url: "https://iili.io/KWC9mzX.png" },
  { name: "Care Plus", url: "https://iili.io/KWC9pXn.png" },
  { name: "Fusex", url: "https://iili.io/KWC9yss.png" },
  { name: "Mediservice", url: "https://iili.io/KWCHHqG.png" },
  { name: "Saúde Caixa", url: "https://iili.io/KWCHJ1f.png" }
];

const Partners: React.FC = () => {
  const extendedLogos = [...partnersLogos, ...partnersLogos];

  return (
    <section id="convênios" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">Convênios Parceiros</h2>
            <p className="text-lg text-slate-400">Aceitamos uma ampla variedade de convênios para facilitar seu acesso ao tratamento.</p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div
            className="relative w-full overflow-hidden"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            <div className="flex w-max animate-[scroll_60s_linear_infinite] hover:[animation-play-state:paused]">
              {extendedLogos.map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="group flex-shrink-0 px-8 py-4 cursor-pointer">
                  <img
                    src={partner.url}
                    alt={partner.name}
                    className="h-12 object-contain transition-all duration-300 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:-translate-y-1 group-hover:drop-shadow-[0_5px_15px_rgba(251,191,36,0.4)]"
                    title={partner.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Partners;