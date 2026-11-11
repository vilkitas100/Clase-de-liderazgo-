import React, { useState, useEffect } from 'react';
import { SubTopicId, StudentLeaderProfile } from './types/leadership';
import { SUBTOPICS_DATA } from './data/leadershipData';
import { Header } from './components/Header';
import { WelcomeBanner } from './components/WelcomeBanner';
import { TopicDetail } from './components/TopicDetail';
import { FlashcardsGym } from './components/FlashcardsGym';
import { DailyChallenges } from './components/DailyChallenges';
import { CollaboratorsSection } from './components/CollaboratorsSection';
import { ProgressTracker } from './components/ProgressTracker';
import { FeaturedParticipants } from './components/FeaturedParticipants';
import { LeaderRegistrationModal } from './components/LeaderRegistrationModal';
import { CollaboratorModal } from './components/CollaboratorModal';
import { CertificateModal } from './components/CertificateModal';
import { AICoachModal } from './components/AICoachModal';
import { ExpressModeView } from './components/ExpressModeView';
import { LeadershipPhilosophySection } from './components/LeadershipPhilosophySection';
import { Crown, BookOpen, Sparkles, Award, Users, BarChart3, Star, Zap } from 'lucide-react';

export default function App() {
  // Navigation tab
  const [currentTab, setCurrentTab] = useState<string>('inicio');
  const [selectedSubtopicId, setSelectedSubtopicId] = useState<SubTopicId>('a');

  // Student Leader State (Persisted in localStorage)
  const [leaderProfile, setLeaderProfile] = useState<StudentLeaderProfile>(() => {
    const saved = localStorage.getItem('uh_leadership_leader_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    return {
      name: '',
      startedAt: new Date().toISOString(),
      completedSubtopics: [],
      quizScores: {},
      collaboratorsByTopic: {},
      challengeScores: {},
    };
  });

  // Modals state
  const [isLeaderModalOpen, setIsLeaderModalOpen] = useState(false);
  
  const [collaboratorModalState, setCollaboratorModalState] = useState<{
    isOpen: boolean;
    subtopicId: SubTopicId;
    score: number;
  }>({
    isOpen: false,
    subtopicId: 'a',
    score: 0,
  });

  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [isCoachModalOpen, setIsCoachModalOpen] = useState(false);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('uh_leadership_leader_profile', JSON.stringify(leaderProfile));
  }, [leaderProfile]);

  // Handle saving Leader Name
  const handleSaveLeaderName = (name: string) => {
    setLeaderProfile((prev) => ({ ...prev, name }));
  };

  // Handle saving Collaborators for a specific subtopic stage
  const handleSaveCollaborators = (subtopicId: SubTopicId, list: string[]) => {
    setLeaderProfile((prev) => {
      const nextCompleted = Array.from(new Set([...prev.completedSubtopics, subtopicId]));
      const nextQuizScores = { ...prev.quizScores, [subtopicId]: collaboratorModalState.score };
      const nextCollaborators = { ...prev.collaboratorsByTopic, [subtopicId]: list };

      return {
        ...prev,
        completedSubtopics: nextCompleted,
        quizScores: nextQuizScores,
        collaboratorsByTopic: nextCollaborators,
      };
    });
  };

  // Handle scoring daily challenges
  const handleScoreChallenge = (challengeId: string, points: number) => {
    setLeaderProfile((prev) => ({
      ...prev,
      challengeScores: {
        ...prev.challengeScores,
        [challengeId]: points,
      },
    }));
  };

  const handleSelectSubtopic = (id: SubTopicId | 'express') => {
    if (id === 'express') {
      setCurrentTab('express');
    } else {
      setSelectedSubtopicId(id as SubTopicId);
      setCurrentTab(`subtopic-${id}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteExpressMode = (
    leaderName: string,
    collaborators: string[],
    scores: Record<SubTopicId, number>
  ) => {
    setLeaderProfile((prev) => {
      const nextCompleted: SubTopicId[] = ['a', 'b', 'c', 'd', 'e', 'f'];
      const nextCollaborators = { ...prev.collaboratorsByTopic };
      nextCompleted.forEach((id) => {
        nextCollaborators[id] = collaborators;
      });

      return {
        ...prev,
        name: leaderName || prev.name,
        completedSubtopics: nextCompleted,
        quizScores: scores,
        collaboratorsByTopic: nextCollaborators,
      };
    });
  };

  const handleOpenCollaboratorModal = (subtopicId: SubTopicId, score: number) => {
    setCollaboratorModalState({
      isOpen: true,
      subtopicId,
      score,
    });
  };

  const completedCount = leaderProfile.completedSubtopics.length;
  const isCertificateEligible = completedCount === 6;

  return (
    <div className="min-h-screen bg-amber-50/40 text-stone-900 dark:bg-stone-950 dark:text-stone-100 flex flex-col font-sans transition-colors">
      
      {/* Navigation Top Bar */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        activeLeader={leaderProfile}
        onChangeLeaderClick={() => setIsLeaderModalOpen(true)}
        onOpenCoach={() => setIsCoachModalOpen(true)}
        onOpenCertificate={() => setIsCertificateModalOpen(true)}
        isCertificateEligible={isCertificateEligible}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        
        {/* Main View Router */}
        {currentTab === 'inicio' && (
          <WelcomeBanner
            activeLeader={leaderProfile}
            onOpenLeaderModal={() => setIsLeaderModalOpen(true)}
            onSelectSubtopic={handleSelectSubtopic}
            onOpenCertificate={() => setIsCertificateModalOpen(true)}
            completedCount={completedCount}
          />
        )}

        {currentTab === 'express' && (
          <ExpressModeView
            onCompleteExpressMode={handleCompleteExpressMode}
            onOpenCertificate={() => setIsCertificateModalOpen(true)}
          />
        )}

        {currentTab === 'filosofia' && <LeadershipPhilosophySection />}

        {currentTab === 'temas' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
              <h1 className="text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Crown className="w-6 h-6 text-amber-600" />
                Módulos de Estudio (Subtemas A - F)
              </h1>
              <span className="text-xs text-stone-500">Prof. Liz Acuña Barboza · UH</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SUBTOPICS_DATA.map((t) => (
                <div
                  key={t.id}
                  onClick={() => handleSelectSubtopic(t.id)}
                  className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center uppercase tracking-wider ${t.colorTheme.badge}`}>
                      {t.code}
                    </span>
                    {leaderProfile.completedSubtopics.includes(t.id) && (
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                        Acreditado
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                    {t.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-2">
                    {t.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentTab.startsWith('subtopic-') && (
          <TopicDetail
            subtopicId={selectedSubtopicId}
            onNavigateSubtopic={handleSelectSubtopic}
            leaderName={leaderProfile.name}
            onOpenCollaboratorModal={handleOpenCollaboratorModal}
            collaboratorsList={leaderProfile.collaboratorsByTopic[selectedSubtopicId] || []}
            isTopicCompleted={leaderProfile.completedSubtopics.includes(selectedSubtopicId)}
            savedScore={leaderProfile.quizScores[selectedSubtopicId] || 0}
          />
        )}

        {currentTab === 'flashcards' && <FlashcardsGym />}

        {currentTab === 'retos' && (
          <DailyChallenges
            onScorePoints={handleScoreChallenge}
            savedChallengeScores={leaderProfile.challengeScores}
          />
        )}

        {currentTab === 'progreso' && (
          <ProgressTracker
            activeLeader={leaderProfile}
            onSelectSubtopic={handleSelectSubtopic}
            onOpenCertificate={() => setIsCertificateModalOpen(true)}
          />
        )}

        {currentTab === 'colaboradores' && (
          <CollaboratorsSection
            activeLeader={leaderProfile}
            onOpenCollaboratorModal={handleOpenCollaboratorModal}
          />
        )}

        {currentTab === 'destacados' && (
          <FeaturedParticipants activeLeader={leaderProfile} />
        )}

      </main>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-800 text-stone-400 py-8 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-bold text-amber-400 font-serif text-sm">
              Universidad Hispanoamericana · Cátedra de Liderazgo y Cambio Organizacional
            </p>
            <p className="text-stone-400">
              Tema 8: Taller de Liderazgo Transformacional · Catedrática: Prof. Liz Acuña Barboza
            </p>
          </div>

          <div className="flex items-center gap-4 text-stone-400 font-medium">
            <button onClick={() => setCurrentTab('colaboradores')} className="hover:text-amber-300 transition-colors">
              Homenaje Colaboradores
            </button>
            <span>·</span>
            <button onClick={() => setCurrentTab('destacados')} className="hover:text-amber-300 transition-colors">
              Participantes Destacados
            </button>
            <span>·</span>
            <button onClick={() => setIsCertificateModalOpen(true)} className="hover:text-amber-300 transition-colors">
              Certificación Oficial
            </button>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <LeaderRegistrationModal
        isOpen={isLeaderModalOpen}
        onClose={() => setIsLeaderModalOpen(false)}
        currentName={leaderProfile.name}
        onSaveName={handleSaveLeaderName}
      />

      <CollaboratorModal
        isOpen={collaboratorModalState.isOpen}
        onClose={() => setCollaboratorModalState((prev) => ({ ...prev, isOpen: false }))}
        subtopicId={collaboratorModalState.subtopicId}
        leaderName={leaderProfile.name}
        existingCollaborators={leaderProfile.collaboratorsByTopic[collaboratorModalState.subtopicId] || []}
        onSaveCollaborators={handleSaveCollaborators}
        quizScore={collaboratorModalState.score}
      />

      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
        activeLeader={leaderProfile}
      />

      <AICoachModal
        isOpen={isCoachModalOpen}
        onClose={() => setIsCoachModalOpen(false)}
        leaderName={leaderProfile.name}
        activeSubtopicId={selectedSubtopicId}
      />

    </div>
  );
}
