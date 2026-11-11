import { SubTopic, SubTopicId } from '../types/leadership';

export const SUBTOPICS_DATA: SubTopic[] = [
  {
    id: 'a',
    code: 'a',
    title: 'La Capacidad de Escucha',
    subtitle: 'El arte neurocognitivo y estratégico de la recepción activa en la alta dirección',
    iconName: 'Ear',
    colorTheme: {
      badge: 'bg-amber-100 text-amber-900 border-amber-300',
      bgHeader: 'from-amber-900 via-stone-800 to-amber-950',
      textAccent: 'text-amber-600',
      border: 'border-amber-200',
      gradient: 'from-amber-500 to-amber-700',
    },
    deepTheory: {
      introduction: `La capacidad de escucha trasciende el mero acto auditivo biológico; representa la infraestructura primordial de la comunicación humana y el pilar sobre el cual se erigen las organizaciones complejas. Escuchar no es un proceso pasivo, sino un acto deliberado de presencia, sintonía neurológica y apertura epistemológica. Sin escucha reflexiva, la comunicación colapsa en un monólogo colectivo donde los mensajes se distorsionan y la dirección ejecutiva opera a ciegas.`,
      businessPerspective: `En la administración moderna, la escucha activa funciona como el sistema de inteligencia temprana de la empresa. Permite a los directivos detectar micro-variaciones en el mercado, insatisfacciones latentes de los empleados, cuellos de botella operativos y desalineamientos en la cadena de valor antes de que se conviertan en crisis financieras. La escucha transformacional convierte la retroalimentación distribuida en ventajas competitivas sostenibles.`,
      psychologyPerspective: `Desde la psicología humanista de Carl Rogers, la escucha empática requiere la 'aceptación positiva incondicional' y el marco de referencia interno del interlocutor. Al escuchar sin juzgar, el líder valida la dignidad del ser humano, disuelve los sesgos defensivos y cultiva la seguridad psicológica (Amy Edmondson), permitiendo que la innovación y la verdad organizacional emerjan sin temor a represalias.`,
      neurolearningPerspective: `Neurobiológicamente, la escucha atenta modula la actividad de la amígdala (reeduciendo la respuesta de amenaza) e incrementa la activación de las neuronas espejo y la red de teorización de la mente en la corteza prefrontal dorsomedial. Cuando un líder escucha verdaderamente, sincroniza los ritmos corticales con su interlocutor (acoplamiento neural), facilitando la retención de memoria, la neuroplasticidad y la resolución compleja de problemas.`,
      communicationSciencePerspective: `Según Paul Watzlawick en sus Axiomas de la Comunicación, 'es imposible no comunicar'. El silencio al escuchar comunica respeto, interés y autoridad moral. Aplicando el modelo de Shannon y Weaver, la escucha consciente elimina el 'ruido' (sesgos cognitivos, distracciones digitales, preconcepciones) aumentando la fidelidad del mensaje transmitido entre emisor y receptor.`,
      keyPrinciples: [
        'Escucha Atenta de Nivel 3: Transcender las palabras para percibir emociones, supuestos y necesidades no expresadas.',
        'Suspensión del Juicio Inmediato: Silenciar la voz interna que prepara la réplica para comprender verdaderamente.',
        'Resonancia Neuroemocional: Reflejar con precisión el estado emocional del interlocutor para afianzar el rapport.',
        'Validación del Interlocutor: Reconocer la experiencia subjetiva del otro como legítima e importante.',
      ]
    },
    stakeholderImpacts: [
      {
        stakeholder: 'Clientes',
        impactDescription: 'Identificación profunda de dolores no articulados y expectativas cambiantes de consumo.',
        riskIfFailed: 'Pérdida de relevancia en el mercado, altas tasas de rotación (churn) y deterioro reputacional.',
        strategicOutcome: 'Co-creación de productos innovadores con alta lealtad de marca.'
      },
      {
        stakeholder: 'Proveedores',
        impactDescription: 'Comprensión de restricciones logísticas, capacidades técnicas e innovaciones en insumos.',
        riskIfFailed: 'Ruptura de la cadena de suministro, litigios contractuales y sobrecostos por inflexibilidad.',
        strategicOutcome: 'Alianzas estratégicas de largo plazo y optimización sinérgica de costos.'
      },
      {
        stakeholder: 'Acreedores',
        impactDescription: 'Escucha transparente de inquietudes financieras, covenants e indicadores de riesgo.',
        riskIfFailed: 'Restricción del crédito, incremento en tasas de interés punitivas y pérdida de liquidez.',
        strategicOutcome: 'Condiciones de financiamiento preferenciales y respaldo en períodos de volatilidad.'
      },
      {
        stakeholder: 'Empleados',
        impactDescription: 'Atención genuina a sugerencias operativas, salud mental y desarrollo profesional.',
        riskIfFailed: 'Fuga de talento clave, ausentismo laboral, huelgas silenciosas y clima tóxico.',
        strategicOutcome: 'Altos niveles de compromiso (engagement), innovación ascendente y bajo turnover.'
      },
      {
        stakeholder: 'Accionistas',
        impactDescription: 'Recepción activa de sus visiones de gobernanza, retorno esperado y horizontes de inversión.',
        riskIfFailed: 'Activismo accionarial hostil, desconfianza en la junta directiva y desvalorización de la acción.',
        strategicOutcome: 'Alineación estratégica sólida y respaldo al capital de trabajo para proyectos de largo plazo.'
      }
    ],
    realWorldCase: {
      id: 'case-a',
      title: 'La Revolución de la Escucha en Microsoft: El Giro Cultural de Satya Nadella',
      organization: 'Microsoft Corporation',
      location: 'Redmond, Washington, EE. UU. (Impacto Global)',
      year: '2014 - Presente',
      summary: 'Al asumir como CEO en 2014, Satya Nadella encontró una gigante tecnológica estancada en luchas internas de ego y feudos corporativos. Instituyó la cultura del "Sabelotodo" (Know-it-all) al "Aprendetodo" (Learn-it-all) basada primordialmente en la Escucha Empática.',
      contextAndCrisis: 'Microsoft perdía terreno aceleradamente frente a Apple y Google. La estructura organizativa fomentaba que los departamentos compitieran encarnizadamente entre sí en lugar de escuchar al cliente. El ambiente de trabajo estaba marcado por el cinismo y la paranoia.',
      communicationStrategy: 'Nadella inició su mandato realizando una gira global de escucha ("Listening Tour"), dedicando meses a escuchar en silencio a ingenieros de primera línea, clientes descontentos, competidores e ingenieros junior. En lugar de emitir directivas jerárquicas, realizó preguntas abiertas, modeló la vulnerabilidad e impulsó la empatía como el motor de la innovación en la computación en la nube (Azure) y la IA.',
      globalImpact: 'La valoración bursátil de Microsoft pasó de ~$300 mil millones en 2014 a más de $3 billones de dólares en 2024, reconvirtiendo a la empresa en el líder mundial de IA y la nube, reconocida como una de las mejores empresas para trabajar en el planeta.',
      theoriesApplied: [
        {
          name: 'Escucha Empática y Marco Interno',
          author: 'Carl Rogers',
          discipline: 'Psicología',
          description: 'Acceder al universo perceptual del interlocutor sin imponer esquemas previos.',
          applicationInCase: 'Nadella escuchó las frustraciones de los desarrolladores externos y abrió Microsoft a sistemas de código abierto (Linux/GitHub).'
        },
        {
          name: 'Seguridad Psicológica',
          author: 'Amy Edmondson',
          discipline: 'Administración',
          description: 'Clima donde las personas se sienten seguras para hablar, admitir errores y hacer preguntas.',
          applicationInCase: 'Transformó las reuniones de revisión ejecutiva de interrogatorios punitivos a espacios de aprendizaje colaborativo.'
        }
      ],
      executiveTakeaways: [
        'La escucha no es debilidad directiva; es la mayor fuente de inteligencia estratégica.',
        'Cambiar la cultura de "Sabelotodo" a "Aprendetodo" multiplica la velocidad de innovación.',
        'Los líderes transformacionales escuchan primero a los colaboradores más cercanos al problema real.'
      ]
    },
    flashcards: [
      {
        id: 'fc-a1',
        frontTitle: 'Escucha Nivel 1 vs. Nivel 3',
        frontConcept: '¿Cuál es la diferencia fundamental entre oír datos y sintonizar en profundidad?',
        backExplanation: 'El Nivel 1 es interno (escucho pensando en mi respuesta). El Nivel 3 es global/intuitivo (percibo palabras, tono, lenguaje corporal, contexto y emoción profunda del hablante).',
        disciplineBadge: 'Psicología',
        keyAuthor: 'Co-Active Coaching / C. Rogers'
      },
      {
        id: 'fc-a2',
        frontConcept: 'Acoplamiento Neural al Escuchar',
        frontTitle: 'Neurociencia de la Escucha',
        backExplanation: 'Cuando un líder escucha con alta atención, las ondas cerebrales del receptor se sincronizan con las del emisor (neural coupling), incrementando drásticamente la comprensión y la neuroplasticidad.',
        disciplineBadge: 'Neuroaprendizaje',
        keyAuthor: 'Dr. Uri Hasson (Princeton)'
      },
      {
        id: 'fc-a3',
        frontTitle: 'Ruido en la Comunicación',
        frontConcept: '¿Qué constituye el "Ruido" en el modelo de Shannon y Weaver?',
        backExplanation: 'El ruido comprende cualquier interferencia física, cognitiva o emocional (sesgos, multitarea, juzgar de antemano) que altera la fidelidad del mensaje original.',
        disciplineBadge: 'Ciencias de la Comunicación',
        keyAuthor: 'Shannon & Weaver'
      },
      {
        id: 'fc-a4',
        frontTitle: 'Escucha Activa en Stakeholders',
        frontConcept: '¿Cómo impacta la escucha directiva la relación con los Acreedores?',
        backExplanation: 'Escuchar proactivamente las preocupaciones de riesgo de los acreedores fortalece la transparencia financiera, reduce la prima de riesgo y asegura solvencia en contingencias.',
        disciplineBadge: 'Administración',
        keyAuthor: 'Edward Freeman'
      }
    ],
    dailyChallenge: {
      id: 'dc-a',
      title: 'Reto Diario: La Reunión de Crisis del Proveedor Vital',
      scenario: 'Un proveedor crítico de microchips te informa con voz temblorosa que habrá un retraso de 4 semanas en la entrega para tu producto estrella. Tu equipo de producción exige demandarlo de inmediato por incumplimiento de contrato.',
      roleContext: 'Eres el Director de Operaciones Globales de una multinacional tecnológica.',
      options: [
        {
          id: 'opt-a1',
          text: 'Interrumpir al proveedor de inmediato, recordarle las multas del contrato y exigirle que resuelva el problema sin excusas.',
          leadershipStyle: 'Autocrático Reactivo',
          isOptimal: false,
          scorePoints: 10,
          feedback: 'Respuesta basada en la amenaza que cierra el canal de comunicación. El proveedor ocultará problemas reales y buscará rescindir la relación.'
        },
        {
          id: 'opt-a2',
          text: 'Pausar la reunión, pedir al proveedor que explique sin temor las causas raíz, validar sus dificultades logísticas y co-diseñar un plan de mitigación en conjunto.',
          leadershipStyle: 'Transformacional Empático',
          isOptimal: true,
          scorePoints: 100,
          feedback: '¡Excelente! Aplicaste Escucha Nivel 3 y Seguridad Psicológica. Al comprender la causa profunda (p. ej., escasez mundial de materia prima), lograste priorizar lotes y proteger la alianza.'
        },
        {
          id: 'opt-a3',
          text: 'Delegar la conversación totalmente en el departamento legal y esperar el informe por correo electrónico.',
          leadershipStyle: 'Laissez-faire Distante',
          isOptimal: false,
          scorePoints: 30,
          feedback: 'La evitación priva al líder de información estratégica directa y destruye la confianza entre las partes.'
        }
      ]
    },
    questions: [
      {
        id: 'q-a1',
        questionText: '¿Cuál es el beneficio neurobiológico directo cuando un líder practica la escucha activa empática con su equipo?',
        options: [
          { id: 'q-a1-o1', text: 'Incrementa los niveles de cortisol y activa la amígdala para mantener a todos alerta.', isCorrect: false, explanation: 'El cortisol elevado produce estrés crónico e inhibe el pensamiento creativo.' },
          { id: 'q-a1-o2', text: 'Reduce la activación de la amígdala (reacción de amenaza) y promueve el acoplamiento neural en la corteza prefrontal.', isCorrect: true, explanation: 'La escucha empática calma la respuesta de sobresalto fisiológico y sincroniza los patrones cerebrales para un razonamiento superior.' },
          { id: 'q-a1-o3', text: 'Bloquea la secreción de oxitocina reduciendo el apego emocional en la toma de decisiones.', isCorrect: false, explanation: 'Al contrario, estimula la oxitocina, fortaleciendo la confianza interpersonal.' },
          { id: 'q-a1-o4', text: 'Desactiva por completo las neuronas espejo del receptor.', isCorrect: false, explanation: 'Las neuronas espejo se activan con mayor intensidad al percibir sintonía interpersonal.' }
        ],
        theoreticalInsight: 'Fundamentado en neuropsicología organizacional: la seguridad emocional desactiva el sesgo defensivo amigdalar.'
      },
      {
        id: 'q-a2',
        questionText: 'Según el modelo de comunicación humanista de Carl Rogers, ¿cuál es la condición indispensable para una escucha verdaderamente receptiva?',
        options: [
          { id: 'q-a2-o1', text: 'Aceptación positiva incondicional y suspensión temporal de los esquemas de juicio.', isCorrect: true, explanation: 'Carl Rogers demostró que solo al suspender el juicio y valorar incondicionalmente al otro se logra la apertura de comunicación profunda.' },
          { id: 'q-a2-o2', text: 'Interrumpir frecuentemente para corregir errores de sintaxis o lógica.', isCorrect: false, explanation: 'Interrumpir rompe el flujo del interlocutor y demuestra falta de respeto.' },
          { id: 'q-a2-o3', text: 'Mantener una postura rígida sin manifestar emociones verbales o no verbales.', isCorrect: false, explanation: 'El aislamiento afectivo impide el rapport auténtico.' },
          { id: 'q-a2-o4', text: 'Asegurar que el hablante acepte la opinión del líder al finalizar su discurso.', isCorrect: false, explanation: 'Eso sería persuasión coercitiva, no escucha.' }
        ],
        theoreticalInsight: 'Psicología Humanista: el marco de referencia interno del otro es la llave para comprender su comportamiento.'
      },
      {
        id: 'q-a3',
        questionText: 'Al analizar la relación con los EMPLEADOS, ¿qué riesgo estratégico enfrenta la empresa si la directiva carece de capacidad de escucha?',
        options: [
          { id: 'q-a3-o1', text: 'Aumento inmediato en el pago de dividendos accionarios.', isCorrect: false, explanation: 'No existe relación causal positiva entre falta de escucha e incremento de dividendos.' },
          { id: 'q-a3-o2', text: 'Ocultamiento de fallas operativas, fuga de talento innovador, desmotivación y clima de desconfianza.', isCorrect: true, explanation: 'Si los empleados sienten que sus voces no importan o que serán castigados, callan los riesgos críticos hasta que explotan.' },
          { id: 'q-a3-o3', text: 'Incremento automático de la seguridad psicológica en las líneas de ensamblaje.', isCorrect: false, explanation: 'La falta de escucha destruye la seguridad psicológica.' },
          { id: 'q-a3-o4', text: 'Reducción de los costos directos de capacitación.', isCorrect: false, explanation: 'La rotación de personal (turnover) dispara masivamente los costos de reclutamiento y entrenamiento.' }
        ],
        theoreticalInsight: 'Teoría de la Administración Estratégica de Recursos Humanos: la voz del empleado es el activo de mejora continua.'
      },
      {
        id: 'q-a4',
        questionText: 'En los axiomas comunicacionales de Watzlawick, ¿qué significa que "Es imposible no comunicar"?',
        options: [
          { id: 'q-a4-o1', text: 'Que todas las personas deben hablar constantemente sin guardar silencio.', isCorrect: false, explanation: 'No se refiere al acto de hablar, sino a la emisión inevitable de conducta con valor de mensaje.' },
          { id: 'q-a4-o2', text: 'Que cualquier conducta, incluido el silencio, la mirada o la omisión de respuesta al escuchar, transmite un mensaje interpretable.', isCorrect: true, explanation: 'Incluso ignorar o guardar silencio en una reunión directiva comunica una posición de indiferencia, rechazo o poder.' },
          { id: 'q-a4-o3', text: 'Que los canales digitales sustituyen totalmente la voz humana.', isCorrect: false, explanation: 'Los canales digitales son soportes, no el axioma existencial.' },
          { id: 'q-a4-o4', text: 'Que la comunicación solo ocurre cuando hay un contrato escrito de por medio.', isCorrect: false, explanation: 'El nivel analógico/no verbal opera continuamente.' }
        ],
        theoreticalInsight: 'Pragmática de la Comunicación Humana (Escuela de Palo Alto).'
      },
      {
        id: 'q-a5',
        questionText: 'En el caso global de Satya Nadella en Microsoft, ¿qué cambio de paradigma comunicativo fue el motor del rescate estratégico?',
        options: [
          { id: 'q-a5-o1', text: 'Imponer una cultura autocrática basada en la competencia interna feroz.', isCorrect: false, explanation: 'Ese era el modelo antiguo de Ballmer que estaba hundiendo a la empresa.' },
          { id: 'q-a5-o2', text: 'Transicionar del "Sabelotodo" (ego y monólogo) al "Aprendetodo" (escucha empática y curiosidad intelectual).', isCorrect: true, explanation: 'La mentalidad de crecimiento basada en escuchar al mercado y a los colaboradores revivió la capacidad de innovación.' },
          { id: 'q-a5-o3', text: 'Eliminar las reuniones cara a cara y reemplazarlas por bots automáticos.', isCorrect: false, explanation: 'Nadella promovió la conexión empática cara a cara.' },
          { id: 'q-a5-o4', text: 'Vender la división de sistemas operativos para enfocarse en bienes raíces.', isCorrect: false, explanation: 'Inexacto; la transformación se basó en software, nube (Azure) e IA.' }
        ],
        theoreticalInsight: 'Liderazgo Transformacional y Mentalidad de Crecimiento (Carol Dweck aplicado al management).'
      }
    ]
  },
  {
    id: 'b',
    code: 'b',
    title: 'Elementos para ser Comunicador Eficaz',
    subtitle: 'La arquitectura del mensaje transformacional: claridad, asertividad y consistencia no verbal',
    iconName: 'MessageSquare',
    colorTheme: {
      badge: 'bg-orange-100 text-orange-900 border-orange-300',
      bgHeader: 'from-orange-900 via-stone-800 to-amber-950',
      textAccent: 'text-orange-600',
      border: 'border-orange-200',
      gradient: 'from-orange-500 to-red-600',
    },
    deepTheory: {
      introduction: `Ser un comunicador eficaz en el liderazgo transformacional no se limita a hablar con elocuencia o pronunciar discursos motivacionales. Requiere dominar la sintaxis del pensamiento estratégico, articular la visión organizativa con absoluta claridad, sincronizar los canales verbales y no verbales, y adaptar el código según la diversidad cultural y cognitiva del auditorio. Un mensaje confuso en la cumbre directiva se traduce en parálisis u operaciones caóticas en la base.`,
      businessPerspective: `En el ámbito empresarial, la eficacia comunicativa determina la velocidad de ejecución de la estrategia. Los elementos clave abarcan: brevedad con sustancia, encuadre estratégico (framing), retroalimentación continua (loop de retorno) y alineación multicultural. La mala comunicación es costosa: estudios globales estiman que las fallas de comunicación cuestan a las corporaciones billones de dólares anuales en proyectos fallidos y re-trabajo.`,
      psychologyPerspective: `La comunicación eficaz se asienta sobre la asertividad: la habilidad de expresar pensamientos, convicciones y límites firmes con profundo respeto por los derechos del otro (evitando tanto la sumisión pasiva como la agresión autoritaria). Adicionalmente, la congruencia gestual y vocal genera tranquilidad cognitiva y disminuye la disonancia afectiva en los receptores.`,
      neurolearningPerspective: `Desde la ciencia del procesamiento de información cerebral, la memoria de trabajo humana tiene una capacidad limitada (carga cognitiva). Un comunicador eficaz utiliza la estructura de 'cuentacuentos estratégico' (storytelling), metáforas visuales y la regla del 3 para facilitar el empaquetado del mensaje en la memoria a largo plazo (consolidación hipocampal) y desencadenar dopamina y oxitocina en la audiencia.`,
      communicationSciencePerspective: `Modelos comunicacionales modernos (como la Pragmática de Watzlawick) subrayan la doble dimensión de todo mensaje: el nivel de contenido (los datos e instrucciones) y el nivel de relación (cómo debe entenderse la relación entre emisor y receptor). El comunicador eficaz cuida meticulosamente la relación para que el contenido sea recibido con máxima apertura.`,
      keyPrinciples: [
        'Claridad y Brevedad Estructurada: Filtrar lo irrelevante e ir al núcleo del mensaje estratégico.',
        'Congruencia No Verbal (Paralingüística): Alinear kinésica, tono vocal y expresión facial con la intención del mensaje.',
        'Encuadre Emocional y Narrativo: Utilizar historias y metáforas con propósito corporativo claro.',
        'Loop de Retroalimentación Obligatorio: Verificar que la intención del emisor coincida exactamente con el impacto en el receptor.',
      ]
    },
    stakeholderImpacts: [
      {
        stakeholder: 'Clientes',
        impactDescription: 'Propuestas de valor transparentes, términos de servicio inteligibles y narrativa de marca inspiradora.',
        riskIfFailed: 'Confusión sobre beneficios, desconfianza en la oferta y fuga hacia alternativas más claras.',
        strategicOutcome: 'Posicionamiento cristalino en el top of mind y conversión efectiva de ventas.'
      },
      {
        stakeholder: 'Proveedores',
        impactDescription: 'Especificaciones técnicas sin ambigüedad, órdenes de compra precisas y expectativas operativas claras.',
        riskIfFailed: 'Entregas defectuosas, disputas por incumplimiento y demoras en las líneas de producción.',
        strategicOutcome: 'Operación "JIT" (Just in Time) fluida e integración eficiente de procesos.'
      },
      {
        stakeholder: 'Acreedores',
        impactDescription: 'Reportes de desempeño financiero transparentes, proyectados con rigor técnico y honestidad.',
        riskIfFailed: 'Sospecha de fraude o mala gestión, cierre de líneas de crédito y calificaciones de riesgo desfavorables.',
        strategicOutcome: 'Grado de inversión elevado y acceso ágil a capital de desarrollo.'
      },
      {
        stakeholder: 'Empleados',
        impactDescription: 'Kpis medibles, expectativas de rol transparentes, dirección clara y retroalimentación constructiva.',
        riskIfFailed: 'Ambigüedad de rol, esfuerzo desalineado, desmotivación y duplicidad de funciones.',
        strategicOutcome: 'Ejecución impecable de la estrategia corporativa con autonomía empoderada.'
      },
      {
        stakeholder: 'Accionistas',
        impactDescription: 'Articulación clara de la visión de largo plazo, gobernanza corporativa e hitos de creación de valor.',
        riskIfFailed: 'Volatilidad bursátil por especulación, pérdida de respaldo directivo y castigo en la valoración.',
        strategicOutcome: 'Confianza inversionista sólida y estabilidad accionaria sostenible.'
      }
    ],
    realWorldCase: {
      id: 'case-b',
      title: 'La Crisis del Apolo 13 de la NASA: Comunicación Impecable bajo Presión de Vida o Muerte',
      organization: 'NASA (National Aeronautics and Space Administration)',
      location: 'Houston, Texas / Espacio Exterior (Impacto Mundial)',
      year: '1970',
      summary: 'Tras la explosión de un tanque de oxígeno a 320,000 km de la Tierra, el Director de Vuelo Gene Kranz y su equipo gestionaron una de las mayores crisis de la historia aplicando los principios supremos de la comunicación eficaz y asertiva.',
      contextAndCrisis: 'Tres astronautas se encontraban atrapados en una nave dañada con reservas limitadas de energía, agua u oxígeno. El caos inicial, la falta de datos completos y el pánico amenazaban con llevar al desastre total en cuestión de minutos.',
      communicationStrategy: 'Gene Kranz estableció reglas comunicacionales drásticas: "Solo datos verificados, cero especulaciones, comunicación directa y brevedad absoluta". Tradujo metas complejas de supervivencia en pasos secuenciales simples para cada consola de control. Su famosa frase "Failure is not an option" sirvió de encuadre narrativo y foco mental unificado.',
      globalImpact: 'Los tres astronautas retornaron con vida a la Tierra. El protocolo de comunicación en crisis desarrollado por la NASA se convirtió en el estándar internacional de gestión directiva para aerolíneas, energía nuclear y corporaciones multinacionales.',
      theoriesApplied: [
        {
          name: 'Modelo de Reducción de Carga Cognitiva',
          author: 'John Sweller',
          discipline: 'Neuroaprendizaje',
          description: 'Estructurar la información para no saturar la memoria de trabajo en situaciones de alta adrenalina.',
          applicationInCase: 'Kranz exigió mensajes de 10 segundos con formato: Problema -> Alternativa -> Decisión.'
        },
        {
          name: 'Nivel de Contenido y Nivel de Relación',
          author: 'Paul Watzlawick',
          discipline: 'Ciencias de la Comunicación',
          description: 'Establecer serenidad y liderazgo en la relación para que las órdenes operativas sean precisas.',
          applicationInCase: 'Mantuvo un tono de voz firme, pausado y profesional que transmitía control absoluto.'
        }
      ],
      executiveTakeaways: [
        'En momentos de incertidumbre, la claridad comunicativa del líder previene la histeria organizacional.',
        'La brevedad y el lenguaje no ambiguo salvan proyectos, recursos y vidas.',
        'El encuadre (framing) positivo enfoca a los equipos en soluciones ejecutables en lugar de lamentar la crisis.'
      ]
    },
    flashcards: [
      {
        id: 'fc-b1',
        frontTitle: 'La Regla del 3 y Carga Cognitiva',
        frontConcept: '¿Por qué agrupar las ideas en 3 puntos mejora la eficacia comunicativa?',
        backExplanation: 'El cerebro humano procesa y memoriza patrones de 3 elementos con facilidad óptima, minimizando el esfuerzo del lóbulo frontal.',
        disciplineBadge: 'Neuroaprendizaje',
        keyAuthor: 'G. Miller / J. Sweller'
      },
      {
        id: 'fc-b2',
        frontTitle: 'Asertividad Organizacional',
        frontConcept: '¿Cómo se diferencia la comunicación asertiva de la agresiva o pasiva?',
        backExplanation: 'La asertividad expresa límites y necesidades directas sin vulnerar la autoestima del otro ni someterse por miedo al conflicto.',
        disciplineBadge: 'Psicología',
        keyAuthor: 'Albert Ellis / R. Alberti'
      },
      {
        id: 'fc-b3',
        frontTitle: 'La Regla Mehrabian (Mito vs. Realidad)',
        frontConcept: '¿Cuál es el verdadero significado del 7%-38%-55% en comunicación?',
        backExplanation: 'Aplica SOLO cuando hay incongruencia emocional entre palabras y gestos. En mensajes inconsistentes, el receptor cree 55% al cuerpo, 38% a la voz y 7% a las palabras.',
        disciplineBadge: 'Ciencias de la Comunicación',
        keyAuthor: 'Albert Mehrabian'
      },
      {
        id: 'fc-b4',
        frontTitle: 'Loop de Retroalimentación en Directivos',
        frontConcept: '¿Por qué el "comprobante de recepción" es vital en la administración?',
        backExplanation: 'Garantiza que el subordinado o stakeholder entendió el compromiso en sus propios términos, evitando la ilusión de que el mensaje fue comprendido.',
        disciplineBadge: 'Administración',
        keyAuthor: 'Norbert Wiener (Cibernética)'
      }
    ],
    dailyChallenge: {
      id: 'dc-b',
      title: 'Reto Diario: Transmitir una Reorganización Estratégica Compleja',
      scenario: 'La Junta Directiva aprobó la adopción inmediata de Inteligencia Artificial en todas las áreas de la empresa. Los empleados murmuran con pavor que habrá despidos masivos.',
      roleContext: 'Eres el Gerente General y debes dar la alocución de 5 minutos ante toda la compañía.',
      options: [
        {
          id: 'opt-b1',
          text: 'Enviar un comunicado por correo electrónico denso lleno de jerga técnica y cuadros financieros justificando la medida.',
          leadershipStyle: 'Distante e Ineficaz',
          isOptimal: false,
          scorePoints: 20,
          feedback: 'Un correo frío aumenta la ansiedad y la desconfianza. Falta encuadre humano y espacio para preguntas.'
        },
        {
          id: 'opt-b2',
          text: 'Convocar a un Town Hall en vivo: explicar con claridad el propósito estratégico, garantizar la reconversión laboral (upskilling) del equipo y abrir un panel de preguntas asertivas.',
          leadershipStyle: 'Transformacional Transparente',
          isOptimal: true,
          scorePoints: 100,
          feedback: '¡Excelente! Articulaste claridad de contenido con empatía relacional, disminuyendo la amenaza percibida por el cerebro del empleado.'
        },
        {
          id: 'opt-b3',
          text: 'Negar que habrá cambios para no alterar a la gente y anunciar la reorganización gradualmente sin aviso previo.',
          leadershipStyle: 'Manipulador / Evasivo',
          isOptimal: false,
          scorePoints: 0,
          feedback: 'Ocultar la verdad destruye la credibilidad del líder de forma irreversible cuando la realidad emerja.'
        }
      ]
    },
    questions: [
      {
        id: 'q-b1',
        questionText: '¿Cuál de los siguientes elementos define la ASOCIACIÓN ASERTIVA en el comportamiento de un comunicador eficaz?',
        options: [
          { id: 'q-b1-o1', text: 'Imponer la autoridad del cargo elevando el volumen de voz para evitar replicas.', isCorrect: false, explanation: 'Eso es comunicación agresiva autoritaria.' },
          { id: 'q-b1-o2', text: 'Expresar las ideas, expectativas y límites organizacionales con firmeza, objetividad y respeto mutuo.', isCorrect: true, explanation: 'La asertividad equilibra la firmeza conceptual con el respeto incondicional hacia el interlocutor.' },
          { id: 'q-b1-o3', text: 'Aceptar todas las demandas de los empleados para evitar conflictos incómodos.', isCorrect: false, explanation: 'Eso es pasividad o complacencia permisiva.' },
          { id: 'q-b1-o4', text: 'Utilizar un lenguaje ambiguo que permita evadir responsabilidades en el futuro.', isCorrect: false, explanation: 'La ambigüedad causa confusión y desalineamiento estratégico.' }
        ],
        theoreticalInsight: 'Psicología de la Asertividad: equilibrio entre autoafirmación y empatía social.'
      },
      {
        id: 'q-b2',
        questionText: 'Desde el neuroaprendizaje, ¿por qué el Storytelling Estratégico es superior a la sola presentación de datos fríos en una empresa?',
        options: [
          { id: 'q-b2-o1', text: 'Porque las historias activan zonas sensoriales y motoras del cerebro liberando oxitocina y fijando la memoria.', isCorrect: true, explanation: 'Las narrativas estructuradas convierten abstracciones en experiencias vicarias vivas en la neocorteza.' },
          { id: 'q-b2-o2', text: 'Porque distrae a los accionistas para que no revisen los estados financieros.', isCorrect: false, explanation: 'Falso; el storytelling empresarial busca iluminar verdades, no engañar.' },
          { id: 'q-b2-o3', text: 'Porque desactiva la memoria de trabajo impidiendo hacer preguntas.', isCorrect: false, explanation: 'Las historias despiertan curiosidad y retención activa.' },
          { id: 'q-b2-o4', text: 'Porque reduce el vocabulario técnico requerido en la junta.', isCorrect: false, explanation: 'El rigor técnico se complementa con la metáfora narrativa.' }
        ],
        theoreticalInsight: 'Neurobiología de la Narrativa: acoplamiento de la red por defecto y liberación de neuroquímicos de empatía.'
      },
      {
        id: 'q-b3',
        questionText: 'Al dirigirse a los CLIENTES, ¿cuál es la consecuencia directa de no aplicar claridad y concisión en la propuesta de valor?',
        options: [
          { id: 'q-b3-o1', text: 'Se incrementa la lealtad automática del consumidor.', isCorrect: false, explanation: 'La confusión provoca rechazo inmediato.' },
          { id: 'q-b3-o2', text: 'Fricción en la decisión de compra, sobrecarga cognitiva y migración del cliente hacia competidores con mensajes más simples.', isCorrect: true, explanation: 'El cerebro del consumidor busca eficiencia energética; si entender el beneficio requiere excesivo esfuerzo, abandona.' },
          { id: 'q-b3-o3', text: 'Reducción de los gastos de marketing en un 50%.', isCorrect: false, explanation: 'Al contrario, obliga a gastar más en explicar lo incomprensible.' },
          { id: 'q-b3-o4', text: 'Aumento inmediato de las recomendaciones boca a boca.', isCorrect: false, explanation: 'Nadie recomienda lo que no comprende.' }
        ],
        theoreticalInsight: 'Economía Conductual y Carga Cognitiva en la Decisión del Consumidor.'
      },
      {
        id: 'q-b4',
        questionText: 'En el contexto del caso Apolo 13 de la NASA, ¿qué principio de comunicación eficaz fue determinante para evitar la catástrofe?',
        options: [
          { id: 'q-b4-o1', text: 'El uso de rumores sin verificar para agilizar decisiones.', isCorrect: false, explanation: 'Los rumores habrían generado pánico fatal.' },
          { id: 'q-b4-o2', text: 'La brevedad extrema, el filtrado de especulaciones y la transmisión de datos verificados con tono calmado.', isCorrect: true, explanation: 'Gene Kranz exigió rigor absoluto en el canal de voz y la eliminación de ruido cognitivo.' },
          { id: 'q-b4-o3', text: 'Culpar públicamente a los ingenieros del tanque defectuoso antes del rescate.', isCorrect: false, explanation: 'Buscar culpables en crisis paraliza la resolución.' },
          { id: 'q-b4-o4', text: 'Mantener en secreto los datos técnicos de la tripulación.', isCorrect: false, explanation: 'La información fluyó con absoluta precisión interna.' }
        ],
        theoreticalInsight: 'Comunicación Operativa en Ambientes de Alto Riesgo (High-Reliability Organizations).'
      },
      {
        id: 'q-b5',
        questionText: '¿Qué abarca la "congruencia no verbal" o paralingüística en un líder comunicador?',
        options: [
          { id: 'q-b5-o1', text: 'Que el discurso esté escrito en tipografía Arial de 12 puntos.', isCorrect: false, explanation: 'Eso se refiere al formato de texto impreso.' },
          { id: 'q-b5-o2', text: 'La armonía entre el significado de las palabras, la microexpresión facial, la postura corporal y la prosodia del habla.', isCorrect: true, explanation: 'Cualquier contradicción entre lo que se dice y cómo se gesticula despierta la alarma de inautenticidad en el receptor.' },
          { id: 'q-b5-o3', text: 'El número de palabras pronunciadas por minuto independientemente del contexto.', isCorrect: false, explanation: 'La velocidad sola no garantiza congruencia.' },
          { id: 'q-b5-o4', text: 'El tono monótono para evitar proyectar cualquier tipo de emoción.', isCorrect: false, explanation: 'La monotonía aburre y desconecta a la audiencia.' }
        ],
        theoreticalInsight: 'Ciencias de la Comunicación No Verbal y Detección de Incongruencia Cognitiva.'
      }
    ]
  },
  {
    id: 'c',
    code: 'c',
    title: 'Inteligencia Emocional',
    subtitle: 'El dominio de uno mismo y la competencia relacional como eje del liderazgo transformador',
    iconName: 'HeartHandshake',
    colorTheme: {
      badge: 'bg-red-100 text-red-900 border-red-300',
      bgHeader: 'from-red-950 via-stone-900 to-amber-950',
      textAccent: 'text-red-600',
      border: 'border-red-200',
      gradient: 'from-red-600 to-amber-600',
    },
    deepTheory: {
      introduction: `La Inteligencia Emocional (IE) no es un adorno blando ni un lujo secundario en la gestión directiva; es el predictor más fiable del éxito duradero en el liderazgo transformacional. El coeficiente intelectual (CI) y las competencias técnicas abren las puertas corporativas, pero la Inteligencia Emocional determina quién asciende, inspira equipos y sostiene organizaciones sanas en tiempos de tormenta económica.`,
      businessPerspective: `En las escuelas de negocios de vanguardia, el liderazgo emocionado se traduce en métricas duras: menor rotación de personal, mayor productividad, resolución pacífica de conflictos corporativos y alianzas estratégicas sólidas. Los ejecutivos con elevada IE toman mejores decisiones estratégicas porque no caen presas del sesgo de confirmación, la arrogancia o la reactividad impulsiva.`,
      psychologyPerspective: `Popularizada por Daniel Goleman y cimentada en los modelos de Salovey y Mayer, la IE abarca 5 dimensiones esenciales: Autoconciencia (reconocer las propias emociones), Autorregulación (canalizar los impulsos destructivos), Automotivación (pasión por logros más allá del dinero), Empatía (comprender la estructura emocional ajena) y Habilidades Sociales (gestión de redes y construcción de alianzas).`,
      neurolearningPerspective: `Desde la neurociencia afectiva (Richard Davidson, Joseph LeDoux), la IE se basa en la capacidad de la corteza prefrontal dorsolateral para ejercer una inhibición descendente (top-down control) sobre el secuestro amigdalino (amygdala hijack). Un líder con alta IE reconoce el pico de adrenalina en situaciones de frustración y utiliza la pausa reflexiva de 6 segundos para elegir una respuesta consciente en lugar de una reacción instintiva.`,
      communicationSciencePerspective: `En el intercambio comunicacional, la IE actúa como el modulador de la sintonía o rapport. Permite descodificar las microexpresiones faciales (Paul Ekman), ajustar el ritmo comunicativo a las vulnerabilidades del interlocutor y sostener conversaciones difíciles sin erosionar el vínculo afectivo ni profesional.`,
      keyPrinciples: [
        'Autoconciencia Radical: Monitorización continua de los propios disparadores emocionales (triggers).',
        'Inhibición del Secuestro Amigdalino: Pausa consciente entre el estímulo estresante y la respuesta ejecutiva.',
        'Empatía Cognitiva y Afectiva: Sentir con el otro sin perder el criterio objetivo de la dirección.',
        'Regulación del Clima Organizacional: Transmitir calma, esperanza y foco motivacional a todo el ecosistema.',
      ]
    },
    stakeholderImpacts: [
      {
        stakeholder: 'Clientes',
        impactDescription: 'Empatía en la atención de reclamos, resolución de insatisfacciones con calidez y comprensión emocional.',
        riskIfFailed: 'Respuestas frías o defensivas que transforman clientes descontentos en detractores virulentos en redes sociales.',
        strategicOutcome: 'Fidelización profunda y conversión de crisis en demostraciones de servicio excepcional.'
      },
      {
        stakeholder: 'Proveedores',
        impactDescription: 'Negociaciones de "Ganar-Ganar" fundadas en el respeto, el control de la ira bajo presión y el trato digno.',
        riskIfFailed: 'Tácticas de negociación abusivas que deterioran el clima de alianza y provocan represalias en precios.',
        strategicOutcome: 'Redes de valor integradas con lealtad recíproca en periodos de escasez.'
      },
      {
        stakeholder: 'Acreedores',
        impactDescription: 'Manejo sereno en momentos de volatilidad, proyectando solvencia moral y ecuanimidad bajo escrutinio.',
        riskIfFailed: 'Reacciones de pánico, desmentidos agresivos o evasión de responsabilidad en momentos de pérdidas.',
        strategicOutcome: 'Mantenimiento del respaldo bancario e institucional aun en escenarios de desaceleración económica.'
      },
      {
        stakeholder: 'Empleados',
        impactDescription: 'Liderazgo compasivo que valida la carga emocional del trabajo, combate el burnout y celebra logros.',
        riskIfFailed: 'Ambiente de intimidación, desgaste psicológico masivo, licencias médicas y sabotaje implícito.',
        strategicOutcome: 'Cultura organizacional vibrante con equipos resilientes de alto rendimiento.'
      },
      {
        stakeholder: 'Accionistas',
        impactDescription: 'Gestión prudente de las propias pasiones, evitando decisiones de inversión impulsivas basadas en la codicia o el ego.',
        riskIfFailed: 'Adquisiciones hostiles catastróficas motivadas por la vanidad del CEO y pérdidas millonarias.',
        strategicOutcome: 'Crecimiento sostenible de capital libre de volatilidad emocional directiva.'
      }
    ],
    realWorldCase: {
      id: 'case-c',
      title: 'El Semáforo de Alan Mulally y la Salvación de Ford Motor Company',
      organization: 'Ford Motor Company',
      location: 'Dearborn, Michigan (Impacto Global)',
      year: '2006 - 2014',
      summary: 'Al llegar a Ford en 2006 cuando la empresa perdía $17,000 millones de dólares, Alan Mulally transformó la cultura de miedo en una de Inteligencia Emocional y colaboración transparente.',
      contextAndCrisis: 'Los vicepresidentes ejecutivos de Ford ocultaban sistemáticamente sus fallas por temor a ser despedidos por la directiva anterior. En las reuniones semanales de revisión, todos presentaban sus proyectos en verde (sin problemas), mientras la empresa se desangraba financieramente.',
      communicationStrategy: 'Mulally implementó la gestión mediante Inteligencia Emocional y Seguridad Psicológica. Cuando un VP finalmente se atrevió a marcar un proyecto en ROJO (un fallo masivo en el lanzamiento del Ford Edge), la sala enmudeció esperando el despido. Mulally aplaudió de pie y dijo: "Mark, gracias por esa increíble claridad. Ahora, ¿cómo podemos ayudarte como equipo a resolverlo?". Este acto de Inteligencia Emocional disolvió el secuestro amigdalino colectivo.',
      globalImpact: 'Ford fue la única automotriz estadounidense que no necesitó el rescate financiero del gobierno de EE.UU. en la crisis de 2008, retornando a ganancias récord y restableciendo la confianza mundial en la industria.',
      theoriesApplied: [
        {
          name: 'Modelo de Inteligencia Emocional Directiva',
          author: 'Daniel Goleman',
          discipline: 'Psicología',
          description: 'Reemplazar el clima de amenaza por autorregulación y empatía para desatar la inteligencia del equipo.',
          applicationInCase: 'Mulally utilizó la validación emocional y el entusiasmo auténtico para eliminar la paranoia directiva.'
        },
        {
          name: 'Regulación del Secuestro Amigdalino',
          author: 'Joseph LeDoux',
          discipline: 'Neuroaprendizaje',
          description: 'Desactivar la respuesta de huida o ataque mediante respuestas prefrontales ponderadas.',
          applicationInCase: 'Recompensó la honestidad ante los errores en lugar de castigar la falla implícita.'
        }
      ],
      executiveTakeaways: [
        'No se pueden corregir los problemas de un negocio que la gente tiene miedo de visibilizar.',
        'La Inteligencia Emocional del CEO sienta la pauta del comportamiento de toda la jerarquía.',
        'Reconocer los errores con serenidad es la mayor demostración de fortaleza ejecutiva.'
      ]
    },
    flashcards: [
      {
        id: 'fc-c1',
        frontTitle: 'Secuestro Amigdalino (Amygdala Hijack)',
        frontConcept: '¿Qué ocurre en el cerebro cuando perdemos el control emocional?',
        backExplanation: 'La amígdala cerebral percibe una amenaza psicosocial y toma el control antes de que la corteza prefrontal pueda evaluar objetivamente la situación, provocando reacciones de ataque o huida.',
        disciplineBadge: 'Neuroaprendizaje',
        keyAuthor: 'Daniel Goleman / J. LeDoux'
      },
      {
        id: 'fc-c2',
        frontTitle: 'Las 5 Dimensiones de la IE',
        frontConcept: '¿Cuáles son los 5 pilares del modelo de Goleman?',
        backExplanation: 'Autoconciencia, Autorregulación, Automotivación, Empatía y Habilidades Sociales.',
        disciplineBadge: 'Psicología',
        keyAuthor: 'Daniel Goleman'
      },
      {
        id: 'fc-c3',
        frontTitle: 'Microexpresiones Facial en IE',
        frontConcept: '¿Por qué la observación kinésica es clave en la empatía directiva?',
        backExplanation: 'Las microexpresiones universales involuntarias (duración de 1/25 de segundo) revelan las verdaderas emociones de miedo, tristeza, rabia o desprecio de los interlocutores.',
        disciplineBadge: 'Ciencias de la Comunicación',
        keyAuthor: 'Paul Ekman'
      },
      {
        id: 'fc-c4',
        frontTitle: 'Contagio Emocional en el Liderazgo',
        frontConcept: '¿Por qué el estado emocional del líder se expande rápidamente en la empresa?',
        backExplanation: 'A través de las neuronas espejo y la resonancia límbica, el equipo sintoniza automáticamente con la ansiedad o la serenidad que proyecta la cabeza de la organización.',
        disciplineBadge: 'Neuroaprendizaje',
        keyAuthor: 'Richard Davidson'
      }
    ],
    dailyChallenge: {
      id: 'dc-c',
      title: 'Reto Diario: El Ataque Furioso de un Gerente en la Junta',
      scenario: 'Durante la presentación del presupuesto, el Gerente de Finanzas te interrumpe a gritos frente a todos, acusándote de "incompetencia y despilfarro" por los costos de capacitación.',
      roleContext: 'Eres el Director de Desarrollo Organizacional.',
      options: [
        {
          id: 'opt-c1',
          text: 'Responder de inmediato con el mismo tono agresivo, recordándole sus propios errores financieros del trimestre pasado.',
          leadershipStyle: 'Reactivo por Secuestro Amigdalino',
          isOptimal: false,
          scorePoints: 0,
          feedback: 'Caíste en la trampa emocional. Convertiste una discusión técnica en un espectáculo de egos dañando tu autoridad moral.'
        },
        {
          id: 'opt-c2',
          text: 'Respirar profundo durante 5 segundos, mantener una voz pausada y neutra, validar su preocupación por el presupuesto y proponer revisar los datos al detalle al finalizar.',
          leadershipStyle: 'Autorregulación Emocional Asertiva',
          isOptimal: true,
          scorePoints: 100,
          feedback: '¡Excelente! Ejerciste inhibición descendente de la amígdala. Desarmaste la agresión, mantuviste el profesionalismo y demostraste liderazgo de alta IE.'
        },
        {
          id: 'opt-c3',
          text: 'Levantarte de la mesa de inmediato y abandonar la sala sin decir una sola palabra.',
          leadershipStyle: 'Pasivo / Huida',
          isOptimal: false,
          scorePoints: 20,
          feedback: 'La retirada no procesada transmite debilidad y deja la narrativa corporativa en manos del agresor.'
        }
      ]
    },
    questions: [
      {
        id: 'q-c1',
        questionText: '¿Cuál es la función neurobiológica del lóbulo prefrontal en la autorregulación emocional del líder?',
        options: [
          { id: 'q-c1-o1', text: 'Inhibir las respuestas impulsivas de la amígdala permitiendo la reflexión consciente antes de actuar.', isCorrect: true, explanation: 'El control descendente (top-down) del córtex prefrontal modula la reactividad afectiva primitiva de la amígdala.' },
          { id: 'q-c1-o2', text: 'Aumentar la frecuencia cardíaca durante las negociaciones de estrés.', isCorrect: false, explanation: 'Eso es función del sistema nervioso simpático y el tronco encefálico.' },
          { id: 'q-c1-o3', text: 'Eliminar por completo las emociones para convertir al líder en un androide estricto.', isCorrect: false, explanation: 'La IE no destruye las emociones; las encauza con sabiduría.' },
          { id: 'q-c1-o4', text: 'Bloquear la memoria a largo plazo durante los conflictos.', isCorrect: false, explanation: 'Al contrario, la serenidad prefrontal mejora la retención del evento.' }
        ],
        theoreticalInsight: 'Neurociencia Afectiva y Modelos de Inhibición Prefrontal (Davidson & LeDoux).'
      },
      {
        id: 'q-c2',
        questionText: 'En el modelo de Daniel Goleman, ¿qué componente de la IE permite a un ejecutivo percibir las dinámicas no verbales y necesidades no expresadas de su equipo?',
        options: [
          { id: 'q-c2-o1', text: 'La Automotivación financiera.', isCorrect: false, explanation: 'La automotivación concierne a los impulsos personales intrínsecos de logro.' },
          { id: 'q-c2-o2', text: 'La Empatía (cognitiva y afectiva).', isCorrect: true, explanation: 'La empatía sintoniza con el estado interno del otro, permitiendo comprender sus vivencias y presiones.' },
          { id: 'q-c2-o3', text: 'El egocentrismo táctico.', isCorrect: false, explanation: 'El egocentrismo bloquea la percepción empática.' },
          { id: 'q-c2-o4', text: 'La contabilidad forense.', isCorrect: false, explanation: 'Es una disciplina técnica de números, no una habilidad emocional.' }
        ],
        theoreticalInsight: 'Competencias de la Inteligencia Emocional (Goleman).'
      },
      {
        id: 'q-c3',
        questionText: '¿Cómo impacta la Inteligencia Emocional del líder en la relación directa con los EMPLEADOS según el caso de Alan Mulally en Ford?',
        options: [
          { id: 'q-c3-o1', text: 'Fomenta el miedo a admitir fallos para mantener las apariencias impecables.', isCorrect: false, explanation: 'Ese era el paradigma antiguo que arruinó a la automotriz.' },
          { id: 'q-c3-o2', text: 'Crea un clima de seguridad psicológica donde los errores se abordan colectivamente sin temor a represalias.', isCorrect: true, explanation: 'Mulally celebró la transparencia del semáforo rojo, transformando la cultura de ocultamiento en resolución colaborativa.' },
          { id: 'q-c3-o3', text: 'Elimina las revisiones operativas semanales.', isCorrect: false, explanation: 'Las revisiones continuaron pero con un clima de profunda confianza.' },
          { id: 'q-c3-o4', text: 'Reduce los salarios del personal de fábrica para compensar las pérdidas.', isCorrect: false, explanation: 'La estrategia se enfocó en procesos y personas, no en castigo salarial.' }
        ],
        theoreticalInsight: 'Psicología Organizacional: Seguridad Psicológica y Liderazgo Afectivo.'
      },
      {
        id: 'q-c4',
        questionText: '¿Qué revela el descubrimiento de las "neuronas espejo" sobre la conducta de los líderes frente a sus organizaciones?',
        options: [
          { id: 'q-c4-o1', text: 'Que las personas imitan y sintonizan automáticamente con las actitudes, tonos y emociones del líder (contagio emocional).', isCorrect: true, explanation: 'Las neuronas espejo se activan reflejando el estado de la persona observada, provocando que la calma o la ansiedad del líder sea contagiada al grupo.' },
          { id: 'q-c4-o2', text: 'Que la inteligencia es completamente fija e inmutable desde el nacimiento.', isCorrect: false, explanation: 'Falso; la neuroplasticidad permite el desarrollo de nuevas competencias.' },
          { id: 'q-c4-o3', text: 'Que los empleados no prestan atención al comportamiento de la gerencia.', isCorrect: false, explanation: 'Al contrario, la conducta directiva se monitorea constantemente.' },
          { id: 'q-c4-o4', text: 'Que la empatía se puede programar únicamente en computadoras.', isCorrect: false, explanation: 'Es una función biológica propia de la especie humana y primates.' }
        ],
        theoreticalInsight: 'Neurobiología Social (Giacomo Rizzolatti & Marco Iacoboni).'
      },
      {
        id: 'q-c5',
        questionText: 'Cuando un ejecutivo enfrenta reclamos coléricos de un CLIENTE clave, ¿cuál es la respuesta dictada por una alta Inteligencia Emocional?',
        options: [
          { id: 'q-c5-o1', text: 'Tomarse el reclamo como un ataque personal y colgar el teléfono de inmediato.', isCorrect: false, explanation: 'Demuestra falta total de autorregulación y destruye la relación comercial.' },
          { id: 'q-c5-o2', text: 'Escuchar sin interrumpir, des-escalar la tensión validando la emoción del cliente y enfocarse en la solución del problema.', isCorrect: true, explanation: 'Validar la emoción ("Entiendo perfectamente su frustración") desactiva la agresión y permite transicionar al plano racional de acuerdos.' },
          { id: 'q-c5-o3', text: 'Enviar una carta estandarizada redactada por abogados negando todo daño.', isCorrect: false, explanation: 'La frialdad legal acrecienta el enojo del cliente.' },
          { id: 'q-c5-o4', text: 'Ofrecer disculpas sumisas mientras se culpa a los subordinados del departamento de envíos.', isCorrect: false, explanation: 'Culpar al equipo interno destruye la lealtad de los empleados y demuestra debilidad.' }
        ],
        theoreticalInsight: 'Des-escalamiento Emocional en la Gestión de Experiencia de Cliente.'
      }
    ]
  },
  {
    id: 'd',
    code: 'd',
    title: 'Habilidades Blandas',
    subtitle: 'Las competencias socioemocionales y transversales que transforman la complejidad en valor humano',
    iconName: 'Sparkles',
    colorTheme: {
      badge: 'bg-yellow-100 text-yellow-900 border-yellow-300',
      bgHeader: 'from-amber-900 via-yellow-950 to-stone-900',
      textAccent: 'text-amber-600',
      border: 'border-yellow-200',
      gradient: 'from-yellow-500 to-amber-700',
    },
    deepTheory: {
      introduction: `Erróneamente calificadas como 'blandas' (soft skills), estas competencias constituyen en realidad las habilidades más duras, complejas y críticas de dominar en la era de la automatización y la Inteligencia Artificial. Mientras que las destrezas técnicas (hard skills) quedan obsoletas con rapidez acelerada, las capacidades socioemocionales —tales como la negociación principista, el pensamiento crítico, la flexibilidad cognitiva, la creatividad colaborativa y la resolución de dilemas éticos— representan el auténtico capital humano diferenciador.`,
      businessPerspective: `En el diseño organizativo moderno, las habilidades blandas multiplican el rendimiento del capital técnico. Una empresa compuesta por científicos o ingenieros brillantísimos colapsará irremediablemente si sus miembros carecen de capacidad para negociar prioridades, gestionar la frustración, trabajar en equipos multidisciplinarios o ejercer un liderazgo situacional adapto a las incertidumbres del mercado.`,
      psychologyPerspective: `Basadas en la Psicología Cognitiva y Social, las habilidades blandas abarcan la autorregulación interpersonal, la tolerancia a la ambigüedad y la mentalidad de crecimiento (Carol Dweck). La capacidad de recibir retroalimentación crítica como un regalo de aprendizaje en lugar de una afrenta personal distingue a las personas de alto potencial en la escala ejecutiva.`,
      neurolearningPerspective: `Desde la plasticidad cerebral, el desarrollo de las habilidades blandas implica la remodelación de redes neurales frontostriatales y la consolidación de mapas de flexibilidad cognitiva. La práctica deliberada en la resolución de problemas abiertos fortalece la divergencia del pensamiento y la capacidad del cerebro para alternar entre la Red por Defecto (creatividad) y la Red Ejecutiva Central (foco y ejecución).`,
      communicationSciencePerspective: `En las ciencias de la comunicación, las habilidades blandas se manifiestan en la diplomacia corporativa, la mediación de conflictos interculturales y la capacidad de persuasión ética. El dominio del Meta-modelo de Lenguaje (PNL / Lingüística Aplicada) permite a los líderes hacer preguntas profundas que desafían supuestos limitantes y aclaran visiones borrosas.`,
      keyPrinciples: [
        'Flexibilidad y Adaptabilidad Cognitiva: Reestructurar esquemas mentales ante cambios drásticos de entorno.',
        'Negociación Principista (Método Harvard): Separar a las personas del problema y enfocarse en intereses subyacentes.',
        'Pensamiento Crítico Sistémico: Analizar las causas secundarias y efectos colaterales de cada decisión.',
        'Inteligencia Intercultural: Adaptar el estilo directivo a diversos trasfondos, lenguajes y tradiciones.',
      ]
    },
    stakeholderImpacts: [
      {
        stakeholder: 'Clientes',
        impactDescription: 'Capacidad de persuasión consultiva, empatía relacional y creación de experiencias memorables.',
        riskIfFailed: 'Transacciones meramente frías donde el cliente percibe que solo interesa su dinero.',
        strategicOutcome: 'Relaciones de confianza duraderas (Lifetime Value elevado).'
      },
      {
        stakeholder: 'Proveedores',
        impactDescription: 'Negociación ganar-ganar bajo el marco de Harvard, resolviendo desacuerdos sin rupturas.',
        riskIfFailed: 'Posiciones rígidas de suma cero que derivan en contratos leoninos y resentimiento.',
        strategicOutcome: 'Cadenas de suministro colaborativas con innovación compartida.'
      },
      {
        stakeholder: 'Acreedores',
        impactDescription: 'Presentación convincente de proyectos, diplomacia financiera e integridad demostrada.',
        riskIfFailed: 'Incapacidad de transmitir la viabilidad estratégica del negocio provocando desconfianza.',
        strategicOutcome: 'Evaluaciones de riesgo favorables e instrumentos financieros a la medida.'
      },
      {
        stakeholder: 'Empleados',
        impactDescription: 'Coaching directivo, mentoría, gestión constructiva del desacuerdo y motivación intrínseca.',
        riskIfFailed: 'Liderazgo microgestionador que asfixia la autonomía y sofoca la iniciativa propia.',
        strategicOutcome: 'Desarrollo acelerado de cuadros de reemplazo y cultura de alto aprendizaje.'
      },
      {
        stakeholder: 'Accionistas',
        impactDescription: 'Comunicación fluida de la estrategia, visión ética y gestión de expectativas en la junta.',
        riskIfFailed: 'Conflictos de interés no resueltos entre grupos de inversión y bloqueos de gobernanza.',
        strategicOutcome: 'Alineación de visiones y gobernanza corporativa transparente y armónica.'
      }
    ],
    realWorldCase: {
      id: 'case-d',
      title: 'El Liderazgo Humanista y Resiliente de Jacinda Ardern en Crisis Globales',
      organization: 'Gobierno de Nueva Zelanda',
      location: 'Wellington, Nueva Zelanda (Impacto Global)',
      year: '2019 - 2023',
      summary: 'Como Primera Ministra de Nueva Zelanda, Jacinda Ardern ofreció al mundo una lección magistral de cómo las Habilidades Blandas (empatía, comunicación compasiva, negociación rápida y liderazgo adaptativo) son la herramienta de mayor impacto geopolítico.',
      contextAndCrisis: 'Enfrentó la tragedia de los atentados de Christchurch (2019), la erupción del volcán Whakaari y la pandemia del COVID-19 con exigencias extremas de gestión de crisis.',
      communicationStrategy: 'Tras el atentado en las mezquitas, rehusó pronunciar el nombre del atacante para no darle notoriedad. Vestida con respeto cultural, abrazó a las familias sobrevivientes pronunciando la palabra árabe "Salam" (Paz). En lugar de imponer leyes de control de armas mediante discursos agresivos, negoció con la oposición y los gremios logrando prohibir las armas semiautomáticas en solo 26 días con consenso social masivo.',
      globalImpact: 'Su estilo de "Liderazgo de la Amabilidad" (Kindness Leadership) fue estudiado en Harvard y Oxford como el estándar de oro en habilidades blandas para directivos corporativos y jefes de estado.',
      theoriesApplied: [
        {
          name: 'Negociación Principista',
          author: 'Fisher & Ury (Harvard Project)',
          discipline: 'Administración',
          description: 'Negociar basándose en intereses de seguridad común en lugar de posiciones ideológicas inflexibles.',
          applicationInCase: 'Transformó el debate de armas en un acuerdo nacional de protección mutua.'
        },
        {
          name: 'Liderazgo Adaptativo',
          author: 'Ronald Heifetz',
          discipline: 'Psicología',
          description: 'Ayudar a las personas a enfrentar realidades difíciles y modificar sus hábitos colectivos.',
          applicationInCase: 'Acompañó la incertidumbre de la pandemia con transmisiones en vivo informales explicando el "por qué" de las medidas.'
        }
      ],
      executiveTakeaways: [
        'La amabilidad y la empatía no contradicen la firmeza ejecutiva ni la velocidad de decisión.',
        'Las habilidades blandas son la clave para lograr consensos masivos en momentos de alta polarización.',
        'El verdadero poder se ejerce elevando a los demás, no sobrecogiéndolos.'
      ]
    },
    flashcards: [
      {
        id: 'fc-d1',
        frontTitle: 'Método Harvard de Negociación',
        frontConcept: '¿Cuáles son los 4 pilares de la negociación basada en principios?',
        backExplanation: '1) Separar personas del problema. 2) Enfocarse en intereses, no en posiciones. 3) Inventar opciones de beneficio mutuo. 4) Insistir en criterios objetivos.',
        disciplineBadge: 'Administración',
        keyAuthor: 'Roger Fisher & William Ury'
      },
      {
        id: 'fc-d2',
        frontTitle: 'Flexibilidad Cognitiva y Neuroplasticidad',
        frontConcept: '¿Qué ocurre en el cerebro cuando ejercitamos la flexibilidad cognitiva?',
        backExplanation: 'Se alternan eficazmente las redes neuronales para cambiar de perspectiva ante un imprevisto, inhibiendo las respuestas rígidas perseverativas.',
        disciplineBadge: 'Neuroaprendizaje',
        keyAuthor: 'Adele Diamond'
      },
      {
        id: 'fc-d3',
        frontTitle: 'Liderazgo Situacional',
        frontConcept: '¿Por qué las habilidades blandas requieren adaptar el estilo de liderazgo?',
        backExplanation: 'Porque no todos los colaboradores ni situaciones necesitan la misma respuesta: se equilibra dirección técnica y apoyo socioemocional según el nivel de madurez del equipo.',
        disciplineBadge: 'Psicología',
        keyAuthor: 'Hersey & Blanchard'
      },
      {
        id: 'fc-d4',
        frontTitle: 'Escalación de Conflictos',
        frontConcept: '¿Cómo evita un comunicador con habilidades blandas la escalada del conflicto?',
        backExplanation: 'Mediante la reformulación (reframing), el uso del lenguaje en primera persona ("Yo percibo que...") y la búsqueda activa de metas superordenadas.',
        disciplineBadge: 'Ciencias de la Comunicación',
        keyAuthor: 'Marshall Rosenberg (CNV)'
      }
    ],
    dailyChallenge: {
      id: 'dc-d',
      title: 'Reto Diario: Conflicto Interdepartamental entre Ventas y Operaciones',
      scenario: 'El Director de Ventas promete a un cliente corporativo entregas express en 48 horas sin consultar a Operaciones. El Director de Operaciones afirma que es imponible y amenaza con sabotear el proyecto.',
      roleContext: 'Eres el Vicepresidente Ejecutivo de la Compañía.',
      options: [
        {
          id: 'opt-d1',
          text: 'Darle la razón completa al Director de Ventas por traer el dinero y ordenar a Operaciones trabajar horas extra obligatorias.',
          leadershipStyle: 'Impositivo Unilateral',
          isOptimal: false,
          scorePoints: 10,
          feedback: 'Genera agotamiento en Operaciones y resentimiento estructural hacia la gerencia.'
        },
        {
          id: 'opt-d2',
          text: 'Facilitar un taller de Negociación Principista (Harvard): sentar a ambos directores, mapear los intereses reales (ingresos de ventas vs. calidad de operaciones) y diseñar un protocolo conjunto de entregas prioritarias.',
          leadershipStyle: 'Mediador Transformacional (Soft Skills)',
          isOptimal: true,
          scorePoints: 100,
          feedback: '¡Excelente! Utilizaste habilidades blandas avanzadas de mediación, convirtiendo un conflicto destructivo en un estándar operativo optimizado.'
        },
        {
          id: 'opt-d3',
          text: 'Decirles que son profesionales pagados y que si no lo resuelven entre ellos en 24 horas los despedirás a ambos.',
          leadershipStyle: 'Amenaza Autoritaria',
          isOptimal: false,
          scorePoints: 0,
          feedback: 'La amenaza aumenta la paranoia y destruye el trabajo colaborativo en la empresa.'
        }
      ]
    },
    questions: [
      {
        id: 'q-d1',
        questionText: '¿Por qué el Método de Negociación de Harvard (Fisher & Ury) enfatiza la separación entre las personas y el problema?',
        options: [
          { id: 'q-d1-o1', text: 'Para tratar el problema técnico con máxima firmeza objetiva mientras se preserva el respeto a las relaciones humanas.', isCorrect: true, explanation: 'Evita personalizar los ataques y permite resolver las discrepancias operativas sin herir el vínculo entre las partes.' },
          { id: 'q-d1-o2', text: 'Para ignorar los sentimientos de los negociadores por completo.', isCorrect: false, explanation: 'Falso; reconoce las emociones pero no deja que entorpezcan la lógica de intereses.' },
          { id: 'q-d1-o3', text: 'Para que los litigios legales sean más rápidos en los tribunales.', isCorrect: false, explanation: 'El método busca evitar tribunales mediante acuerdos de mutuo beneficio.' },
          { id: 'q-d1-o4', text: 'Para obligar a la otra parte a ceder en todas sus pretensiones.', isCorrect: false, explanation: 'Eso sería negociación distributiva de suma cero.' }
        ],
        theoreticalInsight: 'Teoría de Juegos y Negociación Principista (Harvard Business School).'
      },
      {
        id: 'q-d2',
        questionText: '¿Qué zona cerebral impulsa la flexibilidad cognitiva indispensable para adaptarse a entornos VUCA (Volátiles, Inciertos, Complejos y Ambiguos)?',
        options: [
          { id: 'q-d2-o1', text: 'El cerebelo exclusivamente.', isCorrect: false, explanation: 'El cerebelo regula primordialmente la coordinación motora fina.' },
          { id: 'q-d2-o2', text: 'La red ejecutiva de la corteza prefrontal y las conexiones frontostriatales.', isCorrect: true, explanation: 'Estas estructuras permiten cambiar de estrategia mental, inhibir patrones automáticos y evaluar nuevos datos.' },
          { id: 'q-d2-o3', text: 'El bulbo raquídeo.', isCorrect: false, explanation: 'Regula funciones autónomas como respiración y ritmo cardíaco.' },
          { id: 'q-d2-o4', text: 'El nervio óptico.', isCorrect: false, explanation: 'Transmite señales visuales desde la retina.' }
        ],
        theoreticalInsight: 'Neurociencia de las Funciones Ejecutivas de Alto Nivel.'
      },
      {
        id: 'q-d3',
        questionText: 'En el caso de Jacinda Ardern en Nueva Zelanda, ¿qué habilidad blanda fue determinante para aprobar la ley de control de armas en solo 26 días?',
        options: [
          { id: 'q-d3-o1', text: 'La manipulación mediática agresiva mediante censura gubernamental.', isCorrect: false, explanation: 'Ardern actuó en plena democracia abierta.' },
          { id: 'q-d3-o2', text: 'La empatía compasiva, la escucha sincera de las víctimas y la negociación basada en el interés común de seguridad nacional.', isCorrect: true, explanation: 'Logró alineación política y social uniendo voluntades a través de la amabilidad y el propósito compartido.' },
          { id: 'q-d3-o3', text: 'El uso de decretos de emergencia sin consultar al parlamento.', isCorrect: false, explanation: 'La ley se debatió y votó democráticamente en la cámara representante.' },
          { id: 'q-d3-o4', text: 'El soborno financiero a los grupos de interés de la industria.', isCorrect: false, explanation: 'No hubo pagos ilícitos sino liderazgo transparente.' }
        ],
        theoreticalInsight: 'Liderazgo Persuasivo y Diplomacia Social en Situaciones de Alta Sensibilidad.'
      },
      {
        id: 'q-d4',
        questionText: '¿Cómo benefician las Habilidades Blandas la relación con los PROVEEDORES según los modelos de administración estratégica?',
        options: [
          { id: 'q-d4-o1', text: 'Permiten imponer precios por debajo del costo de producción mediante amenazas de rescisión.', isCorrect: false, explanation: 'Esto arruina al proveedor y destruye la cadena de valor.' },
          { id: 'q-d4-o2', text: 'Construyen redes de colaboración a largo plazo, comunicación fluida en contingencias y co-desarrollo tecnológico.', isCorrect: true, explanation: 'El trato respetuoso y la negociación colaborativa convierten a los proveedores en aliados estratégicos en momentos de escasez.' },
          { id: 'q-d4-o3', text: 'Eliminan la necesidad de firmar contratos formales.', isCorrect: false, explanation: 'Los contratos siguen siendo necesarios pero se gestionan con flexibilidad y confianza.' },
          { id: 'q-d4-o4', text: 'Reducen los estándares de calidad requeridos.', isCorrect: false, explanation: 'Al contrario, la confianza eleva los estándares cualitativos.' }
        ],
        theoreticalInsight: 'Gestión de Relaciones con Proveedores (SRM - Supplier Relationship Management).'
      },
      {
        id: 'q-d5',
        questionText: '¿Qué caracteriza a la Comunicación No Violenta (CNV) desarrollada por Marshall Rosenberg en las organizaciones?',
        options: [
          { id: 'q-d5-o1', text: 'Observar sin evaluar, expresar sentimientos, identificar necesidades humanas no satisfechas y hacer peticiones concretas y realizables.', isCorrect: true, explanation: 'La CNV desarma la defensiva del otro al enfocarse en necesidades neutras universales en vez de juzgar intenciones.' },
          { id: 'q-d5-o2', text: 'Evitar hablar de problemas complejos en el trabajo.', isCorrect: false, explanation: 'La CNV aborda temas extremadamente duros pero con sintaxis respetuosa.' },
          { id: 'q-d5-o3', text: 'Exigir que los empleados oculten sus emociones de estrés.', isCorrect: false, explanation: 'Falso; promueve el reconocimiento consciente del sentimiento.' },
          { id: 'q-d5-o4', text: 'Usar lenguaje pasivo para no incomodar a la junta directiva.', isCorrect: false, explanation: 'No es pasividad; es asertividad empática.' }
        ],
        theoreticalInsight: 'Ciencias de la Comunicación: Pragmática y Comunicación No Violenta.'
      }
    ]
  },
  {
    id: 'e',
    code: 'e',
    title: 'El Poder Personal',
    subtitle: 'La autoridad moral, la congruencia de propósito y las fuentes genuinas de influencia sin coerción',
    iconName: 'Crown',
    colorTheme: {
      badge: 'bg-stone-200 text-stone-900 border-stone-400',
      bgHeader: 'from-stone-950 via-amber-950 to-stone-900',
      textAccent: 'text-stone-700',
      border: 'border-stone-300',
      gradient: 'from-amber-700 to-stone-800',
    },
    deepTheory: {
      introduction: `El poder en las organizaciones suele ser malentendido como la mera potestad de mandar, sancionar o controlar recursos (poder de posición o formal). Sin embargo, el verdadero poder que moviliza voluntades e inspira cambios históricos es el Poder Personal. Este emana de la integridad ética, la maestría técnica, la congruencia entre lo que se piensa, dice y hace, y la fuerza de un propósito trascendente que supera el egocentrismo individual.`,
      businessPerspective: `En el management transformacional, la autoridad formal te otorga subordinados, pero el poder personal te otorga seguidores apasionados. Los ejecutivos que fundamentan su liderazgo únicamente en el poder del puesto (premio/castigo) enfrentan resistencia pasiva, cumplimiento mínimo y la desintegración del equipo cuando la supervisión física no existe. El poder personal genera autonomía alineada.`,
      psychologyPerspective: `Fundamentado en la taxonomía clásica de las bases de poder de French y Raven (1959), el poder personal se compone del 'Poder Referente' (carisma, identificación afectiva y respeto del grupo) y del 'Poder Experto' (conocimiento profundo y sabiduría). La psicología del yo señala que la autoeficacia (Albert Bandura) y el locus de control interno son los cimientos psíquicos de esta fuerza.`,
      neurolearningPerspective: `En términos cerebrales, los líderes con alto poder personal proyectan serenidad postural y estabilidad autonómica. Esto activa en los observadores los circuitos neuronales de imitación y respeto (vía formación reticular y sistema mesolímbico), reduciendo la respuesta de desconfianza amigdalina. Su firmeza pacífica estimula en los equipos un estado mental receptivo de "desafío positivo" en lugar de "amenaza o parálisis".`,
      communicationSciencePerspective: `En la retórica clásica (Aristóteles) y las ciencias modernas del discurso, el poder personal encarna el Ethos (la credibilidad moral y el carácter del emisor). Sin Ethos sólido, ni el Logos (la lógica del argumento) ni el Pathos (la emoción del discurso) son suficientes para sostener la legitimidad comunicativa en tiempos de crisis.`,
      keyPrinciples: [
        'Integridad Radical (Ethos): Cero brecha entre las promesas pronunciadas y las conductas exhibidas.',
        'Poder Referente sobre Coercitivo: Inspirar admiración y alineación voluntaria en lugar de subordinación por temor.',
        'Propósito Trascendente (Ikigai Corporativo): Poner la energía personal al servicio del bien común y los stakeholders.',
        'Dominio de la Maestría (Poder Experto): Mantener la vanguardia del conocimiento en la industria.',
      ]
    },
    stakeholderImpacts: [
      {
        stakeholder: 'Clientes',
        impactDescription: 'Inspiración de confianza a través de la reputación intachable del líder y la congruencia corporativa.',
        riskIfFailed: 'Escándalos de falta de ética directiva que arruinan la reputación de la marca.',
        strategicOutcome: 'Defensa apasionada de la marca por parte de consumidores evangelizadores.'
      },
      {
        stakeholder: 'Proveedores',
        impactDescription: 'Cumplimiento sagrado de la palabra empeñada y los acuerdos verbales antes que litigios contractuales.',
        riskIfFailed: 'Percepción del líder como oportunista que renegocia deshonestamente los términos.',
        strategicOutcome: 'Trato prioritario en momentos de cuellos de botella globales.'
      },
      {
        stakeholder: 'Acreedores',
        impactDescription: 'Respaldo moral donde la credibilidad del directivo garantiza el compromiso con el reembolso.',
        riskIfFailed: 'Desconfianza en la integridad del equipo gestor provocando retención de préstamos.',
        strategicOutcome: 'Garantía reputacional que reduce los requisitos de colaterales exigidos.'
      },
      {
        stakeholder: 'Empleados',
        impactDescription: 'Alineación voluntaria inspirada por el ejemplo vivo del líder; deseo de ser guiado por su visión.',
        riskIfFailed: 'Cumplimiento meramente formal ("hacer las horas") y cinismo organizacional.',
        strategicOutcome: 'Compromiso extraordinario (extra-discretionary effort) y mística de trabajo.'
      },
      {
        stakeholder: 'Accionistas',
        impactDescription: 'Gobernanza ética inquebrantable que protege el patrimonio corporativo contra corruptelas o fraudes.',
        riskIfFailed: 'Destrucción de valor bursátil por investigaciones éticas o desfalcos de la cúpula.',
        strategicOutcome: 'Sostenibilidad de largo plazo y primas bursátiles por liderazgo intachable.'
      }
    ],
    realWorldCase: {
      id: 'case-e',
      title: 'El Poder Personal de Paul Polman y la Transformación Sostenible de Unilever',
      organization: 'Unilever PLC',
      location: 'Londres / Rotterdam (Impacto Global)',
      year: '2009 - 2019',
      summary: 'Al asumir como CEO de Unilever en plena crisis de 2009, Paul Polman ejerció un Poder Personal visionario: abolió los reportes financieros trimestrales para accionistas y desafió a toda la industria con el Plan de Vida Sostenible de Unilever.',
      contextAndCrisis: 'Wall Street exigía ganancias inmediatas a corto plazo a costa del medio ambiente y la explotación de recursos. La junta directiva dudaba en comprometerse con metas de sostenibilidad global.',
      communicationStrategy: 'Polman utilizó su Poder Referente y Experto con una firmeza moral conmovedora. Declaró públicamente a los accionistas: "Si no compran nuestro modelo de negocio centrado en las personas, el planeta y el largo plazo, no pongan su dinero en Unilever". Rehusó dejarse chantajear por los fondos de inversión especulativos (como Kraft Heinz / 3G Capital en su intento de adquisición hostil en 2017), defendiendo la misión social con una narrativa ética inexpugnable.',
      globalImpact: 'Unilever duplicó su volumen de ventas reduciendo su huella ambiental a la mitad y logrando que sus marcas sostenibles crecieran 69% más rápido que el resto del portafolio. Polman demostró al capitalismo global que el poder personal y los valores transforman industrias enteras.',
      theoriesApplied: [
        {
          name: 'Bases de Poder de French y Raven',
          author: 'French & Raven (1959)',
          discipline: 'Psicología',
          description: 'El Poder Referente (admiración) y Experto sobrepasan con creces al Poder Coercitivo en la creación de valor.',
          applicationInCase: 'Polman movilizó a 170,000 empleados en 190 países no por miedo, sino por orgullo de propósito.'
        },
        {
          name: 'El Ethos Retórico',
          author: 'Aristóteles / C. Comunicación',
          discipline: 'Ciencias de la Comunicación',
          description: 'La credibilidad del orador asentada en la virtud moral y el bien colectivo.',
          applicationInCase: 'Su trayectoria ética personal dio autoridad a su mensaje ante la ONU y los mercados financieros.'
        }
      ],
      executiveTakeaways: [
        'El poder personal se mide por la audacia de defender principios trascendentes contra la presión del dinero fácil.',
        'Los verdaderos líderes no buscan el aplauso efímero del mercado, sino la sostenibilidad de la especie.',
        'La coherencia entre la vida personal del directivo y los valores corporativos crea una blindaje reputacional invencible.'
      ]
    },
    flashcards: [
      {
        id: 'fc-e1',
        frontTitle: 'Bases de Poder de French y Raven',
        frontConcept: '¿Cuáles son las 5 fuentes tradicionales de poder en las organizaciones?',
        backExplanation: 'Poder Legítimo (puesto), Poder de Recompensa, Poder Coercitivo (castigo), Poder Experto (saber) y Poder Referente (ejemplo/admiración). Los dos últimos forman el Poder Personal.',
        disciplineBadge: 'Psicología Social',
        keyAuthor: 'French & Raven'
      },
      {
        id: 'fc-e2',
        frontTitle: 'Ethos, Pathos y Logos en el Líder',
        frontConcept: '¿Por qué el Ethos es el soporte primordial del Poder Personal?',
        backExplanation: 'El Ethos es la credibilidad moral. Sin Ethos, la lógica (Logos) suena fría y la emoción (Pathos) suena a manipulación fingida.',
        disciplineBadge: 'Ciencias de la Comunicación',
        keyAuthor: 'Aristóteles'
      },
      {
        id: 'fc-e3',
        frontTitle: 'Locus de Control Interno',
        frontConcept: '¿Qué rasgo psicológico fundamenta la autodisciplina del poder personal?',
        backExplanation: 'La convicción de que los resultados propios dependen del esfuerzo y decisiones personales, no del azar o la culpa de terceros.',
        disciplineBadge: 'Psicología',
        keyAuthor: 'Julian Rotter'
      },
      {
        id: 'fc-e4',
        frontTitle: 'Capital Social Directivo',
        frontConcept: '¿Cómo convierte el líder su poder personal en valor para la empresa?',
        backExplanation: 'A través de relaciones de reciprocidad transparente y redes de confianza con stakeholders de todos los sectores.',
        disciplineBadge: 'Administración',
        keyAuthor: 'Robert Putnam / P. Bourdieu'
      }
    ],
    dailyChallenge: {
      id: 'dc-e',
      title: 'Reto Diario: La Tentación de Ocultar un Defecto en el Producto',
      scenario: 'Tu equipo detecta un fallo menor en el empaque de un lote exportable que no afecta la salud pero ensucia el logo de la empresa. Corregirlo cuesta $200,000 de tus utilidades personales del año. Nadie fuera del almacén se daría cuenta.',
      roleContext: 'Eres el Fundador y CEO de una marca de alimentos orgánicos.',
      options: [
        {
          id: 'opt-e1',
          text: 'Autorizar el envío sin decir nada para proteger tus ganancias financieras del trimestre.',
          leadershipStyle: 'Oportunista / Pérdida de Ethos',
          isOptimal: false,
          scorePoints: 0,
          feedback: 'Comprometiste la integridad. Si el equipo descubre tu doble rasero, tu poder personal caerá a cero.'
        },
        {
          id: 'opt-e2',
          text: 'Frenar el despacho de inmediato, reunir al equipo de empaque para asumir la responsabilidad total y ordenar el reemplazo a costo de la empresa.',
          leadershipStyle: 'Poder Personal e Integridad Radical',
          isOptimal: true,
          scorePoints: 100,
          feedback: '¡Excelente! Proyectaste un Ethos intachable. Tus empleados aprenderán que la calidad y la palabra del fundador valen más que el dinero efímero.'
        },
        {
          id: 'opt-e3',
          text: 'Despedir al jefe de almacén por haber descubierto el problema en un momento inoportuno.',
          leadershipStyle: 'Tiranía Coercitiva',
          isOptimal: false,
          scorePoints: 0,
          feedback: 'Acto destructivo que infunde terror y elimina el poder personal.'
        }
      ]
    },
    questions: [
      {
        id: 'q-e1',
        questionText: 'Según la clasificación de French y Raven, ¿qué dos bases de poder conforman la esencia del PODER PERSONAL?',
        options: [
          { id: 'q-e1-o1', text: 'El Poder Coercitivo y el Poder Legítimo de sancionar.', isCorrect: false, explanation: 'Esas son las bases del poder formal o de puesto.' },
          { id: 'q-e1-o2', text: 'El Poder Experto (maestría técnica) y el Poder Referente (autoridad moral y carisma inspirador).', isCorrect: true, explanation: 'Surgen de las cualidades intrínsecas del ser humano y no pueden ser otorgadas ni retiradas por un nombramiento de cargo.' },
          { id: 'q-e1-o3', text: 'El Poder Monetario y el Poder de Recompensa mediante bonos.', isCorrect: false, explanation: 'Son incentivos financieros extínsecos.' },
          { id: 'q-e1-o4', text: 'El Poder Militar y el Poder Político partidista.', isCorrect: false, explanation: 'Son estructuras externas de control de fuerza.' }
        ],
        theoreticalInsight: 'Psicología Social de las Relaciones de Poder (French & Raven).'
      },
      {
        id: 'q-e2',
        questionText: 'En la retórica aristotélica aplicada a la comunicación directiva, ¿qué representa el ETHOS?',
        options: [
          { id: 'q-e2-o1', text: 'La estructura de diapositivas y gráficos estadísticos.', isCorrect: false, explanation: 'Eso correspondería parcialmente al Logos.' },
          { id: 'q-e2-o2', text: 'La credibilidad moral, el carácter ético y la integridad demostrada del emisor ante su audiencia.', isCorrect: true, explanation: 'El Ethos determina si el receptor confía en las intenciones del líder antes de analizar la lógica de sus argumentos.' },
          { id: 'q-e3-o3', text: 'El dramatismo exagerado con el que se pronuncia una frase.', isCorrect: false, explanation: 'Eso se relaciona con el Pathos o manipulación efectista.' },
          { id: 'q-e4-o4', text: 'El presupuesto asignado a la campaña de publicidad.', isCorrect: false, explanation: 'Es un recurso económico no un valor ético.' }
        ],
        theoreticalInsight: 'Filosofía del Discurso y Persuasión Ética.'
      },
      {
        id: 'q-e3',
        questionText: 'En el caso de Paul Polman en Unilever, ¿qué decisión de liderazgo demostró la preeminencia de su poder personal sobre la presión financiera de corto plazo?',
        options: [
          { id: 'q-e3-o1', text: 'Triplicar los reportes de utilidades a cada hora para calmar a la bolsa.', isCorrect: false, explanation: 'Polman hizo exactamente lo contrario.' },
          { id: 'q-e3-o2', text: 'Abolir los reportes financieros trimestrales exigidos por Wall Street para enfocar la estrategia en la sostenibilidad de largo plazo.', isCorrect: true, explanation: 'Desafió la inmediatez bursátil imponiendo un modelo de negocios ético orientado a las personas y al planeta.' },
          { id: 'q-e3-o3', text: 'Vender la empresa a un conglomerado petrolero para maximizar dividendos.', isCorrect: false, explanation: 'Falso; rechazó intentos de absorción hostil para proteger la visión social.' },
          { id: 'q-e3-o4', text: 'Sustituir la mano de obra humana por robots sin aviso a los sindicatos.', isCorrect: false, explanation: 'Su enfoque priorizó la inclusión y el empleo digno.' }
        ],
        theoreticalInsight: 'Administración de Empresas Sostenibles y Liderazgo Ético.'
      },
      {
        id: 'q-e4',
        questionText: '¿Cuál es la reacción biológica y psicológica de los EMPLEADOS cuando son guiados por un líder apoyado exclusivamente en el poder coercitivo (miedo)?',
        options: [
          { id: 'q-e4-o1', text: 'Elevada motivación intrínseca y creatividad libre.', isCorrect: false, explanation: 'El miedo sofoca la creatividad.' },
          { id: 'q-e4-o2', text: 'Activación del circuito del estrés amigdalino, cumplimiento mínimo por evasión de castigo y ocultamiento de información crítica.', isCorrect: true, explanation: 'La coerción genera estrés crónico y defensividad, erradicando el compromiso auténtico.' },
          { id: 'q-e4-o3', text: 'Desarrollo inmediato de lealtad histórica hacia la gerencia.', isCorrect: false, explanation: 'Nadie siente lealtad hacia quien lo intimida.' },
          { id: 'q-e4-o4', text: 'Incremento del acoplamiento neural positivo.', isCorrect: false, explanation: 'El miedo bloquea la sintonía neural empática.' }
        ],
        theoreticalInsight: 'Neurociencia del Miedo y Comportamiento Organizacional.'
      },
      {
        id: 'q-e5',
        questionText: '¿Qué rasgo distingue a un líder con locus de control interno al asumir la responsabilidad de un proyecto corporativo fallido?',
        options: [
          { id: 'q-e5-o1', text: 'Culpar públicamente al gobierno, la economía mundial y los subordinados.', isCorrect: false, explanation: 'Ese es el comportamiento típico del locus de control externo evasivo.' },
          { id: 'q-e5-o2', text: 'Asumir la responsabilidad directa de la estrategia, analizar las fallas del equipo con objetividad y liderar el plan de corrección.', isCorrect: true, explanation: 'Reconoce que sus decisiones son el factor determinante en el destino del proyecto, demostrando madurez ejecutiva.' },
          { id: 'q-e5-o3', text: 'Esperar a que el problema se resuelva solo por el paso del tiempo.', isCorrect: false, explanation: 'La pasividad agrava las pérdidas.' },
          { id: 'q-e5-o4', text: 'Ocultar los balances contables para que nadie note el fracaso.', isCorrect: false, explanation: 'Es una conducta fraudulenta e inaceptable.' }
        ],
        theoreticalInsight: 'Psicología de la Personalidad: Locus de Control de Rotter.'
      }
    ]
  },
  {
    id: 'f',
    code: 'f',
    title: 'Construcción de la Confianza',
    subtitle: 'La matriz de credibilidad, transparencia y seguridad psicológica en el ecosistema empresarial',
    iconName: 'ShieldCheck',
    colorTheme: {
      badge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      bgHeader: 'from-emerald-950 via-stone-900 to-amber-950',
      textAccent: 'text-emerald-600',
      border: 'border-emerald-200',
      gradient: 'from-emerald-600 to-amber-700',
    },
    deepTheory: {
      introduction: `La confianza no es un deseo piadoso ni una variable abstracta de buena voluntad; es el pegamento lubricante socio-operativo sin el cual los mercados financieros, las transacciones comerciales y la cohesión de los equipos colapsan de inmediato. La confianza reduce drásticamente los costos de transacción (Oliver Williamson) y acelera la velocidad de ejecución. Cuando la confianza es alta, las negociaciones son fluidas; cuando la confianza cae, todo procedimiento exige burocracia, auditorías infinitas y parálisis.`,
      businessPerspective: `En el cálculo económico del liderazgo transformacional, la fórmula del dividendo de confianza (Stephen M.R. Covey) demuestra que: 'Mayor Confianza = Mayor Velocidad + Menor Costo'. La confianza requiere construir la Ecuación de la Credibilidad: (Carácter + Competencia) / Autointerés percibido. Si los stakeholders perciben que el líder actúa únicamente por avaricia personal, la confianza se desploma.`,
      psychologyPerspective: `La confianza es la expectativa segura sobre las intenciones del otro en situaciones de vulnerabilidad. Se cimenta en la consistencia de la conducta a lo largo del tiempo, la previsibilidad de los compromisos asumidos y la disposición a mostrar vulnerabilidad (Brené Brown). Admitir la ignorancia sobre un tema con transparencia genera más confianza que aparentar una falsa perfección.`,
      neurolearningPerspective: `Desde la neurobiología social (Paul Zak), la experiencia de confianza está directamente mediada por la liberación de oxitocina en el núcleo accumbens y la corteza cingulada anterior. Las interacciones transparentes, las recompensas equitativas y los reconocimientos públicos aumentan la oxitocina, mientras que el secreto corporativo, los favoritismos y la traición desencadenan descargas de amígdala e inician respuestas de rechazo social (que el cerebro procesa con la misma intensidad que el dolor físico).`,
      communicationSciencePerspective: `En el ámbito comunicacional, la confianza se construye mediante la transparencia radical y la alineación entre la comunicación interna y externa. Las crisis de desconfianza emergen cuando los comunicados oficiales difieren de la realidad que viven los empleados o los clientes en el punto de contacto.`,
      keyPrinciples: [
        'Ecuación de Credibilidad: Maximizar carácter y competencia mientras se minimiza el egoísmo personal.',
        'Transparencia Radical: Compartir información crítica aunque sea incómoda antes de que sea descubierta.',
        'Vulnerabilidad Auténtica: Admitir vacíos de conocimiento o errores con humanidad sin perder la dirección.',
        'Consistencia Sagrada entre Palabra y Hecho: Honrar las promesas con rigurosidad absoluta.',
      ]
    },
    stakeholderImpacts: [
      {
        stakeholder: 'Clientes',
        impactDescription: 'Garantía implícita de calidad de producto, ética de privacidad de datos y respaldo ante cualquier falla.',
        riskIfFailed: 'Sensación de engaño provocando boicots comerciales y denuncias ante entes reguladores.',
        strategicOutcome: 'Defensa incondicional de la marca e inmunidad relativa a precios de competidores.'
      },
      {
        stakeholder: 'Proveedores',
        impactDescription: 'Pagos puntuales sin regateos engañosos, intercambio de información transparente de demanda.',
        riskIfFailed: 'Cancelación de plazos de pago, exigencia de cobro por adelantado e inspecciones rigurosas.',
        strategicOutcome: 'Condiciones de abastecimiento prioritario e integración en nuevos desarrollos.'
      },
      {
        stakeholder: 'Acreedores',
        impactDescription: 'Divulgación oportuna de contingencias financieras sin maquillar estados contables.',
        riskIfFailed: 'Cláusulas punitivas fatales (covenants), auditorías punitivas y pérdida inmediata del crédito.',
        strategicOutcome: 'Líneas de liquidez abiertas y reestructuraciones amigables en tiempos de recesión.'
      },
      {
        stakeholder: 'Empleados',
        impactDescription: 'Seguridad psicológica, meritocracia transparente y cumplimiento estricto de la promesa de carrera.',
        riskIfFailed: 'Paranoia laboral, rumores maliciosos, fuga del mejor talento y huelgas de celo.',
        strategicOutcome: 'Innovación audaz, alta productividad voluntaria y orgullo de pertenencia.'
      },
      {
        stakeholder: 'Accionistas',
        impactDescription: 'Gobernanza corporativa impecable, auditorías independientes y veracidad en las proyecciones.',
        riskIfFailed: 'Pérdida de valor bursátil, juicios de clase (class action suits) por ocultamiento de datos.',
        strategicOutcome: 'Lealtad de inversores de largo plazo y valoraciones estables libres de especulación.'
      }
    ],
    realWorldCase: {
      id: 'case-f',
      title: 'La Reconstrucción Incondicional de la Confianza: La Crisis del Tylenol de Johnson & Johnson',
      organization: 'Johnson & Johnson',
      location: 'Chicago, Illinois (Impacto Global)',
      year: '1982',
      summary: 'En otoño de 1982, siete personas fallecieron trágicamente en Chicago tras ingerir cápsulas de Tylenol que habían sido envenenadas por un criminal desconocido en los estantes de las farmacias.',
      contextAndCrisis: 'Tylenol representaba el 33% de las utilidades de Johnson & Johnson. La policía y los asesores de marketing recomendaron limitar el retiro del producto solo al área de Chicago para salvar el negocio financiero.',
      communicationStrategy: 'El CEO James Burke apeló al "Credo de la Compañía" (escrito en 1943), el cual ponía la seguridad del cliente por encima de las utilidades de los accionistas. Burke ordenó de inmediato el retiro global de 31 millones de frascos de Tylenol en todo el país (con un costo de $100 millones de dólares) e instó públicamente en televisión a la población a NO consumir el producto hasta nuevo aviso. Desarrollaron en tiempo récord el primer empaque con sello de seguridad triple (tamper-evident packaging) y abrieron todas sus instalaciones a la prensa e investigadores.',
      globalImpact: 'Tylenol recuperó el 100% de su cuota de mercado en menos de un año. La respuesta de J&J se convirtió en el modelo clásico mundial de cómo la transparencia radical y la ética restablecen la confianza corporativa de forma indestructible.',
      theoriesApplied: [
        {
          name: 'Teoría del Dividendo de Confianza',
          author: 'Stephen M.R. Covey',
          discipline: 'Administración',
          description: 'La confianza recuperada mediante actos éticos audaces se convierte en la mayor ventaja competitiva.',
          applicationInCase: 'J&J prefirió perder utilidades inmediatas con tal de resguardar el valor sagrado de su reputación.'
        },
        {
          name: 'Neurobiología de la Oxitocina y la Transparencia',
          author: 'Paul Zak',
          discipline: 'Neuroaprendizaje',
          description: 'Las acciones de protección incondicional desatan respuesta de oxitocina y lealtad profunda en el cerebro del cliente.',
          applicationInCase: 'El público percibió que J&J cuidaba sus vidas verdaderamente antes que su balance contable.'
        }
      ],
      executiveTakeaways: [
        'La confianza cuesta décadas en construirse, segundos en romperse y una eternidad en recuperarse si no hay arrepentimiento ético.',
        'Los principios corporativos escritos (Credo) solo valen cuando cuestan dinero mantenerlos.',
        'La transparencia incondicional ante la crisis es la única vacuna contra el descrédito permanente.'
      ]
    },
    flashcards: [
      {
        id: 'fc-f1',
        frontTitle: 'La Ecuación de la Credibilidad',
        frontConcept: '¿Cuáles son los componentes de la ecuación de confianza?',
        backExplanation: 'Credibilidad = (Carácter + Competencia + Consistencia) / Self-Orientation (Autointerés percibido). A mayor egoísmo percibido, menor confianza.',
        disciplineBadge: 'Administración',
        keyAuthor: 'Charles H. Green'
      },
      {
        id: 'fc-f2',
        frontTitle: 'Neurobiología de la Confianza',
        frontConcept: '¿Qué neuropéptido es el catalizador cerebral de la confianza entre personas?',
        backExplanation: 'La Oxitocina. Se sintetiza en el hipotálamo y se libera en interacciones de empatía, transparencia y trato equitativo.',
        disciplineBadge: 'Neuroaprendizaje',
        keyAuthor: 'Paul Zak'
      },
      {
        id: 'fc-f3',
        frontTitle: 'El Dividendo de Confianza vs. Impuesto',
        frontConcept: '¿Cómo afecta la desconfianza el costo de hacer negocios?',
        backExplanation: 'La desconfianza genera un "impuesto" (demoras, burocracia, litigios). La confianza genera un "dividendo" (rapidez de ejecución y menor costo).',
        disciplineBadge: 'Administración',
        keyAuthor: 'Stephen M.R. Covey'
      },
      {
        id: 'fc-f4',
        frontTitle: 'Vulnerabilidad Directiva en la Confianza',
        frontConcept: '¿Por qué la vulnerabilidad auténtica incrementa la confianza en el equipo?',
        backExplanation: 'Admitir fallos o incertidumbres disuelve la fachada de invulnerabilidad, demostrando honestidad y abriendo espacio para la co-creación.',
        disciplineBadge: 'Psicología',
        keyAuthor: 'Brené Brown'
      }
    ],
    dailyChallenge: {
      id: 'dc-f',
      title: 'Reto Diario: La Brecha en la Seguridad de Datos de Clientes',
      scenario: 'Un hacker obtuvo acceso a las correos de 5,000 clientes. Tu equipo de sistemas logró bloquear el ataque y asegura que no se robaron contraseñas ni tarjetas de crédito. El área legal aconseja guardar silencio para evitar demandas.',
      roleContext: 'Eres el Director de Tecnología y Privacidad (CTO).',
      options: [
        {
          id: 'opt-f1',
          text: 'Seguir el consejo legal: no notificar a nadie y esperar que el incidente pase desapercibido.',
          leadershipStyle: 'Evitación Ocultadora',
          isOptimal: false,
          scorePoints: 0,
          feedback: 'Si la brecha se filtra después, la desconfianza destruirá el valor de la empresa y derivará en multas catastróficas.'
        },
        {
          id: 'opt-f2',
          text: 'Emitir un comunicado transparente en menos de 24 horas: informar a los clientes del intento de ataque, explicar las medidas de protección instaladas y ofrecer un servicio gratuito de monitoreo.',
          leadershipStyle: 'Transparencia Radical en Confianza',
          isOptimal: true,
          scorePoints: 100,
          feedback: '¡Excelente! Aplicaste el modelo de J&J. La honestidad inmediata convierte una crisis en una prueba irrefutable del compromiso con el cliente.'
        },
        {
          id: 'opt-f3',
          text: 'Culpar al proveedor del servidor en la nube a través de una nota de prensa agresiva.',
          leadershipStyle: 'Chivo Expiatorio Defensivo',
          isOptimal: false,
          scorePoints: 10,
          feedback: 'Evadir la responsabilidad corporativa destruye la reputación de la empresa ante acreedores y clientes.'
        }
      ]
    },
    questions: [
      {
        id: 'q-f1',
        questionText: 'En la Ecuación de la Credibilidad propuesta por Charles H. Green, ¿qué elemento en el denominador reduce dramáticamente la confianza si es elevado?',
        options: [
          { id: 'q-f1-o1', text: 'El autointerés percibido o egocentrismo del emisor (Self-Orientation).', isCorrect: true, explanation: 'Si la gente percibe que el líder busca solo su beneficio propio o bono financiero, desconfiará de sus intenciones aun cuando sea competente.' },
          { id: 'q-f1-o2', text: 'La competencia técnica demostrada.', isCorrect: false, explanation: 'La competencia incrementa el numerador y la confianza.' },
          { id: 'q-f1-o3', text: 'El presupuesto asignado a la marca.', isCorrect: false, explanation: 'No es un factor directo de la ecuación socioemocional.' },
          { id: 'q-f1-o4', text: 'El número de empleados a cargo.', isCorrect: false, explanation: 'El tamaño de la estructura no determina la credibilidad.' }
        ],
        theoreticalInsight: 'Modelos Cuantitativos de Gestión de la Confianza Organizacional.'
      },
      {
        id: 'q-f2',
        questionText: '¿Qué neuropéptido es identificado por Paul Zak como la molélula cerebral responsable de la confianza reciproca en los equipos de trabajo?',
        options: [
          { id: 'q-f2-o1', text: 'La adrenalina en dosis elevadas.', isCorrect: false, explanation: 'La adrenalina provoca estrés y reactividad defensiva.' },
          { id: 'q-f2-o2', text: 'La oxitocina.', isCorrect: true, explanation: 'Paul Zak demostró que la liberación de oxitocina en interacciones empáticas y transparentes reduce el miedo social y estimula la colaboración.' },
          { id: 'q-f2-o3', text: 'El ácido láctico en los músculos.', isCorrect: false, explanation: 'Es un subproducto del metabolismo muscular.' },
          { id: 'q-f2-o4', text: 'La melatonina sintética.', isCorrect: false, explanation: 'Regula los ciclos circadianos de sueño.' }
        ],
        theoreticalInsight: 'Neuroeconomía y Neurobiología de la Confianza (Paul Zak).'
      },
      {
        id: 'q-f3',
        questionText: 'En el histórico caso de Johnson & Johnson durante la crisis del Tylenol en 1982, ¿cuál fue el factor decisivo que guió la retirada incondicional del producto?',
        options: [
          { id: 'q-f3-o1', text: 'Las directivas coercitivas impuestas por el gobierno de EE.UU.', isCorrect: false, explanation: 'J&J actuó voluntariamente antes de cualquier orden estatal.' },
          { id: 'q-f3-o2', text: 'El Credo de la empresa que priorizaba la seguridad del cliente sobre las utilidades financieras de los accionistas.', isCorrect: true, explanation: 'James Burke demostró que los valores corporativos son la brújula inquebrantable en momentos de máxima turbulencia.' },
          { id: 'q-f3-o3', text: 'El deseo de ahorrar dinero ocultando las cápsulas contaminadas.', isCorrect: false, explanation: 'J&J gastó $100 millones de dólares en la retirada masiva.' },
          { id: 'q-f3-o4', text: 'La asesoría de una agencia publicitaria externa para hacer un desmentido falso.', isCorrect: false, explanation: 'Falso; abrieron sus puertas con transparencia total.' }
        ],
        theoreticalInsight: 'Ética de los Negocios y Manejo de Crisis de Reputación Global.'
      },
      {
        id: 'q-f4',
        questionText: '¿Qué efecto económico tiene el "Impuesto de Desconfianza" según Stephen M.R. Covey en la administración de empresas?',
        options: [
          { id: 'q-f4-o1', text: 'Aumenta la velocidad de entrega de los proyectos.', isCorrect: false, explanation: 'Al contrario, la lentitud paraliza las entregas.' },
          { id: 'q-f4-o2', text: 'Ralentiza la ejecución de procesos y dispara los costos debido a excesos de burocracia, controles defensivos y litigios.', isCorrect: true, explanation: 'Cuando no hay confianza, cada paso requiere firmas dobles, contratos infinitos y verificación paranoica.' },
          { id: 'q-f4-o3', text: 'Reduce el pago de impuestos estatales de la empresa.', isCorrect: false, explanation: 'Es un concepto figurativo sobre costos ocultos organizacionales.' },
          { id: 'q-f4-o4', text: 'Aumenta automáticamente el margen de utilidad neta.', isCorrect: false, explanation: 'La desconfianza destruye los márgenes de utilidad.' }
        ],
        theoreticalInsight: 'Economía de los Costos de Transacción (Oliver Williamson).'
      },
      {
        id: 'q-f5',
        questionText: '¿Por qué la investigadora Brené Brown postula que la "Vulnerabilidad" es indispensable para la verdadera construcción de confianza en los líderes?',
        options: [
          { id: 'q-f5-o1', text: 'Porque admitir la ignorancia o la falibilidad demuestra coraje, autenticidad y abre la puerta a la verdadera colaboración del equipo.', isCorrect: true, explanation: 'Aparentar perfección genera desconfianza y distancia; la vulnerabilidad fundada en coraje humano conecta y moviliza.' },
          { id: 'q-f5-o2', text: 'Porque los líderes deben renunciar a tomar decisiones importantes.', isCorrect: false, explanation: 'Vulnerabilidad no significa incompetencia ni desidia.' },
          { id: 'q-f5-o3', text: 'Porque es una estrategia manipuladora para dar lástima a los acreedores.', isCorrect: false, explanation: 'La vulnerabilidad manipuladora es falsa e ineficaz.' },
          { id: 'q-f5-o4', text: 'Porque reduce la necesidad de capacitación técnica.', isCorrect: false, explanation: 'No sustituye a la competencia profesional.' }
        ],
        theoreticalInsight: 'Psicología Social del Coraje y la Autenticidad en el Liderazgo.'
      }
    ]
  }
];

// Helper to get subtopic by ID
export function getSubtopicById(id: SubTopicId): SubTopic {
  return SUBTOPICS_DATA.find(st => st.id === id) || SUBTOPICS_DATA[0];
}
