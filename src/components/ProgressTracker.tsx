import React from 'react';
import { StudentLeaderProfile, SubTopicId } from '../types/leadership';
import { SUBTOPICS_DATA } from '../data/leadershipData';
import { BarChart3, CheckCircle2, Award, Users, Crown, Sparkles, BookOpen } from 'lucide-react';

interface ProgressTrackerProps {
  activeLeader: StudentLeaderProfile;
  onSelectSubtopic: (id: SubTopicId) => void;
  onOpenCertificate: () => void;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  activeLeader,
  onSelectSubtopic,
  onOpenCertificate,
}) => {
  const completedCount = activeLeader.completedSubtopics.length;
  const globalPercent = Math.round((completedCount / 6) * 100);

  // Total quiz score
  const totalQuizScore = Object.values(activeLeader.quizScores).reduce((a, b) => a + b, 0);
  const maxPossibleQuizScore = 30; // 6 subtopics * 5 questions

  // Total challenge score
  const totalChallengeScore = Object.values(activeLeader.challengeScores).reduce((a, b) => a + b, 0);

  // Total collaborators
  const totalCollaborators = Object.values(activeLeader.collaboratorsByTopic).flat().filter(Boolean).length;

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-stone-100 border border-amber-900/40 shadow-xl space-y-4">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
              <BarChart3 className="w-4 h-4 text-amber-400" />
              EXPEDIENTE DE PROGRESO Y RENDIMIENTO ACADÉMICO
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-amber-100">
              Progreso de {activeLeader.name || 'Estudiante Líder'}
            </h1>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 text-center min-w-[160px]">
            <span className="text-xs text-stone-400 block">Completado Global</span>
            <span className="text-2xl font-bold font-mono text-emerald-400">
              {globalPercent}%
            </span>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="w-full h-3 rounded-full bg-stone-800 overflow-hidden p-0.5 border border-stone-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 transition-all duration-700 ease-out"
            style={{ width: `${globalPercent}%` }}
          />
        </div>

      </div>

      {/* KPI Cards Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-1">
          <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider block">Subtemas Acreditados</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold font-mono text-stone-900 dark:text-stone-100">{completedCount} / 6</span>
            <BookOpen className="w-5 h-5 text-amber-500" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-1">
          <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider block">Puntaje Cuestionarios</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">{totalQuizScore} / {maxPossibleQuizScore}</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-1">
          <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider block">Puntos Retos Diarios</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400">{totalChallengeScore} Pts</span>
            <Award className="w-5 h-5 text-amber-500" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-1">
          <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider block">Colaboradores Acreditados</span>
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold font-mono text-teal-600 dark:text-teal-400">{totalCollaborators}</span>
            <Users className="w-5 h-5 text-teal-500" />
          </div>
        </div>

      </div>

      {/* Subtopics Detailed Breakdown Table */}
      <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-md space-y-4">
        <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <Crown className="w-5 h-5 text-amber-600" />
          Desglose de Desempeño por Subtema
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-stone-700 dark:text-stone-300">
            <thead className="bg-stone-100 dark:bg-stone-950 text-stone-500 uppercase text-[11px] font-semibold tracking-wider">
              <tr>
                <th className="p-3.5 rounded-l-xl">Código</th>
                <th className="p-3.5">Subtema</th>
                <th className="p-3.5">Estado</th>
                <th className="p-3.5">Puntaje Repaso (5)</th>
                <th className="p-3.5">Colaboradores</th>
                <th className="p-3.5 rounded-r-xl text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
              {SUBTOPICS_DATA.map((st) => {
                const isCompleted = activeLeader.completedSubtopics.includes(st.id);
                const score = activeLeader.quizScores[st.id] || 0;
                const collaborators = activeLeader.collaboratorsByTopic[st.id] || [];

                return (
                  <tr key={st.id} className="hover:bg-stone-50 dark:hover:bg-stone-950/50 transition-colors">
                    <td className="p-3.5 font-bold font-mono text-amber-600 dark:text-amber-400 uppercase">
                      Subtema {st.code}
                    </td>
                    <td className="p-3.5 font-semibold text-stone-900 dark:text-stone-100">
                      {st.title}
                    </td>
                    <td className="p-3.5">
                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Acreditado
                        </span>
                      ) : (
                        <span className="text-stone-400 font-medium">Pendiente</span>
                      )}
                    </td>
                    <td className="p-3.5 font-mono font-bold">
                      {isCompleted ? `${score} / 5` : '-'}
                    </td>
                    <td className="p-3.5">
                      {collaborators.length > 0 ? (
                        <span className="text-teal-600 dark:text-teal-400 font-medium">
                          {collaborators.join(', ')}
                        </span>
                      ) : (
                        <span className="text-stone-400 italic">Sin atribuir</span>
                      )}
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => onSelectSubtopic(st.id)}
                        className="px-3 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold transition-colors"
                      >
                        {isCompleted ? 'Repasar' : 'Estudiar'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {completedCount === 6 && (
          <div className="pt-4 flex justify-center">
            <button
              onClick={onOpenCertificate}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-lg transition-all flex items-center gap-2 animate-bounce"
            >
              <Award className="w-5 h-5" />
              <span>Ver mi Certificado Oficial de Finalización</span>
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
