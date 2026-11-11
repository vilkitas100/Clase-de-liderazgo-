import React from 'react';
import { Crown, Award, BookOpen, Users, Sparkles, User, Brain, BarChart3, Zap, Compass } from 'lucide-react';
import { StudentLeaderProfile } from '../types/leadership';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  activeLeader: StudentLeaderProfile;
  onChangeLeaderClick: () => void;
  onOpenCoach: () => void;
  onOpenCertificate: () => void;
  isCertificateEligible: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  activeLeader,
  onChangeLeaderClick,
  onOpenCoach,
  onOpenCertificate,
  isCertificateEligible,
}) => {
  return (
    <header className="bg-stone-900 border-b border-stone-800 text-stone-100 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => setCurrentTab('inicio')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base font-bold tracking-tight text-amber-400 block leading-tight font-serif">
                  Prof. Liz Acuña · Clase 8 Liderazgo
                </span>
                <span className="text-xs text-stone-400 font-medium block truncate max-w-[180px] sm:max-w-none">
                  Taller Transformacional · Univ. Hispanoamericana
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-stone-300">
            <button
              onClick={() => setCurrentTab('inicio')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                currentTab === 'inicio' ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30' : 'hover:text-amber-300 hover:bg-stone-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Inicio</span>
            </button>

            <button
              onClick={() => setCurrentTab('express')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 font-bold ${
                currentTab === 'express' ? 'bg-amber-500 text-stone-950 shadow-md' : 'bg-amber-500/10 text-amber-400 hover:bg-amber-500/20'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>⚡ Express 1:30 min</span>
            </button>

            <button
              onClick={() => setCurrentTab('filosofia')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                currentTab === 'filosofia' ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30' : 'hover:text-amber-300 hover:bg-stone-800'
              }`}
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Filosofía del Líder</span>
            </button>

            <button
              onClick={() => setCurrentTab('temas')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                currentTab.startsWith('subtopic') || currentTab === 'temas' ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30' : 'hover:text-amber-300 hover:bg-stone-800'
              }`}
            >
              <Crown className="w-4 h-4" />
              <span>Subtemas (A-F)</span>
            </button>

            <button
              onClick={() => setCurrentTab('flashcards')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                currentTab === 'flashcards' ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30' : 'hover:text-amber-300 hover:bg-stone-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Flashcards</span>
            </button>

            <button
              onClick={() => setCurrentTab('retos')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                currentTab === 'retos' ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30' : 'hover:text-amber-300 hover:bg-stone-800'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Retos Diarios</span>
            </button>

            <button
              onClick={() => setCurrentTab('progreso')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                currentTab === 'progreso' ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30' : 'hover:text-amber-300 hover:bg-stone-800'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Progreso</span>
            </button>

            <button
              onClick={() => setCurrentTab('colaboradores')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                currentTab === 'colaboradores' ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30' : 'hover:text-amber-300 hover:bg-stone-800'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Colaboradores</span>
            </button>
          </nav>

          {/* Zone 3: Primary Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* AI Coach Trigger */}
            <button
              onClick={onOpenCoach}
              className="px-3 py-1.5 text-xs sm:text-sm font-medium text-amber-300 bg-amber-950/80 border border-amber-700/50 rounded-lg hover:bg-amber-900 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-sm"
              title="Consultar al Coach de Liderazgo IA"
            >
              <Brain className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Coach IA</span>
            </button>

            {/* Certificate Trigger */}
            <button
              onClick={onOpenCertificate}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                isCertificateEligible
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 hover:from-amber-400 hover:to-orange-500 shadow-md animate-pulse'
                  : 'bg-stone-800 text-stone-400 border border-stone-700 hover:bg-stone-700 hover:text-stone-200'
              }`}
            >
              <Award className="w-4 h-4" />
              <span className="hidden sm:inline">Certificado</span>
            </button>

            {/* Active Student Profile Badge */}
            <button
              onClick={onChangeLeaderClick}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 text-xs text-amber-200 transition-colors"
              title="Cambiar o editar perfil de Líder"
            >
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold truncate max-w-[90px] sm:max-w-[120px]">
                {activeLeader.name || 'Estudiante'}
              </span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Strip */}
        <div className="md:hidden flex items-center justify-between py-2 border-t border-stone-800/80 overflow-x-auto gap-2 scrollbar-none text-xs">
          <button
            onClick={() => setCurrentTab('inicio')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap ${currentTab === 'inicio' ? 'bg-amber-600 text-stone-950 font-bold' : 'text-stone-300'}`}
          >
            Inicio
          </button>
          <button
            onClick={() => setCurrentTab('temas')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap ${currentTab.startsWith('subtopic') || currentTab === 'temas' ? 'bg-amber-600 text-stone-950 font-bold' : 'text-stone-300'}`}
          >
            Subtemas A-F
          </button>
          <button
            onClick={() => setCurrentTab('flashcards')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap ${currentTab === 'flashcards' ? 'bg-amber-600 text-stone-950 font-bold' : 'text-stone-300'}`}
          >
            Flashcards
          </button>
          <button
            onClick={() => setCurrentTab('retos')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap ${currentTab === 'retos' ? 'bg-amber-600 text-stone-950 font-bold' : 'text-stone-300'}`}
          >
            Retos Diarios
          </button>
          <button
            onClick={() => setCurrentTab('progreso')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap ${currentTab === 'progreso' ? 'bg-amber-600 text-stone-950 font-bold' : 'text-stone-300'}`}
          >
            Progreso
          </button>
          <button
            onClick={() => setCurrentTab('colaboradores')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap ${currentTab === 'colaboradores' ? 'bg-amber-600 text-stone-950 font-bold' : 'text-stone-300'}`}
          >
            Colaboradores
          </button>
        </div>

      </div>
    </header>
  );
};
