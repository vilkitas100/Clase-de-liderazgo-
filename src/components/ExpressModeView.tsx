import React, { useState, useEffect } from 'react';
import { SUBTOPICS_DATA } from '../data/leadershipData';
import { SubTopicId } from '../types/leadership';
import { Zap, Clock, CheckCircle2, ArrowRight, ArrowLeft, Trophy, Award, Users, Crown, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExpressModeViewProps {
  onCompleteExpressMode: (leaderName: string, collaborators: string[], scores: Record<SubTopicId, number>) => void;
  onOpenCertificate: () => void;
}

export const ExpressModeView: React.FC<ExpressModeViewProps> = ({
  onCompleteExpressMode,
  onOpenCertificate,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<SubTopicId, string>>({} as any);
  const [timeLeft, setTimeLeft] = useState(90); // 90 seconds = 1:30 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [leaderInput, setLeaderInput] = useState('');
  const [collaboratorsInput, setCollaboratorsInput] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  const subtopics = SUBTOPICS_DATA;
  const currentTopic = subtopics[currentSlideIndex];

  // 90-second countdown effect
  useEffect(() => {
    if (!isTimerRunning || isFinished || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning, isFinished, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (subtopicId: SubTopicId, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [subtopicId]: optionId }));
  };

  const handleNextSlide = () => {
    if (currentSlideIndex < subtopics.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    } else {
      // Reached the end!
      finishSprint();
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const finishSprint = () => {
    setIsTimerRunning(false);
    setIsFinished(true);

    // Calculate scores (1 point per topic)
    const scores: Record<SubTopicId, number> = {} as any;
    subtopics.forEach((st) => {
      const q = st.questions[0]; // Core question
      const selected = q.options.find((o) => o.id === answers[st.id]);
      scores[st.id] = selected && selected.isCorrect ? 5 : 3;
    });

    const collabList = collaboratorsInput
      .split(',')
      .map((c) => c.trim())
      .filter((c) => c.length > 0);

    onCompleteExpressMode(leaderInput || 'Estudiante Líder Express', collabList, scores);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
      
      {/* Timer & Header Banner */}
      <div className="p-6 rounded-2xl bg-stone-900 border border-amber-600/40 text-stone-100 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-stone-950 font-bold shadow-lg shrink-0 animate-pulse">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <span>Sertest & Lectura Rápida · 1:30 Minutos</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold font-serif text-amber-100">
              Prof. Liz Acuña: Sprint Liderazgo (90s)
            </h1>
          </div>
        </div>

        {/* Live Countdown Timer */}
        <div className="flex items-center gap-3 bg-stone-950 px-4 py-2.5 rounded-xl border border-amber-900/50">
          <Clock className={`w-5 h-5 ${timeLeft < 20 ? 'text-red-500 animate-bounce' : 'text-amber-400'}`} />
          <div className="text-right">
            <span className="text-[10px] text-stone-400 block uppercase font-mono">Tiempo Restante</span>
            <span className={`text-2xl font-extrabold font-mono ${timeLeft < 20 ? 'text-red-400' : 'text-amber-300'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
      </div>

      {!isFinished ? (
        /* Carousel Slide View */
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-lg space-y-6">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span className="font-bold text-amber-600 dark:text-amber-400 uppercase">
              Etapa {currentSlideIndex + 1} de 6: Subtema {currentTopic.code.toUpperCase()}
            </span>
            <span className="font-mono">{Math.round(((currentSlideIndex + 1) / 6) * 100)}% Completado</span>
          </div>

          <div className="w-full h-2 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
              style={{ width: `${((currentSlideIndex + 1) / 6) * 100}%` }}
            />
          </div>

          {/* Subtopic Title */}
          <div className="space-y-1 border-b border-stone-100 dark:border-stone-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center uppercase ${currentTopic.colorTheme.badge}`}>
                {currentTopic.code}
              </span>
              {currentTopic.title}
            </h2>
            <p className="text-xs text-stone-500">{currentTopic.subtitle}</p>
          </div>

          {/* 15-second Express Reading Summary */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-stone-800 dark:text-stone-200 space-y-2 text-xs sm:text-sm leading-relaxed">
            <span className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Síntesis de Lectura Rápida (15s):
            </span>
            <p>
              <strong>Fundamento:</strong> {currentTopic.deepTheory.keyPrinciples[0]}
            </p>
            <p>
              <strong>Stakeholders ({currentTopic.stakeholderImpacts[0].stakeholder}):</strong> {currentTopic.stakeholderImpacts[0].impactDescription}
            </p>
            <p>
              <strong>Caso Global ({currentTopic.realWorldCase.organization}):</strong> {currentTopic.realWorldCase.summary}
            </p>
          </div>

          {/* Rapid Multiple Choice Checkpoint */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">
              Pregunta Rápida de Verificación (Subtema {currentTopic.code.toUpperCase()}):
            </h3>
            <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
              {currentTopic.questions[0].questionText}
            </p>

            <div className="space-y-2">
              {currentTopic.questions[0].options.map((opt) => {
                const isSelected = answers[currentTopic.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleAnswerSelect(currentTopic.id, opt.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm leading-relaxed transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-stone-950 font-bold border-amber-600 shadow-md'
                        : 'bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 hover:border-amber-400'
                    }`}
                  >
                    {opt.text}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Carousel Action Controls */}
          <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
            <button
              onClick={handlePrevSlide}
              disabled={currentSlideIndex === 0}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 disabled:opacity-30 transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <button
              onClick={handleNextSlide}
              disabled={!answers[currentTopic.id]}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 disabled:opacity-40"
            >
              <span>{currentSlideIndex < subtopics.length - 1 ? 'Siguiente Subtema' : 'Finalizar Sprint 90s'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      ) : (
        /* Completion Summary & Registration in 1:30 min */
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-emerald-500/40 shadow-2xl space-y-6 animate-fadeIn">
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mx-auto shadow-lg">
              <Trophy className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-emerald-600 dark:text-emerald-400">
              ¡Sprint de Liderazgo Completado en 1:30 Minutos!
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-lg mx-auto">
              Has revisado los 6 subtemas de Liderazgo Transformacional y resuelto las comprobaciones clave. Registra tu nombre de Líder y el de tus Colaboradores para desbloquear tu Certificado Oficial inmediatamente.
            </p>
          </div>

          <div className="space-y-4 max-w-md mx-auto p-5 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                Tu Nombre Completo (Estudiante Líder):
              </label>
              <input
                type="text"
                value={leaderInput}
                onChange={(e) => setLeaderInput(e.target.value)}
                placeholder="Ej. Sofía Rodríguez Solano"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                Estudiantes Colaboradores (separados por comas):
              </label>
              <input
                type="text"
                value={collaboratorsInput}
                onChange={(e) => setCollaboratorsInput(e.target.value)}
                placeholder="Ej. Carlos Delgado, Lucía Fernández, Gabriel Morales"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenCertificate}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Award className="w-5 h-5" />
              <span>Ver e Imprimir Certificado Oficial</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
