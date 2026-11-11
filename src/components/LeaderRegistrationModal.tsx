import React, { useState } from 'react';
import { User, Crown, Check, X } from 'lucide-react';

interface LeaderRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentName: string;
  onSaveName: (name: string) => void;
}

export const LeaderRegistrationModal: React.FC<LeaderRegistrationModalProps> = ({
  isOpen,
  onClose,
  currentName,
  onSaveName,
}) => {
  const [nameInput, setNameInput] = useState(currentName || '');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onSaveName(nameInput.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-stone-900 border border-amber-600/40 rounded-2xl max-w-md w-full p-6 text-stone-100 shadow-2xl relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-200 transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-stone-950 font-bold shadow">
            <Crown className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-serif text-amber-200">Registro de Estudiante Líder</h2>
            <p className="text-xs text-stone-400">Universidad Hispanoamericana · Prof. Liz Acuña B.</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-stone-300 mb-6 leading-relaxed">
          Ingresa tu nombre completo. Como <strong className="text-amber-300">Estudiante Líder</strong>, tu nombre figurará en tu expediente de progreso, en el Certificado Oficial de Finalización y encabezará tus etapas de estudio en el Taller de Liderazgo Transformacional.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Nombre Completo del Líder:
            </label>
            <div className="relative">
              <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Ej. Sofía Rodríguez Solano"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm"
                required
                autoFocus
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-400 hover:text-stone-200 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>Guardar Perfil de Líder</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
