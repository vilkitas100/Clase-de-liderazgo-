import React from 'react';
import { Users, Heart, Sparkles, Globe, Award, CheckCircle2, Crown, BookOpen } from 'lucide-react';
import { StudentLeaderProfile } from '../types/leadership';
import { SUBTOPICS_DATA } from '../data/leadershipData';

interface CollaboratorsSectionProps {
  activeLeader: StudentLeaderProfile;
  onOpenCollaboratorModal: (subtopicId: any, score: number) => void;
}

export const CollaboratorsSection: React.FC<CollaboratorsSectionProps> = ({
  activeLeader,
  onOpenCollaboratorModal,
}) => {
  // Aggregate all unique collaborators across subtopics
  const allCollaboratorsWithTopics: { name: string; topicCode: string; topicTitle: string }[] = [];
  
  Object.entries(activeLeader.collaboratorsByTopic).forEach(([topicId, names]) => {
    const topic = SUBTOPICS_DATA.find((t) => t.id === topicId);
    names.forEach((name) => {
      if (name.trim()) {
        allCollaboratorsWithTopics.push({
          name: name.trim(),
          topicCode: topic ? topic.code.toUpperCase() : topicId.toUpperCase(),
          topicTitle: topic ? topic.title : '',
        });
      }
    });
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Hero Honor Banner */}
      <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-emerald-950 via-stone-900 to-teal-950 text-stone-100 border border-emerald-800/40 shadow-xl space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
            <Users className="w-4 h-4 text-emerald-400" />
            HOMENAJE Y RECONOCIMIENTO A LOS ESTUDIANTES COLABORADORES
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-emerald-100 leading-tight">
            Estudiantes Colaboradores: El Alma del Progreso Colectivo
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Profunda felicitación por su <strong className="text-emerald-300 font-semibold">excelente desempeño, dedicación incondicional y entrega rigurosa</strong> a lo largo de todo el proceso de aprendizaje en la cátedra de Liderazgo y Cambio Organizacional de la <span className="text-amber-300 font-medium">Prof. Liz Acuña Barboza</span> (Universidad Hispanoamericana).
          </p>
        </div>
      </div>

      {/* Deep Explanation of Human Collaboration and Global Impact */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-md space-y-5">
        
        <div className="flex items-center gap-3 border-b border-stone-100 dark:border-stone-800 pb-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
              La Trascendencia de las Personas que Colaboran en Proyectos
            </h2>
            <p className="text-xs text-stone-500">Perspectiva Antropológica, Psicológica y de Gestión Global</p>
          </div>
        </div>

        <div className="space-y-4 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
          <p>
            Ningún gran logro de la civilización humana —desde las maravillas arquitectónicas del mundo antiguo, la erradicación de enfermedades letales mediante la ciencia médica, la conquista del espacio exterior, hasta la construcción de las redes de infraestructura global— ha sido obra de un individuo aislado. Toda obra trascendente es el fruto del esfuerzo entrelazado de <strong>personas colaboradoras generosas</strong> que aportan su inteligencia, energía y sensibilidad día a día.
          </p>

          <p className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 text-stone-800 dark:text-stone-200 italic font-serif">
            "El destino de la humanidad no lo moldean los monólogos de los poderosos, sino los diálogos sinceros, el apoyo mutuo y el compromiso compartido de quienes colaboran hombro con hombro en proyectos con propósito."
          </p>

          <p>
            En el contexto de la administración moderna y el liderazgo transformacional, los colaboradores representan la fuerza colectiva que convierte las visiones abstractas en realidades tangibles. Su capacidad para coordinar esfuerzos, ofrecer retroalimentación honesta, sostener la empatía en momentos de crisis e innovar desde la base es lo que permite a las organizaciones sanar comunidades, generar riqueza distribuida y mejorar la calidad de vida en el planeta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          
          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-2">
            <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Impacto Social y Humanitario
            </span>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              La colaboración multiplica el alcance de las causas sociales, permitiendo que comunidades enteras superen adversidades y alcancen bienestar sostenible.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-2">
            <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <Heart className="w-4 h-4" />
              Sinergia y Resonancia Emocional
            </span>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              El trabajo colaborativo genera redes de seguridad psicológica donde el talento florece sin temor al juicio o la marginación.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-2">
            <span className="font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <Globe className="w-4 h-4" />
              Transformación del Planeta
            </span>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              Frente al cambio climático y los desafíos globales, la colaboración transdisciplinaria es la única vía para forjar un futuro habitable y justo.
            </p>
          </div>

        </div>

      </div>

      {/* Roster of Credited Collaborators */}
      <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-md space-y-4">
        
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
          <div>
            <h2 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" />
              Lista Oficial de Estudiantes Colaboradores Registrados
            </h2>
            <p className="text-xs text-stone-500">
              Registrados por el Estudiante Líder <strong className="text-amber-600">{activeLeader.name || 'Líder'}</strong> al concluir los cuestionarios por etapa.
            </p>
          </div>

          <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold font-mono">
            {allCollaboratorsWithTopics.length} Registros
          </span>
        </div>

        {allCollaboratorsWithTopics.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {allCollaboratorsWithTopics.map((collab, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-2 hover:border-emerald-500/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold uppercase">
                    Tema {collab.topicCode}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-emerald-500" />
                    <span>{collab.name}</span>
                  </h3>
                  <p className="text-[11px] text-stone-500 truncate">{collab.topicTitle}</p>
                </div>

                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1 pt-1 border-t border-stone-200 dark:border-stone-800">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Colaborador Reconocido Oficialmente</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center rounded-xl bg-stone-50 dark:bg-stone-950 border border-dashed border-stone-300 dark:border-stone-800 space-y-3">
            <Users className="w-10 h-10 text-stone-400 mx-auto" />
            <div className="space-y-1">
              <h3 className="text-base font-bold text-stone-800 dark:text-stone-200">Aún no hay colaboradores atribuidos</h3>
              <p className="text-xs text-stone-500 max-w-md mx-auto">
                Al responder las 5 preguntas de cada subtopic en la sección de Repaso, el sistema te solicitará ingresar los nombres de tus Estudiantes Colaboradores.
              </p>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
