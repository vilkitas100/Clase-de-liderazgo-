import React from 'react';
import { DefensiveCommunicationSection } from './DefensiveCommunicationSection';
import { LeadershipPhilosophySection } from './LeadershipPhilosophySection';
import { Crown, GraduationCap, Users, Award, Sparkles, BookOpen, ArrowRight, ShieldCheck, HeartHandshake, Ear, MessageSquare, CheckCircle2, Zap } from 'lucide-react';
import { StudentLeaderProfile, SubTopicId } from '../types/leadership';
import { SUBTOPICS_DATA } from '../data/leadershipData';

interface WelcomeBannerProps {
  activeLeader: StudentLeaderProfile;
  onOpenLeaderModal: () => void;
  onSelectSubtopic: (id: SubTopicId) => void;
  onOpenCertificate: () => void;
  completedCount: number;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({
  activeLeader,
  onOpenLeaderModal,
  onSelectSubtopic,
  onOpenCertificate,
  completedCount,
}) => {
  const progressPercent = Math.round((completedCount / 6) * 100);

  const getSubtopicIcon = (id: string) => {
    switch (id) {
      case 'a': return <Ear className="w-5 h-5" />;
      case 'b': return <MessageSquare className="w-5 h-5" />;
      case 'c': return <HeartHandshake className="w-5 h-5" />;
      case 'd': return <Sparkles className="w-5 h-5" />;
      case 'e': return <Crown className="w-5 h-5" />;
      case 'f': return <ShieldCheck className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Hero Welcome Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 border border-amber-900/40 text-stone-100 p-6 sm:p-10 shadow-xl">
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
        
        <div className="relative z-10 space-y-6 max-w-4xl">
          
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>UNIVERSIDAD HISPANOAMERICANA · CÁTEDRA DE LIDERAZGO</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-amber-100 leading-tight">
              Prof. Liz Acuña: Clase 8 de Liderazgo Transformacional
            </h1>
            <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-3xl">
              Bienvenida oficial a las y los <strong className="text-amber-400 font-semibold">Estudiantes Líderes</strong> y <strong className="text-amber-300 font-semibold">Estudiantes Colaboradores</strong>. Un viaje académico profundo en Administración de Empresas, Psicología Organizacional, Neuroaprendizaje y Ciencias de la Comunicación, guiado por la <span className="text-amber-200 font-medium italic">Prof. Liz Acuña Barboza</span>.
            </p>
          </div>

          {/* Student Leader Active Profile Box */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-stone-950/60 border border-amber-900/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-stone-950 font-bold flex items-center justify-center text-lg shadow">
                {activeLeader.name ? activeLeader.name.charAt(0).toUpperCase() : 'L'}
              </div>
              <div>
                <span className="text-xs text-stone-400 font-medium uppercase tracking-wider block">Estudiante Líder Activo</span>
                <span className="text-base font-bold text-amber-200">{activeLeader.name || 'Ingresa tu Nombre de Líder'}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenLeaderModal}
                className="px-4 py-2 text-xs font-semibold text-stone-200 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-lg transition-colors flex-1 sm:flex-initial text-center"
              >
                {activeLeader.name ? 'Cambiar Nombre' : 'Registrar Mi Nombre'}
              </button>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-xs sm:text-sm text-stone-300">
              <span className="font-medium text-amber-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Avance General del Taller: {completedCount} de 6 Subtemas Completados
              </span>
              <span className="font-bold font-mono text-amber-400 text-base">{progressPercent}%</span>
            </div>
            
            <div className="w-full h-3 rounded-full bg-stone-800 overflow-hidden p-0.5 border border-stone-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 transition-all duration-700 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onSelectSubtopic('express' as any)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-stone-950 font-extrabold text-sm sm:text-base transition-all shadow-xl flex items-center gap-2 animate-pulse"
            >
              <Zap className="w-5 h-5 fill-stone-950" />
              <span>⚡ Modo Express: Completar Todo en 1:30 Minutos</span>
            </button>

            <button
              onClick={() => onSelectSubtopic('a')}
              className="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-sm transition-all border border-stone-700 flex items-center gap-2"
            >
              <span>Estudio Profundo (Subtema A)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {completedCount === 6 && (
              <button
                onClick={onOpenCertificate}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm transition-all shadow-lg flex items-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>¡Generar Certificado Oficial!</span>
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Philosophy Callout: The Essence of Communication in Human Existence */}
      <div className="p-6 sm:p-8 rounded-2xl bg-amber-900/10 border border-amber-800/30 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-900 dark:text-amber-200 flex items-center gap-2.5">
          <Sparkles className="w-6 h-6 text-amber-600" />
          La Comunicación como Eje Existencial de la Humanidad y la Empresa
        </h2>
        <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
          La comunicación no es simplemente la transmisión de datos; es el tejido ontológico que nos hace humanos. Existimos en y a través del diálogo. En las organizaciones contemporáneas, aprender a comunicarse con absoluta precisión, empatía y asertividad es lo que distingue a los proyectos ordinarios de aquellos que trascienden e impactan al planeta. La comunicación armónica con los 5 ejes estratégicos (<strong className="text-amber-800 dark:text-amber-300">Clientes, Proveedores, Acreedores, Empleados y Accionistas</strong>) constituye la piedra angular de la supervivencia y la paz social.
        </p>
      </div>

      {/* Defensive Communication Module for Complex Personalities */}
      <DefensiveCommunicationSection />

      {/* Leadership Philosophy, Character, Image, and Life Strategy */}
      <LeadershipPhilosophySection />

      {/* Grid of 6 Subtopics (A - F) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <Crown className="w-5 h-5 text-amber-600" />
            Estructura Temática del Taller (Subtemas A - F)
          </h2>
          <span className="text-xs text-stone-500 font-medium">6 Módulos Profundos</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUBTOPICS_DATA.map((topic) => {
            const isCompleted = activeLeader.completedSubtopics.includes(topic.id);
            const score = activeLeader.quizScores[topic.id] || 0;
            const collaboratorsCount = (activeLeader.collaboratorsByTopic[topic.id] || []).length;

            return (
              <div
                key={topic.id}
                onClick={() => onSelectSubtopic(topic.id)}
                className={`group relative p-5 rounded-xl border transition-all cursor-pointer bg-white dark:bg-stone-900 hover:shadow-lg hover:-translate-y-1 ${
                  isCompleted ? 'border-emerald-500/40 dark:border-emerald-500/30' : 'border-stone-200 dark:border-stone-800'
                }`}
              >
                {/* Topic Letter & Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center uppercase tracking-wider ${topic.colorTheme.badge}`}>
                    {topic.code}
                  </span>

                  {isCompleted ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Completado ({score}/5)
                    </span>
                  ) : (
                    <span className="text-xs text-stone-400 font-medium">Pendiente</span>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition-colors flex items-center gap-2">
                    {getSubtopicIcon(topic.id)}
                    <span>{topic.title}</span>
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
                    {topic.subtitle}
                  </p>
                </div>

                {/* Micro info footer */}
                <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-amber-600" />
                    {collaboratorsCount} Colaboradores
                  </span>
                  <span className="font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Estudiar
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
