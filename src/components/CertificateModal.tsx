import React from 'react';
import { Award, Printer, X, ShieldCheck, GraduationCap, Crown, CheckCircle2 } from 'lucide-react';
import { StudentLeaderProfile } from '../types/leadership';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeLeader: StudentLeaderProfile;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  activeLeader,
}) => {
  if (!isOpen) return null;

  const leaderName = activeLeader.name || 'Estudiante Líder';
  const currentDate = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const totalQuizScore = Object.values(activeLeader.quizScores).reduce((a, b) => a + b, 0);
  const allCollaborators = Array.from(
    new Set(Object.values(activeLeader.collaboratorsByTopic).flat().filter(Boolean))
  );

  const certId = `UH-LID8-${Math.floor(100000 + Math.random() * 900000)}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      <div className="bg-stone-900 text-stone-100 rounded-2xl max-w-4xl w-full p-4 sm:p-8 relative shadow-2xl border border-amber-500/40 my-8">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold text-amber-200">Vista de Certificado Oficial</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm shadow flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PRINTABLE DIPLOMA CONTAINER */}
        <div className="bg-amber-50/95 text-stone-900 rounded-xl p-8 sm:p-14 border-8 border-double border-amber-800 shadow-2xl relative space-y-8 font-serif print:border-4 print:p-6 print:bg-white">
          
          {/* Subtle watermark background icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <Crown className="w-96 h-96 text-amber-900" />
          </div>

          {/* Header institution */}
          <div className="text-center space-y-2 relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-900 text-amber-100 font-bold mb-2 shadow-inner">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-widest text-amber-950 uppercase font-serif">
              UNIVERSIDAD HISPANOAMERICANA
            </h1>
            <p className="text-xs sm:text-sm text-amber-800 font-sans tracking-wider uppercase font-semibold">
              CÁTEDRA DE LIDERAZGO Y CAMBIO ORGANIZACIONAL
            </p>
          </div>

          {/* Certificate Title */}
          <div className="text-center space-y-3 relative z-10">
            <p className="text-xs sm:text-sm text-stone-600 uppercase tracking-widest font-sans">
              Otorga el presente
            </p>
            <h2 className="text-xl sm:text-3xl font-extrabold text-amber-900 uppercase tracking-wide border-b-2 border-amber-800/40 inline-block pb-2">
              CERTIFICADO OFICIAL DE APROBACIÓN
            </h2>
          </div>

          {/* Recipient Name */}
          <div className="text-center space-y-2 relative z-10">
            <p className="text-xs sm:text-sm text-stone-600 font-sans">A favor del Estudiante Líder:</p>
            <p className="text-2xl sm:text-4xl font-bold text-amber-950 underline decoration-amber-600 decoration-2 underline-offset-8">
              {leaderName}
            </p>
          </div>

          {/* Body Text */}
          <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10 text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
            <p>
              Por haber aprobado satisfactoriamente el <strong className="text-amber-950">Tema 8: Taller de Liderazgo Transformacional</strong>, demostrando dominio analítico profundo en la Capacidad de Escucha, Elementos de Comunicación Eficaz, Inteligencia Emocional, Habilidades Blandas, Poder Personal y Construcción de la Confianza en la gestión estratégica con Clientes, Proveedores, Acreedores, Empleados y Accionistas.
            </p>

            {allCollaborators.length > 0 && (
              <p className="text-[11px] text-stone-600 pt-2 italic">
                En estrecha colaboración acreditada con los Estudiantes Colaboradores:{' '}
                <strong className="text-stone-900">{allCollaborators.join(', ')}</strong>.
              </p>
            )}
          </div>

          {/* Signatures & Seal Section */}
          <div className="pt-8 border-t border-amber-900/30 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 text-center font-sans">
            
            {/* Signature 1: Professor */}
            <div className="space-y-1">
              <div className="w-48 h-10 border-b-2 border-amber-950 mx-auto flex items-end justify-center pb-1">
                <span className="font-serif italic text-sm text-amber-900 font-bold">Liz Acuña Barboza</span>
              </div>
              <p className="text-xs font-bold text-amber-950">Prof. Liz Acuña Barboza</p>
              <p className="text-[10px] text-stone-600">Docente Catedrática · Universidad Hispanoamericana</p>
            </div>

            {/* Official Seal Badge */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-900 text-amber-100 flex flex-col items-center justify-center p-2 text-[9px] font-bold shadow-lg border-2 border-amber-300 tracking-tighter shrink-0 uppercase">
              <ShieldCheck className="w-6 h-6 mb-0.5 text-amber-200" />
              <span>Sello Oficial</span>
              <span>UH 2026</span>
            </div>

            {/* Verification Metadata */}
            <div className="space-y-1 text-right sm:text-right text-center">
              <p className="text-xs font-bold text-amber-950">Fecha de Emisión:</p>
              <p className="text-xs text-stone-700">{currentDate}</p>
              <p className="text-[10px] text-stone-500 font-mono">ID: {certId}</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
