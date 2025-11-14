import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import BlogModal from './BlogModal';

interface Post {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  fullContent: string;
}

const blogPosts: Post[] = [
  {
    image: 'https://i.postimg.cc/MZgPdP7J/entendendo-a-interna-o-involunt-ria-mitos-e-verdades.jpg',
    category: 'Saúde Mental',
    title: '5 Sinais de Alerta da Depressão que Você Não Deve Ignorar',
    excerpt: 'A depressão é mais do que tristeza. Aprenda a identificar os sinais sutis que indicam a necessidade de procurar ajuda profissional.',
    fullContent: `A depressão é uma condição séria que afeta milhões de pessoas, mas muitas vezes seus sinais são mal compreendidos ou ignorados. Não se trata apenas de "estar triste". Reconhecer os sinais de alerta é o primeiro passo para buscar ajuda e iniciar o caminho da recuperação. Aqui estão 5 sinais que você não deve ignorar:\n\n1. **Perda de Interesse Persistente:** Perder o interesse em hobbies, atividades sociais ou no trabalho, que antes eram prazerosos, é um sintoma central. Se a apatia se torna constante, é um forte sinal de alerta.\n\n2. **Mudanças no Sono e Apetite:** Dormir muito mais ou muito menos que o normal (insônia) são sintomas comuns. Da mesma forma, alterações significativas no apetite, resultando em perda ou ganho de peso, podem indicar depressão.\n\n3. **Fadiga e Falta de Energia:** Sentir um cansaço avassalador que não melhora com o descanso é um sintoma físico comum da depressão. Tarefas simples podem parecer exigir um esforço enorme.\n\n4. **Sentimentos de Inutilidade ou Culpa Excessiva:** Ter pensamentos negativos recorrentes sobre si mesmo, sentir-se um fardo para os outros ou remoer falhas passadas são sinais cognitivos da doença.\n\n5. **Dificuldade de Concentração:** A depressão pode afetar a capacidade de se concentrar, tomar decisões e lembrar de informações. Se a "névoa cerebral" está impactando sua vida diária, é hora de procurar ajuda.`,
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop',
    category: 'Recuperação',
    title: 'Como a Terapia em Grupo Pode Acelerar sua Recuperação',
    excerpt: 'Descubra o poder da partilha e do apoio mútuo. A terapia em grupo oferece um ambiente seguro para desenvolver novas habilidades e fortalecer sua jornada.',
    fullContent: 'A jornada de recuperação pode ser solitária, mas a terapia em grupo prova que não precisa ser assim. Ao reunir pessoas que enfrentam desafios semelhantes, ela cria um ambiente único de compreensão e apoio. A partilha de experiências valida os sentimentos dos participantes, reduzindo o isolamento e a vergonha. Ouvir as histórias de superação de outros inspira esperança e motivação. Além disso, o grupo funciona como um microcosmo social, onde é possível praticar novas habilidades de comunicação, estabelecer limites saudáveis e receber feedback construtivo em um espaço seguro e mediado por um terapeuta qualificado. Esse senso de comunidade e pertencimento é uma ferramenta poderosa que acelera o processo de cura e fortalece o indivíduo para os desafios da vida.',
  },
  {
    image: 'https://i.postimg.cc/BbZqyZ9F/uma-fam-lia-feliz-levando-o-filho-adulto.jpg',
    category: 'Família',
    title: 'O Papel da Família no Tratamento da Dependência Química',
    excerpt: 'O apoio familiar é um pilar fundamental na recuperação. Saiba como a família pode participar ativamente do processo e fazer a diferença.',
    fullContent: 'A dependência química não afeta apenas o indivíduo, mas toda a estrutura familiar. Por isso, o envolvimento dos entes queridos é crucial para uma recuperação bem-sucedida e duradoura. A família pode atuar como uma rede de apoio essencial, oferecendo suporte emocional, incentivo e um ambiente estável. Participar de terapias familiares ajuda a curar feridas, melhorar a comunicação e reestabelecer a confiança. É importante que os familiares também recebam orientação para entender a doença, aprender a estabelecer limites saudáveis e evitar comportamentos de codependência. Quando a família se une no processo de tratamento, a jornada de recuperação se torna mais forte, resiliente e completa.',
  },
  {
    image: 'https://i.postimg.cc/Jnvf31rY/pessoas-meditando.jpg',
    category: 'Bem-Estar',
    title: 'Mindfulness e Meditação: Ferramentas Contra a Ansiedade',
    excerpt: 'Aprenda técnicas simples de mindfulness e meditação para acalmar a mente, reduzir o estresse e encontrar o equilíbrio no dia a dia.',
    fullContent: 'Em um mundo acelerado, a ansiedade se tornou uma companheira constante para muitos. Mindfulness (atenção plena) e meditação são práticas milenares que oferecem ferramentas poderosas para gerenciar o estresse e acalmar a mente. Mindfulness ensina a focar no presente, observando pensamentos e sensações sem julgamento. Isso ajuda a quebrar o ciclo de preocupações sobre o futuro e ruminações sobre o passado. A meditação, por sua vez, treina a mente para se concentrar e alcançar um estado de clareza. Praticar regularmente, mesmo que por poucos minutos ao dia, pode reduzir os níveis de cortisol (o hormônio do estresse), melhorar o foco e promover uma sensação geral de paz e bem-estar.',
  },
  {
    image: 'https://i.postimg.cc/1tCTmyVf/images.jpg',
    category: 'Tratamento',
    title: 'Entendendo a Internação Involuntária: Mitos e Verdades',
    excerpt: 'A internação involuntária é um tema complexo. Esclarecemos as principais dúvidas sobre quando ela é necessária e como funciona legalmente.',
    fullContent: 'A internação involuntária é uma medida séria e delicada, reservada para casos específicos em que o paciente com transtorno mental ou dependência química representa um risco iminente para si mesmo ou para outros, e não tem capacidade de decidir sobre o próprio tratamento. É um recurso protegido por lei (Lei 10.216/01) e cercado de mitos.\n\n**Mito:** É um "castigo" ou uma forma de prender alguém. **Verdade:** É uma medida de cuidado para proteger a vida. O objetivo é estabilizar o paciente em um momento de crise aguda para que ele possa, então, aderir ao tratamento de forma consciente.\n\n**Mito:** A família pode internar qualquer um quando quiser. **Verdade:** O processo exige um laudo médico detalhado que ateste a necessidade da internação. A decisão não é arbitrária e deve ser comunicada ao Ministério Público em até 72 horas, garantindo a legalidade e a proteção dos direitos do paciente.',
  },
  {
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop',
    category: 'Saúde',
    title: 'Nutrição e Saúde Mental: A Conexão que Transforma Vidas',
    excerpt: 'O que você come impacta diretamente seu bem-estar emocional. Conheça os alimentos que podem ajudar a combater a depressão e a ansiedade.',
    fullContent: 'A conexão entre o intestino e o cérebro é um campo fascinante da medicina moderna. O que comemos tem um impacto direto em nosso humor, emoções e saúde mental. Uma dieta rica em alimentos processados, açúcar e gorduras saturadas pode contribuir para a inflamação e o estresse oxidativo, fatores associados à depressão e ansiedade. Por outro lado, uma alimentação equilibrada, rica em nutrientes, pode ser uma poderosa aliada no tratamento. Alimentos ricos em ômega-3 (peixes, nozes), triptofano (banana, ovos), magnésio (folhas verdes, abacate) e probióticos (iogurte, kefir) ajudam a regular neurotransmissores como a serotonina, o "hormônio da felicidade". Cuidar da sua nutrição é uma forma essencial de cuidar da sua mente.',
  },
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <>
      <section id="blog" className="py-20 md:py-32 bg-transparent">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">Nosso Blog</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Artigos, dicas e informações para apoiar sua jornada de bem-estar e recuperação.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={index}>
                <div className="bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.4)]">
                  <div className="overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-amber-500 text-sm font-semibold mb-2">{post.category}</p>
                    <h3 className="text-xl font-bold text-slate-200 mb-3 flex-grow">{post.title}</h3>
                    <p className="text-slate-400 mb-4 text-sm">{post.excerpt}</p>
                    <button 
                      onClick={() => setSelectedPost(post)}
                      className="mt-auto text-amber-500 font-semibold hover:text-amber-400 transition-colors duration-300 self-start"
                    >
                      Leia Mais &rarr;
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {selectedPost && <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </>
  );
};

export default Blog;