const STORAGE_KEY = "sonido-play-v16-progress";

const course = {
  id: "sonido-play",
  title: "Sonido Play",
  subtitle: "Curso interactivo de sonido en espectáculos",
  editorialNote:
    "Nueva estructura: cada lección muestra primero el Documento Fuente con Formato C Digital Premium. Esta versión integra tema claro/oscuro y un modo de recorrido UX para avanzar por las unidades sin responder cuestionarios durante la revisión de flujos.",
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
          sourceSegments: [
            {
              title: "1.1 - Clase 1 - Cadena de Audio",
              sourceRef: "Documento Fuente · Unidad 01 · Formato C Digital Premium",
              body: `Cadena de Audio.
Este esquema está presente en todo evento de sonido, por lo que es indispensable conocerlo:

Concepto de “Acústica”: “De la música al sonido”
Introducción:
Comprendemos que la música es una forma de arte que vive en el tiempo. En otras palabras, la música no es una partitura, no es un disco musical, ni tampoco lo es una banda ni un instrumento, sino que la música existe y vive cada vez que se reproduce.

Para poder oír una música y que ella viva, es necesario el sonido; y para que exista sonido, descubrimos que es necesario el aire. En otras palabras, la música es un conjunto de sonidos que vive en el aire.

Una canción vive y muere cada vez que le damos play a nuestro reproductor, o cada vez que la ejecutamos con un instrumento o con nuestra propia voz.

Por otra parte, estuvimos estudiando el sonido que se transmite por los distintos materiales. Hablamos de que el sonido más comúnmente se transmite por medio del aire y llamamos a este fenómeno energía sonora.

Dato curioso: en el espacio exterior, fuera de la atmósfera, no es posible oírnos ni oír una explosión típica de las películas, ya que en ausencia de aire o de otro medio de propagación de las ondas es imposible el fenómeno sonoro.

Otro aspecto estudiado en clase es que el sonido es una forma de energía llamada energía sonora. La energía sonora no es infinita y puede ser mayor o menor dependiendo del impulso que le demos, ya sea con nuestra voz, un parlante o un instrumento musical.

Tenemos sonidos fuertes o débiles de acuerdo con cómo los nombramos musicalmente, y podemos medirlos de manera científica mediante una escala que llamaremos “escala de presión sonora en decibeles”, usando un dispositivo llamado decibelímetro o sonómetro.

Otro aspecto a repasar es que la energía del sonido no se pierde, sino que se va transformando en energía de calor.

Comentamos en clase que distintos materiales son capaces de absorber la energía sonora transformando el sonido en calor, aunque también nombramos que este tipo de energía es tan pequeño que medir el aumento de calor de un panel absorbente instalado en una pared es muy difícil, dadas las pequeñas magnitudes que se manejan.

En palabras científicas, llamamos a la capacidad de absorber la energía sonora “coeficiente de absorción”, mientras que al sonido que se refleja lo llamamos sonido reflejado.

Por último, recordamos que la velocidad del sonido es de 340 metros por segundo. Esto quiere decir que, en el tiempo comprendido en un segundo, el sonido que sale de la voz humana, un aplauso, un instrumento o un parlante recorre 3 cuadras y 40 metros.`,
              documentPages: [
                {
                  src: "assets/source/1-1-clase-1-cadena-de-audio-formato-c-continuo.png",
                  alt: "Documento Fuente Formato C Digital Premium para Unidad 01: Cadena de Audio y Acústica",
                  caption: "Formato C Digital Premium: documento fuente modernizado, preparado para lectura en app."
                }
              ],
              visualLabel: "Documento Fuente · Formato C",
              expertStatus: "Formato C integrado · Pendiente de validacion final por Matias",
              tags: ["Fuente de conocimiento", "Unidad 1", "Formato C", "Digital Premium", "Texto + imagen", "Glosario", "Antes del cuestionario"],
              preserveLineBreaks: true
            }
          ],

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
          sourceSegments: [
            {
              title: "Sonido como energía sonora",
              sourceRef: "Bitácora original · Clase 1 · Energía sonora",
              body:
                "El sonido es una forma de energía llamada energía sonora. Esa energía no es infinita: puede ser mayor o menor dependiendo del impulso que le demos con la voz, un parlante o un instrumento musical. Por eso podemos hablar de sonidos fuertes o débiles.",
              visualLabel: "Gráfico o esquema de energía sonora / presión sonora",
              expertStatus: "Pendiente de revisión por Matías",
              tags: ["Energía", "Intensidad", "dB"]
            },
            {
              title: "Medición de presión sonora",
              sourceRef: "Bitácora original · Clase 2 · Presión sonora",
              body:
                "La presión sonora puede medirse para cuidar los oídos y para asegurarse de que el sonido se escuche correctamente. En el material original aparecen ejemplos como el mosquito, el motor de un auto, una bomba y niveles que pueden resultar dolorosos o peligrosos.",
              visualLabel: "Imagen original: dB meter / decibelímetro",
              expertStatus: "Validar valores antes de publicar",
              tags: ["Presión sonora", "Decibelímetro", "Seguridad auditiva"]
            }
          ],
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
          sourceSegments: [
            {
              title: "Análisis de la onda sonora",
              sourceRef: "Bitácora original · Clase 2 · Análisis de la onda",
              body:
                "La onda se usa como forma de explicar un fenómeno real. En el material original se representa la presión y la rarefacción: una zona donde hay mayor presión y otra donde las partículas están más separadas. Entre una presión y otra aparece un ciclo.",
              visualLabel: "Gráfico original: compresión, rarefacción y ciclo",
              expertStatus: "Pendiente de revisión por Matías",
              tags: ["Onda", "Compresión", "Rarefacción"]
            },
            {
              title: "El sonido cambia con el entorno",
              sourceRef: "Bitácora original · Clase 2 · Propagación",
              body:
                "La configuración de sonido puede cambiar si cambia la temperatura y la humedad del aire. El viento también puede afectar la propagación. Por eso, un mismo sistema puede comportarse distinto según el espacio y las condiciones ambientales.",
              visualLabel: "Referencia visual: propagación en sala vs exterior",
              expertStatus: "Contenido base para ampliar",
              tags: ["Propagación", "Ambiente", "Condiciones"]
            }
          ],
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
          sourceSegments: [
            {
              title: "Cadena electroacústica aplicada a espectáculos",
              sourceRef: "Bitácora original · Clase 1 y material de consola",
              body:
                "La cadena de audio está presente en todo evento de sonido. En un caso simple puede pensarse como fuente sonora, captura, control, amplificación y reproducción. Esta fuente completa permite ver el recorrido antes de convertirlo en una actividad o cuestionario.",
              visualLabel: "Esquema original o reconstruido de voz → micrófono → consola → parlante",
              expertStatus: "Revisar orden y términos con Matías",
              tags: ["Cadena de audio", "Sistema completo", "Diagnóstico"]
            },
            {
              title: "Acústica del lugar como parte del resultado",
              sourceRef: "Bitácora original · Clase 2 · Eco, reverberación y absorción",
              body:
                "En una habitación cerrada, el sonido rebota en paredes, techo y piso hasta agotar su energía. Las salas con materiales duros tienen más reflexiones, mientras que teatros o estudios suelen usar materiales absorbentes para controlar la duración del sonido en el espacio.",
              visualLabel: "Gráfico original o esquema de reflexión, absorción y reverberación",
              expertStatus: "Pendiente de validación técnica",
              tags: ["Acústica", "Reflexión", "Reverberación"]
            }
          ],
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
          sourceSegments: [
            {
              title: "Caso integrador desde la fuente",
              sourceRef: "Síntesis de Documento Fuente · Unidad 1",
              body:
                "El desafío toma elementos del documento fuente: fenómeno sonoro, aire como medio, energía sonora, cadena de audio, reflexión del espacio y función básica de micrófono, consola y parlantes. Antes de responder, el alumno debe reconocer de dónde sale cada concepto.",
              visualLabel: "Escena integradora: cantante, micrófono, consola, parlantes y sala",
              expertStatus: "Validar escenario con Matías",
              tags: ["Caso integrador", "Cadena de audio", "Acústica"]
            }
          ],
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
      "id": "module-02",
      "title": "Intensidad, dB y seguridad auditiva",
      "status": "available",
      "description": "Niveles sonoros, decibeles, distancia, riesgos auditivos y criterios de operación segura.",
      "lessons": [
            {
                  "id": "lesson-05",
                  "type": "lesson",
                  "title": "Presión sonora e intensidad",
                  "xp": 95,
                  "objective": "Comprender que la presión sonora describe variaciones de presión y que la intensidad percibida no equivale automáticamente a mejor calidad sonora.",
                  "sourceSegments": [
                        {
                              "title": "2.1 - Unidad 02 - Intensidad, dB y Seguridad Auditiva",
                              "sourceRef": "Documento Fuente · Unidad 02 · Formato C Digital Premium",
                              "body": "Unidad 02 - Intensidad, dB y Seguridad Auditiva\n\nEl sonido se propaga como una sucesión de compresiones y rarefacciones del aire. Las partículas no viajan grandes distancias: transmiten energía a las partículas vecinas, de forma similar a una cadena de empujones.\n\nLa presión sonora es la variación de presión que produce una onda sonora respecto de la presión atmosférica. En una explicación inicial, puede pensarse como cuánto se modifica la presión del aire cuando pasa la onda sonora.\n\nLa intensidad se relaciona con la amplitud de la onda y con la percepción de volumen. Sonidos de mayor amplitud suelen percibirse como más fuertes; sonidos de menor amplitud, como más débiles.\n\nEl nivel de presión sonora se expresa habitualmente en decibeles SPL o NPS. Esta escala permite comparar niveles sonoros de manera práctica, pero no debe interpretarse como una regla lineal simple.\n\nEn la práctica, el técnico no usa los decibeles solo como un número aislado. Los interpreta junto con el contexto: tipo de evento, distancia al público, tamaño del espacio, tiempo de exposición, fatiga auditiva y calidad de la mezcla.\n\nLa medición ayuda a salir de la subjetividad. Dos personas pueden percibir el mismo evento de manera distinta, pero un sonómetro o decibelímetro permite tener una referencia objetiva para tomar mejores decisiones.\n\nEl nivel sonoro baja con la distancia. Por eso, escuchar o medir solo cerca del parlante no representa necesariamente lo que escucha el público ubicado más lejos.\n\nComo regla práctica, en campo libre y con una fuente puntual, duplicar la distancia puede reducir el nivel aproximadamente 6 dB. En salas reales esta regla puede variar por reflexiones, absorción, reverberación, cantidad de público y geometría del lugar.\n\nEn un espectáculo, el operador debe buscar un equilibrio: suficiente nivel para lograr claridad y cobertura, pero sin excederse ni generar una experiencia incómoda o riesgosa.\n\nLa seguridad auditiva forma parte del trabajo técnico. En eventos, ensayos y montajes puede haber exposición prolongada a niveles altos, tanto para el público como para músicos, técnicos y personal de producción.\n\nComo referencia institucional, NIOSH recomienda un límite de exposición ocupacional de 85 dBA para una jornada de 8 horas. OSHA también usa 85 dBA como nivel de acción para programas de conservación auditiva en exposición ocupacional de 8 horas. En Argentina, la SRT dispone el protocolo oficial para medición del nivel de ruido en ambiente laboral mediante la Resolución SRT 85/12.\n\nEstos valores se incorporan como referencia educativa y deben validarse con el experto técnico y el marco normativo aplicable antes de usarse en una certificación o recomendación profesional formal.",
                              "documentPages": [
                                    {
                                          "src": "assets/source/2-1-unidad-02-intensidad-db-seguridad-formato-c-continuo.png",
                                          "alt": "Documento Fuente Formato C Digital Premium para Unidad 02: Intensidad, dB y Seguridad Auditiva",
                                          "caption": "Formato C Digital Premium: documento fuente completo de Unidad 02, preparado para lectura en app."
                                    }
                              ],
                              "visualLabel": "Documento Fuente · Formato C",
                              "expertStatus": "Formato C integrado · Pendiente de validacion final por Matias",
                              "tags": [
                                    "Fuente de conocimiento",
                                    "Unidad 2",
                                    "Formato C",
                                    "dB",
                                    "Presion sonora",
                                    "Seguridad auditiva",
                                    "Antes del cuestionario"
                              ],
                              "preserveLineBreaks": true
                        }
                  ],
                  "theoryBlocks": [
                        {
                              "title": "Presión sonora",
                              "body": "La presión sonora es la variación de presión que produce una onda sonora respecto de la presión atmosférica. Cuando una fuente vibra, genera compresiones y rarefacciones en el aire. Esas variaciones llegan al oído y pueden ser percibidas como sonido.",
                              "note": "No se mide el sonido como objeto; se mide una variación física de presión."
                        },
                        {
                              "title": "Intensidad percibida",
                              "body": "La intensidad percibida se relaciona con la amplitud de la onda sonora y con la energía transmitida. Un sonido con mayor amplitud suele percibirse como más fuerte, pero eso no significa que sea más claro, más agradable o más profesional.",
                              "note": "Más fuerte no siempre significa mejor."
                        },
                        {
                              "title": "Relación con eventos",
                              "body": "En un espectáculo, el nivel tiene que alcanzar al público con claridad. Pero si se excede, puede cansar, molestar o volver menos inteligible la mezcla. Por eso el operador debe pensar en equilibrio: nivel, cobertura, claridad y seguridad.",
                              "note": "El objetivo técnico no es impresionar con volumen, sino lograr escucha útil y segura."
                        },
                        {
                              "title": "Error frecuente",
                              "body": "Un error común es intentar resolver cualquier problema subiendo el volumen. Si el problema es acústico, de cobertura, de ecualización, de ubicación de parlantes o de mezcla, subir nivel puede empeorar el resultado.",
                              "note": "Antes de subir, diagnosticar."
                        }
                  ],
                  "questions": [
                        {
                              "prompt": "¿Qué describe mejor la presión sonora?",
                              "difficulty": "recognition",
                              "options": [
                                    "La variación de presión producida por una onda sonora respecto de la presión atmosférica.",
                                    "La cantidad de cables conectados a la consola.",
                                    "La potencia visual del escenario.",
                                    "La velocidad con la que se mueve todo el aire de la sala."
                              ],
                              "correctIndex": 0,
                              "explanation": "La presión sonora se refiere a variaciones de presión producidas por la onda sonora."
                        },
                        {
                              "prompt": "Cuando aumenta la amplitud de una onda sonora, normalmente percibimos:",
                              "difficulty": "comprehension",
                              "options": [
                                    "Un sonido más fuerte.",
                                    "Un sonido necesariamente más afinado.",
                                    "Una señal sin necesidad de medio físico.",
                                    "Una reverberación eliminada automáticamente."
                              ],
                              "correctIndex": 0,
                              "explanation": "La amplitud se relaciona con la intensidad percibida, aunque no garantiza calidad."
                        },
                        {
                              "prompt": "¿Cuál afirmación es más correcta para operación de sonido?",
                              "difficulty": "comprehension",
                              "options": [
                                    "Más nivel no siempre implica mejor sonido.",
                                    "Más nivel siempre mejora la claridad.",
                                    "Si algo suena mal, la única solución es subir todo.",
                                    "La presión sonora no tiene relación con la percepción."
                              ],
                              "correctIndex": 0,
                              "explanation": "El nivel debe evaluarse con criterio: claridad, cobertura, contexto y seguridad."
                        },
                        {
                              "prompt": "En una sala chica, el público se queja de molestia aunque todo se escucha. ¿Qué conviene revisar primero?",
                              "difficulty": "application",
                              "options": [
                                    "Si el nivel es adecuado para el espacio y el tipo de evento.",
                                    "Si se puede subir el master para tapar la molestia.",
                                    "Si el micrófono cambia de color al conectarlo.",
                                    "Si el flyer del evento tiene suficiente contraste."
                              ],
                              "correctIndex": 0,
                              "explanation": "El nivel debe adaptarse al contexto; no todo evento requiere el mismo volumen."
                        },
                        {
                              "prompt": "¿Cuál es un error frecuente al interpretar intensidad sonora?",
                              "difficulty": "application",
                              "options": [
                                    "Confundir más volumen con mejor calidad.",
                                    "Medir en más de un punto del espacio.",
                                    "Considerar al público y la distancia.",
                                    "Ajustar el nivel según el tipo de evento."
                              ],
                              "correctIndex": 0,
                              "explanation": "Más volumen puede empeorar claridad, cansancio auditivo o riesgo."
                        },
                        {
                              "prompt": "Si una mezcla no se entiende, pero ya está muy fuerte, una decisión razonable sería:",
                              "difficulty": "criterion",
                              "options": [
                                    "Revisar mezcla, ecualización, acústica o cobertura antes de seguir subiendo nivel.",
                                    "Subir todos los canales y el master al máximo.",
                                    "Ignorar el problema si el sonómetro marca un número alto.",
                                    "Acercar todos los parlantes al micrófono principal."
                              ],
                              "correctIndex": 0,
                              "explanation": "El diagnóstico debe considerar la causa; el volumen no corrige todos los problemas."
                        },
                        {
                              "prompt": "¿Qué idea debería quedar clara en esta lección?",
                              "difficulty": "criterion",
                              "options": [
                                    "El nivel se decide con criterio técnico, no solo por sensación de potencia.",
                                    "El nivel alto reemplaza a la acústica.",
                                    "La presión sonora no puede medirse.",
                                    "Una consola elimina los problemas de sala."
                              ],
                              "correctIndex": 0,
                              "explanation": "La operación profesional combina percepción, medición, contexto y seguridad."
                        }
                  ]
            },
            {
                  "id": "lesson-06",
                  "type": "lesson",
                  "title": "Decibeles y medición",
                  "xp": 100,
                  "objective": "Interpretar los decibeles como una referencia técnica útil, evitando tratarlos como una escala lineal o como una competencia de volumen.",
                  "sourceSegments": [
                        {
                              "title": "2.1 - Unidad 02 - Intensidad, dB y Seguridad Auditiva",
                              "sourceRef": "Documento Fuente · Unidad 02 · Formato C Digital Premium",
                              "body": "Unidad 02 - Intensidad, dB y Seguridad Auditiva\n\nEl sonido se propaga como una sucesión de compresiones y rarefacciones del aire. Las partículas no viajan grandes distancias: transmiten energía a las partículas vecinas, de forma similar a una cadena de empujones.\n\nLa presión sonora es la variación de presión que produce una onda sonora respecto de la presión atmosférica. En una explicación inicial, puede pensarse como cuánto se modifica la presión del aire cuando pasa la onda sonora.\n\nLa intensidad se relaciona con la amplitud de la onda y con la percepción de volumen. Sonidos de mayor amplitud suelen percibirse como más fuertes; sonidos de menor amplitud, como más débiles.\n\nEl nivel de presión sonora se expresa habitualmente en decibeles SPL o NPS. Esta escala permite comparar niveles sonoros de manera práctica, pero no debe interpretarse como una regla lineal simple.\n\nEn la práctica, el técnico no usa los decibeles solo como un número aislado. Los interpreta junto con el contexto: tipo de evento, distancia al público, tamaño del espacio, tiempo de exposición, fatiga auditiva y calidad de la mezcla.\n\nLa medición ayuda a salir de la subjetividad. Dos personas pueden percibir el mismo evento de manera distinta, pero un sonómetro o decibelímetro permite tener una referencia objetiva para tomar mejores decisiones.\n\nEl nivel sonoro baja con la distancia. Por eso, escuchar o medir solo cerca del parlante no representa necesariamente lo que escucha el público ubicado más lejos.\n\nComo regla práctica, en campo libre y con una fuente puntual, duplicar la distancia puede reducir el nivel aproximadamente 6 dB. En salas reales esta regla puede variar por reflexiones, absorción, reverberación, cantidad de público y geometría del lugar.\n\nEn un espectáculo, el operador debe buscar un equilibrio: suficiente nivel para lograr claridad y cobertura, pero sin excederse ni generar una experiencia incómoda o riesgosa.\n\nLa seguridad auditiva forma parte del trabajo técnico. En eventos, ensayos y montajes puede haber exposición prolongada a niveles altos, tanto para el público como para músicos, técnicos y personal de producción.\n\nComo referencia institucional, NIOSH recomienda un límite de exposición ocupacional de 85 dBA para una jornada de 8 horas. OSHA también usa 85 dBA como nivel de acción para programas de conservación auditiva en exposición ocupacional de 8 horas. En Argentina, la SRT dispone el protocolo oficial para medición del nivel de ruido en ambiente laboral mediante la Resolución SRT 85/12.\n\nEstos valores se incorporan como referencia educativa y deben validarse con el experto técnico y el marco normativo aplicable antes de usarse en una certificación o recomendación profesional formal.",
                              "documentPages": [
                                    {
                                          "src": "assets/source/2-1-unidad-02-intensidad-db-seguridad-formato-c-continuo.png",
                                          "alt": "Documento Fuente Formato C Digital Premium para Unidad 02: Intensidad, dB y Seguridad Auditiva",
                                          "caption": "Formato C Digital Premium: documento fuente completo de Unidad 02, preparado para lectura en app."
                                    }
                              ],
                              "visualLabel": "Documento Fuente · Formato C",
                              "expertStatus": "Formato C integrado · Pendiente de validacion final por Matias",
                              "tags": [
                                    "Fuente de conocimiento",
                                    "Unidad 2",
                                    "Formato C",
                                    "dB",
                                    "Presion sonora",
                                    "Seguridad auditiva",
                                    "Antes del cuestionario"
                              ],
                              "preserveLineBreaks": true
                        }
                  ],
                  "theoryBlocks": [
                        {
                              "title": "Qué expresa el dB SPL / NPS",
                              "body": "El nivel de presión sonora se expresa habitualmente en decibeles SPL o NPS. La escala permite comparar niveles, pero no debe interpretarse como si fuera una regla lineal simple. Pequeños cambios numéricos pueden representar cambios importantes en energía o percepción.",
                              "note": "El dB exige interpretación, no lectura automática."
                        },
                        {
                              "title": "Medición objetiva",
                              "body": "Un sonómetro o decibelímetro permite obtener una referencia objetiva del nivel sonoro. Esa medición no reemplaza el oído ni el criterio, pero ayuda a tomar decisiones menos subjetivas y más defendibles técnicamente.",
                              "note": "Medir ayuda a salir del “me parece”."
                        },
                        {
                              "title": "Contexto de medición",
                              "body": "Un valor de dB no dice todo por sí solo. Hay que saber dónde se midió, durante cuánto tiempo, con qué ponderación, en qué tipo de evento y con qué objetivo. Medir al lado del parlante no representa necesariamente la experiencia de todo el público.",
                              "note": "El número sin contexto puede engañar."
                        },
                        {
                              "title": "Uso responsable",
                              "body": "La medición se usa para ajustar, comparar y prevenir. Si el nivel es alto pero el sonido no es claro, el dato de medición debe abrir un diagnóstico: cobertura, ubicación de parlantes, ecualización, mezcla, acústica o exceso de nivel.",
                              "note": "El sonómetro informa; el técnico decide."
                        }
                  ],
                  "questions": [
                        {
                              "prompt": "¿Para qué sirve expresar el nivel en dB SPL / NPS?",
                              "difficulty": "recognition",
                              "options": [
                                    "Para comparar niveles de presión sonora de manera técnica.",
                                    "Para medir la longitud del cable del micrófono.",
                                    "Para definir el color de la consola.",
                                    "Para reemplazar por completo la escucha humana."
                              ],
                              "correctIndex": 0,
                              "explanation": "El dB SPL/NPS permite expresar nivel de presión sonora."
                        },
                        {
                              "prompt": "¿Cuál es una interpretación correcta de los decibeles?",
                              "difficulty": "comprehension",
                              "options": [
                                    "Son una escala que requiere contexto técnico para interpretarse.",
                                    "Son una escala lineal idéntica a medir centímetros.",
                                    "Solo sirven si el evento es al aire libre.",
                                    "Indican automáticamente que una mezcla es buena."
                              ],
                              "correctIndex": 0,
                              "explanation": "El dB es una escala logarítmica y necesita contexto."
                        },
                        {
                              "prompt": "¿Qué aporta un sonómetro o decibelímetro?",
                              "difficulty": "comprehension",
                              "options": [
                                    "Una referencia objetiva del nivel sonoro.",
                                    "Una corrección automática de la mezcla.",
                                    "Una eliminación total de la reverberación.",
                                    "Una conversión de sonido a iluminación."
                              ],
                              "correctIndex": 0,
                              "explanation": "El instrumento mide nivel; no resuelve por sí mismo la operación."
                        },
                        {
                              "prompt": "Si dos técnicos discuten si el sistema está demasiado fuerte, una buena práctica es:",
                              "difficulty": "application",
                              "options": [
                                    "Medir el nivel en puntos relevantes y evaluar el contexto.",
                                    "Decidir por quién grita más fuerte.",
                                    "Subir el master hasta que nadie discuta.",
                                    "Medir solo pegado al parlante y cerrar el caso."
                              ],
                              "correctIndex": 0,
                              "explanation": "La medición debe hacerse con criterio y en ubicaciones representativas."
                        },
                        {
                              "prompt": "¿Qué dato falta si alguien solo dice “está a 90 dB” sin más información?",
                              "difficulty": "application",
                              "options": [
                                    "Dónde, cómo y durante cuánto se midió.",
                                    "El color exacto del gabinete del parlante.",
                                    "El nombre de la canción anterior.",
                                    "La cantidad de sillas del camarín."
                              ],
                              "correctIndex": 0,
                              "explanation": "Un número de dB necesita contexto de medición."
                        },
                        {
                              "prompt": "Un valor alto de dB con baja inteligibilidad indica que conviene:",
                              "difficulty": "criterion",
                              "options": [
                                    "Diagnosticar mezcla, acústica, cobertura o ubicación antes de subir más.",
                                    "Subir más porque el número alto siempre mejora la voz.",
                                    "Apagar el sonómetro porque contradice al oído.",
                                    "Cambiar todos los cables sin revisar la cadena."
                              ],
                              "correctIndex": 0,
                              "explanation": "El nivel alto no garantiza claridad. Hay que buscar la causa."
                        },
                        {
                              "prompt": "¿Qué afirmación usarías para explicar el rol de la medición?",
                              "difficulty": "criterion",
                              "options": [
                                    "La medición informa decisiones, pero no reemplaza el criterio técnico.",
                                    "La medición decide sola cómo mezclar.",
                                    "Si hay sonómetro, no hace falta escuchar.",
                                    "El dB solo importa en estudios, nunca en vivo."
                              ],
                              "correctIndex": 0,
                              "explanation": "El operador combina medición, escucha, contexto y experiencia."
                        }
                  ]
            },
            {
                  "id": "lesson-07",
                  "type": "lesson",
                  "title": "Distancia y cobertura",
                  "xp": 105,
                  "objective": "Aplicar la relación entre distancia y nivel sonoro para pensar cobertura de público y decisiones básicas de operación.",
                  "sourceSegments": [
                        {
                              "title": "2.1 - Unidad 02 - Intensidad, dB y Seguridad Auditiva",
                              "sourceRef": "Documento Fuente · Unidad 02 · Formato C Digital Premium",
                              "body": "Unidad 02 - Intensidad, dB y Seguridad Auditiva\n\nEl sonido se propaga como una sucesión de compresiones y rarefacciones del aire. Las partículas no viajan grandes distancias: transmiten energía a las partículas vecinas, de forma similar a una cadena de empujones.\n\nLa presión sonora es la variación de presión que produce una onda sonora respecto de la presión atmosférica. En una explicación inicial, puede pensarse como cuánto se modifica la presión del aire cuando pasa la onda sonora.\n\nLa intensidad se relaciona con la amplitud de la onda y con la percepción de volumen. Sonidos de mayor amplitud suelen percibirse como más fuertes; sonidos de menor amplitud, como más débiles.\n\nEl nivel de presión sonora se expresa habitualmente en decibeles SPL o NPS. Esta escala permite comparar niveles sonoros de manera práctica, pero no debe interpretarse como una regla lineal simple.\n\nEn la práctica, el técnico no usa los decibeles solo como un número aislado. Los interpreta junto con el contexto: tipo de evento, distancia al público, tamaño del espacio, tiempo de exposición, fatiga auditiva y calidad de la mezcla.\n\nLa medición ayuda a salir de la subjetividad. Dos personas pueden percibir el mismo evento de manera distinta, pero un sonómetro o decibelímetro permite tener una referencia objetiva para tomar mejores decisiones.\n\nEl nivel sonoro baja con la distancia. Por eso, escuchar o medir solo cerca del parlante no representa necesariamente lo que escucha el público ubicado más lejos.\n\nComo regla práctica, en campo libre y con una fuente puntual, duplicar la distancia puede reducir el nivel aproximadamente 6 dB. En salas reales esta regla puede variar por reflexiones, absorción, reverberación, cantidad de público y geometría del lugar.\n\nEn un espectáculo, el operador debe buscar un equilibrio: suficiente nivel para lograr claridad y cobertura, pero sin excederse ni generar una experiencia incómoda o riesgosa.\n\nLa seguridad auditiva forma parte del trabajo técnico. En eventos, ensayos y montajes puede haber exposición prolongada a niveles altos, tanto para el público como para músicos, técnicos y personal de producción.\n\nComo referencia institucional, NIOSH recomienda un límite de exposición ocupacional de 85 dBA para una jornada de 8 horas. OSHA también usa 85 dBA como nivel de acción para programas de conservación auditiva en exposición ocupacional de 8 horas. En Argentina, la SRT dispone el protocolo oficial para medición del nivel de ruido en ambiente laboral mediante la Resolución SRT 85/12.\n\nEstos valores se incorporan como referencia educativa y deben validarse con el experto técnico y el marco normativo aplicable antes de usarse en una certificación o recomendación profesional formal.",
                              "documentPages": [
                                    {
                                          "src": "assets/source/2-1-unidad-02-intensidad-db-seguridad-formato-c-continuo.png",
                                          "alt": "Documento Fuente Formato C Digital Premium para Unidad 02: Intensidad, dB y Seguridad Auditiva",
                                          "caption": "Formato C Digital Premium: documento fuente completo de Unidad 02, preparado para lectura en app."
                                    }
                              ],
                              "visualLabel": "Documento Fuente · Formato C",
                              "expertStatus": "Formato C integrado · Pendiente de validacion final por Matias",
                              "tags": [
                                    "Fuente de conocimiento",
                                    "Unidad 2",
                                    "Formato C",
                                    "dB",
                                    "Presion sonora",
                                    "Seguridad auditiva",
                                    "Antes del cuestionario"
                              ],
                              "preserveLineBreaks": true
                        }
                  ],
                  "theoryBlocks": [
                        {
                              "title": "El nivel baja con la distancia",
                              "body": "El nivel sonoro no se mantiene igual en todo el espacio. A medida que nos alejamos de una fuente, normalmente recibimos menos nivel directo. Por eso el público cercano al sistema puede escuchar muy distinto al público ubicado al fondo.",
                              "note": "La distancia cambia la experiencia de escucha."
                        },
                        {
                              "title": "Regla práctica de -6 dB",
                              "body": "Como aproximación, al duplicar la distancia a una fuente puntual en campo libre, el nivel puede reducirse alrededor de 6 dB. En una sala real esto puede cambiar por reflexiones, absorción, reverberación y geometría del lugar.",
                              "note": "Es una guía, no una ley mágica para cualquier sala."
                        },
                        {
                              "title": "Cobertura",
                              "body": "La cobertura describe cómo se distribuye el sonido sobre el área del público. Una cobertura pobre puede producir zonas demasiado fuertes, zonas débiles o áreas donde la voz pierde claridad.",
                              "note": "La cobertura se escucha y se mide en el espacio, no en un solo punto."
                        },
                        {
                              "title": "Decisiones posibles",
                              "body": "Si el frente escucha demasiado fuerte y el fondo escucha poco, subir todo puede empeorar la experiencia del frente. Puede convenir revisar orientación de parlantes, distribución, delays, ecualización, ganancia o acústica antes de aumentar nivel global.",
                              "note": "El problema puede ser distribución, no potencia."
                        }
                  ],
                  "questions": [
                        {
                              "prompt": "¿Qué suele ocurrir con el nivel sonoro al aumentar la distancia a una fuente?",
                              "difficulty": "recognition",
                              "options": [
                                    "Tiende a disminuir.",
                                    "Siempre aumenta.",
                                    "Se vuelve independiente del medio.",
                                    "Se transforma automáticamente en luz."
                              ],
                              "correctIndex": 0,
                              "explanation": "El nivel directo suele bajar al alejarnos de la fuente."
                        },
                        {
                              "prompt": "La regla práctica de duplicar distancia ≈ -6 dB se usa como:",
                              "difficulty": "comprehension",
                              "options": [
                                    "Una aproximación para pensar caída de nivel en condiciones ideales.",
                                    "Una garantía exacta en cualquier sala y situación.",
                                    "Un método para afinar instrumentos.",
                                    "Una forma de calcular el color del sonido."
                              ],
                              "correctIndex": 0,
                              "explanation": "Es una aproximación útil, no una regla absoluta en todos los espacios."
                        },
                        {
                              "prompt": "¿Por qué medir solo al lado del parlante puede ser insuficiente?",
                              "difficulty": "comprehension",
                              "options": [
                                    "Porque no representa necesariamente lo que escucha todo el público.",
                                    "Porque el parlante no genera presión sonora cerca suyo.",
                                    "Porque la medición solo sirve en estudios de grabación.",
                                    "Porque el sonido no cambia con la distancia."
                              ],
                              "correctIndex": 0,
                              "explanation": "La experiencia del público varía según distancia y ubicación."
                        },
                        {
                              "prompt": "El frente del público escucha muy fuerte y el fondo escucha poco. ¿Qué problema puede estar apareciendo?",
                              "difficulty": "application",
                              "options": [
                                    "Cobertura desigual.",
                                    "Ausencia total de fuente sonora.",
                                    "Imposibilidad de medir dB.",
                                    "Falla obligatoria del cable de corriente."
                              ],
                              "correctIndex": 0,
                              "explanation": "La diferencia entre zonas puede indicar un problema de cobertura."
                        },
                        {
                              "prompt": "¿Qué decisión es más razonable ante cobertura desigual?",
                              "difficulty": "application",
                              "options": [
                                    "Revisar orientación, distribución y mediciones en varios puntos.",
                                    "Subir el master sin revisar nada.",
                                    "Medir solo donde está más fuerte.",
                                    "Asumir que el público del fondo escucha igual."
                              ],
                              "correctIndex": 0,
                              "explanation": "La cobertura se analiza comparando puntos y revisando el sistema."
                        },
                        {
                              "prompt": "En una sala con mucha reverberación, la regla de -6 dB puede no cumplirse exactamente porque:",
                              "difficulty": "criterion",
                              "options": [
                                    "Las reflexiones y materiales modifican el campo sonoro.",
                                    "El sonido deja de propagarse por el aire.",
                                    "Los decibeles dejan de existir.",
                                    "La consola bloquea la presión sonora."
                              ],
                              "correctIndex": 0,
                              "explanation": "Las condiciones reales de sala afectan el comportamiento del nivel."
                        },
                        {
                              "prompt": "Si subir volumen mejora el fondo pero vuelve insoportable el frente, ¿qué criterio conviene aplicar?",
                              "difficulty": "criterion",
                              "options": [
                                    "Pensar en distribución/cobertura antes que solo nivel global.",
                                    "Priorizar siempre al fondo aunque el frente se lastime.",
                                    "Usar el master como única herramienta.",
                                    "Ignorar la distancia porque no afecta el sonido."
                              ],
                              "correctIndex": 0,
                              "explanation": "El problema puede requerir una solución de cobertura, no solo volumen."
                        }
                  ]
            },
            {
                  "id": "lesson-08",
                  "type": "lesson",
                  "title": "Seguridad auditiva y operación responsable",
                  "xp": 110,
                  "objective": "Incorporar criterios básicos de seguridad auditiva para tomar decisiones responsables en ensayos, montajes y eventos.",
                  "sourceSegments": [
                        {
                              "title": "2.1 - Unidad 02 - Intensidad, dB y Seguridad Auditiva",
                              "sourceRef": "Documento Fuente · Unidad 02 · Formato C Digital Premium",
                              "body": "Unidad 02 - Intensidad, dB y Seguridad Auditiva\n\nEl sonido se propaga como una sucesión de compresiones y rarefacciones del aire. Las partículas no viajan grandes distancias: transmiten energía a las partículas vecinas, de forma similar a una cadena de empujones.\n\nLa presión sonora es la variación de presión que produce una onda sonora respecto de la presión atmosférica. En una explicación inicial, puede pensarse como cuánto se modifica la presión del aire cuando pasa la onda sonora.\n\nLa intensidad se relaciona con la amplitud de la onda y con la percepción de volumen. Sonidos de mayor amplitud suelen percibirse como más fuertes; sonidos de menor amplitud, como más débiles.\n\nEl nivel de presión sonora se expresa habitualmente en decibeles SPL o NPS. Esta escala permite comparar niveles sonoros de manera práctica, pero no debe interpretarse como una regla lineal simple.\n\nEn la práctica, el técnico no usa los decibeles solo como un número aislado. Los interpreta junto con el contexto: tipo de evento, distancia al público, tamaño del espacio, tiempo de exposición, fatiga auditiva y calidad de la mezcla.\n\nLa medición ayuda a salir de la subjetividad. Dos personas pueden percibir el mismo evento de manera distinta, pero un sonómetro o decibelímetro permite tener una referencia objetiva para tomar mejores decisiones.\n\nEl nivel sonoro baja con la distancia. Por eso, escuchar o medir solo cerca del parlante no representa necesariamente lo que escucha el público ubicado más lejos.\n\nComo regla práctica, en campo libre y con una fuente puntual, duplicar la distancia puede reducir el nivel aproximadamente 6 dB. En salas reales esta regla puede variar por reflexiones, absorción, reverberación, cantidad de público y geometría del lugar.\n\nEn un espectáculo, el operador debe buscar un equilibrio: suficiente nivel para lograr claridad y cobertura, pero sin excederse ni generar una experiencia incómoda o riesgosa.\n\nLa seguridad auditiva forma parte del trabajo técnico. En eventos, ensayos y montajes puede haber exposición prolongada a niveles altos, tanto para el público como para músicos, técnicos y personal de producción.\n\nComo referencia institucional, NIOSH recomienda un límite de exposición ocupacional de 85 dBA para una jornada de 8 horas. OSHA también usa 85 dBA como nivel de acción para programas de conservación auditiva en exposición ocupacional de 8 horas. En Argentina, la SRT dispone el protocolo oficial para medición del nivel de ruido en ambiente laboral mediante la Resolución SRT 85/12.\n\nEstos valores se incorporan como referencia educativa y deben validarse con el experto técnico y el marco normativo aplicable antes de usarse en una certificación o recomendación profesional formal.",
                              "documentPages": [
                                    {
                                          "src": "assets/source/2-1-unidad-02-intensidad-db-seguridad-formato-c-continuo.png",
                                          "alt": "Documento Fuente Formato C Digital Premium para Unidad 02: Intensidad, dB y Seguridad Auditiva",
                                          "caption": "Formato C Digital Premium: documento fuente completo de Unidad 02, preparado para lectura en app."
                                    }
                              ],
                              "visualLabel": "Documento Fuente · Formato C",
                              "expertStatus": "Formato C integrado · Pendiente de validacion final por Matias",
                              "tags": [
                                    "Fuente de conocimiento",
                                    "Unidad 2",
                                    "Formato C",
                                    "dB",
                                    "Presion sonora",
                                    "Seguridad auditiva",
                                    "Antes del cuestionario"
                              ],
                              "preserveLineBreaks": true
                        }
                  ],
                  "theoryBlocks": [
                        {
                              "title": "Seguridad auditiva",
                              "body": "La seguridad auditiva no es un agregado externo al trabajo de sonido: forma parte de la operación profesional. Quien opera sonido toma decisiones que afectan la experiencia y la salud auditiva de público, artistas y equipo técnico.",
                              "note": "Cuidar la escucha también es trabajo técnico."
                        },
                        {
                              "title": "Nivel y tiempo de exposición",
                              "body": "El riesgo auditivo depende del nivel sonoro y del tiempo de exposición. Un nivel elevado durante pocos segundos no es lo mismo que una exposición sostenida durante horas. Por eso los criterios de seguridad suelen relacionar dBA con duración.",
                              "note": "Nivel y tiempo deben pensarse juntos."
                        },
                        {
                              "title": "Referencias institucionales",
                              "body": "Como referencia de apoyo, NIOSH recomienda 85 dBA para una jornada ocupacional de 8 horas. OSHA usa 85 dBA como nivel de acción para conservación auditiva en exposición ocupacional de 8 horas. En Argentina, la SRT establece protocolos para medición de ruido laboral mediante Resolución SRT 85/12.",
                              "note": "Estos valores deben validarse antes de usarse como indicación normativa dentro de una certificación."
                        },
                        {
                              "title": "Operación responsable",
                              "body": "Una práctica responsable combina medición, escucha, pausas, ubicación de parlantes, comunicación con producción, protección auditiva cuando corresponde y revisión de que el nivel sea coherente con el tipo de evento.",
                              "note": "La seguridad se diseña antes de que aparezca el problema."
                        }
                  ],
                  "questions": [
                        {
                              "prompt": "¿Por qué la seguridad auditiva forma parte del trabajo de sonido?",
                              "difficulty": "recognition",
                              "options": [
                                    "Porque el operador influye en el nivel al que se expone el público y el equipo.",
                                    "Porque reemplaza la necesidad de mezclar.",
                                    "Porque solo importa en estudios, nunca en vivo.",
                                    "Porque depende únicamente de la marca de la consola."
                              ],
                              "correctIndex": 0,
                              "explanation": "Las decisiones de operación pueden afectar exposición sonora y comodidad auditiva."
                        },
                        {
                              "prompt": "El riesgo auditivo se relaciona principalmente con:",
                              "difficulty": "comprehension",
                              "options": [
                                    "Nivel sonoro y tiempo de exposición.",
                                    "Color de los parlantes y tamaño del escenario.",
                                    "Cantidad de canciones en la lista.",
                                    "Tipo de iluminación usada."
                              ],
                              "correctIndex": 0,
                              "explanation": "La exposición combina cuánto nivel y durante cuánto tiempo."
                        },
                        {
                              "prompt": "¿Qué significa usar una referencia como 85 dBA / 8 h en este curso?",
                              "difficulty": "comprehension",
                              "options": [
                                    "Una referencia institucional para estudiar, pendiente de validación normativa según contexto.",
                                    "Una autorización automática para cualquier evento.",
                                    "Una garantía de que todo sonido menor es perfecto.",
                                    "Una regla que reemplaza al experto técnico."
                              ],
                              "correctIndex": 0,
                              "explanation": "Debe usarse como referencia educativa, no como habilitación o recomendación legal automática."
                        },
                        {
                              "prompt": "En un ensayo largo, el nivel está alto y el equipo técnico permanece cerca de los parlantes. ¿Qué conviene considerar?",
                              "difficulty": "application",
                              "options": [
                                    "Reducir exposición, medir, hacer pausas o usar protección auditiva si corresponde.",
                                    "Mantener el nivel porque el ensayo no tiene público.",
                                    "Acercar más los monitores para sentir más potencia.",
                                    "Quitar toda medición porque se trata de una práctica."
                              ],
                              "correctIndex": 0,
                              "explanation": "La exposición del equipo también importa; no solo la del público."
                        },
                        {
                              "prompt": "¿Cuál sería una conducta responsable antes de un evento?",
                              "difficulty": "application",
                              "options": [
                                    "Revisar niveles, cobertura, contexto y posibles riesgos de exposición.",
                                    "Decidir el nivel final solo por potencia disponible.",
                                    "Evitar medir para no complicar el montaje.",
                                    "Subir todo antes de que entre el público."
                              ],
                              "correctIndex": 0,
                              "explanation": "La operación responsable prevé nivel, cobertura y seguridad."
                        },
                        {
                              "prompt": "Durante un evento, varias personas se tapan los oídos cerca del frente. ¿Qué señal puede estar apareciendo?",
                              "difficulty": "criterion",
                              "options": [
                                    "Posible exceso de nivel o molestia auditiva en esa zona.",
                                    "Garantía de que la mezcla está perfecta.",
                                    "Necesidad automática de subir agudos.",
                                    "Falla segura del micrófono principal."
                              ],
                              "correctIndex": 0,
                              "explanation": "La reacción del público es un dato operativo que debe considerarse."
                        },
                        {
                              "prompt": "¿Qué frase representa mejor el criterio de esta unidad?",
                              "difficulty": "criterion",
                              "options": [
                                    "Medir, escuchar, ajustar y proteger.",
                                    "Subir, sostener, ignorar y terminar.",
                                    "Mezclar sin mirar el espacio.",
                                    "Usar el número de dB como única verdad."
                              ],
                              "correctIndex": 0,
                              "explanation": "El criterio profesional combina medición, escucha, ajuste y prevención."
                        }
                  ]
            },
            {
                  "id": "challenge-02",
                  "type": "challenge",
                  "title": "Desafío: nivel seguro y cobertura en sala chica",
                  "xp": 170,
                  "objective": "Aplicar presión sonora, medición, distancia, cobertura y seguridad auditiva en un caso operativo realista.",
                  "sourceSegments": [
                        {
                              "title": "2.1 - Unidad 02 - Intensidad, dB y Seguridad Auditiva",
                              "sourceRef": "Documento Fuente · Unidad 02 · Formato C Digital Premium",
                              "body": "Unidad 02 - Intensidad, dB y Seguridad Auditiva\n\nEl sonido se propaga como una sucesión de compresiones y rarefacciones del aire. Las partículas no viajan grandes distancias: transmiten energía a las partículas vecinas, de forma similar a una cadena de empujones.\n\nLa presión sonora es la variación de presión que produce una onda sonora respecto de la presión atmosférica. En una explicación inicial, puede pensarse como cuánto se modifica la presión del aire cuando pasa la onda sonora.\n\nLa intensidad se relaciona con la amplitud de la onda y con la percepción de volumen. Sonidos de mayor amplitud suelen percibirse como más fuertes; sonidos de menor amplitud, como más débiles.\n\nEl nivel de presión sonora se expresa habitualmente en decibeles SPL o NPS. Esta escala permite comparar niveles sonoros de manera práctica, pero no debe interpretarse como una regla lineal simple.\n\nEn la práctica, el técnico no usa los decibeles solo como un número aislado. Los interpreta junto con el contexto: tipo de evento, distancia al público, tamaño del espacio, tiempo de exposición, fatiga auditiva y calidad de la mezcla.\n\nLa medición ayuda a salir de la subjetividad. Dos personas pueden percibir el mismo evento de manera distinta, pero un sonómetro o decibelímetro permite tener una referencia objetiva para tomar mejores decisiones.\n\nEl nivel sonoro baja con la distancia. Por eso, escuchar o medir solo cerca del parlante no representa necesariamente lo que escucha el público ubicado más lejos.\n\nComo regla práctica, en campo libre y con una fuente puntual, duplicar la distancia puede reducir el nivel aproximadamente 6 dB. En salas reales esta regla puede variar por reflexiones, absorción, reverberación, cantidad de público y geometría del lugar.\n\nEn un espectáculo, el operador debe buscar un equilibrio: suficiente nivel para lograr claridad y cobertura, pero sin excederse ni generar una experiencia incómoda o riesgosa.\n\nLa seguridad auditiva forma parte del trabajo técnico. En eventos, ensayos y montajes puede haber exposición prolongada a niveles altos, tanto para el público como para músicos, técnicos y personal de producción.\n\nComo referencia institucional, NIOSH recomienda un límite de exposición ocupacional de 85 dBA para una jornada de 8 horas. OSHA también usa 85 dBA como nivel de acción para programas de conservación auditiva en exposición ocupacional de 8 horas. En Argentina, la SRT dispone el protocolo oficial para medición del nivel de ruido en ambiente laboral mediante la Resolución SRT 85/12.\n\nEstos valores se incorporan como referencia educativa y deben validarse con el experto técnico y el marco normativo aplicable antes de usarse en una certificación o recomendación profesional formal.",
                              "documentPages": [
                                    {
                                          "src": "assets/source/2-1-unidad-02-intensidad-db-seguridad-formato-c-continuo.png",
                                          "alt": "Documento Fuente Formato C Digital Premium para Unidad 02: Intensidad, dB y Seguridad Auditiva",
                                          "caption": "Formato C Digital Premium: documento fuente completo de Unidad 02, preparado para lectura en app."
                                    }
                              ],
                              "visualLabel": "Documento Fuente · Formato C",
                              "expertStatus": "Formato C integrado · Pendiente de validacion final por Matias",
                              "tags": [
                                    "Fuente de conocimiento",
                                    "Unidad 2",
                                    "Formato C",
                                    "dB",
                                    "Presion sonora",
                                    "Seguridad auditiva",
                                    "Antes del cuestionario"
                              ],
                              "preserveLineBreaks": true
                        }
                  ],
                  "theoryBlocks": [
                        {
                              "title": "Escenario del desafío",
                              "body": "Llegás a una sala chica para una charla con música de apertura. Hay dos parlantes principales al frente. Las primeras filas dicen que el sonido está muy fuerte, pero al fondo algunas personas dicen que la voz pierde claridad. Producción pide “subir un poco más” porque cree que así se arregla todo.",
                              "note": "El desafío integra toda la Unidad 02."
                        },
                        {
                              "title": "Qué deberías poder decidir",
                              "body": "Debés evaluar si el problema es solo de volumen o si hay una cuestión de cobertura, ubicación, acústica, mezcla o medición. La respuesta correcta no siempre es subir nivel. También hay que pensar en comodidad y seguridad auditiva.",
                              "note": "El criterio vale más que la reacción automática."
                        },
                        {
                              "title": "Acciones razonables",
                              "body": "Medir en distintos puntos, escuchar desde frente y fondo, revisar orientación de parlantes, ajustar nivel según tipo de evento, cuidar exposición del equipo y evitar soluciones que mejoren una zona empeorando otra.",
                              "note": "La unidad se demuestra aplicando conceptos a un caso."
                        }
                  ],
                  "questions": [
                        {
                              "prompt": "¿Cuál es el problema principal del caso?",
                              "difficulty": "comprehension",
                              "options": [
                                    "No hay un único problema de volumen: también puede haber cobertura y claridad desigual.",
                                    "La única falla posible es que falta potencia general.",
                                    "La voz no puede medirse porque es una charla.",
                                    "El público del frente siempre debe recibir más nivel."
                              ],
                              "correctIndex": 0,
                              "explanation": "El caso combina nivel, cobertura, distancia y comodidad auditiva."
                        },
                        {
                              "prompt": "¿Qué acción inicial es más razonable?",
                              "difficulty": "application",
                              "options": [
                                    "Escuchar y medir en más de un punto de la sala.",
                                    "Subir el master porque producción lo pidió.",
                                    "Medir solo al lado de un parlante.",
                                    "Ignorar al público del frente."
                              ],
                              "correctIndex": 0,
                              "explanation": "El diagnóstico requiere puntos representativos, no una sola posición."
                        },
                        {
                              "prompt": "Si el frente está fuerte y el fondo poco claro, ¿qué conviene sospechar?",
                              "difficulty": "application",
                              "options": [
                                    "Problema de cobertura, orientación o acústica, no solo falta de volumen.",
                                    "Que los decibeles no existen en salas chicas.",
                                    "Que el micrófono no puede captar voz humana.",
                                    "Que el parlante no necesita aire para funcionar."
                              ],
                              "correctIndex": 0,
                              "explanation": "La distribución del sonido puede ser desigual."
                        },
                        {
                              "prompt": "¿Por qué subir todo puede ser una mala decisión?",
                              "difficulty": "criterion",
                              "options": [
                                    "Porque puede empeorar la molestia del frente y aumentar riesgo sin resolver claridad al fondo.",
                                    "Porque todo aumento de nivel elimina reverberación.",
                                    "Porque el sonido deja de llegar al fondo.",
                                    "Porque los parlantes pierden su función de reproducción."
                              ],
                              "correctIndex": 0,
                              "explanation": "Más nivel global puede agravar molestias y no resolver la causa."
                        },
                        {
                              "prompt": "¿Qué dato técnico ayuda a justificar la decisión ante producción?",
                              "difficulty": "criterion",
                              "options": [
                                    "Mediciones y escucha comparativa entre frente, centro y fondo.",
                                    "La opinión de quien habla más fuerte.",
                                    "El tamaño del logo del parlante.",
                                    "El nombre del archivo musical de apertura."
                              ],
                              "correctIndex": 0,
                              "explanation": "Medir y escuchar en zonas diferentes permite argumentar con evidencia."
                        },
                        {
                              "prompt": "¿Qué criterio de seguridad aparece en el caso?",
                              "difficulty": "criterion",
                              "options": [
                                    "Evitar niveles innecesariamente altos y considerar tiempo de exposición.",
                                    "Mantener volumen alto porque es más profesional.",
                                    "No medir para que el evento fluya más rápido.",
                                    "Priorizar la sensación de potencia sobre la comodidad auditiva."
                              ],
                              "correctIndex": 0,
                              "explanation": "La seguridad auditiva incluye nivel y tiempo de exposición."
                        },
                        {
                              "prompt": "¿Cuál sería una respuesta profesional a producción?",
                              "difficulty": "criterion",
                              "options": [
                                    "“Voy a medir y revisar cobertura; subir todo puede empeorar el frente sin mejorar la claridad del fondo”.",
                                    "“Sí, subimos todo al máximo y listo”.",
                                    "“No hace falta medir porque la sala es chica”.",
                                    "“La seguridad auditiva no tiene relación con sonido en vivo”."
                              ],
                              "correctIndex": 0,
                              "explanation": "La respuesta explica criterio técnico y evita una solución automática riesgosa."
                        }
                  ]
            }
      ]
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
        prompt: "¿Qué describe mejor el fenómeno sonoro explicado en la unidad?",
        difficulty: "recognition",
        options: [
          "Una vibración que se propaga por un medio material y puede ser percibida por un receptor.",
          "Una señal eléctrica que existe solamente cuando hay micrófono, consola y parlantes.",
          "Una propiedad visual del escenario que aparece cuando se encienden las luces.",
          "Una partitura escrita que se transforma automáticamente en música sin reproducción."
        ],
        correctIndex: 0,
        explanation: "El sonido aparece como una perturbación o vibración que necesita un medio material, como el aire, para propagarse hasta un receptor."
      },
      {
        prompt: "Cuando el documento dice que la música “vive cada vez que se reproduce”, ¿qué idea quiere remarcar?",
        difficulty: "comprehension",
        options: [
          "Que la música solo existe si está escrita en una partitura correctamente.",
          "Que la música se vuelve experiencia sonora cuando se ejecuta o reproduce en el tiempo.",
          "Que todo instrumento produce música aunque nadie pueda oírlo.",
          "Que la música depende únicamente del equipo de amplificación utilizado."
        ],
        correctIndex: 1,
        explanation: "La idea central es que la música, como experiencia audible, ocurre en el tiempo cada vez que se reproduce, se canta o se ejecuta."
      },
      {
        prompt: "¿Por qué en el espacio exterior no podríamos oír una explosión como en muchas películas?",
        difficulty: "comprehension",
        options: [
          "Porque las ondas sonoras se transforman siempre en ondas de luz.",
          "Porque la explosión tendría una frecuencia demasiado grave para el oído humano.",
          "Porque falta un medio material, como aire u otro medio, que transporte la vibración sonora.",
          "Porque el sonido solo puede existir dentro de una sala cerrada."
        ],
        correctIndex: 2,
        explanation: "El sonido necesita un medio de propagación. En ausencia de aire u otro medio material, la vibración sonora no puede viajar hasta el oído."
      },
      {
        prompt: "¿Cuál afirmación interpreta mejor la idea de energía sonora?",
        difficulty: "comprehension",
        options: [
          "Es una energía infinita: una vez producida, mantiene siempre la misma intensidad.",
          "Es exactamente lo mismo que la señal eléctrica que viaja por un cable de audio.",
          "Es una propiedad exclusiva de los instrumentos musicales acústicos.",
          "Es una forma de energía asociada al sonido, que puede ser mayor o menor según el impulso de la fuente."
        ],
        correctIndex: 3,
        explanation: "La energía sonora no es infinita: depende del impulso de la fuente, como la voz, un parlante o un instrumento."
      },
      {
        prompt: "¿Cuál es la diferencia más precisa entre absorción sonora y sonido reflejado?",
        difficulty: "application",
        options: [
          "La absorción aumenta la velocidad del sonido; el reflejo elimina la fuente sonora.",
          "La absorción transforma parte de la energía sonora; el sonido reflejado rebota en una superficie.",
          "La absorción ocurre solo al aire libre; el reflejo ocurre solo en estudios de grabación.",
          "La absorción convierte el sonido en señal eléctrica; el reflejo lo convierte en música."
        ],
        correctIndex: 1,
        explanation: "Absorber implica transformar parte de la energía sonora, por ejemplo en calor. Reflejar implica que parte del sonido rebote en una superficie."
      },
      {
        prompt: "Entrás a una sala con paredes duras, piso duro y casi ningún material absorbente. ¿Qué es más probable que ocurra con el sonido?",
        difficulty: "application",
        options: [
          "El sonido dejará de necesitar aire para propagarse.",
          "La velocidad del sonido bajará automáticamente a cero.",
          "Aumentarán las reflexiones y puede empeorar la claridad de escucha.",
          "El sonido se convertirá directamente en corriente eléctrica."
        ],
        correctIndex: 2,
        explanation: "Las superficies duras tienden a reflejar más energía sonora. Eso puede aumentar rebotes y afectar la claridad."
      },
      {
        prompt: "Un alumno dice: “El sonido desaparece porque la energía se pierde”. ¿Cuál sería la corrección más adecuada?",
        difficulty: "criterion",
        options: [
          "La energía no desaparece sin más: se va transformando, por ejemplo, en calor.",
          "La afirmación es correcta: la energía sonora se destruye completamente al tocar una pared.",
          "El sonido nunca disminuye; si se produce una vez, conserva siempre la misma intensidad.",
          "La energía sonora solo se pierde cuando se usa un micrófono dinámico."
        ],
        correctIndex: 0,
        explanation: "La unidad plantea que la energía del sonido no se pierde simplemente, sino que se transforma gradualmente, por ejemplo en calor."
      },
      {
        prompt: "Si recordamos que el sonido viaja aproximadamente a 340 metros por segundo en el aire, ¿qué conclusión práctica es correcta?",
        difficulty: "application",
        options: [
          "Que todos los sonidos tienen la misma intensidad sin importar la fuente.",
          "Que la música viaja más rápido que la luz dentro de un espectáculo.",
          "Que el sonido no necesita medio de propagación si hay suficiente volumen.",
          "Que en un segundo el sonido puede recorrer una distancia considerable dentro de un espacio."
        ],
        correctIndex: 3,
        explanation: "La velocidad aproximada de 340 m/s ayuda a dimensionar cómo el sonido se propaga en el aire y por qué la distancia importa en espacios reales."
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
    lastVisited: "lesson-01",
    uiTheme: "dark",
    demoAdvances: 0
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

function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.uiTheme || "dark");
}

function getThemeLabel() {
  return state.uiTheme === "light" ? "Tema oscuro" : "Tema claro";
}

function getThemeIcon() {
  return state.uiTheme === "light" ? "🌙" : "☀️";
}

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
  applyTheme();
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
        <button class="theme-toggle-btn" data-action="toggle-theme" title="Cambiar tema visual">${getThemeIcon()} ${getThemeLabel()}</button>
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
        <span class="badge">🎧 Prototipo v16 · Dist deploy</span>
        <h1>Aprendé sonido para espectáculos practicando.</h1>
        <p class="hero-copy">
          Esta versión permite revisar toda la navegación y la GUI con tema claro/oscuro y recorrido UX completo, incluyendo salto de cuestionarios sin responder.
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
          <div class="progress-caption">${completionPercent()}% del prototipo disponible</div>
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
            <p class="kicker">Módulos disponibles</p>
            <h2>Unidades activas del prototipo</h2>
            <p class="objective">Completá las lecciones en orden o usá el modo recorrido UX para revisar pantallas, unidades y GUI sin responder cuestionarios.</p>
          </div>
          <button class="ghost-btn" data-action="reset">Reiniciar</button>
        </div>
        <div class="lesson-map">
          ${renderAvailableLessonSections()}
        </div>
      </main>
    </section>
  `;
}

function renderAvailableLessonSections() {
  return course.modules
    .filter((module) => module.status === "available" && Array.isArray(module.lessons) && module.lessons.length)
    .map((module, moduleIndex) => `
      <section class="lesson-section">
        <div class="lesson-section-header">
          <div>
            <p class="kicker">Unidad ${moduleIndex + 1}</p>
            <h2>${module.title}</h2>
          </div>
          <span class="small-pill">${module.lessons.length} pasos</span>
        </div>
        ${module.lessons.map(renderLessonCard).join("")}
      </section>
    `)
    .join("");
}

function renderModuleCard(module, index) {
  const isActive = module.status === "available";
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
          <span class="small-pill">📚 documento fuente</span>
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
        <span class="small-pill">${lesson.type === "challenge" ? "🏁 Desafío final" : "📚 Documento Fuente + lección"}</span>
      </div>
      <p class="kicker">${lesson.type === "challenge" ? "Desafío del módulo" : "Antes del cuestionario"}</p>
      <h1 class="lesson-title">${lesson.title}</h1>
      <p class="objective">${lesson.objective}</p>

      <div class="learning-flow" aria-label="Flujo de aprendizaje">
        <div class="flow-item active"><strong>1</strong><span>Documento Fuente</span></div>
        <div class="flow-item"><strong>2</strong><span>Guía curada</span></div>
        <div class="flow-item"><strong>3</strong><span>Cuestionario</span></div>
        <div class="flow-item demo"><strong>UX</strong><span>Recorrido libre</span></div>
      </div>

      <div class="source-policy">
        <strong>📌 Nueva regla:</strong> primero se muestra la documentación fuente completa o segmentada.
        Este bloque conserva texto original, referencias visuales y estado de validación experta antes de pasar al cuestionario.
      </div>

      <div class="theory-shell">
        <div class="reading-meter">
          <div class="reading-meter-row">
            <span>Progreso de lectura del Documento Fuente + guía</span>
            <strong id="readingPercent">${readingDone ? 100 : 0}%</strong>
          </div>
          <div class="progress-bar"><div id="readingFill" class="progress-fill" style="width:${readingDone ? 100 : 0}%"></div></div>
        </div>

        <section id="theoryScroll" class="theory-scroll" tabindex="0" aria-label="Documento fuente y material teórico de la lección">
          ${renderSourceDocumentation(lesson)}
          <div class="study-divider">
            <span>📘 Después del Documento Fuente</span>
            <h2>Ideas principales / guía curada</h2>
            <p>Esta segunda parte muestra las ideas principales que ya venían en la app, ordenadas para estudiar mejor. No reemplaza al Documento Fuente: deriva de él.</p>
          </div>
          ${lesson.theoryBlocks.map(renderTheoryBlock).join("")}
        </section>

        <div class="footer-actions">
          <button id="startQuizBtn" class="primary-btn" data-action="start-quiz" ${readingDone ? "" : "disabled"}>
            ${readingDone ? "Ir al cuestionario" : "Leé el Documento Fuente y la guía hasta el final"}
          </button>
          <button class="flow-forward-btn" data-action="advance-flow" title="Modo prototipo: avanza sin contestar cuestionario">Seguir flujo →</button>
          <button class="secondary-btn" data-action="go-home">Guardar y volver</button>
        </div>
        <p class="demo-note">Modo UX: “Seguir flujo” permite recorrer pantallas, unidades y tema visual sin responder el cuestionario. Usa un botón de alto contraste en tema claro y oscuro.</p>
      </div>
    </main>
  `;
}

function renderSourceDocumentation(lesson) {
  const segments = lesson.sourceSegments || [];
  if (!segments.length) {
    return `
      <section class="source-doc-section">
        <div class="source-doc-header">
          <p class="kicker">Documento Fuente</p>
          <h2>Fuente pendiente de segmentar</h2>
          <p>Esta lección todavía no tiene segmentos del documento fuente cargados.</p>
        </div>
      </section>
    `;
  }

  return `
    <section class="source-doc-section">
      <div class="source-doc-header">
        <p class="kicker">Documento Fuente</p>
        <h2>Documento Fuente de la unidad</h2>
        <p>
          Este bloque muestra el documento base de la unidad antes de cualquier resumen.
          La idea es que el alumno lea primero la fuente completa con texto e imagen; después pasa a ideas principales y recién al cuestionario.
        </p>
      </div>
      <div class="source-segment-list">
        ${segments.map(renderSourceSegment).join("")}
      </div>
    </section>
  `;
}

function renderSourceSegment(segment, index) {
  const hasDocumentPages = Array.isArray(segment.documentPages) && segment.documentPages.length > 0;
  const bodyMarkup = segment.preserveLineBreaks
    ? `<div class="source-full-text">${segment.body}</div>`
    : `<p>${segment.body}</p>`;

  if (hasDocumentPages) {
    return `
      <article class="source-segment pdf-source-segment">
        <div class="source-segment-top">
          <div>
            <span class="source-ref">${segment.sourceRef}</span>
            <h3>${index + 1}. ${segment.title}</h3>
          </div>
          <span class="review-pill">👨‍🏫 ${segment.expertStatus}</span>
        </div>

        <div class="document-source-layout">
          <div class="document-pages">
            ${segment.documentPages.map((page) => `
              <figure class="document-page-card document-page-continuous">
                <img src="${page.src}" alt="${page.alt}" loading="lazy">
              </figure>
            `).join("")}
          </div>

          <aside class="document-side-note">
            <div class="visual-icon">🖼️</div>
            <strong>Documento fuente continuo</strong>
            <span>Esta vista muestra el Documento Fuente con Formato C como hoja digital continua. Después de leerlo se pasa a ideas principales y recién luego al cuestionario.</span>
          </aside>
        </div>

        <details class="source-transcript">
          <summary>Ver transcripción normalizada de respaldo</summary>
          <div class="source-raw-text full-document">
            <strong>📄 Transcripción normalizada</strong>
            ${bodyMarkup}
          </div>
        </details>

        <div class="source-tags">
          ${segment.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </article>
    `;
  }

  return `
    <article class="source-segment">
      <div class="source-segment-top">
        <div>
          <span class="source-ref">${segment.sourceRef}</span>
          <h3>${index + 1}. ${segment.title}</h3>
        </div>
        <span class="review-pill">👨‍🏫 ${segment.expertStatus}</span>
      </div>
      <div class="source-segment-grid">
        <div class="source-raw-text ${segment.preserveLineBreaks ? "full-document" : ""}">
          <strong>📄 Texto crudo del Documento Fuente</strong>
          ${bodyMarkup}
        </div>
        <div class="source-visual-placeholder">
          <div class="visual-icon">🖼️</div>
          <strong>${segment.visualLabel}</strong>
          <span>Espacio reservado para imagen, gráfico, fórmula o esquema del PDF original.</span>
        </div>
      </div>
      <div class="source-tags">
        ${segment.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </article>
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

function getQuestionDifficultyLabel(question) {
  const labels = {
    recognition: "Reconocimiento",
    comprehension: "Comprensión",
    application: "Aplicación",
    criterion: "Criterio"
  };
  return labels[question?.difficulty] || "Práctica";
}

function getQuestionDifficultyIcon(question) {
  const icons = {
    recognition: "🟢",
    comprehension: "🟡",
    application: "🟠",
    criterion: "🔵"
  };
  return icons[question?.difficulty] || "🎯";
}

function renderQuiz() {
  const lesson = getLesson(activeLessonId);
  if (!quizRuntime || !lesson) return renderMissing();
  const question = quizRuntime.questions[quizRuntime.index];
  return `
    <main class="panel screen">
      <div class="lesson-top">
        <button class="ghost-btn" data-action="back-to-lesson">← Repasar documento</button>
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
        <div class="question-meta">${getQuestionDifficultyIcon(question)} Nivel: ${getQuestionDifficultyLabel(question)}</div>
        <h3 class="question-text">${question.prompt}</h3>
        <div class="answers">
          ${question.options.map((option, index) => renderAnswerButton(option, index)).join("")}
        </div>
        <div id="feedback" class="feedback hidden"></div>
        <div class="footer-actions quiz-actions">
          <button id="nextQuestionBtn" class="primary-btn hidden" data-action="next-question">Continuar</button>
          <button class="flow-forward-btn" data-action="advance-flow" title="Modo prototipo: salta este cuestionario y avanza al siguiente paso">Seguir flujo →</button>
          <button class="ghost-btn" data-action="back-to-lesson">Repasar teoría</button>
        </div>
        <p class="demo-note quiz-demo-note">Modo UX: podés saltar este cuestionario para revisar navegación, pantallas, unidad siguiente y GUI sin responder.</p>
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
          : "No pasa nada. Repasá el Documento Fuente, la guía curada y volvé a intentar el cuestionario para avanzar."}
      </p>

      <div class="result-grid">
        <div class="result-stat"><strong>${score}%</strong><span>precisión</span></div>
        <div class="result-stat"><strong>${correct}/${total}</strong><span>respuestas correctas</span></div>
        <div class="result-stat"><strong>${passed ? "+" + lesson.xp : "+0"}</strong><span>XP ganado</span></div>
      </div>

      <div class="notice">
        <strong>Criterio de aprobación:</strong> Documento Fuente leído + guía curada leída + 70% o más en el cuestionario.
      </div>

      <div class="footer-actions">
        ${passed ? `<button class="primary-btn" data-action="go-home">Volver al mapa</button>` : ""}
        ${passed && getNextLessonId(activeLessonId) ? `<button class="secondary-btn" data-action="next-lesson">Siguiente lección</button>` : ""}
        <button class="ghost-btn" data-action="retry-lesson">Repetir cuestionario</button>
        <button class="ghost-btn" data-action="back-to-lesson">Repasar teoría</button>
        <button class="flow-forward-btn" data-action="advance-flow">Seguir flujo →</button>
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


  document.querySelectorAll("[data-action='toggle-theme']").forEach((el) => {
    el.addEventListener("click", () => {
      state.uiTheme = state.uiTheme === "light" ? "dark" : "light";
      saveState();
      applyTheme();
      render();
      showToast(state.uiTheme === "light" ? "Tema claro activado." : "Tema oscuro activado.");
    });
  });

  document.querySelectorAll("[data-action='advance-flow']").forEach((el) => {
    el.addEventListener("click", () => advancePrototypeFlow());
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
        showToast("Primero leé el Documento Fuente y la guía hasta el final.");
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

function advancePrototypeFlow() {
  const currentLesson = getLesson(activeLessonId);
  if (!currentLesson) {
    view = "home";
    render();
    return;
  }

  state.readingDone[activeLessonId] = true;
  if (!state.completed.includes(activeLessonId)) {
    state.completed.push(activeLessonId);
  }
  state.demoAdvances = (state.demoAdvances || 0) + 1;

  const nextId = getNextLessonId(activeLessonId);
  if (nextId && !state.unlocked.includes(nextId)) {
    state.unlocked.push(nextId);
  }

  quizRuntime = null;
  if (nextId) {
    state.lastVisited = nextId;
    saveState();
    openLesson(nextId);
    showToast("Modo UX: avanzaste al siguiente paso sin cuestionario.");
    return;
  }

  saveState();
  view = "home";
  render();
  showToast("Modo UX: llegaste al final del flujo disponible.");
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

applyTheme();
render();
