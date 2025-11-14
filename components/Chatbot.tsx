import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';

interface Message {
  text: string;
  sender: 'user' | 'gabi';
}

const initialSuggestions = [
    "Quais tratamentos vocês oferecem?",
    "Fale sobre a UPTI.",
    "Quais convênios são aceitos?",
    "Como posso entrar em contato?"
];

// System instruction to define Gabi's persona and knowledge base
const systemInstruction = `
Você é Gabi, uma assistente virtual compassiva, profissional e acolhedora do Hospital Rumo Certo.
Sua principal função é fornecer informações úteis sobre o hospital de forma empática.
O hospital é especializado em saúde mental e dependência química.
Responda às perguntas com base no contexto do site: Tratamentos (Alcoolismo, Depressão, etc.), UPTI (Unidade de Tratamento Intensivo), equipe médica, unidades (masculina e feminina), convênios parceiros, e artigos do blog.
Seja concisa, mas completa. Se não souber a resposta, diga que vai buscar a informação com a equipe.
Se a pergunta for sobre um problema de saúde pessoal ou uma emergência, sempre aconselhe o usuário a procurar um profissional de saúde qualificado ou, em caso de emergência, ligar para o número de emergência local.
Não invente informações. Mantenha um tom profissional, mas caloroso.
`;

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Olá! Eu sou a Gabi, sua assistente virtual do Hospital Rumo Certo. Como posso te ajudar hoje?', sender: 'gabi' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const chatSession = useRef<Chat | null>(null);
  const chatboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize the Gemini chat session
    const initChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        chatSession.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: systemInstruction,
          },
        });
      } catch (error) {
        console.error("Erro ao inicializar o chatbot:", error);
        setMessages(prev => [...prev, { text: "Desculpe, estou com um problema técnico no momento. Tente novamente mais tarde.", sender: 'gabi' }]);
      }
    };
    initChat();
  }, []);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const processMessage = async (text: string) => {
    if (isLoading || !text.trim()) return;

    const userMessage: Message = { text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setShowSuggestions(false);
    setIsLoading(true);

    if (!chatSession.current) {
      setIsLoading(false);
      setMessages(prev => [...prev, { text: "Erro de conexão com a IA. Por favor, recarregue a página.", sender: 'gabi' }]);
      return;
    }

    try {
      const stream = await chatSession.current.sendMessageStream({ message: text });
      
      let gabiResponseText = '';
      setMessages(prev => [...prev, { text: gabiResponseText, sender: 'gabi' }]);
      
      for await (const chunk of stream) {
        gabiResponseText += chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = gabiResponseText;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem para a IA:", error);
      setMessages(prev => [...prev, { text: "Desculpe, não consegui processar sua mensagem. Poderia tentar novamente?", sender: 'gabi' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    processMessage(inputValue);
    setInputValue('');
  };

  return (
    <>
      <div className={`fixed bottom-24 right-5 w-80 h-[28rem] bg-slate-900 border border-slate-700/50 rounded-lg shadow-2xl flex flex-col transition-all duration-300 ease-in-out z-50 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="bg-slate-800 p-3 flex items-center space-x-3 rounded-t-lg shadow-md">
          <img src="https://i.postimg.cc/L85c48tr/mulher-jovem-cabelo-preto-atendente-virtual.jpg" alt="Gabi - Assistente Virtual" className="w-10 h-10 rounded-full border-2 border-amber-400" />
          <div>
            <h3 className="font-bold text-slate-200">Gabi</h3>
            <p className="text-xs text-green-500">Online</p>
          </div>
        </div>
        
        <div ref={chatboxRef} className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] px-3 py-2 rounded-lg shadow whitespace-pre-wrap ${msg.sender === 'user' ? 'bg-amber-500 text-white rounded-br-none' : 'bg-slate-700 text-slate-200 rounded-bl-none'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {showSuggestions && (
            <div className="flex flex-col items-start space-y-2 pt-2">
                {initialSuggestions.map(sugg => (
                    <button key={sugg} onClick={() => processMessage(sugg)} className="text-sm bg-slate-700 text-amber-400 px-3 py-1 rounded-full hover:bg-slate-600 transition-colors disabled:opacity-50" disabled={isLoading}>
                        {sugg}
                    </button>
                ))}
            </div>
          )}
          {isLoading && messages[messages.length - 1]?.sender === 'user' && (
             <div className="flex justify-start">
                <div className="bg-slate-700 text-slate-200 rounded-bl-none px-3 py-2 rounded-lg flex items-center space-x-1 shadow">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-0"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-150"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-300"></span>
                </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-700/50">
          <div className="flex space-x-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={isLoading ? "Aguarde a resposta..." : "Digite sua dúvida..."}
              className="w-full bg-slate-800 text-slate-200 rounded-md p-2 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm"
              disabled={isLoading}
            />
            <button type="submit" className="bg-amber-500 text-white p-2 rounded-md hover:bg-amber-400 transition-colors disabled:bg-amber-700" disabled={isLoading}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            </button>
          </div>
        </form>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 w-16 h-16 bg-amber-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-amber-400 hover:scale-110 transition-all duration-300 z-50"
        aria-label="Abrir chat com a assistente virtual Gabi"
      >
        <img src="https://i.postimg.cc/L85c48tr/mulher-jovem-cabelo-preto-atendente-virtual.jpg" alt="Ícone da Gabi" className="w-14 h-14 rounded-full" />
      </button>
    </>
  );
};

export default Chatbot;