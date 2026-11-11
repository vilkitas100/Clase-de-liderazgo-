export type SubTopicId = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

export interface StakeholderImpact {
  stakeholder: 'Clientes' | 'Proveedores' | 'Acreedores' | 'Empleados' | 'Accionistas';
  impactDescription: string;
  riskIfFailed: string;
  strategicOutcome: string;
}

export interface TheoryApplied {
  name: string;
  author: string;
  discipline: 'Administración' | 'Psicología' | 'Neuroaprendizaje' | 'Ciencias de la Comunicación';
  description: string;
  applicationInCase: string;
}

export interface RealWorldCase {
  id: string;
  title: string;
  organization: string;
  location: string;
  year: string;
  summary: string;
  contextAndCrisis: string;
  communicationStrategy: string;
  globalImpact: string;
  theoriesApplied: TheoryApplied[];
  executiveTakeaways: string[];
}

export interface Flashcard {
  id: string;
  frontTitle: string;
  frontConcept: string;
  backExplanation: string;
  disciplineBadge: string;
  keyAuthor?: string;
}

export interface DailyChallengeOption {
  id: string;
  text: string;
  leadershipStyle: string;
  isOptimal: boolean;
  scorePoints: number;
  feedback: string;
}

export interface DailyChallenge {
  id: string;
  title: string;
  scenario: string;
  roleContext: string;
  options: DailyChallengeOption[];
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  theoreticalInsight: string;
}

export interface SubTopic {
  id: SubTopicId;
  code: string; // 'a', 'b', etc.
  title: string;
  subtitle: string;
  iconName: string;
  colorTheme: {
    badge: string;
    bgHeader: string;
    textAccent: string;
    border: string;
    gradient: string;
  };
  deepTheory: {
    introduction: string;
    businessPerspective: string;
    psychologyPerspective: string;
    neurolearningPerspective: string;
    communicationSciencePerspective: string;
    keyPrinciples: string[];
  };
  stakeholderImpacts: StakeholderImpact[];
  realWorldCase: RealWorldCase;
  flashcards: Flashcard[];
  dailyChallenge: DailyChallenge;
  questions: QuizQuestion[]; // Exactly 5 questions per subtopic
  expressSummary?: {
    keyTakeaway: string;
    stakeholderFocus: string;
    caseHighlight: string;
  };
}

export interface CollaboratorRecord {
  id: string;
  collaboratorName: string;
  subtopicId: SubTopicId;
  assignedByLeader: string;
  timestamp: string;
  roleContribution: string;
}

export interface StudentLeaderProfile {
  name: string;
  startedAt: string;
  completedSubtopics: SubTopicId[];
  quizScores: Record<SubTopicId, number>; // Max 5 per topic
  collaboratorsByTopic: Record<SubTopicId, string[]>;
  challengeScores: Record<string, number>;
}

export interface CertificateData {
  leaderName: string;
  collaborators: string[];
  completionDate: string;
  certificateId: string;
  totalScore: number;
  maxScore: number;
  gradePercentage: number;
  professorName: string;
  courseName: string;
  universityName: string;
}
