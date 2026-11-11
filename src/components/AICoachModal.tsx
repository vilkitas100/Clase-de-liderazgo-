import React, { useState } from 'react';
import { Brain, Send, X, Sparkles, Bot, User, RefreshCw } from 'lucide-react';
import { SubTopicId } from '../types/leadership';
import { SUBTOPICS_DATA } from '../data/leadershipData';

interface AICoachModalProps {
  isOpen: boolean;
  onClose: () => void;
  leaderName: string;
  activeSubtopicId: SubTopicId;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const AICoachModal: React.FC<AICoachModalProps> = ({
  isOpen,
  onClose,
  leaderName,
  activeSubtopicId,
}) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `¡Hola ${leaderName || 'líder'}! Soy el asistente virtual de la catedrática Prof. Liz Acuña Barboza. Estoy aquí para resolver tus dudas sobre el Tema 8: Taller de Liderazgo Transformacional, aplicándolo a la administración de empresas, psicología, neuroaprendizaje y ciencias de la comunicación. ¿En qué dilema directivo o teórico puedo orientarte hoy?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  if (!isOpen) return null;

  const currentTopic = SUBTOPICS_DATA.find((t) => t.id === activeSubtopicId);

  const handleSendPrompt = async (textToSend?: string) => {
    const messageText = textToSend || prompt;
    if (!messageText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setPrompt('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai-coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: messageText,
          topicTitle: currentTopic?.title,
          leaderName,
        }),
      });

      const data = await res.json();

      if (res.ok && data.response) {
        const aiMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: data.response,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, aiMsg]);
      } else {
        // Fallback response with deep academic grounding
        const aiMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: `[Orientación Académica Prof. Liz Acuña Barboza]: En el contexto de "${currentTopic?.title}", recuerda que la comunicación eficaz integra el Ethos (credibilidad moral), el control descendente de la amígdala (Inteligencia Emocional) y la gestión transparente con los 5 stakeholders. Al comunicarte con clientes, proveedores o empleados, tu prioridad debe ser disolver el secuestro amigdalino y generar acoplamiento neural mediante la empatía asertiva.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, aiMsg]);
      }
    } catch (err) {
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: `[Orientación de Liderazgo]: Excelente consulta. Desde las ciencias de la comunicación y el neuroaprendizaje, la clave radica en escuchar sin juzgar antes de responder, articular la intención con claridad y atribuir los logros al trabajo colaborativo del equipo.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    `¿Cómo aplico la escucha empática en una crisis con proveedores?`,
    `¿Qué rol juega la oxitocina cerebral en la construcción de la confianza?`,
    `¿Cómo presentar una mala noticia financiera a los accionistas de forma asertiva?`,
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end p-0 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      
      <div className="bg-stone-900 border-l sm:border border-amber-900/40 w-full max-w-lg h-full sm:h-[90vh] sm:rounded-2xl shadow-2xl text-stone-100 flex flex-col relative overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-4 border-b border-stone-800 bg-stone-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold font-serif text-amber-200">Coach de Liderazgo IA</h2>
              <p className="text-[11px] text-stone-400">Prof. Liz Acuña Barboza · Univ. Hispanoamericana</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-amber-600 text-stone-950'
                    : 'bg-stone-800 text-amber-400 border border-stone-700'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`p-3.5 rounded-2xl max-w-[85%] text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-amber-600 text-stone-950 font-medium rounded-tr-none'
                    : 'bg-stone-950 border border-stone-800 text-stone-200 rounded-tl-none space-y-1'
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>
                <span className="text-[10px] opacity-70 block text-right font-mono">{msg.timestamp}</span>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-amber-400 p-3 bg-stone-950 rounded-xl border border-stone-800 w-max">
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Consultando fuentes de Psicología, Neuroaprendizaje y Administración...</span>
            </div>
          )}
        </div>

        {/* Suggestions Bar */}
        <div className="p-3 bg-stone-950 border-t border-stone-800/80 space-y-2">
          <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider block">Preguntas Sugeridas:</span>
          <div className="flex flex-col gap-1.5">
            {suggestions.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSendPrompt(s)}
                className="text-left text-[11px] p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-300 transition-colors truncate border border-stone-800"
              >
                💡 {s}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendPrompt();
          }}
          className="p-3 bg-stone-950 border-t border-stone-800 flex items-center gap-2"
        >
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Pregunta a la Prof. Liz Acuña..."
            className="flex-1 px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
          />
          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold disabled:opacity-50 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
