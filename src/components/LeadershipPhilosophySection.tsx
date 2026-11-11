import React, { useState } from 'react';
import { Crown, Sparkles, ShieldCheck, HeartHandshake, BookOpen, Compass, Award, UserCheck, Flame, Sun, GraduationCap } from 'lucide-react';

export const LeadershipPhilosophySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'caracteristicas' | 'caracter' | 'apariencia' | 'estilodevida' | 'filosofia'>('caracteristicas');

  return (
    <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 border border-amber-600/40 text-stone-100 shadow-2xl space-y-8 animate-fadeIn my-6">
      
      {/* Hero Header */}
      <div className="space-y-4 border-b border-stone-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold">
          <Crown className="w-4 h-4 text-amber-400" />
          MANIFIESTO DEL ESTUDIANTE DE ADMINISTRACIÓN
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-amber-100 leading-tight">
          El Perfil del Líder Excepcional: Carácter, Imagen y la Administración como Filosofía de Vida
        </h2>

        <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-4xl">
          Sintetizando las <strong className="text-amber-400 font-semibold">Habilidades Blandas</strong>, el <strong className="text-amber-300 font-semibold">Poder Personal</strong> y la <strong className="text-emerald-300 font-semibold">Construcción de la Confianza</strong>, esta guía define los pilares para transformar al estudiante universitario de Administración en un líder extraordinario, capaz de inspirar organizaciones y moldear el futuro de la sociedad.
        </p>
      </div>

      {/* Internal Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-stone-800 overflow-x-auto pb-2 scrollbar-none text-xs sm:text-sm font-semibold">
        <button
          onClick={() => setActiveTab('caracteristicas')}
          className={`px-4 py-2.5 rounded-t-xl transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'caracteristicas'
              ? 'bg-amber-500 text-stone-950 font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>1. Las 7 Características del Líder</span>
        </button>

        <button
          onClick={() => setActiveTab('caracter')}
          className={`px-4 py-2.5 rounded-t-xl transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'caracter'
              ? 'bg-amber-500 text-stone-950 font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>2. La Construcción del Carácter</span>
        </button>

        <button
          onClick={() => setActiveTab('apariencia')}
          className={`px-4 py-2.5 rounded-t-xl transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'apariencia'
              ? 'bg-amber-500 text-stone-950 font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>3. Apariencia y Presencia Directiva</span>
        </button>

        <button
          onClick={() => setActiveTab('estilodevida')}
          className={`px-4 py-2.5 rounded-t-xl transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'estilodevida'
              ? 'bg-amber-500 text-stone-950 font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
          }`}
        >
          <Sun className="w-4 h-4" />
          <span>4. El Estilo de Vida del Líder</span>
        </button>

        <button
          onClick={() => setActiveTab('filosofia')}
          className={`px-4 py-2.5 rounded-t-xl transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'filosofia'
              ? 'bg-amber-500 text-stone-950 font-bold shadow'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>5. La Administración como Filosofía</span>
        </button>
      </div>

      {/* TAB 1: LAS 7 CARACTERÍSTICAS DEL LÍDER EXCEPCIONAL */}
      {activeTab === 'caracteristicas' && (
        <div className="space-y-6 animate-fadeIn">
          
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm">
            Un estudiante de Administración de Empresas no se convierte en líder al graduarse; empieza a serlo desde las aulas cuando integra las Habilidades Blandas, el Poder Personal y la Credibilidad en su actuar diario.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
              <span className="font-bold text-amber-400 text-sm font-serif block">1. Escucha Activa Nivel 3 y Empatía Radicada (Habilidades Blandas):</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Supera el egocentrismo. No escucha para responder, sino para comprender las emociones, supuestos e intenciones no expresadas de su equipo y de los stakeholders.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
              <span className="font-bold text-amber-400 text-sm font-serif block">2. Comunicación Asertiva y Métodos de Contención (BIFF y Gray Rock):</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Articula ideas con brevedad, firmeza y cortesía. Sabe blindarse ante personalidades manipuladoras sin perder la ecuanimidad ni proyectar agresividad.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
              <span className="font-bold text-amber-400 text-sm font-serif block">3. Autorregulación e Inteligencia Emocional (Inhibición Amigdalina):</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Domina sus impulsos. Entre la provocación y la respuesta, utiliza la pausa reflexiva para elegir soluciones racionales en lugar de reacciones viscerales.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
              <span className="font-bold text-amber-400 text-sm font-serif block">4. Negociación Principista (Método Harvard):</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Separa a las personas del problema. Busca constantemente soluciones de beneficio mutuo ("Ganar-Ganar") basándose en intereses de largo plazo.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
              <span className="font-bold text-amber-400 text-sm font-serif block">5. Coherencia Moral e Integridad de Propósito (Poder Personal):</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Ejerce el Poder Referente y Experto. Su influencia emana de su congruencia: cumple sus promesas y sus valores valen más que el atajo económico efímero.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
              <span className="font-bold text-amber-400 text-sm font-serif block">6. Generación del Dividendo de Confianza (Ecuación de Credibilidad):</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Minimiza el autointerés percibido (*Self-Orientation*). Transmite transparencia incondicional con acreedores, clientes y colaboradores.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-2 md:col-span-2">
              <span className="font-bold text-amber-400 text-sm font-serif block">7. Visión Holística de los 5 Stakeholders:</span>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Entiende que la empresa es un ecosistema interdependiente. Equilibra las necesidades de Clientes, Proveedores, Acreedores, Empleados y Accionistas para asegurar la sostenibilidad social y financiera.
              </p>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: LA CONSTRUCCIÓN DEL CARÁCTER */}
      {activeTab === 'caracter' && (
        <div className="space-y-6 animate-fadeIn">
          
          <div className="p-6 rounded-xl bg-stone-950 border border-amber-900/50 space-y-4 text-xs sm:text-sm">
            <h3 className="text-lg font-bold font-serif text-amber-300 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              El Carácter: El Cimiento Inviolable del Líder
            </h3>

            <p className="text-stone-300 leading-relaxed">
              El talento abre puertas, la inteligencia técnica consigue empleo, pero solo el <strong>Carácter</strong> sostiene al líder en el vértice directivo. El carácter no es el genio impulsivo ni la terquedad; es la capacidad de actuar con virtud cuando nadie nos está observando y cuando la tentación del dinero o el ego es más fuerte.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              <div className="p-4 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
                <span className="font-bold text-amber-400 block text-xs uppercase tracking-wider">Fortaleza y Templanza</span>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Resistir las presiones de corto plazo y mantener la serenidad cuando los mercados o las crisis amenazan con desestabilizar la compañía.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
                <span className="font-bold text-amber-400 block text-xs uppercase tracking-wider">Integridad Radical (Ethos)</span>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Cero brecha entre las palabras pronunciadas y las conductas ejecutadas. Honrar los contratos morales antes que los beneficios monetarios.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
                <span className="font-bold text-amber-400 block text-xs uppercase tracking-wider">Humildad Intelectual</span>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Reconocer los límites del propio saber, aprender constantemente de los colaboradores y estar dispuesto a corregir el rumbo sin orgullo falso.
                </p>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* TAB 3: APARIENCIA Y PRESENCIA DIRECTIVA */}
      {activeTab === 'apariencia' && (
        <div className="space-y-6 animate-fadeIn">
          
          <div className="p-6 rounded-xl bg-stone-950 border border-amber-900/50 space-y-4 text-xs sm:text-sm">
            <h3 className="text-lg font-bold font-serif text-amber-300 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-amber-400" />
              La Apariencia y Presencia Directiva: La Estética de la Dignidad
            </h3>

            <p className="text-stone-300 leading-relaxed">
              En la comunicación humana, el cuerpo habla antes que las palabras. La apariencia del administrador no es superficialidad o vanidad; es la manifestación externa del respeto que siente por su profesión, su equipo y los stakeholders.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
                <span className="font-bold text-amber-400 block text-xs uppercase tracking-wider">Lenguaje Corporal y Postura</span>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Espalda erguida, contacto visual directo y sincero, gestos abiertos y serenidad postural. Transmite firmeza sin arrogancia y apertura sin debilidad.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
                <span className="font-bold text-amber-400 block text-xs uppercase tracking-wider">Aseo Profesional y Pulcritud</span>
                <p className="text-stone-400 text-xs leading-relaxed">
                  El esmero en la vestimenta y la higiene personal proyecta autodisciplina y orden mental interno. El vestuario debe proyectar profesionalismo adaptado al contexto.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-900 border border-stone-800 space-y-2 md:col-span-2">
                <span className="font-bold text-amber-400 block text-xs uppercase tracking-wider">Congruencia No Verbal (Paralingüística)</span>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Tono de voz pausado, seguro y cálido. Articulación clara sin muletillas ni timidez. La voz del líder calma la ansiedad de la organización en momentos de incertidumbre.
                </p>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* TAB 4: EL ESTILO DE VIDA DEL LÍDER */}
      {activeTab === 'estilodevida' && (
        <div className="space-y-6 animate-fadeIn">
          
          <div className="p-6 rounded-xl bg-stone-950 border border-amber-900/50 space-y-4 text-xs sm:text-sm">
            <h3 className="text-lg font-bold font-serif text-amber-300 flex items-center gap-2">
              <Sun className="w-5 h-5 text-amber-400" />
              El Estilo de Vida: Disciplina, Salud y Sabiduría Diaria
            </h3>

            <p className="text-stone-300 leading-relaxed">
              No se puede administrar con excelencia una empresa multinacional si el propio líder no sabe administrar su cuerpo, su mente y su tiempo. El estilo de vida del estudiante de Administración extraordinario es una obra de arte diario.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              
              <div className="p-4 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
                <span className="font-bold text-amber-400 block text-xs uppercase tracking-wider">1. Estudio y Lectura Continua</span>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Leer diariamente sobre economía, psicología, historia y tecnología. Mantener la curiosidad intelectual viva siempre.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
                <span className="font-bold text-amber-400 block text-xs uppercase tracking-wider">2. Salud Física y Energía</span>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Ejercicio diario, alimentación limpia y descanso de calidad. La agilidad cognitiva exige un cerebro oxigenado y sano.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
                <span className="font-bold text-amber-400 block text-xs uppercase tracking-wider">3. Higiene Mental y Pausa</span>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Espacios de meditación o reflexión en silencio para limpiar el estrés digital y mantener el foco estratégico.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-900 border border-stone-800 space-y-2">
                <span className="font-bold text-amber-400 block text-xs uppercase tracking-wider">4. Red de Relaciones Étias</span>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Rodearse de mentores, colegas y amigos que impulsen el crecimiento moral e intelectual reciproco.
                </p>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* TAB 5: LA ADMINISTRACIÓN COMO FILOSOFÍA DE VIDA */}
      {activeTab === 'filosofia' && (
        <div className="space-y-6 animate-fadeIn">
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-amber-950 via-stone-950 to-amber-900 border-2 border-amber-500/50 space-y-6 text-stone-100 relative overflow-hidden shadow-2xl">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                LA MÁXIMA REFLEXIÓN EXISTENCIAL Y ACADÉMICA
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-serif text-amber-100 leading-tight">
                La Administración de Empresas como Filosofía de Vida
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-base text-stone-200 leading-relaxed font-serif">
              <p className="text-stone-300">
                Recordemos siempre esto: <strong className="text-amber-300 font-sans">La Administración de Empresas no es solo un título académico ni una técnica para acumular ganancias en un balance contable; es una profunda Filosofía de Vida</strong>.
              </p>

              <p className="p-5 rounded-xl bg-stone-950/80 border border-amber-500/30 text-amber-200 italic font-serif text-sm sm:text-lg">
                "Administrar es el arte sagrado de traer orden al caos, de custodiar con ética los recursos del planeta, de coordinar la inteligencia colectiva para resolver sufrimientos humanos y de construir instituciones que perduren en el tiempo sirviendo al bien común."
              </p>

              <p className="text-stone-300">
                El estudiante que abraza la Administración como filosofía de vida aplica el orden, la eficiencia, la empatía y la responsabilidad no solo en la oficina, sino en su hogar, en su mente, en sus finanzas personales y en sus comunidades. Entiende que cada decisión empresarial afecta familias, destinos y ecosistemas.
              </p>

              <p className="text-stone-200 font-sans font-semibold text-xs sm:text-sm">
                Sé un líder excepcional. Construye tu carácter con acero, viste tu presencia con dignidad, cultiva tu vida con sabiduría y recuerda que liderar empresas es liderar la evolución de la humanidad.
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
