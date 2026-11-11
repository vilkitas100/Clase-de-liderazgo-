import React from 'react';
import { Award, Crown, Users, Sparkles, CheckCircle2, Star } from 'lucide-react';
import { StudentLeaderProfile } from '../types/leadership';

interface FeaturedParticipantsProps {
  activeLeader: StudentLeaderProfile;
}

export const FeaturedParticipants: React.FC<FeaturedParticipantsProps> = ({
  activeLeader,
}) => {
  // Pre-populated exemplar list of top participants + current user
  const exemplarLeaders = [
    {
      name: activeLeader.name || 'Estudiante Líder Actual',
      role: 'Estudiante Líder Activo',
      badge: 'Líder Transformacional',
      score: Object.values(activeLeader.quizScores).reduce((a, b) => a + b, 0) + ' / 30 Pts',
      isCurrent: true,
    },
    {
      name: 'Sofía Rodríguez Solano',
      role: 'Estudiante Líder Destacada',
      badge: 'Excelencia en Empatía',
      score: '30 / 30 Pts',
      isCurrent: false,
    },
    {
      name: 'Gabriel Morales Vargas',
      role: 'Estudiante Líder Destacado',
      badge: 'Maestría en Escucha Activa',
      score: '29 / 30 Pts',
      isCurrent: false,
    },
    {
      name: 'Valeria Castro Jiménez',
      role: 'Estudiante Líder Destacada',
      badge: 'Negociación Principista',
      score: '28 / 30 Pts',
      isCurrent: false,
    },
  ];

  // Aggregate current collaborators + exemplar collaborators
  const currentCollaborators = Object.values(activeLeader.collaboratorsByTopic).flat().filter(Boolean);

  const exemplarCollaborators = [
    ...currentCollaborators.map((name) => ({
      name,
      achievement: 'Dedicación Increíble en Proyecto Activo',
      status: 'Acreditación Directa',
    })),
    {
      name: 'Carlos Delgado Mora',
      achievement: 'Aporte Excepcional en Resolución de Crisis',
      status: 'Reconocimiento Académico',
    },
    {
      name: 'Mariana Brenes Chaves',
      achievement: 'Investigación Profunda en Casos Globales',
      status: 'Reconocimiento Académico',
    },
    {
      name: 'Alejandro Gutiérrez Fonseca',
      achievement: 'Liderazgo Colaborativo y Apoyo Socioemocional',
      status: 'Reconocimiento Académico',
    },
    {
      name: 'Lucía Fernández Quesada',
      achievement: 'Co-diseño de Estrategias con Stakeholders',
      status: 'Reconocimiento Académico',
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-stone-100 border border-amber-900/40 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
          <Star className="w-4 h-4 text-amber-400" />
          CUADRO DE HONOR Y DISTINCIÓN ACADÉMICA
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-amber-100">
          Lista de Participantes Destacados
        </h1>
        <p className="text-stone-300 text-sm max-w-3xl">
          Reconocimiento oficial a las y los <strong className="text-amber-300">Estudiantes Líderes</strong> y <strong className="text-emerald-300">Estudiantes Colaboradores</strong> por su desempeño superior, compromiso ético y dedicación trascendente durante la clase de Liderazgo y Cambio Organizacional de la Prof. Liz Acuña Barboza.
        </p>
      </div>

      {/* Grid of Highlighted Leaders */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <Crown className="w-5 h-5 text-amber-600" />
          Estudiantes Líderes Destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {exemplarLeaders.map((leader, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all space-y-3 ${
                leader.isCurrent
                  ? 'bg-amber-500/10 border-amber-500/50 shadow-md'
                  : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-stone-950 font-bold text-xs flex items-center justify-center shadow">
                  #{idx + 1}
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold uppercase">
                  {leader.badge}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                  {leader.name}
                </h3>
                <p className="text-xs text-stone-500">{leader.role}</p>
              </div>

              <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                <span className="text-stone-400">Puntaje acumulado:</span>
                <span className="font-mono font-bold text-amber-600 dark:text-amber-400">{leader.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid of Highlighted Collaborators */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <Users className="w-5 h-5 text-emerald-600" />
          Estudiantes Colaboradores Destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {exemplarCollaborators.map((collab, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2 shadow-sm"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {collab.status}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </div>

              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                {collab.name}
              </h3>

              <p className="text-xs text-stone-500 leading-relaxed">
                {collab.achievement}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
