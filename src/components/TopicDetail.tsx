import React, { useState } from 'react';
import { SubTopic, SubTopicId } from '../types/leadership';
import { SUBTOPICS_DATA } from '../data/leadershipData';
import { BookOpen, Users, Globe, Sparkles, Award, CheckCircle2, RotateCw, AlertTriangle, ArrowLeft, ArrowRight, Brain, HeartHandshake, ShieldCheck, Crown } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TopicDetailProps {
  subtopicId: SubTopicId;
  onNavigateSubtopic: (id: SubTopicId) => void;
  leaderName: string;
  onOpenCollaboratorModal: (subtopicId: SubTopicId, score: number) => void;
  collaboratorsList: string[];
  isTopicCompleted: boolean;
  savedScore: number;
}

export const TopicDetail: React.FC<TopicDetailProps> = ({
  subtopicId,
  onNavigateSubtopic,
  leaderName,
  onOpenCollaboratorModal,
  collaboratorsList,
  isTopicCompleted,
  savedScore,
}) => {
  const [activeTab, setActiveTab] = useState<'teoria' | 'stakeholders' | 'caso' | 'flashcards' | 'reto' | 'quiz'>('teoria');

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(isTopicCompleted);
  const [currentScore, setCurrentScore] = useState(savedScore || 0);

  // Flashcards flip state
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  // Challenge state
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const topic = SUBTOPICS_DATA.find((t) => t.id === subtopicId) || SUBTOPICS_DATA[0];

  const subtopicIds: SubTopicId[] = ['a', 'b', 'c', 'd', 'e', 'f'];
  const currentIndex = subtopicIds.indexOf(subtopicId);

  const handleFlipCard = (cardId: string) => {
    setFlippedCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const handleSelectQuizAnswer = (qId: string, optionId: string) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionId }));
  };

  const handleSubmitQuiz = () => {
    if (Object.keys(selectedAnswers).length < topic.questions.length) {
      alert('Por favor responde las 5 preguntas antes de finalizar la evaluación.');
      return;
    }

    let score = 0;
    topic.questions.forEach((q) => {
      const selected = q.options.find((o) => o.id === selectedAnswers[q.id]);
      if (selected && selected.isCorrect) {
        score += 1;
      }
    });

    setCurrentScore(score);
    setQuizSubmitted(true);

    if (score >= 3) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }

    // Open Collaborator modal so Student Leader can credit Collaborators for this stage!
    onOpenCollaboratorModal(subtopicId, score);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Topic Header Banner */}
      <div className={`rounded-2xl bg-gradient-to-br ${topic.colorTheme.bgHeader} border border-amber-900/50 p-6 sm:p-8 text-stone-100 shadow-xl space-y-4`}>
        
        {/* Top Navigation Row */}
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center uppercase tracking-wider ${topic.colorTheme.badge}`}>
              {topic.code}
            </span>
            <span className="text-amber-300 font-serif font-semibold">Subtema {topic.code.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-2">
            {currentIndex > 0 && (
              <button
                onClick={() => onNavigateSubtopic(subtopicIds[currentIndex - 1])}
                className="px-3 py-1 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-300 text-xs font-medium flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Anterior</span>
              </button>
            )}
            {currentIndex < subtopicIds.length - 1 && (
              <button
                onClick={() => onNavigateSubtopic(subtopicIds[currentIndex + 1])}
                className="px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold flex items-center gap-1 transition-colors"
              >
                <span>Siguiente</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-serif text-amber-100">
            {topic.title}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base font-normal leading-relaxed max-w-4xl">
            {topic.subtitle}
          </p>
        </div>

        {/* Leader & Collaborators Ribbon */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-stone-800/80">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="text-stone-300">Estudiante Líder Evaluando: <strong className="text-amber-200">{leaderName || 'Sin registrar'}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-400" />
            <span className="text-stone-300">
              Colaboradores Acreditados ({collaboratorsList.length}):{' '}
              <span className="text-emerald-300 font-medium">
                {collaboratorsList.length > 0 ? collaboratorsList.join(', ') : 'Pendiente de atribuir al final del cuestionario'}
              </span>
            </span>
          </div>
        </div>

      </div>

      {/* Internal Navigation Tabs (6 Tabs) */}
      <div className="flex items-center gap-1 sm:gap-2 border-b border-stone-200 dark:border-stone-800 overflow-x-auto pb-1 scrollbar-none">
        
        <button
          onClick={() => setActiveTab('teoria')}
          className={`px-3.5 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 border-b-2 ${
            activeTab === 'teoria'
              ? 'border-amber-600 text-amber-700 dark:text-amber-400 bg-amber-500/10'
              : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>1. Fundamentos Profundos</span>
        </button>

        <button
          onClick={() => setActiveTab('stakeholders')}
          className={`px-3.5 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 border-b-2 ${
            activeTab === 'stakeholders'
              ? 'border-amber-600 text-amber-700 dark:text-amber-400 bg-amber-500/10'
              : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>2. Matriz Stakeholders (5)</span>
        </button>

        <button
          onClick={() => setActiveTab('caso')}
          className={`px-3.5 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 border-b-2 ${
            activeTab === 'caso'
              ? 'border-amber-600 text-amber-700 dark:text-amber-400 bg-amber-500/10'
              : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>3. Caso Real Global</span>
        </button>

        <button
          onClick={() => setActiveTab('flashcards')}
          className={`px-3.5 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 border-b-2 ${
            activeTab === 'flashcards'
              ? 'border-amber-600 text-amber-700 dark:text-amber-400 bg-amber-500/10'
              : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>4. Flashcards Memoria</span>
        </button>

        <button
          onClick={() => setActiveTab('reto')}
          className={`px-3.5 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 border-b-2 ${
            activeTab === 'reto'
              ? 'border-amber-600 text-amber-700 dark:text-amber-400 bg-amber-500/10'
              : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>5. Reto Diario</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-3.5 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 border-b-2 ${
            activeTab === 'quiz'
              ? 'border-amber-600 text-amber-700 dark:text-amber-400 bg-amber-500/10'
              : 'border-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>6. Repaso (5 Preguntas)</span>
        </button>

      </div>

      {/* TAB CONTENT AREAS */}

      {/* TAB 1: FUNDAMENTOS PROFUNDOS MULTIDISCIPLINARIOS */}
      {activeTab === 'teoria' && (
        <div className="space-y-8 animate-fadeIn">
          
          <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
            <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-600" />
              Introducción Teórica Profunda
            </h2>
            <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
              {topic.deepTheory.introduction}
            </p>
          </div>

          {/* Grid of 4 Multidisciplinary Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pillar 1: Business Administration */}
            <div className="p-6 rounded-2xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 space-y-3">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold font-serif text-lg">
                <Crown className="w-5 h-5" />
                <h3>Administración de Empresas</h3>
              </div>
              <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                {topic.deepTheory.businessPerspective}
              </p>
            </div>

            {/* Pillar 2: Psychology */}
            <div className="p-6 rounded-2xl bg-orange-500/5 dark:bg-orange-950/20 border border-orange-500/20 space-y-3">
              <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400 font-bold font-serif text-lg">
                <HeartHandshake className="w-5 h-5" />
                <h3>Psicología Organizacional</h3>
              </div>
              <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                {topic.deepTheory.psychologyPerspective}
              </p>
            </div>

            {/* Pillar 3: Neurolearning */}
            <div className="p-6 rounded-2xl bg-red-500/5 dark:bg-red-950/20 border border-red-500/20 space-y-3">
              <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-bold font-serif text-lg">
                <Brain className="w-5 h-5" />
                <h3>Neuroaprendizaje y Cerebro</h3>
              </div>
              <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                {topic.deepTheory.neurolearningPerspective}
              </p>
            </div>

            {/* Pillar 4: Communication Sciences */}
            <div className="p-6 rounded-2xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold font-serif text-lg">
                <ShieldCheck className="w-5 h-5" />
                <h3>Ciencias de la Comunicación</h3>
              </div>
              <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
                {topic.deepTheory.communicationSciencePerspective}
              </p>
            </div>

          </div>

          {/* Key Principles List */}
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100 space-y-4 shadow-lg">
            <h3 className="text-lg font-bold font-serif text-amber-300 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Principios Clave del Liderazgo Transformacional en este Subtema
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {topic.deepTheory.keyPrinciples.map((principle, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-300 leading-relaxed flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    {idx + 1}
                  </span>
                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: MATRIZ DE STAKEHOLDERS (5 GRUPOS) */}
      {activeTab === 'stakeholders' && (
        <div className="space-y-6 animate-fadeIn">
          
          <div className="p-6 rounded-2xl bg-amber-950/10 border border-amber-800/30 space-y-2">
            <h2 className="text-xl font-bold font-serif text-amber-900 dark:text-amber-200">
              Análisis Estratégico de Comunicación en los 5 Ejes de Stakeholders
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-sm">
              La comunicación transformacional sostiene la existencia y prosperidad de la empresa en sus interacciones continuas con Clientes, Proveedores, Acreedores, Empleados y Accionistas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {topic.stakeholderImpacts.map((sh, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm hover:border-amber-500/40 transition-all space-y-4"
              >
                <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">
                      Stakeholder {idx + 1}
                    </span>
                    <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                      {sh.stakeholder}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  
                  <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-950 space-y-1">
                    <span className="font-semibold text-stone-900 dark:text-stone-200 block">Impacto Comunicativo:</span>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{sh.impactDescription}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-red-500/5 dark:bg-red-950/20 border border-red-500/20 space-y-1">
                    <span className="font-semibold text-red-700 dark:text-red-400 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Riesgo de Falla:
                    </span>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{sh.riskIfFailed}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Resultado Estratégico:
                    </span>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{sh.strategicOutcome}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* TAB 3: CASO DE LA VIDA REAL CON IMPACTO GLOBAL */}
      {activeTab === 'caso' && (
        <div className="space-y-6 animate-fadeIn">
          
          <div className="p-6 rounded-2xl bg-stone-900 text-stone-100 border border-amber-600/40 shadow-xl space-y-4">
            
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-3">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                Caso Real de Impacto Global
              </span>
              <span className="text-xs text-stone-400">{topic.realWorldCase.organization} · {topic.realWorldCase.year}</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-serif text-amber-200">
                {topic.realWorldCase.title}
              </h2>
              <p className="text-xs text-stone-400 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>Ubicación / Alcance: {topic.realWorldCase.location}</span>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">Resumen Ejecutivo:</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">{topic.realWorldCase.summary}</p>
            </div>

            {/* Crisis & Strategy Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-950 border border-red-900/40 space-y-2">
                <span className="font-bold text-red-400 block text-sm">Escenario de Crisis e Incertidumbre:</span>
                <p className="text-stone-300 leading-relaxed">{topic.realWorldCase.contextAndCrisis}</p>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-emerald-900/40 space-y-2">
                <span className="font-bold text-emerald-400 block text-sm">Estrategia de Comunicación Transformacional:</span>
                <p className="text-stone-300 leading-relaxed">{topic.realWorldCase.communicationStrategy}</p>
              </div>
            </div>

            {/* Global Impact Outcome */}
            <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/40 space-y-2">
              <span className="font-bold text-amber-300 block text-sm">Impacto Global y Resultados Transformacionales:</span>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">{topic.realWorldCase.globalImpact}</p>
            </div>

            {/* Applied Theories List */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
                Teorías Comunicacionales y Directivas Aplicadas:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {topic.realWorldCase.theoriesApplied.map((theory, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-200">{theory.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-semibold">{theory.discipline}</span>
                    </div>
                    <p className="text-stone-400 italic">Autor: {theory.author}</p>
                    <p className="text-stone-300">{theory.applicationInCase}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Executive Takeaways */}
            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">Lecciones Ejecutivas para la Alta Dirección:</span>
              <ul className="list-disc list-inside text-xs text-stone-300 space-y-1">
                {topic.realWorldCase.executiveTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="leading-relaxed">{takeaway}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      )}

      {/* TAB 4: TARJETAS DE MEMORIA (FLASHCARDS) */}
      {activeTab === 'flashcards' && (
        <div className="space-y-6 animate-fadeIn">
          
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                Tarjetas de Memoria Interactivas (Flashcards)
              </h2>
              <p className="text-xs text-stone-500">Haz clic en cada tarjeta para girarla y revelar la explicación académica profunda.</p>
            </div>
            <span className="text-xs text-amber-600 font-semibold">{topic.flashcards.length} Tarjetas disponibles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topic.flashcards.map((card) => {
              const isFlipped = flippedCards[card.id] || false;

              return (
                <div
                  key={card.id}
                  onClick={() => handleFlipCard(card.id)}
                  className="h-64 cursor-pointer perspective-1000 group"
                >
                  <div className={`relative w-full h-full duration-500 transition-all transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                    
                    {/* Front Face */}
                    <div className="absolute inset-0 w-full h-full p-6 rounded-2xl bg-white dark:bg-stone-900 border-2 border-amber-500/30 shadow-md flex flex-col justify-between backface-hidden">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-semibold">
                          {card.disciplineBadge}
                        </span>
                        <RotateCw className="w-4 h-4 text-stone-400 group-hover:rotate-180 transition-transform" />
                      </div>

                      <div className="space-y-2 text-center my-auto">
                        <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                          {card.frontTitle}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-medium">
                          {card.frontConcept}
                        </p>
                      </div>

                      <div className="text-center text-[11px] text-stone-400 italic">
                        Haz clic para voltear la tarjeta
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 w-full h-full p-6 rounded-2xl bg-stone-900 text-stone-100 border-2 border-amber-500 shadow-xl flex flex-col justify-between rotate-y-180 backface-hidden">
                      <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                        <span className="text-xs font-bold text-amber-400">Respuesta y Fundamento</span>
                        {card.keyAuthor && (
                          <span className="text-[10px] text-stone-400 italic">Autor: {card.keyAuthor}</span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-stone-200 leading-relaxed my-auto">
                        {card.backExplanation}
                      </p>

                      <div className="text-center text-[11px] text-amber-400/80 font-medium">
                        Haz clic para volver al concepto
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* TAB 5: RETO DIARIO INTERACTIVO */}
      {activeTab === 'reto' && (
        <div className="space-y-6 animate-fadeIn">
          
          <div className="p-6 rounded-2xl bg-stone-900 text-stone-100 border border-amber-600/40 shadow-xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                Reto Diario de Liderazgo Situacional
              </span>
              <span className="text-xs text-stone-400">{topic.dailyChallenge.roleContext}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-200">
              {topic.dailyChallenge.title}
            </h2>

            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-xs sm:text-sm text-stone-300 leading-relaxed space-y-1">
              <span className="font-semibold text-amber-400 block uppercase tracking-wider text-[11px]">Dilema Ejecutivo a Resolver:</span>
              <p>{topic.dailyChallenge.scenario}</p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block">
                Selecciona la acción ejecutiva que llevarás a cabo como Líder Transformacional:
              </span>

              {topic.dailyChallenge.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;

                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedOptionId(opt.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? opt.isOptimal
                          ? 'bg-emerald-950/50 border-emerald-500 text-stone-100 shadow-md'
                          : 'bg-red-950/50 border-red-500 text-stone-100 shadow-md'
                        : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-amber-500/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-amber-300 block">{opt.leadershipStyle}</span>
                        <p className="text-xs sm:text-sm leading-relaxed">{opt.text}</p>
                      </div>
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${opt.isOptimal ? 'bg-emerald-500/20 text-emerald-300' : 'bg-stone-800 text-stone-400'}`}>
                        +{opt.scorePoints} pts
                      </span>
                    </div>

                    {/* Feedback box */}
                    {isSelected && (
                      <div className={`mt-3 pt-3 border-t ${opt.isOptimal ? 'border-emerald-800/60 text-emerald-200' : 'border-red-800/60 text-red-200'} text-xs leading-relaxed`}>
                        <strong className="block mb-0.5">{opt.isOptimal ? '¡Respuesta Óptima de Liderazgo!' : 'Análisis del Estilo Elegido:'}</strong>
                        {opt.feedback}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      )}

      {/* TAB 6: EVALUACIÓN DE REPASO (5 PREGUNTAS) */}
      {activeTab === 'quiz' && (
        <div className="space-y-6 animate-fadeIn">
          
          <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
            
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
              <div>
                <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Cuestionario de Repaso (5 Preguntas)
                </h2>
                <p className="text-xs text-stone-500">
                  Responde las 5 preguntas teóricas y prácticas para registrar tu puntaje y acreditar la etapa con tus Estudiantes Colaboradores.
                </p>
              </div>

              {quizSubmitted && (
                <div className="text-right">
                  <span className="text-xs text-stone-500 block">Resultado:</span>
                  <span className={`text-lg font-bold font-mono ${currentScore >= 4 ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {currentScore} / 5 Correctas
                  </span>
                </div>
              )}
            </div>

            {/* Questions list */}
            <div className="space-y-6 pt-2">
              {topic.questions.map((q, qIndex) => (
                <div key={q.id} className="p-5 rounded-xl bg-stone-50 dark:bg-stone-950/80 border border-stone-200 dark:border-stone-800 space-y-3">
                  
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 font-bold text-xs flex items-center justify-center shrink-0">
                      {qIndex + 1}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
                        {q.questionText}
                      </h3>
                      <p className="text-[11px] text-amber-600 dark:text-amber-400 italic">
                        Insight: {q.theoreticalInsight}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pl-9">
                    {q.options.map((opt) => {
                      const isSelected = selectedAnswers[q.id] === opt.id;
                      let optStyle = 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:border-amber-400';

                      if (quizSubmitted) {
                        if (opt.isCorrect) {
                          optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-semibold';
                        } else if (isSelected) {
                          optStyle = 'border-red-500 bg-red-50 dark:bg-red-950/50 text-red-900 dark:text-red-200';
                        }
                      } else if (isSelected) {
                        optStyle = 'border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-medium';
                      }

                      return (
                        <div
                          key={opt.id}
                          onClick={() => handleSelectQuizAnswer(q.id, opt.id)}
                          className={`p-3 rounded-xl border text-xs leading-relaxed transition-all cursor-pointer ${optStyle}`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{opt.text}</span>
                            {quizSubmitted && opt.isCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                            )}
                          </div>

                          {quizSubmitted && (isSelected || opt.isCorrect) && (
                            <div className="mt-2 pt-2 border-t border-stone-200 dark:border-stone-800 text-[11px] text-stone-600 dark:text-stone-400">
                              <strong className="block text-stone-700 dark:text-stone-300">Explicación:</strong>
                              {opt.explanation}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
              {quizSubmitted ? (
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleResetQuiz}
                    className="px-4 py-2 text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-stone-900 transition-colors flex items-center gap-1.5"
                  >
                    <RotateCw className="w-4 h-4" />
                    <span>Reintentar Cuestionario</span>
                  </button>

                  <button
                    onClick={() => onOpenCollaboratorModal(subtopicId, currentScore)}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow transition-all flex items-center gap-2"
                  >
                    <Users className="w-4 h-4" />
                    <span>Editar / Agregar Estudiantes Colaboradores</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Finalizar Cuestionario y Registrar Colaboradores</span>
                </button>
              )}
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
