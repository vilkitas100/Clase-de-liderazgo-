import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, Eye, Shield, Lock, FileText, CheckCircle2, ChevronDown, ChevronUp, UserX, Sparkles } from 'lucide-react';

export const DefensiveCommunicationSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState<'fallas' | 'estrategias' | 'perfiles'>('estrategias');

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-amber-600/40 text-stone-100 shadow-xl space-y-6 animate-fadeIn my-6">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 via-amber-600 to-orange-600 flex items-center justify-center text-white font-bold shadow-md shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Gestión de Crisis & Liderazgo de Protección</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-100">
              Comunicación Defensiva ante Personalidades Altamente Conflictivas
            </h2>
            <p className="text-xs text-stone-400">
              Estrategias de blindaje y contención frente a rasgos de Psicopatía, Sociopatía y Trastorno Narcisista de la Personalidad (TNP).
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-3.5 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
        >
          <span>{isExpanded ? 'Contraer Módulo' : 'Ver Estrategias Completa'}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Intro Warning callout */}
      <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/40 space-y-2 text-xs sm:text-sm text-stone-300 leading-relaxed">
        <p className="font-bold text-red-400 flex items-center gap-1.5">
          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
          Premisa Fundamental de Protección Organizacional:
        </p>
        <p>
          Tratar con personas con rasgos de psicopatía, sociopatía o narcisismo representa un desafío profundo porque operan bajo lógicas emocionales y motivacionales totalmente distintas. Las técnicas tradicionales basadas en la empatía mutua, la búsqueda honesta de acuerdos o apelaciones a la culpa <strong className="text-red-300">NO funcionan y suelen volverse en contra de quien las intenta aplicar</strong>. Se requieren estrategias de comunicación defensiva diseñadas específicamente para neutralizar su impacto y blindar tus límites.
        </p>
      </div>

      {isExpanded && (
        <div className="space-y-6 pt-2">
          
          {/* Section Tabs */}
          <div className="flex items-center gap-2 border-b border-stone-800 overflow-x-auto pb-1 scrollbar-none text-xs font-semibold">
            <button
              onClick={() => setActiveTab('fallas')}
              className={`px-3.5 py-2 rounded-t-xl transition-all whitespace-nowrap ${
                activeTab === 'fallas'
                  ? 'bg-red-500/20 text-red-300 border-b-2 border-red-500 font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              1. ¿Por qué fallan las técnicas habituales?
            </button>

            <button
              onClick={() => setActiveTab('estrategias')}
              className={`px-3.5 py-2 rounded-t-xl transition-all whitespace-nowrap ${
                activeTab === 'estrategias'
                  ? 'bg-amber-500/20 text-amber-300 border-b-2 border-amber-500 font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              2. Estrategias Efectivas (Gray Rock, BIFF, Disco Rayado)
            </button>

            <button
              onClick={() => setActiveTab('perfiles')}
              className={`px-3.5 py-2 rounded-t-xl transition-all whitespace-nowrap ${
                activeTab === 'perfiles'
                  ? 'bg-orange-500/20 text-orange-300 border-b-2 border-orange-500 font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              3. Matiz por Perfil (Psicópata, Sociópata, Narcisista)
            </button>
          </div>

          {/* TAB 1: WHY TRADITIONAL TECHNIQUES FAIL */}
          {activeTab === 'fallas' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm animate-fadeIn">
              
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <span className="font-bold text-red-400 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                  <UserX className="w-4 h-4" />
                  Ausencia de Empatía Afectiva
                </span>
                <p className="text-stone-300 leading-relaxed">
                  Carecen de la capacidad genuina de sintonizar con el dolor ajeno. Expresar vulnerabilidad (<em className="text-stone-400">"Me duele cuando haces esto"</em>) será interpretado como una debilidad o un punto de apalancamiento que usarán en tu contra en el futuro.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <span className="font-bold text-amber-400 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                  <Eye className="w-4 h-4" />
                  Distorsión de la Realidad (Gaslighting)
                </span>
                <p className="text-stone-300 leading-relaxed">
                  Reescriben los hechos, niegan lo que dijeron o hicieron y buscan hacerte dudar de tu propia memoria y cordura. Discuten para ganar y dominar, nunca para llegar a la verdad objetiva.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <span className="font-bold text-orange-400 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                  <Lock className="w-4 h-4" />
                  Evasión Total de Responsabilidad
                </span>
                <p className="text-stone-300 leading-relaxed">
                  Rara vez aceptan la culpa. La comunicación asertiva tradicional que busca que asuman su cuota genera contraataques, desvíos (<em className="text-stone-400">whataboutism</em>) o ataques personalistas <em className="text-stone-400">ad hominem</em>.
                </p>
              </div>

            </div>
          )}

          {/* TAB 2: EFFECTIVE DEFENSIVE STRATEGIES (GRAY ROCK, BIFF, DISCO RAYADO) */}
          {activeTab === 'estrategias' && (
            <div className="space-y-4 animate-fadeIn">
              
              {/* Method A: Gray Rock */}
              <div className="p-5 rounded-xl bg-stone-950 border border-amber-900/50 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold font-serif text-amber-300 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">A</span>
                    El Método GRAY ROCK (La Roca Gris)
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-mono font-semibold">
                    Propósito: Cortar Combustible Emocional
                  </span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  <strong>En qué consiste:</strong> Volverse lo más aburrido, plano, desinteresado e imperturbable posible, como una roca gris en el camino.
                </p>
                <ul className="list-disc list-inside text-stone-400 space-y-1 pt-1">
                  <li>Responde con monosílabos o frases cortas y neutras (<em className="text-amber-200">"Sí", "No", "Entendido", "Ya veremos"</em>).</li>
                  <li>No compartas proyectos personales, alegrías, temores ni vulnerabilidades.</li>
                  <li>Elimina toda carga emocional en tu tono e intensidad vocal. Sin reacción de enojo ni tristeza, pierden interés en manipularte.</li>
                </ul>
              </div>

              {/* Method B: BIFF */}
              <div className="p-5 rounded-xl bg-stone-950 border border-emerald-900/50 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold font-serif text-emerald-300 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">B</span>
                    El Método BIFF de Bill Eddy (Para Comunicaciones Escritas)
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-mono font-semibold">
                    Ideal para Correos, Chats y Escritos
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
                  <div className="p-3 rounded-lg bg-stone-900 border border-stone-800">
                    <span className="font-bold text-emerald-400 block mb-0.5">B - Breve</span>
                    <p className="text-[11px] text-stone-400">Sé directo. Cuantas menos palabras uses, menos material les das para tergiversar.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-stone-900 border border-stone-800">
                    <span className="font-bold text-emerald-400 block mb-0.5">I - Informativo</span>
                    <p className="text-[11px] text-stone-400">Cíñete a hechos comprobables (fechas, datos, logística). Cero opiniones o juicios.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-stone-900 border border-stone-800">
                    <span className="font-bold text-emerald-400 block mb-0.5">F - Friendly / Amable</span>
                    <p className="text-[11px] text-stone-400">Tono educado y neutro sin sarcasmo. Desarma su discurso de que tú eres el "agresor".</p>
                  </div>
                  <div className="p-3 rounded-lg bg-stone-900 border border-stone-800">
                    <span className="font-bold text-emerald-400 block mb-0.5">F - Firme</span>
                    <p className="text-[11px] text-stone-400">Cierra la comunicación sin dejar puertas abiertas a debates o negociaciones eternas.</p>
                  </div>
                </div>
              </div>

              {/* Method C: Disco Rayado */}
              <div className="p-5 rounded-xl bg-stone-950 border border-orange-900/50 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold font-serif text-orange-300 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center text-xs">C</span>
                    Límites Concretos y Técnica del Disco Rayado
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-mono font-semibold">
                    Enfoque en el Presente
                  </span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  No discutas sobre el pasado, intenciones ni culpas. Mantén la conversación 100% enfocada en los pasos presentes. Si intentan desviar el tema o provocarte, repite tu postura con calma imperturbable: <em className="text-orange-200">"Entiendo tu punto, sin embargo, la decisión acordada es X"</em>.
                </p>
              </div>

            </div>
          )}

          {/* TAB 3: PROFILE NUANCES (PSICÓPATA, SOCIÓPATA, NARCISISTA) */}
          {activeTab === 'perfiles' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm animate-fadeIn">
              
              <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <span className="font-bold text-red-400 block text-sm font-serif">Con el Psicópata:</span>
                <p className="text-stone-300 leading-relaxed">
                  Muy calculadores y fríos. Buscan control, ventaja transaccional y poder.
                </p>
                <div className="p-2.5 rounded bg-stone-900 border border-stone-800 text-[11px] text-stone-400">
                  <strong className="text-stone-200 block">Estrategia:</strong> Comunicación extremadamente formal, legalista y basada en registros escritos. Nunca discutas a solas si puedes evitarlo.
                </div>
              </div>

              <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <span className="font-bold text-amber-400 block text-sm font-serif">Con el Sociópata:</span>
                <p className="text-stone-300 leading-relaxed">
                  Impulsivos, volátiles y propensos a romper normas sociales violentamente.
                </p>
                <div className="p-2.5 rounded bg-stone-900 border border-stone-800 text-[11px] text-stone-400">
                  <strong className="text-stone-200 block">Estrategia:</strong> Distancia máxima y cautela. Priorizar la seguridad física e intrapersonal evitando confrontaciones directas.
                </div>
              </div>

              <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <span className="font-bold text-orange-400 block text-sm font-serif">Con el Narcisista (TNP):</span>
                <p className="text-stone-300 leading-relaxed">
                  Buscan validación constante (<em className="text-stone-400">narcissistic supply</em>). Al herir su ego, reaccionan con rabia o victimismo.
                </p>
                <div className="p-2.5 rounded bg-stone-900 border border-stone-800 text-[11px] text-stone-400">
                  <strong className="text-stone-200 block">Estrategia:</strong> Proteger su frágil ego lo justo para desactivar represalias (<em className="text-stone-300">fawning estratégico con prudencia</em>) sin ceder jamás en tus límites.
                </div>
              </div>

            </div>
          )}

          {/* Golden Rule Summary */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-stone-200 text-xs sm:text-sm font-serif italic text-center space-y-1">
            <p className="font-bold text-amber-300 not-italic uppercase tracking-wider text-[11px]">
              Regla de Oro del Liderazgo de Autoprotección:
            </p>
            <p>
              "La comunicación defensiva no busca cambiar al otro, sino cambiar tu propia forma de interactuar para dejar de ser un blanco vulnerable. Menos es más, los hechos pesan más que las emociones, y la distancia es tu mejor aliada."
            </p>
          </div>

        </div>
      )}

    </div>
  );
};
