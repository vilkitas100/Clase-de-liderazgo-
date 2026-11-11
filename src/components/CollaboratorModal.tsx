import React, { useState } from 'react';
import { Users, Plus, Trash2, Heart, Award, Check } from 'lucide-react';
import { SubTopicId } from '../types/leadership';
import { SUBTOPICS_DATA } from '../data/leadershipData';

interface CollaboratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  subtopicId: SubTopicId;
  leaderName: string;
  existingCollaborators: string[];
  onSaveCollaborators: (subtopicId: SubTopicId, list: string[]) => void;
  quizScore: number;
}

export const CollaboratorModal: React.FC<CollaboratorModalProps> = ({
  isOpen,
  onClose,
  subtopicId,
  leaderName,
  existingCollaborators,
  onSaveCollaborators,
  quizScore,
}) => {
  const [collaborators, setCollaborators] = useState<string[]>(
    existingCollaborators.length > 0 ? existingCollaborators : ['']
  );

  if (!isOpen) return null;

  const topic = SUBTOPICS_DATA.find((t) => t.id === subtopicId);

  const handleAddInput = () => {
    setCollaborators([...collaborators, '']);
  };

  const handleRemoveInput = (index: number) => {
    setCollaborators(collaborators.filter((_, i) => i !== index));
  };

  const handleChangeText = (index: number, val: string) => {
    const next = [...collaborators];
    next[index] = val;
    setCollaborators(next);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = collaborators.map((c) => c.trim()).filter((c) => c.length > 0);
    onSaveCollaborators(subtopicId, cleaned);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-stone-900 border border-emerald-500/40 rounded-2xl max-w-lg w-full p-6 text-stone-100 shadow-2xl relative space-y-5 max-h-[90vh] overflow-y-auto">
        
        {/* Header Ribbon */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-stone-950 font-bold shadow-lg shrink-0">
            <Award className="w-6 h-6 text-stone-950" />
          </div>
          <div>
            <span className="text-xs text-emerald-400 font-semibold tracking-wider uppercase block">
              Etapa Completada · Subtema {subtopicId.toUpperCase()}
            </span>
            <h2 className="text-xl font-bold font-serif text-emerald-200">
              Atribución de Estudiantes Colaboradores
            </h2>
          </div>
        </div>

        {/* Score & Leader acknowledgment */}
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 space-y-2">
          <div className="flex items-center justify-between text-xs text-stone-300">
            <span>Estudiante Líder Evaluado: <strong className="text-amber-300">{leaderName || 'Estudiante'}</strong></span>
            <span className="font-bold text-emerald-400">Puntaje: {quizScore} / 5</span>
          </div>
          <p className="text-xs text-stone-300">
            Tema Acreditado: <span className="font-semibold text-stone-100">{topic?.title}</span>
          </p>
        </div>

        {/* Inspiring Statement on Collaboration */}
        <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-2 text-xs text-stone-300">
          <p className="flex items-center gap-1.5 font-semibold text-amber-300">
            <Heart className="w-4 h-4 text-red-500 shrink-0" />
            La Fuerza del Aprendizaje Colectivo:
          </p>
          <p className="leading-relaxed text-stone-400">
            El liderazgo transformacional no se ejerce en aislamiento. Al finalizar cada etapa, acreditamos con gratitud el esfuerzo de las y los <strong className="text-emerald-300">Estudiantes Colaboradores</strong> que contribuyeron en las discusiones, lecturas y casos prácticos de este subtema.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Nombres de Estudiantes Colaboradores en este Tema:
            </label>

            {collaborators.map((name, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => handleChangeText(idx, e.target.value)}
                  placeholder={`Ej. Carlos Delgado Mora (Colaborador ${idx + 1})`}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-emerald-500 text-sm"
                />
                {collaborators.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveInput(idx)}
                    className="p-2 text-red-400 hover:text-red-300 transition-colors rounded-lg hover:bg-stone-800"
                    title="Eliminar colaborador"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddInput}
              className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5 pt-1"
            >
              <Plus className="w-4 h-4" />
              <span>+ Agregar otro Estudiante Colaborador</span>
            </button>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-stone-800">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-stone-950 font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              <span>Guardar Registros de Colaboración</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
