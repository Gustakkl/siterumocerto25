import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const treatmentOptions = [
  "Alcoolismo",
  "Dependência Química",
  "Dependência Química Feminina",
  "Depressão",
  "Esquizofrenia",
  "Farmacodependência",
  "Prevenção ao Suicídio",
  "Saúde Mental",
  "Transtornos Alimentares",
  "Outro (especificar)"
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    contactName: '',
    contactPhone: '',
    relationship: 'O próprio paciente',
    treatmentType: treatmentOptions[0],
    internmentType: 'Voluntária',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { patientName, contactName, contactPhone, relationship, treatmentType, internmentType } = formData;
    
    const message = `
Olá! Gostaria de mais informações sobre o tratamento.

*DADOS DO PACIENTE:*
- *Nome do Paciente:* ${patientName}
- *Tratamento de Interesse:* ${treatmentType}

*DADOS PARA CONTATO:*
- *Seu Nome:* ${contactName}
- *Seu Telefone/WhatsApp:* ${contactPhone}
- *Relação com o Paciente:* ${relationship}

*TIPO DE INTERNAÇÃO:*
- *Modalidade:* ${internmentType}
    `.trim().replace(/\n\s*\n/g, '\n\n');

    const whatsappNumber = "5511988104793";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">Dê o Primeiro Passo</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Preencha o formulário e nossa equipe entrará em contato. A avaliação é confidencial e sem compromisso.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-700/50 p-8 md:p-12 rounded-lg shadow-2xl">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="patientName" className="block text-slate-400 mb-2">Nome do Paciente</label>
                  <input type="text" id="patientName" name="patientName" value={formData.patientName} onChange={handleChange} className="w-full bg-slate-800 text-slate-200 rounded-md p-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" required />
                </div>
                 <div>
                  <label htmlFor="contactName" className="block text-slate-400 mb-2">Seu Nome</label>
                  <input type="text" id="contactName" name="contactName" value={formData.contactName} onChange={handleChange} className="w-full bg-slate-800 text-slate-200 rounded-md p-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" required />
                </div>
                <div>
                  <label htmlFor="contactPhone" className="block text-slate-400 mb-2">Seu Telefone/WhatsApp</label>
                  <input type="tel" id="contactPhone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} className="w-full bg-slate-800 text-slate-200 rounded-md p-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" required />
                </div>
                <div>
                  <label htmlFor="relationship" className="block text-slate-400 mb-2">Sua relação com o paciente</label>
                  <select id="relationship" name="relationship" value={formData.relationship} onChange={handleChange} className="w-full bg-slate-800 text-slate-200 rounded-md p-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all">
                    <option>O próprio paciente</option>
                    <option>Familiar (Mãe/Pai)</option>
                    <option>Familiar (Cônjuge)</option>
                    <option>Familiar (Irmão/Irmã)</option>
                    <option>Amigo(a)</option>
                    <option>Outro</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="treatmentType" className="block text-slate-400 mb-2">Tipo de Tratamento de Interesse</label>
                <select id="treatmentType" name="treatmentType" value={formData.treatmentType} onChange={handleChange} className="w-full bg-slate-800 text-slate-200 rounded-md p-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all">
                  {treatmentOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
               <div className="mb-8">
                <label className="block text-slate-400 mb-3">Tipo de Internação</label>
                <div className="flex flex-col md:flex-row gap-6">
                    <label className="flex items-center space-x-3 p-3 bg-slate-800 border border-slate-700 rounded-md flex-1 cursor-pointer hover:bg-slate-700 transition-colors">
                        <input type="radio" name="internmentType" value="Voluntária" checked={formData.internmentType === 'Voluntária'} onChange={handleChange} className="h-5 w-5 text-amber-500 bg-slate-700 border-slate-600 focus:ring-amber-500" />
                        <span className="text-slate-200">Voluntária</span>
                    </label>
                    <label className="flex items-center space-x-3 p-3 bg-slate-800 border border-slate-700 rounded-md flex-1 cursor-pointer hover:bg-slate-700 transition-colors">
                        <input type="radio" name="internmentType" value="Involuntária" checked={formData.internmentType === 'Involuntária'} onChange={handleChange} className="h-5 w-5 text-amber-500 bg-slate-700 border-slate-600 focus:ring-amber-500" />
                        <span className="text-slate-200">Involuntária</span>
                    </label>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-amber-500 text-white font-bold py-3 px-12 rounded-full text-lg uppercase hover:bg-amber-400 hover:scale-105 transform transition-all duration-300 ease-in-out active:scale-95">
                  Enviar por WhatsApp
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;