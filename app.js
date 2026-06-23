const STORAGE_KEY = "sonido-play-v3-progress";

const course = {
  id: "sonido-play",
  title: "Sonido Play",
  subtitle: "Curso interactivo de sonido en espectáculos",
  editorialNote:
    "Contenido curado: la bitácora original se usa solo como guía temática. El curso no muestra texto crudo del documento fuente.",
  modules: [
    {
      id: "module-01",
      title: "Fundamentos del sonido",
      status: "available",
      description:
        "Qué es el sonido, cómo se propaga, qué energía transporta y cómo aparece en una cadena de audio real.",
      lessons: [
        {
          id: "lesson-01",
          type: "lesson",
          title: "¿Qué es el sonido?",
          xp: 80,
          objective:
            "Entender que el sonido se produce cuando una fuente vibra y esa vibración se propaga a través de un medio, normalmente el aire.",
          theoryBlocks: [
            {
              title: "El sonido empieza con una vibración",
              body:
                "El sonido aparece cuando un objeto o una fuente vibra. Puede ser una cuerda de guitarra, una voz humana, un tambor, un parlante o cualquier elemento capaz de mover el aire que lo rodea. Cuando algo vibra, genera pequeñas variaciones de presión en el medio. Esas variaciones viajan hasta nuestro oído y son interpretadas como sonido.",
              note: "Idea clave: sin vibración no hay fenómeno sonoro."
            },
            {
              title: "El sonido necesita un medio",
              body:
                "Para que el sonido se propague, necesita un medio físico. En la mayoría de las situaciones cotidianas, ese medio es el aire. También puede transmitirse a través de otros medios, como el agua, la madera, el metal o una pared. Sin un medio de propagación, no hay sonido audible.",
              note:
                "En el vacío, como el espacio exterior, no hay aire que transporte la vibración."
            },
            {
              title: "Fuente, medio y receptor",
              body:
                "Todo fenómeno sonoro tiene tres elementos básicos: una fuente sonora, un medio de propagación y un receptor. En un espectáculo, una cantante puede ser la fuente sonora, el aire transporta la vibración y el público recibe ese sonido con sus oídos. Un micrófono también puede funcionar como receptor cuando captura una fuente sonora.",
              note: "Pensar en estos tres elementos ayuda a entender cualquier situación de audio."
            },
            {
              title: "Aplicación en espectáculos",
              body:
                "En sonido para espectáculos no trabajamos solo con equipos. Trabajamos con fenómenos físicos. Antes de tocar una consola, conectar un micrófono o subir el volumen de un parlante, es necesario entender qué estamos manipulando: vibraciones, aire, energía y percepción auditiva.",
              note: "La técnica empieza por comprender el fenómeno, no por memorizar botones."
            }
          ],
          questions: [
            {
              prompt: "¿Qué necesita el sonido para propagarse?",
              options: [
                "Un medio físico, como el aire.",
                "Una pantalla encendida.",
                "Una consola digital.",
                "Un cable conectado a internet."
              ],
              correctIndex: 0,
              explanation:
                "Correcto. El sonido necesita un medio físico para propagarse, por ejemplo aire, agua o materiales sólidos."
            },
            {
              prompt: "¿Cuál de estos elementos puede ser una fuente sonora?",
              options: [
                "Una cuerda de guitarra vibrando.",
                "Una silla quieta.",
                "Una luz apagada.",
                "Una entrada de ticket."
              ],
              correctIndex: 0,
              explanation:
                "Una fuente sonora es el elemento que vibra y genera variaciones de presión en el medio."
            },
            {
              prompt: "El sonido se produce cuando:",
              options: [
                "Una fuente vibra.",
                "Una luz cambia de color.",
                "Un cable se enrolla.",
                "Una persona mira un escenario."
              ],
              correctIndex: 0,
              explanation:
                "El sonido comienza con una vibración capaz de generar variaciones de presión."
            },
            {
              prompt: "Verdadero o falso: el sonido puede propagarse en el vacío igual que en el aire.",
              options: ["Verdadero", "Falso"],
              correctIndex: 1,
              explanation:
                "Falso. El sonido necesita un medio físico; en el vacío no hay partículas que transporten la vibración."
            },
            {
              prompt: "Orden correcto del recorrido básico del sonido:",
              options: [
                "Fuente sonora → aire / medio → oído",
                "Oído → fuente sonora → aire",
                "Aire → oído → fuente sonora",
                "Consola → luz → oído"
              ],
              correctIndex: 0,
              explanation:
                "Primero vibra la fuente, luego la perturbación viaja por un medio y finalmente llega al receptor."
            },
            {
              prompt: "En un escenario, una cantante habla frente al público. ¿Cuál es la fuente sonora principal?",
              options: ["La cantante.", "La pared del fondo.", "El público.", "La consola apagada."],
              correctIndex: 0,
              explanation:
                "La cantante es la fuente sonora porque su voz genera la vibración inicial."
            },
            {
              prompt: "Completá la idea: el sonido se propaga generalmente a través del...",
              options: ["Aire", "Color", "Software", "Cable HDMI"],
              correctIndex: 0,
              explanation:
                "En la mayoría de los eventos, el aire es el medio principal por el que se propaga el sonido."
            }
          ]
        },
        {
          id: "lesson-02",
          type: "lesson",
          title: "El sonido como energía",
          xp: 90,
          objective:
            "Comprender que el sonido transporta energía y que esa energía puede percibirse como un sonido más fuerte o más débil.",
          theoryBlocks: [
            {
              title: "El sonido transporta energía",
              body:
                "Cuando una fuente vibra, no envía materia desde un lugar hasta otro. Lo que se transmite es energía. Esa energía se propaga a través del medio en forma de ondas sonoras. Por ejemplo, cuando un parlante reproduce música, no envía aire desde el escenario hasta el fondo de la sala; genera variaciones de presión que se transmiten por el aire.",
              note: "El sonido no es un objeto que viaja: es una perturbación que transporta energía."
            },
            {
              title: "Sonidos fuertes y sonidos débiles",
              body:
                "Un sonido puede percibirse como fuerte o débil. Esa diferencia está relacionada con la cantidad de energía transmitida y con la amplitud de la onda sonora. En sonido profesional, esta diferencia se analiza mediante el nivel de presión sonora, expresado habitualmente en decibeles SPL.",
              note: "Más nivel no siempre significa mejor sonido."
            },
            {
              title: "Por qué importa en espectáculos",
              body:
                "En un evento, el sonido debe ser suficiente para que el público escuche con claridad, pero no tan alto como para resultar molesto o peligroso. Un buen operador no solo sube el volumen: evalúa el espacio, la distancia, el tipo de evento, el público, la fuente sonora y el sistema de audio.",
              note: "El objetivo técnico es claridad, cobertura y seguridad auditiva."
            },
            {
              title: "Escuchar no es lo mismo que medir",
              body:
                "Nuestro oído percibe el sonido, pero la medición técnica se realiza con instrumentos como un sonómetro o decibelímetro. Esto permite trabajar con referencias más objetivas, especialmente cuando se necesita controlar niveles sonoros en un espectáculo.",
              note: "Medir ayuda a tomar decisiones menos subjetivas."
            }
          ],
          questions: [
            {
              prompt: "Un sonido fuerte suele estar relacionado con:",
              options: ["Mayor energía sonora.", "Menor vibración.", "Menor presión sonora.", "Ausencia de medio."],
              correctIndex: 0,
              explanation:
                "Un sonido percibido como más fuerte suele estar asociado a mayor energía y mayor nivel de presión sonora."
            },
            {
              prompt: "¿Qué instrumento puede usarse para medir niveles sonoros?",
              options: ["Decibelímetro o sonómetro.", "Afinador de luces.", "Cable Speakon.", "Reproductor de video."],
              correctIndex: 0,
              explanation:
                "El decibelímetro o sonómetro permite medir niveles sonoros de manera más objetiva."
            },
            {
              prompt: "En sonido profesional, el nivel de presión sonora se expresa habitualmente en:",
              options: ["Decibeles SPL.", "Kilogramos.", "Metros cuadrados.", "Voltios de iluminación."],
              correctIndex: 0,
              explanation:
                "El dB SPL expresa nivel de presión sonora."
            },
            {
              prompt: "Verdadero o falso: un sonido más fuerte siempre es mejor para un espectáculo.",
              options: ["Verdadero", "Falso"],
              correctIndex: 1,
              explanation:
                "Falso. El nivel debe ser adecuado al tipo de evento, al espacio y a la seguridad auditiva."
            },
            {
              prompt:
                "Estás en una charla dentro de una sala chica. El sonido está demasiado fuerte y molesta al público. ¿Qué decisión sería más razonable?",
              options: [
                "Ajustar el nivel sonoro a la situación.",
                "Subir todos los canales al máximo.",
                "Agregar más parlantes sin medir nada.",
                "Apagar todos los micrófonos."
              ],
              correctIndex: 0,
              explanation:
                "El nivel debe adaptarse al contexto. En una charla, claridad y comodidad son más importantes que potencia excesiva."
            },
            {
              prompt: "¿Cuál relación es correcta?",
              options: [
                "Decibelímetro → instrumento de medición.",
                "Sonido débil → mayor energía percibida.",
                "dB SPL → color de iluminación.",
                "Sonómetro → tipo de cable."
              ],
              correctIndex: 0,
              explanation:
                "Un decibelímetro o sonómetro sirve para medir niveles sonoros."
            },
            {
              prompt: "El sonido transporta ______ desde la fuente hasta el receptor.",
              options: ["Energía", "Butacas", "Luz", "Escenografía"],
              correctIndex: 0,
              explanation: "La propagación sonora transporta energía a través del medio."
            }
          ]
        },
        {
          id: "lesson-03",
          type: "lesson",
          title: "Propagación del sonido",
          xp: 90,
          objective:
            "Entender que el sonido se propaga a través de un medio mediante variaciones de presión.",
          theoryBlocks: [
            {
              title: "El sonido viaja por el medio",
              body:
                "Cuando una fuente sonora vibra, produce variaciones de presión en el aire. Estas variaciones no son visibles, pero se propagan desde la fuente hacia el entorno. Por eso podemos escuchar una voz, un instrumento o un parlante aunque no estemos tocando directamente la fuente sonora.",
              note: "El fenómeno es físico aunque no podamos verlo."
            },
            {
              title: "Compresión y rarefacción",
              body:
                "El sonido puede entenderse como una sucesión de zonas de compresión y rarefacción. La compresión ocurre cuando las partículas del medio están más juntas. La rarefacción ocurre cuando están más separadas. Esta alternancia se propaga como una onda sonora.",
              note: "Compresión y rarefacción son dos partes del mismo movimiento ondulatorio."
            },
            {
              title: "El aire no viaja completo",
              body:
                "Es importante entender algo: el aire no se desplaza completo desde el parlante hasta el oído. Lo que avanza es la perturbación, es decir, la variación de presión. Una forma simple de pensarlo es como una transmisión de energía entre partículas del medio.",
              note: "No se traslada todo el aire; se transmite la perturbación."
            },
            {
              title: "Factores del entorno",
              body:
                "La propagación del sonido puede verse afectada por el espacio, la distancia, la temperatura, la humedad, el viento y los materiales presentes. Por eso, un mismo sistema de sonido puede comportarse diferente en una sala cerrada, en una plaza, en un teatro o en un galpón.",
              note: "El sistema de audio no suena aislado: suena dentro de un contexto."
            }
          ],
          questions: [
            {
              prompt: "¿Qué se propaga cuando escuchamos un sonido?",
              options: ["Una perturbación o variación de presión.", "El parlante entero.", "La consola.", "El cable de audio."],
              correctIndex: 0,
              explanation:
                "Lo que se propaga es una perturbación del medio, no el objeto completo que generó el sonido."
            },
            {
              prompt: "La compresión ocurre cuando las partículas del medio están:",
              options: ["Más juntas.", "Más iluminadas.", "Más lejos del escenario.", "Apagadas."],
              correctIndex: 0,
              explanation:
                "En una zona de compresión, las partículas del medio están más próximas entre sí."
            },
            {
              prompt: "La propagación del sonido en el aire ocurre mediante:",
              options: ["Variaciones de presión.", "Señales de video.", "Cambios de color.", "Movimiento de luces."],
              correctIndex: 0,
              explanation:
                "El sonido en el aire se propaga como variaciones de presión."
            },
            {
              prompt: "Verdadero o falso: el sonido puede comportarse distinto según el espacio donde se reproduce.",
              options: ["Verdadero", "Falso"],
              correctIndex: 0,
              explanation:
                "Verdadero. El entorno modifica la propagación y la percepción del sonido."
            },
            {
              prompt: "La alternancia entre compresión y rarefacción forma una:",
              options: ["Onda sonora", "Planilla", "Consola", "Lámpara"],
              correctIndex: 0,
              explanation:
                "La onda sonora puede representarse como alternancia de compresiones y rarefacciones."
            },
            {
              prompt:
                "Un evento al aire libre tiene viento fuerte. El público ubicado al fondo escucha de forma irregular. ¿Qué factor puede estar afectando la propagación?",
              options: ["El viento.", "El color de la consola.", "La marca del micrófono solamente.", "El diseño del flyer."],
              correctIndex: 0,
              explanation:
                "El viento puede afectar cómo se propaga el sonido en un evento al aire libre."
            },
            {
              prompt: "Orden correcto del proceso:",
              options: [
                "Fuente vibra → variaciones de presión → propagación por el aire → oído",
                "Oído → consola → flyer → fuente",
                "Parlante → color → presión → entrada",
                "Aire → butaca → luz → cable"
              ],
              correctIndex: 0,
              explanation:
                "La secuencia parte de la fuente que vibra y termina en el receptor."
            }
          ]
        },
        {
          id: "lesson-04",
          type: "lesson",
          title: "Cadena de audio en un espectáculo",
          xp: 100,
          objective:
            "Reconocer los elementos básicos que forman la cadena de audio en un espectáculo.",
          theoryBlocks: [
            {
              title: "Qué es una cadena de audio",
              body:
                "La cadena de audio es el recorrido que realiza una señal sonora o eléctrica desde su origen hasta que llega al público. En un espectáculo, esta cadena puede incluir fuentes sonoras, micrófonos, cables, consola, procesadores, amplificadores, parlantes y el espacio acústico.",
              note: "Pensar en cadena ayuda a encontrar problemas cuando algo no suena."
            },
            {
              title: "Fuente sonora",
              body:
                "La fuente sonora es el punto donde comienza el sonido. Puede ser una voz, una guitarra, un teclado, una batería, una pista reproducida desde una computadora o cualquier elemento que genere sonido.",
              note: "Sin fuente no hay señal que capturar, procesar ni amplificar."
            },
            {
              title: "Captura, control y reproducción",
              body:
                "En muchos espectáculos, el sonido de una fuente se captura con un micrófono. Luego esa señal puede pasar por una consola, donde se ajusta su nivel, ecualización, ruteo y mezcla. Después, la señal se envía al sistema de reproducción, que puede incluir amplificadores y parlantes.",
              note: "Cada etapa cumple una función diferente dentro del sistema."
            },
            {
              title: "La acústica también forma parte del resultado",
              body:
                "El sonido que escucha el público no depende solamente de los equipos. También depende del espacio: paredes, techo, piso, materiales, distancia, cantidad de personas y reflexiones. Por eso, la acústica del lugar modifica el resultado final.",
              note: "Un buen sistema puede sonar mal en un espacio acústicamente problemático."
            }
          ],
          questions: [
            {
              prompt: "¿Qué es la cadena de audio?",
              options: [
                "El recorrido del sonido o de la señal desde su origen hasta el público.",
                "Una lista de canciones.",
                "Un cable enrollado.",
                "Un tipo de iluminación."
              ],
              correctIndex: 0,
              explanation:
                "La cadena de audio describe el recorrido desde la fuente hasta la reproducción final."
            },
            {
              prompt: "¿Cuál puede ser una fuente sonora?",
              options: ["Una voz.", "Una butaca vacía.", "Un telón quieto.", "Un trípode sin equipo."],
              correctIndex: 0,
              explanation:
                "La voz puede iniciar la cadena como fuente sonora."
            },
            {
              prompt: "Ordená una cadena básica:",
              options: [
                "Voz → micrófono → consola → parlante",
                "Parlante → voz → consola → micrófono",
                "Consola → pared → público → cable",
                "Micrófono → luz → butaca → voz"
              ],
              correctIndex: 0,
              explanation:
                "La voz se captura con micrófono, se controla en consola y se reproduce por parlantes."
            },
            {
              prompt: "¿Qué equipo se usa comúnmente para capturar una voz en vivo?",
              options: ["Micrófono.", "Parlante.", "Butaca.", "Pantalla."],
              correctIndex: 0,
              explanation:
                "El micrófono transforma la energía acústica en señal eléctrica."
            },
            {
              prompt: "¿Qué equipo permite controlar niveles, mezclar señales y enviarlas a una salida?",
              options: ["Consola.", "Cable enrollado.", "Silla del operador.", "Soporte de micrófono."],
              correctIndex: 0,
              explanation:
                "La consola permite controlar y mezclar señales."
            },
            {
              prompt: "Verdadero o falso: la acústica del lugar puede modificar lo que escucha el público.",
              options: ["Verdadero", "Falso"],
              correctIndex: 0,
              explanation:
                "Verdadero. La acústica del espacio forma parte del resultado final."
            },
            {
              prompt:
                "Hay señal en el micrófono y en la consola, pero el público no escucha por los parlantes. ¿Qué parte de la cadena conviene revisar?",
              options: [
                "Salida de consola, amplificación, cableado o parlantes.",
                "El color del escenario.",
                "El afiche del evento.",
                "La ropa del cantante."
              ],
              correctIndex: 0,
              explanation:
                "Si la señal llega a la consola, el problema puede estar después: salidas, amplificación, cables o parlantes."
            }
          ]
        },
        {
          id: "challenge-01",
          type: "challenge",
          title: "Desafío: primer día como asistente de sonido",
          xp: 150,
          objective:
            "Aplicar lo aprendido para identificar elementos básicos del fenómeno sonoro y de la cadena de audio en una situación real.",
          theoryBlocks: [
            {
              title: "Escenario del desafío",
              body:
                "Llegás a un evento pequeño en un salón. Hay una cantante, un micrófono, una consola, dos parlantes y público ubicado al fondo. El salón tiene paredes duras y el sonido rebota bastante. Tu tarea es identificar qué está pasando y qué elementos intervienen en la cadena de audio.",
              note: "Este desafío no introduce teoría nueva: integra todo el módulo."
            },
            {
              title: "Qué deberías poder reconocer",
              body:
                "Al resolver el desafío, deberías distinguir fuente sonora, medio de propagación, captura, control, reproducción y problemas básicos del espacio acústico. No hace falta memorizar marcas ni modelos de equipos; importa entender la función de cada elemento.",
              note: "Pensá en funciones: producir, transportar, capturar, controlar y reproducir."
            }
          ],
          questions: [
            {
              prompt: "¿Cuál es la fuente sonora principal?",
              options: ["La cantante.", "La pared.", "El público.", "El soporte del micrófono."],
              correctIndex: 0,
              explanation: "La voz de la cantante inicia el fenómeno sonoro."
            },
            {
              prompt: "¿Qué elemento captura la voz?",
              options: ["El micrófono.", "El parlante.", "El piso.", "El cable de corriente."],
              correctIndex: 0,
              explanation: "El micrófono captura la fuente sonora y la convierte en señal eléctrica."
            },
            {
              prompt: "¿Qué equipo permite controlar y mezclar la señal?",
              options: ["La consola.", "El atril.", "La pared.", "La entrada del salón."],
              correctIndex: 0,
              explanation: "La consola permite controlar niveles, mezcla y ruteo."
            },
            {
              prompt: "¿Qué elemento reproduce el sonido hacia el público?",
              options: ["Los parlantes.", "El micrófono.", "El oído del técnico.", "La mesa de entrada."],
              correctIndex: 0,
              explanation: "Los parlantes reproducen el sonido para el público."
            },
            {
              prompt: "¿Por qué el sonido llega al público?",
              options: [
                "Porque se propaga a través del aire.",
                "Porque la luz lo empuja.",
                "Porque el cable lo lleva hasta cada persona.",
                "Porque el escenario vibra completo."
              ],
              correctIndex: 0,
              explanation: "En este caso, el aire es el medio que propaga el sonido hasta el público."
            },
            {
              prompt: "Si el salón tiene paredes duras y el sonido rebota mucho, ¿qué problema puede aparecer?",
              options: [
                "Exceso de reflexiones o reverberación.",
                "Falta de electricidad únicamente.",
                "Cambio de color en los parlantes.",
                "Pérdida del micrófono."
              ],
              correctIndex: 0,
              explanation: "Las superficies duras pueden aumentar reflexiones y reverberación."
            },
            {
              prompt: "¿Por qué no conviene resolver todo simplemente subiendo el volumen?",
              options: [
                "Porque puede aumentar la molestia, empeorar la claridad o generar niveles inseguros.",
                "Porque la consola se vuelve más chica.",
                "Porque los cables cambian de forma.",
                "Porque el sonido deja de necesitar aire."
              ],
              correctIndex: 0,
              explanation:
                "Subir volumen no corrige necesariamente un problema acústico y puede empeorar la experiencia."
            }
          ]
        }
      ]
    },
    {
      id: "module-02",
      title: "Intensidad, dB y seguridad auditiva",
      status: "locked",
      description:
        "Niveles sonoros, decibeles, distancia, riesgos auditivos y criterios de operación segura."
    },
    {
      id: "module-03",
      title: "Frecuencia, ondas y percepción",
      status: "locked",
      description:
        "Graves, medios, agudos, longitud de onda, rango audible y escucha técnica."
    },
    {
      id: "module-04",
      title: "Acústica de espacios",
      status: "locked",
      description:
        "Reflexión, absorción, eco, reverberación y decisiones básicas para eventos."
    },
    {
      id: "module-05",
      title: "Micrófonos",
      status: "locked",
      description:
        "Transducción, tipos de micrófonos, patrones polares, sensibilidad y uso en vivo."
    },
    {
      id: "module-06",
      title: "Cables, señales y conexiones",
      status: "locked",
      description:
        "XLR, TS, TRS, RCA, Speakon, señales balanceadas y niveles de audio."
    },
    {
      id: "module-07",
      title: "Consola de sonido",
      status: "locked",
      description:
        "Canales, ganancia, ruteo, salidas, auxiliares y mezcla básica."
    },
    {
      id: "module-08",
      title: "Amplificación y sistema completo",
      status: "locked",
      description:
        "Amplificadores, parlantes, cadena completa y diagnóstico básico de fallas."
    }
  ]
};

function applyEditorialCuration() {
  const curatedQuestions = {
    "lesson-01": [
      {
        prompt: "¿Qué condición física es indispensable para que una perturbación sonora sea audible en una sala?",
        options: [
          "Un medio material que pueda transmitir variaciones de presión.",
          "Una señal eléctrica amplificada durante todo el recorrido.",
          "Un recinto con muchas superficies reflectantes.",
          "Un transductor conectado obligatoriamente a una consola."
        ],
        correctIndex: 0,
        explanation: "El sonido necesita un medio material, como aire, agua o un sólido, capaz de transmitir variaciones de presión."
      },
      {
        prompt: "En términos acústicos, ¿cuál es el ejemplo más claro de fuente sonora?",
        options: [
          "Una membrana de parlante oscilando y desplazando aire.",
          "Un cable XLR transportando una señal eléctrica balanceada.",
          "Una consola recibiendo señal sin emitir sonido acústico.",
          "Un soporte de micrófono ubicado sobre el escenario."
        ],
        correctIndex: 0,
        explanation: "La fuente sonora es el elemento que vibra y produce la perturbación acústica inicial."
      },
      {
        prompt: "Desde el punto de vista físico, el sonido se inicia cuando:",
        options: [
          "Una fuente genera una perturbación mecánica en un medio.",
          "Una señal digital queda almacenada antes de reproducirse.",
          "Una consola asigna una entrada a una salida auxiliar.",
          "Un receptor convierte cualquier variación eléctrica en sonido audible."
        ],
        correctIndex: 0,
        explanation: "El fenómeno sonoro comienza con una perturbación mecánica producida por una fuente que vibra."
      },
      {
        prompt: "Verdadero o falso: en el aire, el sonido se propaga como una perturbación mecánica y no como una onda electromagnética.",
        options: ["Verdadero", "Falso"],
        correctIndex: 0,
        explanation: "Verdadero. El sonido en el aire es una onda mecánica; necesita partículas del medio para propagarse."
      },
      {
        prompt: "¿Cuál es el orden conceptual correcto para describir un fenómeno sonoro básico?",
        options: [
          "Fuente sonora → medio de propagación → receptor.",
          "Medio de propagación → fuente sonora → receptor.",
          "Receptor → medio de propagación → fuente sonora.",
          "Fuente sonora → receptor → medio de propagación."
        ],
        correctIndex: 0,
        explanation: "Primero vibra la fuente, luego la perturbación viaja por un medio y finalmente llega al receptor."
      },
      {
        prompt: "En un escenario, una cantante habla y su voz es capturada por un micrófono. ¿Cuál es la fuente acústica original?",
        options: [
          "La voz de la cantante.",
          "El micrófono, porque captura la voz.",
          "La consola, porque luego controla la señal.",
          "El parlante de retorno, porque puede reproducir parte de la mezcla."
        ],
        correctIndex: 0,
        explanation: "La fuente acústica original es la voz. El micrófono captura; la consola controla; el parlante reproduce."
      },
      {
        prompt: "En una sala sin sistema de amplificación, ¿qué medio permite que una voz llegue al oído del público?",
        options: ["El aire de la sala.", "La señal eléctrica de línea.", "El campo magnético del recinto.", "El cableado del escenario."],
        correctIndex: 0,
        explanation: "En una sala, la voz se propaga principalmente a través del aire."
      }
    ],
    "lesson-02": [
      {
        prompt: "Si aumenta la amplitud de una onda sonora, lo más probable es que percibamos:",
        options: [
          "Un mayor nivel de presión sonora.",
          "Una frecuencia más aguda sin cambio de nivel.",
          "Una variación de timbre sin energía asociada.",
          "Una cancelación total de la señal."
        ],
        correctIndex: 0,
        explanation: "La amplitud se relaciona con el nivel de presión sonora y con la percepción de intensidad."
      },
      {
        prompt: "¿Qué instrumento se usa específicamente para medir nivel de presión sonora en un espacio?",
        options: ["Sonómetro o decibelímetro.", "Multímetro de continuidad.", "Afinador cromático.", "Interfaz MIDI."],
        correctIndex: 0,
        explanation: "El sonómetro o decibelímetro mide niveles sonoros, usualmente expresados en dB SPL."
      },
      {
        prompt: "Cuando hablamos de dB SPL nos referimos principalmente a:",
        options: [
          "Nivel de presión sonora.",
          "Potencia eléctrica entregada por el amplificador.",
          "Sensibilidad nominal de un micrófono.",
          "Frecuencia fundamental de una fuente."
        ],
        correctIndex: 0,
        explanation: "dB SPL significa decibeles de nivel de presión sonora."
      },
      {
        prompt: "Verdadero o falso: un nivel sonoro adecuado depende del tipo de evento, del espacio y del tiempo de exposición.",
        options: ["Verdadero", "Falso"],
        correctIndex: 0,
        explanation: "Verdadero. No existe un único nivel ideal para todos los contextos; debe evaluarse la situación."
      },
      {
        prompt: "Estás operando una charla en una sala chica. La voz se entiende, pero el público se queja de molestia por exceso de nivel. ¿Qué harías primero?",
        options: [
          "Reducir y ajustar el nivel manteniendo inteligibilidad.",
          "Aumentar la ganancia de entrada hasta el límite de clip.",
          "Agregar más parlantes sin revisar cobertura.",
          "Comprimir toda la mezcla para que parezca más fuerte."
        ],
        correctIndex: 0,
        explanation: "La decisión razonable es adecuar el nivel al contexto sin perder claridad."
      },
      {
        prompt: "¿Cuál relación técnica está mejor planteada?",
        options: [
          "dB SPL → nivel de presión sonora.",
          "Sonómetro → tipo de cable balanceado.",
          "Mayor nivel → siempre mayor inteligibilidad.",
          "Sonido débil → mayor energía transmitida."
        ],
        correctIndex: 0,
        explanation: "dB SPL expresa nivel de presión sonora. Más nivel no siempre implica mejor inteligibilidad."
      },
      {
        prompt: "En una onda sonora, lo que se transmite desde la fuente hacia el receptor es principalmente:",
        options: [
          "Energía a través del medio.",
          "Materia completa desplazándose desde el parlante al oído.",
          "Corriente eléctrica aunque no haya equipos conectados.",
          "Información visual codificada en el aire."
        ],
        correctIndex: 0,
        explanation: "El sonido transmite energía mediante perturbaciones del medio."
      }
    ],
    "lesson-03": [
      {
        prompt: "Cuando escuchamos un sonido en el aire, ¿qué se propaga realmente?",
        options: [
          "Una perturbación de presión en el medio.",
          "Las partículas de aire viajando completas desde la fuente hasta el oído.",
          "Una señal eléctrica flotando en el ambiente.",
          "Un frente de luz producido por la fuente."
        ],
        correctIndex: 0,
        explanation: "Se propaga una perturbación de presión; las partículas oscilan alrededor de su posición."
      },
      {
        prompt: "En una zona de compresión de una onda sonora, las partículas del medio están:",
        options: ["Más próximas entre sí.", "Más separadas entre sí.", "Sin oscilación posible.", "Con menor presión que en la rarefacción."],
        correctIndex: 0,
        explanation: "La compresión implica mayor concentración de partículas y mayor presión relativa."
      },
      {
        prompt: "La propagación del sonido en el aire se describe mejor como:",
        options: [
          "Variaciones sucesivas de presión.",
          "Una oscilación electromagnética transversal.",
          "Un desplazamiento permanente de aire hacia el público.",
          "Una corriente eléctrica que sale del parlante."
        ],
        correctIndex: 0,
        explanation: "El sonido en el aire se propaga mediante variaciones sucesivas de presión."
      },
      {
        prompt: "Verdadero o falso: el mismo sistema puede percibirse distinto en una sala cerrada y en un espacio abierto.",
        options: ["Verdadero", "Falso"],
        correctIndex: 0,
        explanation: "Verdadero. El entorno modifica la propagación, las reflexiones y la percepción."
      },
      {
        prompt: "La alternancia entre compresión y rarefacción forma:",
        options: ["Una onda sonora longitudinal.", "Una conexión balanceada.", "Un patrón polar cardioide.", "Un filtro de ecualización."],
        correctIndex: 0,
        explanation: "En el aire, el sonido se comporta como una onda longitudinal de compresiones y rarefacciones."
      },
      {
        prompt: "En un evento al aire libre, el público del fondo escucha de forma irregular en presencia de viento. ¿Qué factor conviene considerar?",
        options: [
          "Viento y condiciones atmosféricas que afectan la propagación.",
          "Solo la marca del micrófono usado en escenario.",
          "La alimentación phantom power de todos los canales.",
          "La impedancia del cable de red del operador."
        ],
        correctIndex: 0,
        explanation: "El viento y las condiciones atmosféricas pueden modificar la propagación sonora al aire libre."
      },
      {
        prompt: "¿Cuál secuencia describe mejor el proceso físico básico?",
        options: [
          "Fuente vibra → variaciones de presión → propagación por el aire → receptor.",
          "Receptor vibra → consola genera aire → fuente escucha → presión desaparece.",
          "Parlante ilumina → cable comprime → público transmite → fuente recibe.",
          "Aire entra a la consola → micrófono amplifica → pared ecualiza → oído mezcla."
        ],
        correctIndex: 0,
        explanation: "El proceso parte de una fuente que vibra, genera variaciones de presión y llega a un receptor."
      }
    ],
    "lesson-04": [
      {
        prompt: "En un espectáculo, la cadena de audio se entiende mejor como:",
        options: [
          "El recorrido funcional desde la fuente hasta lo que escucha el público.",
          "La lista de canciones que interpreta la banda.",
          "El conjunto de cables enrollados antes del armado.",
          "El sistema de iluminación sincronizado con la música."
        ],
        correctIndex: 0,
        explanation: "La cadena de audio permite analizar el recorrido desde la fuente hasta la reproducción final."
      },
      {
        prompt: "¿Cuál de estos elementos es una fuente sonora original en vivo?",
        options: [
          "Una voz o instrumento que genera sonido.",
          "Una consola que mezcla señales.",
          "Un amplificador que eleva potencia eléctrica.",
          "Un cable que transporta señal."
        ],
        correctIndex: 0,
        explanation: "La fuente sonora original es aquello que genera el sonido inicial, como una voz o instrumento."
      },
      {
        prompt: "¿Qué orden representa mejor una cadena básica de voz amplificada?",
        options: [
          "Voz → micrófono → consola/preamplificación → amplificación/parlante.",
          "Parlante → consola → voz → micrófono.",
          "Consola → pared → público → cable de instrumento.",
          "Micrófono → parlante → voz → ganancia de entrada."
        ],
        correctIndex: 0,
        explanation: "La voz se captura, se controla y luego se reproduce mediante el sistema de salida."
      },
      {
        prompt: "¿Qué dispositivo cumple la función de capturar una voz acústica en vivo?",
        options: ["Micrófono.", "Parlante principal.", "Amplificador de potencia.", "Caja de transporte."],
        correctIndex: 0,
        explanation: "El micrófono convierte energía acústica en señal eléctrica."
      },
      {
        prompt: "¿Qué equipo permite ajustar niveles, mezclar señales y definir ruteos de salida?",
        options: ["Consola de sonido.", "Parlante pasivo.", "Soporte de micrófono.", "Cable de corriente."],
        correctIndex: 0,
        explanation: "La consola concentra funciones de control, mezcla y ruteo de señales."
      },
      {
        prompt: "Verdadero o falso: la acústica del lugar puede modificar el resultado aunque el sistema esté bien conectado.",
        options: ["Verdadero", "Falso"],
        correctIndex: 0,
        explanation: "Verdadero. Reflexiones, absorción, distancia y materiales influyen en lo que escucha el público."
      },
      {
        prompt: "Hay señal clara en la consola, pero no sale sonido por el sistema principal. ¿Dónde conviene buscar primero?",
        options: [
          "En la etapa posterior a la consola: salidas, procesado, amplificación, cableado o parlantes.",
          "En la técnica vocal de la cantante, porque la consola ya muestra señal.",
          "En el color de las luces, porque puede afectar la percepción sonora.",
          "En la afinación del instrumento, porque siempre bloquea la salida principal."
        ],
        correctIndex: 0,
        explanation: "Si la consola recibe señal, el problema probablemente está en una etapa posterior de la cadena."
      }
    ],
    "challenge-01": [
      {
        prompt: "En el caso del salón con cantante, micrófono, consola y parlantes, ¿cuál es la fuente acústica original?",
        options: ["La voz de la cantante.", "El micrófono de mano.", "La consola de sala.", "El parlante principal."],
        correctIndex: 0,
        explanation: "La voz es la fuente original; el resto de elementos captura, procesa o reproduce."
      },
      {
        prompt: "¿Qué función cumple el micrófono dentro de esa cadena?",
        options: [
          "Transduce la energía acústica de la voz en señal eléctrica.",
          "Aumenta directamente la potencia del parlante.",
          "Reduce automáticamente la reverberación de la sala.",
          "Convierte la mezcla final en presión sonora para el público."
        ],
        correctIndex: 0,
        explanation: "El micrófono realiza transducción acústico-eléctrica."
      },
      {
        prompt: "¿Qué etapa permite controlar nivel, mezcla y ruteo de la señal capturada?",
        options: ["La consola.", "La pared trasera.", "El soporte del micrófono.", "El oído del público."],
        correctIndex: 0,
        explanation: "La consola es la etapa de control y mezcla."
      },
      {
        prompt: "¿Qué elemento convierte la señal final del sistema en sonido audible para el público?",
        options: ["Los parlantes.", "La entrada del salón.", "El canal de la consola sin salida asignada.", "La ficha del micrófono guardada."],
        correctIndex: 0,
        explanation: "Los parlantes convierten señal eléctrica en movimiento mecánico y presión sonora."
      },
      {
        prompt: "¿Por qué una persona ubicada al fondo puede escuchar la voz amplificada?",
        options: [
          "Porque los parlantes generan variaciones de presión que se propagan por el aire.",
          "Porque el cable lleva la voz hasta cada oyente individualmente.",
          "Porque la luz del escenario transporta la onda sonora.",
          "Porque la consola elimina la necesidad de un medio físico."
        ],
        correctIndex: 0,
        explanation: "El aire sigue siendo el medio de propagación acústica hasta el público."
      },
      {
        prompt: "El salón tiene paredes duras y el sonido rebota mucho. ¿Qué fenómeno conviene sospechar?",
        options: [
          "Exceso de reflexiones y reverberación.",
          "Ausencia total de propagación sonora.",
          "Falla obligatoria del micrófono.",
          "Cambio de fase producido únicamente por el color de la pared."
        ],
        correctIndex: 0,
        explanation: "Las superficies duras favorecen reflexiones y pueden aumentar la reverberación."
      },
      {
        prompt: "¿Por qué subir volumen no siempre resuelve un problema de claridad en una sala reverberante?",
        options: [
          "Porque también puede aumentar reflexiones, molestia y riesgo auditivo.",
          "Porque al subir volumen el sonido deja de propagarse por el aire.",
          "Porque la consola cambia automáticamente de orden la cadena de audio.",
          "Porque los micrófonos dejan de captar cualquier fuente sonora."
        ],
        correctIndex: 0,
        explanation: "Más nivel puede empeorar la claridad si el problema principal es acústico o de cobertura."
      }
    ]
  };

  for (const lesson of getAllLessonsFromCourse()) {
    for (const block of lesson.theoryBlocks || []) {
      if (block.note) block.note = block.note.replace(/^Idea clave:\s*/i, "");
    }

    if (curatedQuestions[lesson.id]) {
      lesson.questions = curatedQuestions[lesson.id];
    }
  }
}

function getAllLessonsFromCourse() {
  return course.modules.flatMap((module) => module.lessons || []);
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function createRuntimeQuestions(questions) {
  return questions.map((question) => {
    const optionsWithState = question.options.map((option, index) => ({
      option,
      isCorrect: index === question.correctIndex
    }));
    const shuffled = shuffleArray(optionsWithState);
    return {
      ...question,
      options: shuffled.map((item) => item.option),
      correctIndex: shuffled.findIndex((item) => item.isCorrect)
    };
  });
}

applyEditorialCuration();

function getDefaultState() {
  return {
    xp: 0,
    hearts: 5,
    streak: 1,
    completed: [],
    unlocked: ["lesson-01"],
    bestScores: {},
    readingDone: {},
    lastVisited: "lesson-01"
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...getDefaultState(), ...JSON.parse(raw) } : getDefaultState();
  } catch {
    return getDefaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();
let view = "home";
let activeLessonId = state.lastVisited || "lesson-01";
let quizRuntime = null;
let toastTimer = null;

const app = document.querySelector("#app");

function getAllLessons() {
  return course.modules.flatMap((module) => module.lessons || []);
}

function getLesson(id) {
  return getAllLessons().find((lesson) => lesson.id === id);
}

function getNextLessonId(currentId) {
  const lessons = getAllLessons();
  const index = lessons.findIndex((lesson) => lesson.id === currentId);
  return lessons[index + 1]?.id || null;
}

function isUnlocked(lessonId) {
  return state.unlocked.includes(lessonId);
}

function isCompleted(lessonId) {
  return state.completed.includes(lessonId);
}

function completionPercent() {
  const total = getAllLessons().length;
  return Math.round((state.completed.length / total) * 100);
}

function render() {
  app.innerHTML = `
    <div class="app-shell">
      ${renderTopbar()}
      ${view === "home" ? renderHome() : ""}
      ${view === "lesson" ? renderLesson(getLesson(activeLessonId)) : ""}
      ${view === "quiz" ? renderQuiz() : ""}
      ${view === "result" ? renderResult() : ""}
    </div>
    <div id="toast" class="toast hidden"></div>
  `;

  bindCommonEvents();

  if (view === "lesson") bindLessonEvents();
  if (view === "quiz") bindQuizEvents();
  if (view === "result") bindResultEvents();
}

function renderTopbar() {
  return `
    <header class="topbar">
      <div class="brand" role="button" tabindex="0" data-action="go-home">
        <div class="brand-mark">SP</div>
        <div>
          <h2 class="brand-title">${course.title}</h2>
          <p class="brand-subtitle">${course.subtitle}</p>
        </div>
      </div>
      <div class="stats" aria-label="Estado de progreso">
        <div class="stat-pill">⚡ <strong>${state.xp}</strong> XP</div>
        <div class="stat-pill">❤️ <strong>${state.hearts}</strong> vidas</div>
        <div class="stat-pill">🔥 <strong>${state.streak}</strong> día</div>
        <button class="icon-btn" data-action="reset" title="Reiniciar progreso">↺</button>
      </div>
    </header>
  `;
}

function renderHome() {
  return `
    <section class="hero">
      <div class="hero-main panel">
        <span class="badge">🎧 Prototipo v3 · preguntas curadas y respuestas aleatorias</span>
        <h1>Aprendé sonido para espectáculos practicando.</h1>
        <p class="hero-copy">
          Esta versión convierte la primera unidad en una experiencia interactiva: teoría curada, scroll obligatorio, cuestionario, aprobación con 70% y desbloqueo progresivo.
        </p>
        <div class="cta-row">
          <button class="primary-btn" data-action="continue">Continuar curso</button>
          <button class="secondary-btn" data-action="open-first">Revisar desde el inicio</button>
        </div>
      </div>
      <aside class="hero-side panel">
        <div class="progress-card">
          <h3>Progreso del MVP</h3>
          <p>${state.completed.length} de ${getAllLessons().length} lecciones/desafíos completados.</p>
          <div class="progress-bar"><div class="progress-fill" style="width:${completionPercent()}%"></div></div>
          <div class="progress-caption">${completionPercent()}% del Módulo 1</div>
        </div>
        <div class="notice">
          <strong>Política editorial:</strong> ${course.editorialNote}
        </div>
      </aside>
    </section>

    <section class="layout">
      <aside class="sidebar panel">
        <h2>Módulos</h2>
        <div class="module-list">
          ${course.modules.map(renderModuleCard).join("")}
        </div>
      </aside>
      <main class="main panel screen">
        <div class="section-header">
          <div>
            <p class="kicker">Módulo disponible</p>
            <h2>Fundamentos del sonido</h2>
            <p class="objective">Completá las lecciones en orden. Cada cuestionario se habilita solo después de llegar al final de la teoría.</p>
          </div>
          <button class="ghost-btn" data-action="reset">Reiniciar</button>
        </div>
        <div class="lesson-map">
          ${course.modules[0].lessons.map(renderLessonCard).join("")}
        </div>
      </main>
    </section>
  `;
}

function renderModuleCard(module, index) {
  const isActive = module.id === "module-01";
  const statusLabel = module.status === "available" ? "Disponible" : "Bloqueado · próximamente";
  return `
    <article class="module-card ${isActive ? "active" : ""} ${module.status === "locked" ? "locked" : ""}">
      <h3>${index + 1}. ${module.title}</h3>
      <p>${module.description}</p>
      <span class="module-status">${module.status === "available" ? "✅" : "🔒"} ${statusLabel}</span>
    </article>
  `;
}

function renderLessonCard(lesson, index) {
  const completed = isCompleted(lesson.id);
  const unlocked = isUnlocked(lesson.id);
  const best = state.bestScores[lesson.id];
  const typeLabel = lesson.type === "challenge" ? "Desafío" : "Lección";
  const icon = completed ? "✓" : lesson.type === "challenge" ? "🏁" : index + 1;
  return `
    <article class="lesson-card ${completed ? "completed" : ""} ${!unlocked ? "locked" : ""}">
      <button class="lesson-node" data-action="open-lesson" data-lesson-id="${lesson.id}" ${!unlocked ? "disabled" : ""}>${!unlocked ? "🔒" : icon}</button>
      <div>
        <h3>${typeLabel}: ${lesson.title}</h3>
        <p>${lesson.objective}</p>
        <div class="lesson-meta">
          <span class="small-pill">⚡ ${lesson.xp} XP</span>
          <span class="small-pill">📖 lectura obligatoria</span>
          <span class="small-pill">✅ 70% para aprobar</span>
          ${best ? `<span class="small-pill">🎯 mejor: ${best}%</span>` : ""}
        </div>
      </div>
      <button class="${unlocked ? "primary-btn" : "ghost-btn"}" data-action="open-lesson" data-lesson-id="${lesson.id}" ${!unlocked ? "disabled" : ""}>
        ${completed ? "Repasar" : unlocked ? "Comenzar" : "Bloqueado"}
      </button>
    </article>
  `;
}

function renderLesson(lesson) {
  if (!lesson) return renderMissing();
  const readingDone = Boolean(state.readingDone[lesson.id]);
  return `
    <main class="panel screen">
      <div class="lesson-top">
        <button class="ghost-btn" data-action="go-home">← Volver al mapa</button>
        <span class="small-pill">${lesson.type === "challenge" ? "🏁 Desafío final" : "📘 Lección"}</span>
      </div>
      <p class="kicker">${lesson.type === "challenge" ? "Desafío del módulo" : "Contenido curado"}</p>
      <h1 class="lesson-title">${lesson.title}</h1>
      <p class="objective">${lesson.objective}</p>

      <div class="theory-shell">
        <div class="reading-meter">
          <div class="reading-meter-row">
            <span>Progreso de lectura</span>
            <strong id="readingPercent">${readingDone ? 100 : 0}%</strong>
          </div>
          <div class="progress-bar"><div id="readingFill" class="progress-fill" style="width:${readingDone ? 100 : 0}%"></div></div>
        </div>

        <section id="theoryScroll" class="theory-scroll" tabindex="0" aria-label="Material teórico de la lección">
          ${lesson.theoryBlocks.map(renderTheoryBlock).join("")}
        </section>

        <div class="footer-actions">
          <button id="startQuizBtn" class="primary-btn" data-action="start-quiz" ${readingDone ? "" : "disabled"}>
            ${readingDone ? "Ir al cuestionario" : "Leé hasta el final para desbloquear"}
          </button>
          <button class="secondary-btn" data-action="go-home">Guardar y volver</button>
        </div>
      </div>
    </main>
  `;
}

function renderTheoryBlock(block) {
  return `
    <article class="theory-block">
      <h3>${block.title}</h3>
      <p>${block.body}</p>
      ${block.note ? `<div class="theory-note"><strong>Idea clave:</strong> ${block.note}</div>` : ""}
    </article>
  `;
}

function renderQuiz() {
  const lesson = getLesson(activeLessonId);
  if (!quizRuntime || !lesson) return renderMissing();
  const question = quizRuntime.questions[quizRuntime.index];
  return `
    <main class="panel screen">
      <div class="lesson-top">
        <button class="ghost-btn" data-action="back-to-lesson">← Repasar teoría</button>
        <span class="small-pill">❤️ ${state.hearts} vidas</span>
      </div>
      <section class="quiz-card">
        <div class="quiz-progress">
          <div>
            <p class="kicker">${lesson.title}</p>
            <h2>Pregunta ${quizRuntime.index + 1} de ${quizRuntime.questions.length}</h2>
          </div>
          <div class="stat-pill">Aciertos: ${quizRuntime.correct}</div>
        </div>
        <div class="progress-bar" style="margin-bottom:18px;"><div class="progress-fill" style="width:${Math.round(((quizRuntime.index) / quizRuntime.questions.length) * 100)}%"></div></div>
        <h3 class="question-text">${question.prompt}</h3>
        <div class="answers">
          ${question.options.map((option, index) => renderAnswerButton(option, index)).join("")}
        </div>
        <div id="feedback" class="feedback hidden"></div>
        <div class="footer-actions">
          <button id="nextQuestionBtn" class="primary-btn hidden" data-action="next-question">Continuar</button>
        </div>
      </section>
    </main>
  `;
}

function renderAnswerButton(option, index) {
  return `<button class="answer-btn" data-answer-index="${index}">${option}</button>`;
}

function renderResult() {
  const lesson = getLesson(activeLessonId);
  const score = quizRuntime?.lastScore || 0;
  const correct = quizRuntime?.lastCorrect || 0;
  const total = lesson?.questions.length || 0;
  const passed = score >= 70;
  const perfect = score === 100;
  return `
    <main class="panel screen">
      <p class="kicker">Resultado</p>
      <h1 class="lesson-title ${passed ? "success-title" : "fail-title"}">
        ${passed ? (perfect ? "Lección perfecta" : "Lección aprobada") : "Necesitás repasar"}
      </h1>
      <p class="objective">
        ${passed
          ? "Buen trabajo. Se registró tu avance y se desbloqueó el siguiente paso cuando corresponde."
          : "No pasa nada. Repasá la teoría y volvé a intentar el cuestionario para avanzar."}
      </p>

      <div class="result-grid">
        <div class="result-stat"><strong>${score}%</strong><span>precisión</span></div>
        <div class="result-stat"><strong>${correct}/${total}</strong><span>respuestas correctas</span></div>
        <div class="result-stat"><strong>${passed ? "+" + lesson.xp : "+0"}</strong><span>XP ganado</span></div>
      </div>

      <div class="notice">
        <strong>Criterio de aprobación:</strong> lectura completa + 70% o más en el cuestionario.
      </div>

      <div class="footer-actions">
        ${passed ? `<button class="primary-btn" data-action="go-home">Volver al mapa</button>` : ""}
        ${passed && getNextLessonId(activeLessonId) ? `<button class="secondary-btn" data-action="next-lesson">Siguiente lección</button>` : ""}
        <button class="ghost-btn" data-action="retry-lesson">Repetir cuestionario</button>
        <button class="ghost-btn" data-action="back-to-lesson">Repasar teoría</button>
      </div>
    </main>
  `;
}

function renderMissing() {
  return `
    <main class="panel screen">
      <h1>No se encontró la pantalla solicitada</h1>
      <button class="primary-btn" data-action="go-home">Volver al inicio</button>
    </main>
  `;
}

function bindCommonEvents() {
  document.querySelectorAll("[data-action='go-home']").forEach((el) => {
    el.addEventListener("click", () => {
      view = "home";
      render();
    });
  });

  document.querySelectorAll("[data-action='continue']").forEach((el) => {
    el.addEventListener("click", () => {
      const next = getAllLessons().find((lesson) => isUnlocked(lesson.id) && !isCompleted(lesson.id));
      openLesson(next?.id || activeLessonId || "lesson-01");
    });
  });

  document.querySelectorAll("[data-action='open-first']").forEach((el) => {
    el.addEventListener("click", () => openLesson("lesson-01"));
  });

  document.querySelectorAll("[data-action='open-lesson']").forEach((el) => {
    el.addEventListener("click", () => {
      const lessonId = el.getAttribute("data-lesson-id");
      if (!isUnlocked(lessonId)) {
        showToast("Esta lección está bloqueada. Primero completá la anterior.");
        return;
      }
      openLesson(lessonId);
    });
  });

  document.querySelectorAll("[data-action='reset']").forEach((el) => {
    el.addEventListener("click", () => {
      const ok = confirm("¿Reiniciar progreso del prototipo?");
      if (!ok) return;
      state = getDefaultState();
      saveState();
      view = "home";
      activeLessonId = "lesson-01";
      quizRuntime = null;
      render();
      showToast("Progreso reiniciado.");
    });
  });
}

function bindLessonEvents() {
  const scrollBox = document.querySelector("#theoryScroll");
  const readingPercent = document.querySelector("#readingPercent");
  const readingFill = document.querySelector("#readingFill");
  const startQuizBtn = document.querySelector("#startQuizBtn");

  if (scrollBox) {
    const updateReading = () => {
      const max = scrollBox.scrollHeight - scrollBox.clientHeight;
      const percent = max <= 0 ? 100 : Math.min(100, Math.round((scrollBox.scrollTop / max) * 100));
      readingPercent.textContent = `${percent}%`;
      readingFill.style.width = `${percent}%`;

      if (percent >= 98) {
        state.readingDone[activeLessonId] = true;
        saveState();
        startQuizBtn.disabled = false;
        startQuizBtn.textContent = "Ir al cuestionario";
      }
    };

    scrollBox.addEventListener("scroll", updateReading);
    updateReading();
  }

  document.querySelectorAll("[data-action='start-quiz']").forEach((el) => {
    el.addEventListener("click", () => {
      if (!state.readingDone[activeLessonId]) {
        showToast("Primero llegá al final del material teórico.");
        return;
      }
      startQuiz(activeLessonId);
    });
  });
}

function bindQuizEvents() {
  const lesson = getLesson(activeLessonId);
  const question = quizRuntime.questions[quizRuntime.index];
  const feedback = document.querySelector("#feedback");
  const nextButton = document.querySelector("#nextQuestionBtn");

  document.querySelectorAll(".answer-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (quizRuntime.locked) return;
      quizRuntime.locked = true;
      const answerIndex = Number(button.getAttribute("data-answer-index"));
      const isCorrect = answerIndex === question.correctIndex;

      document.querySelectorAll(".answer-btn").forEach((btn) => {
        const index = Number(btn.getAttribute("data-answer-index"));
        btn.disabled = true;
        if (index === question.correctIndex) btn.classList.add("correct");
        if (index === answerIndex && !isCorrect) btn.classList.add("wrong");
      });

      if (isCorrect) {
        quizRuntime.correct += 1;
        feedback.className = "feedback ok";
        feedback.textContent = question.explanation;
      } else {
        state.hearts = Math.max(0, state.hearts - 1);
        saveState();
        feedback.className = "feedback error";
        feedback.textContent = question.explanation;
      }

      nextButton.classList.remove("hidden");
    });
  });

  document.querySelectorAll("[data-action='next-question']").forEach((el) => {
    el.addEventListener("click", () => {
      quizRuntime.index += 1;
      quizRuntime.locked = false;

      if (quizRuntime.index >= quizRuntime.questions.length || state.hearts <= 0) {
        finishQuiz();
        return;
      }

      render();
    });
  });

  document.querySelectorAll("[data-action='back-to-lesson']").forEach((el) => {
    el.addEventListener("click", () => {
      view = "lesson";
      quizRuntime = null;
      render();
    });
  });
}

function bindResultEvents() {
  document.querySelectorAll("[data-action='next-lesson']").forEach((el) => {
    el.addEventListener("click", () => {
      const nextId = getNextLessonId(activeLessonId);
      if (nextId) openLesson(nextId);
    });
  });

  document.querySelectorAll("[data-action='retry-lesson']").forEach((el) => {
    el.addEventListener("click", () => {
      if (state.hearts <= 0) {
        state.hearts = 5;
        saveState();
        showToast("Vidas recuperadas para repetir la práctica.");
      }
      startQuiz(activeLessonId);
    });
  });

  document.querySelectorAll("[data-action='back-to-lesson']").forEach((el) => {
    el.addEventListener("click", () => {
      view = "lesson";
      quizRuntime = null;
      render();
    });
  });
}

function openLesson(lessonId) {
  activeLessonId = lessonId;
  state.lastVisited = lessonId;
  saveState();
  view = "lesson";
  quizRuntime = null;
  render();
}

function startQuiz(lessonId) {
  activeLessonId = lessonId;
  state.lastVisited = lessonId;
  if (state.hearts <= 0) state.hearts = 5;
  quizRuntime = {
    index: 0,
    correct: 0,
    locked: false,
    questions: createRuntimeQuestions(getLesson(lessonId).questions),
    lastScore: 0,
    lastCorrect: 0
  };
  saveState();
  view = "quiz";
  render();
}

function finishQuiz() {
  const lesson = getLesson(activeLessonId);
  const total = quizRuntime.questions.length;
  const correct = quizRuntime.correct;
  const score = Math.round((correct / total) * 100);
  const passed = score >= 70;

  quizRuntime.lastScore = score;
  quizRuntime.lastCorrect = correct;

  state.bestScores[activeLessonId] = Math.max(state.bestScores[activeLessonId] || 0, score);

  if (passed) {
    if (!state.completed.includes(activeLessonId)) {
      state.completed.push(activeLessonId);
      state.xp += lesson.xp;
    }

    const nextId = getNextLessonId(activeLessonId);
    if (nextId && !state.unlocked.includes(nextId)) {
      state.unlocked.push(nextId);
    }

    state.hearts = Math.max(state.hearts, 3);
  }

  saveState();
  view = "result";
  render();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 2600);
}

render();
