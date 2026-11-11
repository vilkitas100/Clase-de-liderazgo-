import React, { useState } from 'react';
import { SUBTOPICS_DATA } from '../data/leadershipData';
import { DailyChallenge, SubTopicId } from '../types/leadership';
import { Award, CheckCircle2, RotateCw, ArrowRight, ShieldCheck, Crown } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DailyChallengesProps {
  onScorePoints: (challengeId: string, points: number) => void;
  savedChallengeScores: Record<string, number>;
}

export const DailyChallenges: React.FC<DailyChallengesProps> = ({
  onScorePoints,
  savedChallengeScores,
}) => {
  const [activeSubtopicId, setActiveSubtopicId] = useState<SubTopicId>('a');
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  const challenges: (DailyChallenge & { subtopicCode: string; subtopicTitle: string; subtopicId: SubTopicId })[] = SUBTOPICS_DATA.map((st) => ({
    ...st.dailyChallenge,
    subtopicCode: st.code,
    subtopicTitle: st.title,
    subtopicId: st.id,
  }));

  const currentChallenge = challenges.find((c) => c.subtopicId === activeSubtopicId) || challenges[0];

  const handleSelectOption = (challengeId: string, optionId: string, points: number, isOptimal: boolean) => {
    setSelectedOptions((prev) => ({ ...prev, [challengeId]: optionId }));
    onScorePoints(challengeId, points);

    if (isOptimal) {
      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.6 }
      });
    }
  };

  const totalPoints = Object.values(savedChallengeScores).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-stone-100 border border-amber-900/40 shadow-xl space-y-4">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <Award className="w-4 h-4 text-amber-400" />
              SIMULADOR DE RETOS DIARIOS Y DILEMAS EJECUTIVOS
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-amber-100">
              Retos Interactivos de Liderazgo
            </h1>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 text-center min-w-[150px]">
            <span className="text-xs text-stone-400 block">Puntaje Total Retos</span>
            <span className="text-xl font-bold font-mono text-amber-400">
              {totalPoints} / 600 Pts
            </span>
          </div>
        </div>

        {/* Subtopic Selector Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2">
          {SUBTOPICS_DATA.map((st) => {
            const isCompleted = savedChallengeScores[st.dailyChallenge.id] !== undefined;

            return (
              <button
                key={st.id}
                onClick={() => setActiveSubtopicId(st.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeSubtopicId === st.id
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                <span>Tema {st.code.toUpperCase()}</span>
                {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            );
          })}
        </div>

      </div>

      {/* Challenge Card Container */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-md space-y-6">
        
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-4">
          <div>
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
              Subtema {currentChallenge.subtopicCode.toUpperCase()} · {currentChallenge.subtopicTitle}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100">
              {currentChallenge.title}
            </h2>
          </div>

          <span className="text-xs px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-semibold">
            {currentChallenge.roleContext}
          </span>
        </div>

        {/* Scenario Box */}
        <div className="p-5 rounded-xl bg-amber-500/5 dark:bg-stone-950 border border-amber-500/20 space-y-2">
          <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">Escenario de Toma de Decisión:</span>
          <p className="text-sm sm:text-base text-stone-700 dark:text-stone-200 leading-relaxed">
            {currentChallenge.scenario}
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-4 pt-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            ¿Cuál es la mejor acción estratégica transformacional que tomarás?
          </h3>

          {currentChallenge.options.map((opt) => {
            const isSelected = selectedOptions[currentChallenge.id] === opt.id;

            return (
              <div
                key={opt.id}
                onClick={() => handleSelectOption(currentChallenge.id, opt.id, opt.scorePoints, opt.isOptimal)}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? opt.isOptimal
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-stone-900 dark:text-stone-100 shadow-md'
                      : 'bg-red-50 dark:bg-red-950/40 border-red-500 text-stone-900 dark:text-stone-100 shadow-md'
                    : 'bg-stone-50 dark:bg-stone-950 border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-300 hover:border-amber-500/40'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 block">{opt.leadershipStyle}</span>
                    <p className="text-xs sm:text-sm leading-relaxed">{opt.text}</p>
                  </div>
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded ${opt.isOptimal ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'}`}>
                    +{opt.scorePoints} Pts
                  </span>
                </div>

                {/* Analytical feedback */}
                {isSelected && (
                  <div className={`mt-3 pt-3 border-t ${opt.isOptimal ? 'border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200' : 'border-red-300 dark:border-red-800 text-red-800 dark:text-red-200'} text-xs leading-relaxed`}>
                    <strong className="block mb-0.5">{opt.isOptimal ? '¡Elección de Liderazgo Excelente!' : 'Retroalimentación Crítica:'}</strong>
                    {opt.feedback}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
