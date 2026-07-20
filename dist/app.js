const APP_VERSION = "v18";
const MODE_KEY = "sonido-play-v18-mode";
const STORAGE_KEYS = {
  student: "sonido-play-v18-student-progress",
  dev: "sonido-play-v18-dev-progress"
};

const course = {
  "id": "sonido-play",
  "title": "Sonido Play",
  "subtitle": "Curso interactivo de sonido en espectáculos",
  "editorialNote": "Versión v18: todas las unidades del curso usan Documento Madre + Formato C v0.2. El acceso inicial separa Modo Alumno, para cursado real con desbloqueo progresivo, y Modo Dev/Revisión, para probar unidades, cuestionarios y evaluación integradora sin bloquear la navegación.",
  "modules": [
    {
      "id": "module-01",
      "title": "Cadena de audio y acústica",
      "status": "available",
      "description": "Recorrido del sonido, Documento Fuente, acústica y diagnóstico por cadena.",
      "lessons": [
        {
          "id": "u01",
          "type": "lesson",
          "title": "Cadena de Audio y Acústica",
          "xp": 110,
          "objective": "Comprender el recorrido completo del sonido desde la fuente hasta la escucha, diferenciando fenómeno acústico, señal eléctrica y acústica del espacio.",
          "sourceSegments": [
            {
              "title": "Cadena de Audio y Acústica",
              "sourceRef": "Documento Fuente · Unidad 01 · Formato C v0.2 · Documento Madre + fuentes verdes/controladas",
              "body": "Esta unidad toma como base la Clase 1 del Documento Madre y la amplía con una explicación más precisa del fenómeno sonoro.\n\nEl sonido no es solamente “aire” ni solamente “señal eléctrica”. En una situación real de espectáculo conviven dos mundos: el sonido acústico, que viaja por un medio material como el aire, y la señal de audio, que circula por cables, consola, procesadores y amplificadores. La cadena de audio permite ordenar ese recorrido para diagnosticar problemas sin adivinar.\n\nUna cadena típica puede pensarse así: fuente sonora → acústica inicial → micrófono o entrada → cableado → consola → procesamiento → amplificación → parlante → acústica final → oyente. La acústica aparece al principio y al final: afecta cómo se genera, capta, reproduce y percibe el sonido.\n\nEl documento conserva la idea del Documento Madre sobre música como experiencia que ocurre en el tiempo, pero corrige la formulación “el sonido necesita aire”: técnicamente, el sonido necesita un medio material. En eventos, normalmente ese medio es el aire.",
              "documentPages": [],
              "visualLabel": "Documento Fuente · Formato C v0.2",
              "expertStatus": "Documento ampliado · Pendiente de validación técnica por Matías",
              "tags": [
                "Documento Madre",
                "Formato C",
                "Unidad 01",
                "Fuente ampliada",
                "Cuestionario progresivo"
              ],
              "preserveLineBreaks": true
            }
          ],
          "theoryBlocks": [
            {
              "title": "Cadena como mapa de diagnóstico",
              "body": "La cadena de audio no es una lista decorativa de equipos. Es una herramienta para ubicar dónde puede fallar el sistema: fuente, captación, cableado, consola, amplificación, parlantes o sala.",
              "note": "Si no se entiende el recorrido, se corrige a ciegas."
            },
            {
              "title": "Sonido acústico y señal eléctrica",
              "body": "Antes del micrófono y después del parlante trabajamos con sonido acústico. Entre esos puntos trabajamos con señales eléctricas de audio. Confundir ambos planos lleva a errores de conexión, medición y diagnóstico.",
              "note": "El micrófono transforma energía acústica en señal eléctrica; el parlante hace el camino inverso."
            },
            {
              "title": "La acústica afecta todo",
              "body": "La sala modifica lo que la fuente produce, lo que el micrófono capta y lo que el público escucha. Paredes, piso, techo, materiales y distancia forman parte del resultado final.",
              "note": "La acústica no es un accesorio: es parte del sistema."
            },
            {
              "title": "Música, reproducción y escucha",
              "body": "La música como experiencia sonora ocurre cuando se ejecuta, reproduce o escucha. Una partitura o archivo contiene información, pero la experiencia audible aparece cuando hay vibración, medio y receptor.",
              "note": "El curso separa soporte musical, fenómeno sonoro y sistema de audio."
            }
          ],
          "questions": [
            {
              "prompt": "¿Qué describe mejor una cadena de audio en un espectáculo?",
              "difficulty": "recognition",
              "options": [
                "El recorrido de la señal y del sonido desde la fuente hasta el oyente.",
                "Una lista de canciones para el show.",
                "La suma de todos los cables sin importar su función.",
                "El volumen final del parlante medido en watts."
              ],
              "correctIndex": 0,
              "explanation": "La cadena permite seguir el recorrido fuente → captación → control → amplificación → reproducción → escucha."
            },
            {
              "prompt": "¿Cuál es una diferencia correcta entre sonido acústico y señal eléctrica?",
              "difficulty": "comprehension",
              "options": [
                "El sonido acústico viaja por un medio; la señal eléctrica viaja por circuitos o cables.",
                "Son exactamente lo mismo en cualquier punto del sistema.",
                "La señal eléctrica solo existe después del parlante.",
                "El sonido acústico no necesita fuente vibrante."
              ],
              "correctIndex": 0,
              "explanation": "El micrófono y el parlante son puntos de transformación entre ambos mundos."
            },
            {
              "prompt": "¿Por qué es impreciso decir que el sonido solo necesita aire?",
              "difficulty": "comprehension",
              "options": [
                "Porque necesita un medio material, y el aire es solo uno de los medios posibles.",
                "Porque el sonido no necesita ningún medio.",
                "Porque solo viaja por cables balanceados.",
                "Porque se genera únicamente dentro de la consola."
              ],
              "correctIndex": 0,
              "explanation": "El aire es el medio habitual en eventos, pero el sonido también puede propagarse por agua, sólidos u otros medios materiales."
            },
            {
              "prompt": "Un micrófono recibe una voz y entrega señal a la consola. ¿Qué proceso realiza?",
              "difficulty": "application",
              "options": [
                "Transducción acústico-eléctrica.",
                "Amplificación de potencia para parlantes.",
                "Absorción acústica del recinto.",
                "Conversión de luz en frecuencia."
              ],
              "correctIndex": 0,
              "explanation": "El micrófono convierte variaciones de presión sonora en señal eléctrica."
            },
            {
              "prompt": "Hay señal clara en consola, pero no sale sonido por el sistema principal. ¿Dónde conviene revisar primero?",
              "difficulty": "application",
              "options": [
                "Etapas posteriores: salidas, procesadores, amplificación, cables o parlantes.",
                "Solo la técnica vocal del cantante.",
                "El color del escenario.",
                "La letra de la canción."
              ],
              "correctIndex": 0,
              "explanation": "Si la consola recibe señal, la falla probablemente está después de esa etapa."
            },
            {
              "prompt": "Una sala con muchas superficies duras genera rebotes que afectan claridad. ¿Qué parte de la cadena está influyendo?",
              "difficulty": "application",
              "options": [
                "La acústica del espacio.",
                "La partitura original.",
                "El nombre del micrófono.",
                "La longitud del cable únicamente."
              ],
              "correctIndex": 0,
              "explanation": "La acústica final afecta la percepción aunque el sistema esté conectado correctamente."
            },
            {
              "prompt": "¿Cuál sería una actitud profesional ante un problema de audio no identificado?",
              "difficulty": "criterion",
              "options": [
                "Seguir la cadena por etapas y aislar el punto de falla.",
                "Subir todo al máximo inmediatamente.",
                "Cambiar cables al azar hasta que algo pase.",
                "Culpar a la sala sin revisar señal."
              ],
              "correctIndex": 0,
              "explanation": "El diagnóstico por cadena reduce incertidumbre y evita acciones impulsivas."
            },
            {
              "prompt": "¿Qué afirmación muestra mejor criterio técnico?",
              "difficulty": "criterion",
              "options": [
                "La acústica puede afectar la captación y la escucha, no solo la reproducción final.",
                "La acústica desaparece si la consola es digital.",
                "El parlante elimina cualquier problema de sala.",
                "Un micrófono siempre capta solo la fuente deseada."
              ],
              "correctIndex": 0,
              "explanation": "La acústica condiciona el sonido antes y después del sistema electroacústico."
            }
          ]
        }
      ]
    },
    {
      "id": "module-02",
      "title": "Presión sonora, dB y seguridad",
      "status": "available",
      "description": "Nivel, medición, distancia, cobertura y cuidado auditivo.",
      "lessons": [
        {
          "id": "u02",
          "type": "lesson",
          "title": "Presión Sonora, dB y Seguridad Auditiva",
          "xp": 115,
          "objective": "Diferenciar presión sonora, intensidad, sonoridad percibida, decibeles y criterios básicos de exposición segura.",
          "sourceSegments": [
            {
              "title": "Presión Sonora, dB y Seguridad Auditiva",
              "sourceRef": "Documento Fuente · Unidad 02 · Formato C v0.2 · Documento Madre + fuentes verdes/controladas",
              "body": "Esta unidad amplía la Clase 2 del Documento Madre. El contenido original trabaja presión sonora, intensidad, ejemplos de dB, distancia y medición con decibelímetro. La versión aplicada al curso corrige una simplificación frecuente: intensidad no es exactamente lo mismo que volumen percibido.\n\nLa presión sonora es una variación de presión respecto de la presión atmosférica. El nivel de presión sonora se expresa habitualmente en dB SPL. La escala de decibeles es logarítmica: pequeños cambios numéricos pueden representar cambios importantes en energía o percepción.\n\nEn espectáculos, medir no reemplaza escuchar, pero ayuda a tomar decisiones con evidencia. El objetivo no es “sonar fuerte”, sino lograr inteligibilidad, cobertura y seguridad auditiva. El tiempo de exposición también importa: un nivel tolerable durante pocos segundos puede no ser seguro durante horas.",
              "documentPages": [],
              "visualLabel": "Documento Fuente · Formato C v0.2",
              "expertStatus": "Documento ampliado · Pendiente de validación técnica por Matías",
              "tags": [
                "Documento Madre",
                "Formato C",
                "Unidad 02",
                "Fuente ampliada",
                "Cuestionario progresivo"
              ],
              "preserveLineBreaks": true
            }
          ],
          "theoryBlocks": [
            {
              "title": "Presión sonora",
              "body": "El sonido produce pequeñas variaciones de presión en el aire. Esas variaciones pueden medirse y expresarse como nivel de presión sonora.",
              "note": "dB SPL no mide watts ni calidad artística; mide nivel de presión sonora."
            },
            {
              "title": "Decibeles y escala logarítmica",
              "body": "El decibel no se comporta como una escala lineal. Por eso no se interpreta igual que metros o kilos. En audio, esta escala permite manejar rangos muy amplios de presión, voltaje o potencia.",
              "note": "Leer dB requiere contexto: dB SPL, dBA, dBu y dBV no significan lo mismo."
            },
            {
              "title": "Distancia y cobertura",
              "body": "Al alejarnos de una fuente puntual en condiciones ideales, el nivel directo tiende a disminuir. En campo libre, duplicar distancia puede aproximarse a una caída de 6 dB, pero las salas reales agregan reflexiones y absorción.",
              "note": "Medir en un solo punto no representa necesariamente a todo el público."
            },
            {
              "title": "Seguridad auditiva",
              "body": "La operación responsable considera nivel, tiempo de exposición, tipo de evento, público y normativa aplicable. La referencia de SRT sirve como apoyo para entender medición de ruido laboral en Argentina.",
              "note": "Más fuerte no siempre es más profesional."
            }
          ],
          "questions": [
            {
              "prompt": "¿Qué expresa principalmente dB SPL?",
              "difficulty": "recognition",
              "options": [
                "Nivel de presión sonora.",
                "Potencia eléctrica del amplificador.",
                "Cantidad de canales de consola.",
                "Velocidad del cableado."
              ],
              "correctIndex": 0,
              "explanation": "dB SPL refiere al nivel de presión sonora."
            },
            {
              "prompt": "¿Qué instrumento se usa para medir nivel sonoro?",
              "difficulty": "recognition",
              "options": [
                "Sonómetro o decibelímetro.",
                "Afinador cromático.",
                "Cable Speakon.",
                "Adaptador RCA."
              ],
              "correctIndex": 0,
              "explanation": "El sonómetro permite medir niveles sonoros de forma más objetiva."
            },
            {
              "prompt": "¿Por qué el decibel puede resultar difícil de interpretar?",
              "difficulty": "comprehension",
              "options": [
                "Porque es una escala logarítmica y depende de la referencia usada.",
                "Porque siempre mide temperatura.",
                "Porque solo sirve para video.",
                "Porque no tiene relación con audio."
              ],
              "correctIndex": 0,
              "explanation": "dB cambia de significado según la magnitud y referencia: SPL, dBA, dBu, dBV, entre otras."
            },
            {
              "prompt": "¿Cuál diferencia está mejor planteada?",
              "difficulty": "comprehension",
              "options": [
                "Intensidad es una magnitud física; sonoridad/volumen percibido es una experiencia auditiva.",
                "Intensidad y volumen percibido son siempre idénticos.",
                "El volumen percibido se mide solamente en ohms.",
                "La intensidad no depende de energía."
              ],
              "correctIndex": 0,
              "explanation": "La percepción depende de nivel, frecuencia, duración, oído y contexto."
            },
            {
              "prompt": "El frente del público se queja de exceso de nivel, pero el fondo pide más voz. ¿Qué conviene hacer antes de subir todo?",
              "difficulty": "application",
              "options": [
                "Revisar cobertura, orientación, mediciones y distribución del sistema.",
                "Subir el master al máximo.",
                "Desactivar toda medición.",
                "Cambiar el nombre del canal."
              ],
              "correctIndex": 0,
              "explanation": "El problema puede ser distribución/cobertura, no falta global de nivel."
            },
            {
              "prompt": "Si duplicás distancia a una fuente puntual en campo libre, ¿qué aproximación puede usarse como guía?",
              "difficulty": "application",
              "options": [
                "Una caída cercana a 6 dB.",
                "Un aumento automático de 20 dB.",
                "Ningún cambio posible.",
                "Una inversión de polaridad obligatoria."
              ],
              "correctIndex": 0,
              "explanation": "Es una aproximación útil en condiciones ideales, no una regla exacta para toda sala."
            },
            {
              "prompt": "¿Qué decisión muestra mejor criterio de seguridad auditiva?",
              "difficulty": "criterion",
              "options": [
                "Considerar nivel y tiempo de exposición antes de sostener niveles altos.",
                "Mantener el máximo nivel posible todo el evento.",
                "No medir porque la percepción alcanza siempre.",
                "Ignorar molestias del público si el sistema no clippea."
              ],
              "correctIndex": 0,
              "explanation": "La seguridad auditiva no depende solo del instante de medición sino también de la exposición."
            },
            {
              "prompt": "Producción pide “más fuerte” aunque la voz ya se entiende y hay quejas. ¿Cuál respuesta es más profesional?",
              "difficulty": "criterion",
              "options": [
                "Medir, escuchar varias zonas y explicar que subir nivel puede empeorar comodidad y seguridad.",
                "Subir todo sin revisar.",
                "Bajar todos los micrófonos a cero.",
                "Decir que la seguridad no importa en vivo."
              ],
              "correctIndex": 0,
              "explanation": "La respuesta profesional combina evidencia, criterio técnico y cuidado auditivo."
            }
          ]
        }
      ]
    },
    {
      "id": "module-03",
      "title": "Eco, reverberación y absorción",
      "status": "available",
      "description": "Reflexión, reverberación, eco, absorción, refracción e inteligibilidad.",
      "lessons": [
        {
          "id": "u03",
          "type": "lesson",
          "title": "Eco, Reverberación, Absorción y Refracción",
          "xp": 115,
          "objective": "Entender cómo las superficies, materiales y condiciones del espacio modifican la claridad, duración y comportamiento del sonido.",
          "sourceSegments": [
            {
              "title": "Eco, Reverberación, Absorción y Refracción",
              "sourceRef": "Documento Fuente · Unidad 03 · Formato C v0.2 · Documento Madre + fuentes verdes/controladas",
              "body": "Esta unidad desarrolla los fenómenos acústicos de sala presentes en el Documento Madre: reflexión, eco, reverberación, absorción y cambios de propagación. El objetivo es evitar una confusión habitual: eco y reverberación no son lo mismo.\n\nCuando una onda sonora encuentra una superficie, parte de su energía puede reflejarse, absorberse o transmitirse. En una sala con superficies duras, aparecen más reflexiones. Si esas reflexiones se acumulan muy rápido, el sonido puede volverse confuso o poco inteligible. Si una reflexión llega claramente separada del sonido original, puede percibirse como eco.\n\nLa absorción no “borra” mágicamente el sonido: reduce parte de la energía reflejada y puede transformar una fracción de esa energía en calor. La refracción, por su parte, describe cambios de dirección asociados a variaciones del medio, como temperatura, viento o cambio de medio.",
              "documentPages": [],
              "visualLabel": "Documento Fuente · Formato C v0.2",
              "expertStatus": "Documento ampliado · Pendiente de validación técnica por Matías",
              "tags": [
                "Documento Madre",
                "Formato C",
                "Unidad 03",
                "Fuente ampliada",
                "Cuestionario progresivo"
              ],
              "preserveLineBreaks": true
            }
          ],
          "theoryBlocks": [
            {
              "title": "Reflexión",
              "body": "La reflexión aparece cuando parte de la energía sonora rebota en una superficie. Paredes duras, vidrio, cemento o azulejos suelen reflejar más que cortinas, butacas o materiales porosos.",
              "note": "Más reflexión no siempre es malo; el problema aparece cuando afecta la claridad."
            },
            {
              "title": "Eco y reverberación",
              "body": "El eco se percibe como repetición separada del sonido original. La reverberación es la persistencia del sonido por muchas reflexiones cercanas en el tiempo.",
              "note": "Eco es repetición distinguible; reverberación es cola o permanencia del sonido."
            },
            {
              "title": "Absorción",
              "body": "Los materiales absorbentes reducen parte de la energía reflejada. No todos absorben igual ni en todas las frecuencias. Los graves suelen requerir soluciones distintas a los agudos.",
              "note": "Un material puede absorber agudos y dejar graves problemáticos."
            },
            {
              "title": "Aplicación en eventos",
              "body": "Antes de ecualizar de forma extrema, conviene evaluar la sala, orientar parlantes, ubicar micrófonos con criterio y evitar apuntar energía innecesaria hacia superficies reflectantes.",
              "note": "La sala se corrige primero con decisiones de ubicación y cobertura."
            }
          ],
          "questions": [
            {
              "prompt": "¿Qué es reflexión sonora?",
              "difficulty": "recognition",
              "options": [
                "Rebote parcial del sonido en una superficie.",
                "Ausencia total de sonido.",
                "Conversión de sonido en electricidad.",
                "Aumento de velocidad por cableado."
              ],
              "correctIndex": 0,
              "explanation": "La reflexión ocurre cuando parte de la energía sonora rebota."
            },
            {
              "prompt": "¿Qué describe mejor la reverberación?",
              "difficulty": "recognition",
              "options": [
                "Persistencia del sonido por múltiples reflexiones.",
                "Un único rebote separado y claramente repetido.",
                "Un tipo de micrófono dinámico.",
                "Un conector balanceado."
              ],
              "correctIndex": 0,
              "explanation": "La reverberación es una suma densa de reflexiones que prolonga el sonido."
            },
            {
              "prompt": "¿Cuál diferencia entre eco y reverberación es correcta?",
              "difficulty": "comprehension",
              "options": [
                "El eco se distingue como repetición; la reverberación se percibe como cola o permanencia.",
                "Son exactamente lo mismo siempre.",
                "La reverberación solo existe al aire libre.",
                "El eco ocurre únicamente dentro de cables."
              ],
              "correctIndex": 0,
              "explanation": "La diferencia clave es la separación temporal y percepción de repetición."
            },
            {
              "prompt": "¿Por qué un baño suele sonar más reverberante que una sala tratada?",
              "difficulty": "comprehension",
              "options": [
                "Porque tiene superficies duras y reflectantes.",
                "Porque no hay aire.",
                "Porque los azulejos absorben todos los graves.",
                "Porque la voz no vibra."
              ],
              "correctIndex": 0,
              "explanation": "Las superficies duras favorecen reflexiones."
            },
            {
              "prompt": "En una sala con mucha reverberación, ¿qué acción inicial puede ayudar?",
              "difficulty": "application",
              "options": [
                "Revisar orientación de parlantes y ubicación de micrófonos.",
                "Subir todos los agudos al máximo.",
                "Agregar micrófonos sin criterio.",
                "Ignorar el espacio porque solo importa la consola."
              ],
              "correctIndex": 0,
              "explanation": "La ubicación y la cobertura pueden reducir energía innecesaria hacia zonas reflectantes."
            },
            {
              "prompt": "Un orador se escucha con poca claridad aunque el nivel es alto. ¿Qué fenómeno conviene sospechar?",
              "difficulty": "application",
              "options": [
                "Exceso de reflexiones/reverberación.",
                "Falta de color en el cable.",
                "Ausencia de energía sonora.",
                "Uso de una partitura incorrecta."
              ],
              "correctIndex": 0,
              "explanation": "La inteligibilidad puede empeorar por reverberación aun con mucho nivel."
            },
            {
              "prompt": "¿Qué criterio evita una solución superficial?",
              "difficulty": "criterion",
              "options": [
                "No confundir falta de nivel con problema acústico de sala.",
                "Subir volumen siempre que no se entienda.",
                "Usar más micrófonos en cualquier situación.",
                "Ecualizar sin escuchar el recinto."
              ],
              "correctIndex": 0,
              "explanation": "La causa puede estar en la sala, no en el nivel de la consola."
            },
            {
              "prompt": "¿Qué afirmación sobre absorción es más precisa?",
              "difficulty": "criterion",
              "options": [
                "Reduce parte de la energía reflejada y depende del material y la frecuencia.",
                "Elimina todo sonido en cualquier sala.",
                "Solo funciona si el micrófono es de condensador.",
                "Aumenta siempre el eco."
              ],
              "correctIndex": 0,
              "explanation": "La absorción es parcial y depende de materiales y frecuencias."
            }
          ]
        }
      ]
    },
    {
      "id": "module-04",
      "title": "Onda sonora, frecuencia y timbre",
      "status": "available",
      "description": "Amplitud, frecuencia, longitud de onda, timbre, armónicos y duración.",
      "lessons": [
        {
          "id": "u04",
          "type": "lesson",
          "title": "Onda Sonora, Frecuencia, Timbre y Longitud de Onda",
          "xp": 120,
          "objective": "Relacionar las propiedades físicas de la onda sonora con lo que se escucha: grave/agudo, intensidad, timbre, duración y tamaño de onda.",
          "sourceSegments": [
            {
              "title": "Onda Sonora, Frecuencia, Timbre y Longitud de Onda",
              "sourceRef": "Documento Fuente · Unidad 04 · Formato C v0.2 · Documento Madre + fuentes verdes/controladas",
              "body": "Esta unidad ordena el bloque del Documento Madre sobre onda sonora, frecuencia, velocidad, timbre, duración y longitud de onda. Se corrige una imprecisión importante: duración y longitud de onda no son lo mismo.\n\nLa frecuencia indica cuántos ciclos ocurren por segundo y se mide en Hertz. La longitud de onda indica la distancia espacial entre dos puntos equivalentes de una onda. Están relacionadas por la fórmula λ = c / f, donde c es la velocidad de propagación del sonido en el medio y f es la frecuencia.\n\nEl timbre permite distinguir fuentes aunque produzcan una misma nota a nivel similar. Depende de la forma de onda, armónicos, material de la fuente, modo de excitación y evolución temporal. Fourier se introduce como una idea de análisis: sonidos complejos pueden comprenderse como combinación de componentes senoidales.",
              "documentPages": [],
              "visualLabel": "Documento Fuente · Formato C v0.2",
              "expertStatus": "Documento ampliado · Pendiente de validación técnica por Matías",
              "tags": [
                "Documento Madre",
                "Formato C",
                "Unidad 04",
                "Fuente ampliada",
                "Cuestionario progresivo"
              ],
              "preserveLineBreaks": true
            }
          ],
          "theoryBlocks": [
            {
              "title": "Frecuencia",
              "body": "La frecuencia se mide en Hz y se relaciona perceptivamente con la altura: graves, medios y agudos. Menor frecuencia suele percibirse más grave; mayor frecuencia, más aguda.",
              "note": "Frecuencia no es volumen."
            },
            {
              "title": "Longitud de onda",
              "body": "La longitud de onda es una distancia. En aire, las frecuencias graves tienen longitudes de onda largas; las agudas, longitudes de onda cortas.",
              "note": "Esto ayuda a entender parlantes, absorción y obstáculos."
            },
            {
              "title": "Timbre",
              "body": "El timbre explica por qué una guitarra y una trompeta pueden tocar la misma nota y sonar diferentes. Intervienen armónicos, forma de onda y comportamiento temporal.",
              "note": "El timbre no depende de una sola variable."
            },
            {
              "title": "Duración",
              "body": "La duración describe cuánto tiempo permanece un sonido. No debe confundirse con la longitud de onda, que es una distancia física asociada a frecuencia y velocidad.",
              "note": "Tiempo y distancia son dimensiones distintas."
            }
          ],
          "questions": [
            {
              "prompt": "¿Qué mide la frecuencia?",
              "difficulty": "recognition",
              "options": [
                "Cantidad de ciclos por segundo.",
                "Distancia entre parlantes.",
                "Potencia del amplificador.",
                "Cantidad de cables."
              ],
              "correctIndex": 0,
              "explanation": "La frecuencia se expresa en Hertz."
            },
            {
              "prompt": "¿Qué describe la longitud de onda?",
              "difficulty": "recognition",
              "options": [
                "Distancia entre dos puntos equivalentes de la onda.",
                "Duración total de una canción.",
                "Nivel SPL de la sala.",
                "Impedancia del micrófono."
              ],
              "correctIndex": 0,
              "explanation": "La longitud de onda es una distancia espacial."
            },
            {
              "prompt": "Si una frecuencia aumenta y la velocidad se mantiene, ¿qué ocurre con la longitud de onda?",
              "difficulty": "comprehension",
              "options": [
                "Disminuye.",
                "Aumenta siempre al doble.",
                "Se transforma en volumen.",
                "Desaparece."
              ],
              "correctIndex": 0,
              "explanation": "λ = c/f: si f sube, λ baja."
            },
            {
              "prompt": "¿Por qué los graves suelen atravesar obstáculos mejor que los agudos?",
              "difficulty": "comprehension",
              "options": [
                "Porque tienen longitudes de onda más largas.",
                "Porque no son ondas sonoras.",
                "Porque viajan sin medio.",
                "Porque son señales digitales."
              ],
              "correctIndex": 0,
              "explanation": "Las longitudes de onda largas tienden a rodear obstáculos con más facilidad."
            },
            {
              "prompt": "Dos instrumentos tocan la misma nota al mismo nivel, pero suenan distintos. ¿Qué propiedad explica mejor la diferencia?",
              "difficulty": "application",
              "options": [
                "Timbre.",
                "Cantidad de butacas.",
                "Tipo de escenario únicamente.",
                "Color del cable."
              ],
              "correctIndex": 0,
              "explanation": "El timbre diferencia fuentes por armónicos, forma de onda y evolución."
            },
            {
              "prompt": "Un alumno confunde duración con longitud de onda. ¿Cómo lo corregís?",
              "difficulty": "application",
              "options": [
                "Duración es tiempo; longitud de onda es distancia.",
                "Ambas significan volumen.",
                "Longitud de onda es el tiempo de la canción.",
                "Duración solo existe en cables."
              ],
              "correctIndex": 0,
              "explanation": "La corrección separa magnitudes temporales y espaciales."
            },
            {
              "prompt": "¿Qué uso práctico tiene estimar longitud de onda?",
              "difficulty": "criterion",
              "options": [
                "Pensar tamaño de parlantes, absorción, obstáculos y comportamiento de graves/agudos.",
                "Decidir el color de la consola.",
                "Reemplazar cualquier medición auditiva.",
                "Evitar usar micrófonos."
              ],
              "correctIndex": 0,
              "explanation": "La relación frecuencia-longitud de onda tiene consecuencias prácticas en sonido."
            },
            {
              "prompt": "¿Qué afirmación sobre Fourier es prudente para este nivel?",
              "difficulty": "criterion",
              "options": [
                "Sirve como idea introductoria para entender sonidos complejos como combinación de componentes.",
                "Debe usarse para operar cualquier consola desde la primera clase.",
                "Demuestra que el timbre no existe.",
                "Solo se aplica a iluminación."
              ],
              "correctIndex": 0,
              "explanation": "En esta etapa se usa como concepto de apoyo, no como matemática avanzada obligatoria."
            }
          ]
        }
      ]
    },
    {
      "id": "module-05",
      "title": "Fase e interferencias",
      "status": "available",
      "description": "Relación temporal, cancelaciones, comb filter y prevención.",
      "lessons": [
        {
          "id": "u05",
          "type": "lesson",
          "title": "Fase, Interferencias y Comb Filter",
          "xp": 125,
          "objective": "Comprender por qué señales parecidas con pequeños retardos pueden reforzarse, perder cuerpo o producir cancelaciones.",
          "sourceSegments": [
            {
              "title": "Fase, Interferencias y Comb Filter",
              "sourceRef": "Documento Fuente · Unidad 05 · Formato C v0.2 · Documento Madre + fuentes verdes/controladas",
              "body": "Esta unidad amplía el Documento Madre sobre cancelaciones de fase, interferencia acústica, comb filter y regla 3:1. Se incorporan correcciones para evitar errores frecuentes: el botón Φ suele invertir polaridad, no “arreglar fase” en todos los casos; la cancelación total solo ocurre en condiciones ideales; y la regla 3:1 es una guía práctica, no una garantía.\n\nLa fase describe la posición relativa de una onda dentro de su ciclo. Cuando dos señales similares llegan alineadas, pueden reforzarse. Cuando llegan con retardo, algunas frecuencias se suman y otras se reducen. Ese patrón de picos y cancelaciones puede formar un comb filter.\n\nEn vivo y grabación, estos problemas aparecen con múltiples micrófonos, reflexiones cercanas, parlantes mal ubicados o señales duplicadas con latencia.",
              "documentPages": [
                {
                  "src": "assets/source/formato-c-v0-2/sonido_play_u05_fase_interferencias_comb_filter_formato_c_v0_2_page_01.png",
                  "alt": "Vista previa del Documento Fuente sonido_play_u05_fase_interferencias_comb_filter_formato_c_v0_2",
                  "caption": "Vista renderizada del Documento Fuente Formato C v0.2."
                }
              ],
              "visualLabel": "Documento Fuente · Formato C v0.2",
              "expertStatus": "Documento ampliado · Pendiente de validación técnica por Matías",
              "tags": [
                "Documento Madre",
                "Formato C",
                "Unidad 05",
                "Fuente ampliada",
                "Cuestionario progresivo"
              ],
              "preserveLineBreaks": true
            }
          ],
          "theoryBlocks": [
            {
              "title": "Fase como relación temporal",
              "body": "La fase compara el estado de dos ondas o señales. No alcanza mirar el volumen: dos señales pueden tener nivel alto y aun así generar pérdida de cuerpo al combinarse.",
              "note": "La fase se escucha muchas veces como cambio de color, no como silencio total."
            },
            {
              "title": "Interferencia",
              "body": "Cuando dos ondas coinciden en un punto, se combinan. Según su relación temporal pueden reforzar ciertas frecuencias o reducirlas.",
              "note": "Constructiva y destructiva no siempre afectan a todas las frecuencias por igual."
            },
            {
              "title": "Comb filter",
              "body": "El comb filter aparece al sumar una señal con una versión retrasada de sí misma. En una gráfica de respuesta se ven picos y caídas periódicas, similares a las púas de un peine.",
              "note": "Puede sonar hueco, metálico o con pérdida de graves/cuerpo."
            },
            {
              "title": "Prevención",
              "body": "Ubicar micrófonos con intención, reducir captaciones innecesarias, orientar patrones polares y revisar reflexiones tempranas suele ser mejor que ecualizar después.",
              "note": "La prevención empieza antes de tocar la consola."
            }
          ],
          "questions": [
            {
              "prompt": "¿Qué describe la fase?",
              "difficulty": "recognition",
              "options": [
                "La posición relativa de una onda o señal dentro de su ciclo.",
                "La potencia máxima del amplificador.",
                "La cantidad de parlantes conectados.",
                "La marca del micrófono."
              ],
              "correctIndex": 0,
              "explanation": "La fase expresa relación temporal/cíclica entre ondas o señales."
            },
            {
              "prompt": "¿Qué es un comb filter?",
              "difficulty": "recognition",
              "options": [
                "Un patrón de refuerzos y cancelaciones por sumar una señal con una versión retardada.",
                "Un filtro para limpiar polvo de micrófonos.",
                "Un tipo de cable balanceado.",
                "Una técnica para aumentar watts."
              ],
              "correctIndex": 0,
              "explanation": "El retardo genera picos y caídas en frecuencia."
            },
            {
              "prompt": "¿Por qué dos micrófonos pueden empeorar una toma?",
              "difficulty": "comprehension",
              "options": [
                "Porque captan la misma fuente con retardos distintos y generan interferencias.",
                "Porque todo micrófono cancela automáticamente los graves.",
                "Porque la consola no acepta más de un canal.",
                "Porque el sonido deja de necesitar aire."
              ],
              "correctIndex": 0,
              "explanation": "La diferencia temporal entre captaciones puede producir comb filter o cancelaciones."
            },
            {
              "prompt": "¿Qué corrige realmente el botón Φ en muchas consolas?",
              "difficulty": "comprehension",
              "options": [
                "Invierte polaridad; no compensa necesariamente un retardo acústico.",
                "Mueve físicamente el micrófono.",
                "Elimina todas las reflexiones de sala.",
                "Convierte señal mono en estéreo real."
              ],
              "correctIndex": 0,
              "explanation": "La inversión de polaridad puede ayudar en algunos casos, pero no corrige todos los desfases por tiempo."
            },
            {
              "prompt": "Al abrir dos canales de guitarra acústica, el sonido pierde cuerpo. ¿Qué probás antes de ecualizar agresivamente?",
              "difficulty": "application",
              "options": [
                "Revisar distancia/posición de micrófonos, polaridad y combinación de canales.",
                "Subir agudos al máximo.",
                "Agregar reverberación sin escuchar.",
                "Comprimir el master."
              ],
              "correctIndex": 0,
              "explanation": "La pérdida de cuerpo puede ser interferencia entre captaciones."
            },
            {
              "prompt": "Un micrófono capta fuente directa y rebote de una pared cercana. ¿Qué problema puede aparecer?",
              "difficulty": "application",
              "options": [
                "Comb filter por retardo entre sonido directo y reflexión.",
                "Aumento automático de claridad.",
                "Desaparición de la fuente sonora.",
                "Conversión a señal MIDI."
              ],
              "correctIndex": 0,
              "explanation": "La reflexión llega retrasada y puede interferir con el sonido directo."
            },
            {
              "prompt": "¿Cómo debería usarse la regla 3:1?",
              "difficulty": "criterion",
              "options": [
                "Como guía práctica inicial para reducir interferencias, no como garantía absoluta.",
                "Como fórmula para calcular dB SPL exacto.",
                "Como reemplazo de la escucha.",
                "Como regla para elegir impedancia."
              ],
              "correctIndex": 0,
              "explanation": "La regla ayuda a pensar distancias entre micrófonos, pero no reemplaza criterio."
            },
            {
              "prompt": "¿Qué decisión muestra mejor criterio técnico ante fase?",
              "difficulty": "criterion",
              "options": [
                "Usar menos micrófonos si no aportan y ubicar los necesarios con intención.",
                "Agregar micrófonos hasta que el sistema suene más fuerte.",
                "Ecualizar sin revisar captación.",
                "Ignorar reflexiones tempranas."
              ],
              "correctIndex": 0,
              "explanation": "Menos captación innecesaria suele reducir problemas de interferencia."
            }
          ]
        }
      ]
    },
    {
      "id": "module-06",
      "title": "Micrófonos y transductores",
      "status": "available",
      "description": "Tipos, patrones polares, sensibilidad, SPL máximo y selección.",
      "lessons": [
        {
          "id": "u06",
          "type": "lesson",
          "title": "Micrófonos y Transductores",
          "xp": 125,
          "objective": "Elegir y ubicar micrófonos entendiendo transducción, tipo de cápsula, patrón polar, sensibilidad, SPL máximo y contexto de uso.",
          "sourceSegments": [
            {
              "title": "Micrófonos y Transductores",
              "sourceRef": "Documento Fuente · Unidad 06 · Formato C v0.2 · Documento Madre + fuentes verdes/controladas",
              "body": "Esta unidad amplía el bloque del Documento Madre sobre micrófonos como transductores acústico-eléctricos. Un transductor transforma una forma de energía en otra. En audio, el micrófono transforma variaciones de presión sonora en una señal eléctrica.\n\nNo existe un micrófono universalmente mejor. Hay micrófonos más adecuados para una fuente, un entorno y un objetivo. Los dinámicos suelen ser robustos y prácticos en vivo; los condensadores suelen ser más sensibles y detallados; los de cinta requieren mayor cuidado; los piezoeléctricos y de contacto sirven para usos específicos.\n\nAdemás del tipo de transducción, importan patrón polar, sensibilidad, respuesta en frecuencia, máximo SPL, ruido, impedancia, alimentación phantom y condiciones del escenario.",
              "documentPages": [
                {
                  "src": "assets/source/formato-c-v0-2/sonido_play_u06_microfonos_transductores_formato_c_v0_2_page_01.png",
                  "alt": "Vista previa del Documento Fuente sonido_play_u06_microfonos_transductores_formato_c_v0_2",
                  "caption": "Vista renderizada del Documento Fuente Formato C v0.2."
                }
              ],
              "visualLabel": "Documento Fuente · Formato C v0.2",
              "expertStatus": "Documento ampliado · Pendiente de validación técnica por Matías",
              "tags": [
                "Documento Madre",
                "Formato C",
                "Unidad 06",
                "Fuente ampliada",
                "Cuestionario progresivo"
              ],
              "preserveLineBreaks": true
            }
          ],
          "theoryBlocks": [
            {
              "title": "Transducción",
              "body": "El micrófono convierte energía acústica en señal eléctrica. Esa conversión condiciona nivel, respuesta, sensibilidad y uso posible.",
              "note": "El micrófono no solo “agarra sonido”: transforma energía."
            },
            {
              "title": "Tipos principales",
              "body": "Dinámico, condensador, cinta, carbón y piezoeléctrico responden a principios distintos. En vivo se usan mucho dinámicos y condensadores según fuente y objetivo.",
              "note": "Elegir tipo depende del contexto, no del precio solamente."
            },
            {
              "title": "Patrón polar",
              "body": "El patrón polar indica desde qué direcciones capta o rechaza el micrófono. Cardioide, supercardioide, hipercardioide, omni y figura de ocho tienen usos distintos.",
              "note": "El rechazo es tan importante como la captación."
            },
            {
              "title": "Sensibilidad y SPL máximo",
              "body": "Un micrófono muy sensible puede captar detalles, pero también ambiente no deseado. El SPL máximo indica hasta qué nivel puede trabajar sin distorsionar de forma problemática.",
              "note": "Más sensible no siempre significa mejor."
            }
          ],
          "questions": [
            {
              "prompt": "¿Qué es un transductor?",
              "difficulty": "recognition",
              "options": [
                "Un dispositivo que transforma una forma de energía en otra.",
                "Un cable de corriente.",
                "Una sala con poca reverberación.",
                "Un tipo de playlist."
              ],
              "correctIndex": 0,
              "explanation": "El micrófono es un transductor acústico-eléctrico."
            },
            {
              "prompt": "¿Qué suele requerir muchos micrófonos de condensador?",
              "difficulty": "recognition",
              "options": [
                "Alimentación phantom, generalmente 48 V.",
                "Agua destilada.",
                "Un parlante pasivo conectado directo.",
                "Un cable de iluminación DMX exclusivamente."
              ],
              "correctIndex": 0,
              "explanation": "Muchos condensadores necesitan phantom power para funcionar."
            },
            {
              "prompt": "¿Por qué un dinámico cardioide suele funcionar bien para voz en vivo?",
              "difficulty": "comprehension",
              "options": [
                "Porque es robusto y ayuda a captar la fuente cercana rechazando parte del entorno.",
                "Porque capta igual en todas las direcciones sin rechazo.",
                "Porque no necesita fuente sonora.",
                "Porque elimina automáticamente cualquier acople."
              ],
              "correctIndex": 0,
              "explanation": "Su robustez y direccionalidad son útiles en escenario, aunque no garantizan ausencia de problemas."
            },
            {
              "prompt": "¿Qué indica el patrón polar?",
              "difficulty": "comprehension",
              "options": [
                "Direcciones de mayor captación y rechazo del micrófono.",
                "Longitud total del cable.",
                "Potencia del parlante.",
                "Cantidad de canciones del show."
              ],
              "correctIndex": 0,
              "explanation": "El patrón polar ayuda a ubicar el micrófono y evitar captaciones no deseadas."
            },
            {
              "prompt": "Hay mucho ruido de escenario y una voz cercana. ¿Qué criterio ayuda?",
              "difficulty": "application",
              "options": [
                "Elegir patrón direccional y trabajar distancia/fuente con cuidado.",
                "Usar siempre omni sin revisar nada.",
                "Alejar el micrófono todo lo posible.",
                "Apuntar el micrófono al monitor."
              ],
              "correctIndex": 0,
              "explanation": "La direccionalidad y cercanía controlada ayudan a mejorar relación señal/ruido."
            },
            {
              "prompt": "Un condensador capta demasiado ambiente en vivo. ¿Qué revisás?",
              "difficulty": "application",
              "options": [
                "Sensibilidad, patrón polar, distancia a la fuente y entorno.",
                "Solo el color del cuerpo del micrófono.",
                "La cantidad de luces del escenario.",
                "El nombre del archivo de audio."
              ],
              "correctIndex": 0,
              "explanation": "La captación excesiva puede depender de sensibilidad, ubicación y patrón."
            },
            {
              "prompt": "¿Qué afirmación muestra mejor criterio de selección?",
              "difficulty": "criterion",
              "options": [
                "Elegir micrófono según fuente, entorno, nivel, patrón y objetivo.",
                "Elegir siempre el más caro.",
                "Usar siempre el mismo micrófono para todo.",
                "Ignorar la ficha técnica."
              ],
              "correctIndex": 0,
              "explanation": "La selección profesional cruza varias variables."
            },
            {
              "prompt": "¿Por qué la ficha técnica no es decorativa?",
              "difficulty": "criterion",
              "options": [
                "Porque anticipa sensibilidad, respuesta, SPL máximo, impedancia y alimentación.",
                "Porque reemplaza toda escucha en sala.",
                "Porque solo sirve para marketing.",
                "Porque define la estética del escenario."
              ],
              "correctIndex": 0,
              "explanation": "La ficha técnica aporta criterios para decidir y prevenir problemas."
            }
          ]
        }
      ]
    },
    {
      "id": "module-07",
      "title": "Señales, niveles y cables",
      "status": "available",
      "description": "Mic, línea, instrumento, parlante, balanceado/desbalanceado y conectores.",
      "lessons": [
        {
          "id": "u07",
          "type": "lesson",
          "title": "Señales, Niveles, Cables y Conexiones",
          "xp": 120,
          "objective": "Reconocer niveles de señal y conectores para evitar ruido, distorsión, pérdidas o conexiones peligrosas.",
          "sourceSegments": [
            {
              "title": "Señales, Niveles, Cables y Conexiones",
              "sourceRef": "Documento Fuente · Unidad 07 · Formato C v0.2 · Documento Madre + fuentes verdes/controladas",
              "body": "Esta unidad amplía el bloque del Documento Madre sobre señales analógicas/digitales, niveles de micrófono, línea, instrumento y parlante, además de cables XLR, TRS, TS, RCA y Speakon.\n\nUno de los aprendizajes más importantes es que no todas las señales de audio tienen el mismo nivel ni el mismo destino. Una señal de micrófono es débil y necesita preamplificación. Una señal de línea es más fuerte. Una señal de instrumento requiere adaptación. Una señal de parlante es una señal de potencia y no debe conectarse a entradas de micrófono o línea.\n\nTambién se diferencia entre señal balanceada y desbalanceada. Una conexión balanceada puede reducir interferencias en recorridos largos si emisor, cable y receptor son compatibles.",
              "documentPages": [
                {
                  "src": "assets/source/formato-c-v0-2/sonido_play_u07_senales_niveles_cables_conexiones_formato_c_v0_2_page_01.png",
                  "alt": "Vista previa del Documento Fuente sonido_play_u07_senales_niveles_cables_conexiones_formato_c_v0_2",
                  "caption": "Vista renderizada del Documento Fuente Formato C v0.2."
                }
              ],
              "visualLabel": "Documento Fuente · Formato C v0.2",
              "expertStatus": "Documento ampliado · Pendiente de validación técnica por Matías",
              "tags": [
                "Documento Madre",
                "Formato C",
                "Unidad 07",
                "Fuente ampliada",
                "Cuestionario progresivo"
              ],
              "preserveLineBreaks": true
            }
          ],
          "theoryBlocks": [
            {
              "title": "Niveles de señal",
              "body": "Micrófono, instrumento, línea y parlante tienen niveles y usos distintos. Conectarlos mal puede producir señal débil, ruido, distorsión o daño.",
              "note": "No todo conector que encaja está bien conectado."
            },
            {
              "title": "Balanceado y desbalanceado",
              "body": "Las conexiones balanceadas usan dos conductores de señal y referencia para rechazar ruido común. Las desbalanceadas son más simples y más vulnerables en largas distancias.",
              "note": "Balanceado depende de toda la cadena, no solo del cable."
            },
            {
              "title": "Conectores",
              "body": "XLR suele usarse en micrófonos profesionales; TRS puede llevar balanceado o estéreo; TS suele ser desbalanceado; RCA es común en consumo; Speakon se usa para parlantes pasivos.",
              "note": "Mismo formato físico no siempre significa misma función."
            },
            {
              "title": "Errores críticos",
              "body": "No se debe conectar salida de amplificador a entrada de consola. Tampoco conviene usar cables desbalanceados largos en entornos con interferencias.",
              "note": "Algunas conexiones no son errores menores: pueden ser peligrosas."
            }
          ],
          "questions": [
            {
              "prompt": "¿Cuál es la señal más débil de la lista?",
              "difficulty": "recognition",
              "options": [
                "Nivel de micrófono.",
                "Nivel de parlante.",
                "Salida de amplificador.",
                "Señal de potencia."
              ],
              "correctIndex": 0,
              "explanation": "La señal de micrófono requiere preamplificación."
            },
            {
              "prompt": "¿Qué conector se usa habitualmente para micrófonos profesionales?",
              "difficulty": "recognition",
              "options": [
                "XLR.",
                "RCA de video compuesto.",
                "HDMI.",
                "USB-C siempre sin excepción."
              ],
              "correctIndex": 0,
              "explanation": "XLR es común en micrófonos profesionales balanceados."
            },
            {
              "prompt": "¿Por qué una salida de línea conectada a una entrada de micrófono puede distorsionar?",
              "difficulty": "comprehension",
              "options": [
                "Porque la entrada espera una señal mucho más débil.",
                "Porque la señal de línea no existe en audio.",
                "Porque el cable convierte audio en luz.",
                "Porque toda entrada de micrófono es de potencia."
              ],
              "correctIndex": 0,
              "explanation": "La diferencia de nivel puede saturar la entrada."
            },
            {
              "prompt": "¿Qué condición hace más útil una conexión balanceada?",
              "difficulty": "comprehension",
              "options": [
                "Recorridos largos o entornos con interferencia, si toda la cadena es balanceada.",
                "Cualquier cable corto de auricular sin importar equipos.",
                "Solo señales de parlante pasivo.",
                "Únicamente al grabar video."
              ],
              "correctIndex": 0,
              "explanation": "El beneficio aparece cuando emisor, cable y receptor soportan señal balanceada."
            },
            {
              "prompt": "Un micrófono suena bajísimo conectado a una entrada de línea. ¿Qué sospechás?",
              "difficulty": "application",
              "options": [
                "Falta preamplificación adecuada para nivel de micrófono.",
                "El micrófono emite demasiada potencia.",
                "La sala absorbió la señal eléctrica.",
                "El cable cambió la frecuencia de muestreo."
              ],
              "correctIndex": 0,
              "explanation": "La entrada de línea espera mayor nivel que una salida de micrófono."
            },
            {
              "prompt": "Tenés un cable TS largo cerca de alimentación eléctrica y aparece ruido. ¿Qué mejora probable aplicarías?",
              "difficulty": "application",
              "options": [
                "Usar conexión balanceada adecuada y mejorar recorrido del cableado.",
                "Subir todos los faders.",
                "Cambiar el nombre del canal.",
                "Usar un parlante más pesado."
              ],
              "correctIndex": 0,
              "explanation": "Las líneas balanceadas y buen ruteo reducen interferencias."
            },
            {
              "prompt": "¿Qué conexión debe evitarse por riesgo de daño?",
              "difficulty": "criterion",
              "options": [
                "Salida de amplificador a entrada de consola.",
                "Micrófono a entrada XLR de consola.",
                "Salida auxiliar a procesador compatible.",
                "Salida de línea a entrada de línea."
              ],
              "correctIndex": 0,
              "explanation": "La señal de potencia puede dañar entradas diseñadas para señales débiles."
            },
            {
              "prompt": "¿Qué criterio profesional conviene aplicar antes de conectar?",
              "difficulty": "criterion",
              "options": [
                "Identificar tipo de señal, nivel, conector y destino.",
                "Conectar donde entre físicamente.",
                "Usar adaptadores sin revisar nivel.",
                "Priorizar rapidez sobre compatibilidad."
              ],
              "correctIndex": 0,
              "explanation": "La compatibilidad no depende solo de la forma del conector."
            }
          ]
        }
      ]
    },
    {
      "id": "module-08",
      "title": "Consolas y ruteo",
      "status": "available",
      "description": "Gain, EQ, aux, pre/post, faders, buses y rutas de salida.",
      "lessons": [
        {
          "id": "u08",
          "type": "lesson",
          "title": "Consolas de Sonido, Mezcla y Ruteo",
          "xp": 125,
          "objective": "Comprender la consola como sistema de entrada, ganancia, procesamiento, mezcla y rutas de salida.",
          "sourceSegments": [
            {
              "title": "Consolas de Sonido, Mezcla y Ruteo",
              "sourceRef": "Documento Fuente · Unidad 08 · Formato C v0.2 · Documento Madre + fuentes verdes/controladas",
              "body": "Esta unidad amplía el bloque del Documento Madre sobre consola, módulo de canal, ganancia, EQ, envíos auxiliares, fader, pre/post y ruteo.\n\nLa consola no es una suma de perillas aisladas. Es un sistema de flujo de señal. Cada canal recibe una señal, la adapta mediante ganancia o preamplificación, permite filtrado/ecualización, envíos auxiliares, asignación a buses y control de nivel mediante fader.\n\nRutear significa decidir hacia dónde va la señal: mezcla principal, monitores, efectos, grabador, subgrupos o matrices. Muchos problemas de vivo no son “falta de volumen”, sino ruteos incompletos, envíos pre/post mal entendidos o ganancias mal ajustadas.",
              "documentPages": [
                {
                  "src": "assets/source/formato-c-v0-2/sonido_play_u08_consolas_mezcla_ruteo_formato_c_v0_2_page_01.png",
                  "alt": "Vista previa del Documento Fuente sonido_play_u08_consolas_mezcla_ruteo_formato_c_v0_2",
                  "caption": "Vista renderizada del Documento Fuente Formato C v0.2."
                }
              ],
              "visualLabel": "Documento Fuente · Formato C v0.2",
              "expertStatus": "Documento ampliado · Pendiente de validación técnica por Matías",
              "tags": [
                "Documento Madre",
                "Formato C",
                "Unidad 08",
                "Fuente ampliada",
                "Cuestionario progresivo"
              ],
              "preserveLineBreaks": true
            }
          ],
          "theoryBlocks": [
            {
              "title": "Ganancia antes de mezclar",
              "body": "La ganancia ajusta el nivel de entrada para trabajar con señal útil sin ruido excesivo ni saturación. Mezclar con ganancia mal ajustada complica todo el flujo.",
              "note": "Gain no es lo mismo que fader."
            },
            {
              "title": "EQ y filtros",
              "body": "La ecualización modifica balance de frecuencias. El filtro pasa altos puede limpiar graves no deseados en voces o fuentes que no requieren baja frecuencia.",
              "note": "EQ corrige o adapta; no reemplaza buena captación."
            },
            {
              "title": "Auxiliares y pre/post",
              "body": "Los auxiliares envían copias de señal a monitores o efectos. Pre-fader y post-fader definen si ese envío depende o no del fader del canal.",
              "note": "Monitores y efectos suelen requerir lógicas distintas."
            },
            {
              "title": "Ruteo",
              "body": "Una señal puede estar presente en un canal y aun así no salir si no está asignada a la ruta correcta. Por eso hay que seguir el camino completo.",
              "note": "Ver señal no garantiza escuchar señal."
            }
          ],
          "questions": [
            {
              "prompt": "¿Qué función cumple la ganancia/trim?",
              "difficulty": "recognition",
              "options": [
                "Ajustar el nivel de entrada del canal.",
                "Cambiar el color del botón.",
                "Mover físicamente el micrófono.",
                "Elegir la canción."
              ],
              "correctIndex": 0,
              "explanation": "La ganancia prepara el nivel de trabajo del canal."
            },
            {
              "prompt": "¿Qué significa rutear una señal?",
              "difficulty": "recognition",
              "options": [
                "Definir hacia qué salida, bus o destino se envía.",
                "Pintar el canal de otro color.",
                "Aumentar automáticamente la potencia del parlante.",
                "Convertir la señal en acústica sin parlante."
              ],
              "correctIndex": 0,
              "explanation": "El ruteo define el camino de salida o destino de la señal."
            },
            {
              "prompt": "¿Por qué gain y fader no son lo mismo?",
              "difficulty": "comprehension",
              "options": [
                "Gain ajusta entrada; fader controla nivel del canal en la mezcla/ruta.",
                "Ambos son exactamente iguales siempre.",
                "Fader solo sirve para iluminación.",
                "Gain es un tipo de conector."
              ],
              "correctIndex": 0,
              "explanation": "Confundirlos lleva a mala estructura de ganancia."
            },
            {
              "prompt": "¿Qué diferencia básica hay entre aux pre-fader y post-fader?",
              "difficulty": "comprehension",
              "options": [
                "Pre no depende del fader; post sí depende del fader.",
                "Pre siempre es estéreo y post siempre mono.",
                "Post elimina la señal del canal.",
                "No hay diferencia audible ni funcional."
              ],
              "correctIndex": 0,
              "explanation": "La posición de toma determina dependencia respecto del fader."
            },
            {
              "prompt": "Tenés señal en canal pero no sale por PA. ¿Qué revisás?",
              "difficulty": "application",
              "options": [
                "Mute, asignación, routing, master, salidas y etapa posterior.",
                "Solo el color del cable.",
                "La letra de la canción.",
                "La ubicación del público únicamente."
              ],
              "correctIndex": 0,
              "explanation": "La señal puede no estar asignada o puede estar bloqueada en una etapa posterior."
            },
            {
              "prompt": "Una voz tiene golpes de aire y graves innecesarios. ¿Qué herramienta puede ayudar?",
              "difficulty": "application",
              "options": [
                "Filtro pasa altos/low cut.",
                "Salida Speakon al micrófono.",
                "Invertir el escenario.",
                "Subir todos los graves."
              ],
              "correctIndex": 0,
              "explanation": "El low cut ayuda a reducir bajas frecuencias no deseadas."
            },
            {
              "prompt": "¿Qué criterio evita problemas de mezcla?",
              "difficulty": "criterion",
              "options": [
                "Ajustar ganancia antes de equilibrar con faders.",
                "Mezclar todos los canales con gain al máximo.",
                "Usar EQ extrema antes de escuchar la fuente.",
                "Rutear sin revisar salidas."
              ],
              "correctIndex": 0,
              "explanation": "Una buena estructura de ganancia facilita mezcla limpia."
            },
            {
              "prompt": "¿Qué respuesta muestra mejor criterio ante un monitor que no recibe voz?",
              "difficulty": "criterion",
              "options": [
                "Revisar envío auxiliar, pre/post, nivel de aux, master de aux y salida física.",
                "Subir el master principal solamente.",
                "Cambiar el micrófono sin revisar consola.",
                "Agregar reverberación al PA."
              ],
              "correctIndex": 0,
              "explanation": "El monitor depende de su ruta auxiliar, no solo de la mezcla principal."
            }
          ]
        }
      ]
    },
    {
      "id": "module-09",
      "title": "Amplificadores y parlantes",
      "status": "available",
      "description": "Potencia, impedancia, activos/pasivos y compatibilidad.",
      "lessons": [
        {
          "id": "u09",
          "type": "lesson",
          "title": "Amplificadores, Potencia, Impedancia y Parlantes",
          "xp": 125,
          "objective": "Comprender la relación entre señal, potencia, amplificador, impedancia y parlantes activos/pasivos para evitar incompatibilidades.",
          "sourceSegments": [
            {
              "title": "Amplificadores, Potencia, Impedancia y Parlantes",
              "sourceRef": "Documento Fuente · Unidad 09 · Formato C v0.2 · Documento Madre + fuentes verdes/controladas",
              "body": "Esta unidad amplía la Clase 10 del Documento Madre sobre amplificadores. Un amplificador no crea información sonora nueva: toma una señal de entrada y entrega más tensión, corriente o potencia para mover parlantes.\n\nLa potencia no debe leerse como “más watts = mejor”. La elección depende de parlantes, impedancia, sensibilidad, recinto, uso previsto, protecciones y margen operativo. Un parlante pasivo necesita amplificación externa; un parlante activo incluye amplificación interna.\n\nLa impedancia es crítica: conectar cargas incompatibles puede exigir demasiado al amplificador, generar distorsión, activar protecciones o dañar equipos. También hay que distinguir señales de línea y señales de parlante: no van a los mismos destinos.",
              "documentPages": [
                {
                  "src": "assets/source/formato-c-v0-2/sonido_play_u09_amplificadores_potencia_impedancia_parlantes_formato_c_v0_2_page_01.png",
                  "alt": "Vista previa del Documento Fuente sonido_play_u09_amplificadores_potencia_impedancia_parlantes_formato_c_v0_2",
                  "caption": "Vista renderizada del Documento Fuente Formato C v0.2."
                }
              ],
              "visualLabel": "Documento Fuente · Formato C v0.2",
              "expertStatus": "Documento ampliado · Pendiente de validación técnica por Matías",
              "tags": [
                "Documento Madre",
                "Formato C",
                "Unidad 09",
                "Fuente ampliada",
                "Cuestionario progresivo"
              ],
              "preserveLineBreaks": true
            }
          ],
          "theoryBlocks": [
            {
              "title": "Función del amplificador",
              "body": "El amplificador aumenta la capacidad de la señal para entregar energía al parlante. No mejora por sí solo una mala mezcla ni corrige una mala captación.",
              "note": "Amplificar no significa arreglar."
            },
            {
              "title": "Potencia útil",
              "body": "La potencia debe interpretarse con impedancia, distorsión, margen y tipo de uso. Un número aislado de watts puede ser engañoso.",
              "note": "El dato técnico necesita contexto."
            },
            {
              "title": "Impedancia",
              "body": "La impedancia de la carga afecta el esfuerzo del amplificador. Usar valores no compatibles puede comprometer estabilidad y seguridad del equipo.",
              "note": "No toda combinación amplificador-parlante es válida."
            },
            {
              "title": "Activo y pasivo",
              "body": "Un parlante activo integra amplificador. Un parlante pasivo requiere amplificador externo y cableado de potencia adecuado.",
              "note": "No se cablean igual."
            }
          ],
          "questions": [
            {
              "prompt": "¿Qué hace un amplificador de audio?",
              "difficulty": "recognition",
              "options": [
                "Aumenta tensión, corriente o potencia de una señal para mover parlantes.",
                "Convierte paredes en absorbentes.",
                "Elige automáticamente el micrófono correcto.",
                "Elimina toda distorsión de origen."
              ],
              "correctIndex": 0,
              "explanation": "El amplificador entrega energía suficiente a la carga/parlante."
            },
            {
              "prompt": "¿Qué unidad se usa para expresar impedancia?",
              "difficulty": "recognition",
              "options": [
                "Ohms.",
                "Hertz.",
                "Decibeles SPL.",
                "Grados Celsius."
              ],
              "correctIndex": 0,
              "explanation": "La impedancia se expresa en ohms (Ω)."
            },
            {
              "prompt": "¿Por qué “más watts” no significa siempre mejor sistema?",
              "difficulty": "comprehension",
              "options": [
                "Porque hay que considerar parlantes, impedancia, sensibilidad, distorsión y uso.",
                "Porque los watts no existen en audio.",
                "Porque la potencia reemplaza la acústica.",
                "Porque todos los amplificadores suenan igual en cualquier condición."
              ],
              "correctIndex": 0,
              "explanation": "La potencia aislada no alcanza para decidir."
            },
            {
              "prompt": "¿Cuál es la diferencia básica entre parlante activo y pasivo?",
              "difficulty": "comprehension",
              "options": [
                "El activo incluye amplificación interna; el pasivo necesita amplificador externo.",
                "El pasivo no reproduce sonido nunca.",
                "El activo no necesita señal de audio.",
                "Son iguales en conexión y uso."
              ],
              "correctIndex": 0,
              "explanation": "La arquitectura interna cambia conexión y operación."
            },
            {
              "prompt": "Un amplificador trabaja con carga de impedancia menor a la admitida. ¿Qué riesgo hay?",
              "difficulty": "application",
              "options": [
                "Sobrecarga, protección, distorsión o daño.",
                "Mejor claridad garantizada.",
                "Eliminación de reverberación.",
                "Reducción automática de acoples."
              ],
              "correctIndex": 0,
              "explanation": "La carga incompatible puede exigir demasiado al equipo."
            },
            {
              "prompt": "Tenés un parlante pasivo. ¿Qué necesitás para alimentarlo correctamente?",
              "difficulty": "application",
              "options": [
                "Un amplificador compatible y cable de parlante adecuado.",
                "Una salida de auriculares de celular sin más.",
                "Un cable de micrófono al azar.",
                "Un sonómetro conectado directo."
              ],
              "correctIndex": 0,
              "explanation": "El pasivo requiere potencia desde amplificador."
            },
            {
              "prompt": "¿Qué decisión muestra mejor criterio al elegir amplificación?",
              "difficulty": "criterion",
              "options": [
                "Revisar compatibilidad completa: potencia, impedancia, parlantes, uso y protecciones.",
                "Elegir solo el número más alto de watts.",
                "Ignorar impedancia.",
                "Usar cualquier salida disponible."
              ],
              "correctIndex": 0,
              "explanation": "La compatibilidad se evalúa como sistema."
            },
            {
              "prompt": "¿Qué advertencia debería recordar un operador?",
              "difficulty": "criterion",
              "options": [
                "No conectar señales de parlante/potencia a entradas de línea o micrófono.",
                "Conectar todo donde físicamente entre.",
                "Usar cable fino para cualquier potencia.",
                "Desactivar protecciones para sonar más fuerte."
              ],
              "correctIndex": 0,
              "explanation": "Las señales de potencia pueden dañar entradas no diseñadas para eso."
            }
          ]
        }
      ]
    },
    {
      "id": "module-10",
      "title": "Integrador y evaluación",
      "status": "available",
      "description": "Casos, diagnóstico, errores críticos y evaluación por criterio.",
      "lessons": [
        {
          "id": "u10",
          "type": "challenge",
          "title": "Integrador: Diagnóstico, Casos y Evaluación",
          "xp": 150,
          "objective": "Integrar cadena, acústica, niveles, micrófonos, conexiones, consola y amplificación mediante casos de diagnóstico y criterio operativo.",
          "sourceSegments": [
            {
              "title": "Integrador: Diagnóstico, Casos y Evaluación",
              "sourceRef": "Documento Fuente · Unidad 10 · Formato C v0.2 · Documento Madre + fuentes verdes/controladas",
              "body": "La unidad integradora usa Documento Madre + Formato C + Learning Lab. No agrega teoría aislada: organiza evidencia de aprendizaje mediante diagnóstico de casos, priorización de acciones y evaluación por criterio.\n\nEl alumno debe demostrar que puede mirar una situación de sonido como sistema. No alcanza con recordar definiciones. Debe decidir dónde puede estar el problema, qué revisar primero, qué acciones evitar y cómo justificar técnicamente una decisión.\n\nEsta unidad usa una lógica de evidencia: reconocimiento, comprensión, aplicación y criterio. El objetivo es preparar futuras simulaciones: diagnóstico de fallas, consola visual, selección de micrófonos, rutas de señal y decisiones seguras de conexión.",
              "documentPages": [
                {
                  "src": "assets/source/formato-c-v0-2/sonido_play_u10_integrador_diagnostico_casos_evaluacion_formato_c_v0_2_page_01.png",
                  "alt": "Vista previa del Documento Fuente sonido_play_u10_integrador_diagnostico_casos_evaluacion_formato_c_v0_2",
                  "caption": "Vista renderizada del Documento Fuente Formato C v0.2."
                }
              ],
              "visualLabel": "Documento Fuente · Formato C v0.2",
              "expertStatus": "Documento ampliado · Pendiente de validación técnica por Matías",
              "tags": [
                "Documento Madre",
                "Formato C",
                "Unidad 10",
                "Fuente ampliada",
                "Cuestionario progresivo"
              ],
              "preserveLineBreaks": true
            }
          ],
          "theoryBlocks": [
            {
              "title": "Diagnóstico por sistema",
              "body": "Cada caso debe analizarse por cadena: fuente, medio, captación, cableado, consola, ruteo, amplificación, parlantes y acústica.",
              "note": "Diagnosticar es ordenar la incertidumbre."
            },
            {
              "title": "Errores críticos",
              "body": "Hay errores que no son solo conceptuales: conectar salidas de potencia a entradas débiles, ignorar niveles excesivos, usar rutas incorrectas o aprobar soluciones sin verificar.",
              "note": "El curso debe distinguir error menor de error crítico."
            },
            {
              "title": "Criterio operativo",
              "body": "El alumno debe justificar decisiones: por qué medir, por qué revisar ruteo, por qué no subir todo, por qué cambiar un micrófono o por qué mover un parlante.",
              "note": "La respuesta correcta necesita razón técnica."
            },
            {
              "title": "Puente a simulación",
              "body": "Los casos integradores preparan el camino para desafíos E3/E4/E5: decisión contextual, diagnóstico y corrección inicial.",
              "note": "La evaluación final debe parecerse a problemas reales."
            }
          ],
          "questions": [
            {
              "prompt": "Caso: hay voz en consola pero no en parlantes principales. ¿Qué etapa revisás primero?",
              "difficulty": "application",
              "options": [
                "Ruteo/salidas/conexión posterior a consola.",
                "La respiración del cantante solamente.",
                "El color de las luces.",
                "La letra del tema."
              ],
              "correctIndex": 0,
              "explanation": "Si hay señal en consola, el problema puede estar después o en asignaciones de salida."
            },
            {
              "prompt": "Caso: al abrir dos micrófonos de una guitarra se pierde cuerpo. ¿Qué sospechás?",
              "difficulty": "application",
              "options": [
                "Interferencia/fase por diferencias de tiempo.",
                "Falta de watts exclusivamente.",
                "Ausencia de medio material.",
                "Impedancia de la pared."
              ],
              "correctIndex": 0,
              "explanation": "Dos captaciones de la misma fuente pueden generar cancelaciones."
            },
            {
              "prompt": "Caso: una charla se entiende pero molesta por nivel alto. ¿Qué decisión es mejor?",
              "difficulty": "criterion",
              "options": [
                "Ajustar nivel preservando inteligibilidad y considerar exposición.",
                "Subir más para que parezca profesional.",
                "Ignorar al público.",
                "Cambiar todos los cables."
              ],
              "correctIndex": 0,
              "explanation": "Claridad y seguridad importan más que potencia innecesaria."
            },
            {
              "prompt": "Caso: micrófono muy sensible capta demasiada sala. ¿Qué revisás?",
              "difficulty": "application",
              "options": [
                "Tipo de micrófono, patrón, distancia y entorno.",
                "Solo el fader master.",
                "La marca del amplificador.",
                "El tamaño del flyer."
              ],
              "correctIndex": 0,
              "explanation": "La captación depende de micrófono, patrón, ubicación y acústica."
            },
            {
              "prompt": "Caso: salida de amplificador quiere conectarse a una entrada de consola para grabar. ¿Qué criterio aplicás?",
              "difficulty": "criterion",
              "options": [
                "No hacerlo: es una señal de potencia y puede dañar la entrada.",
                "Hacerlo si el conector entra.",
                "Subir ganancia para compensar.",
                "Usar cualquier adaptador."
              ],
              "correctIndex": 0,
              "explanation": "La compatibilidad de nivel y destino es crítica."
            },
            {
              "prompt": "Caso: una sala dura suena confusa aunque el sistema está bien conectado. ¿Qué variable pesa?",
              "difficulty": "comprehension",
              "options": [
                "Acústica: reflexiones/reverberación.",
                "Solo potencia eléctrica.",
                "Únicamente color del cable.",
                "La consola apagada."
              ],
              "correctIndex": 0,
              "explanation": "El entorno puede arruinar claridad aunque el sistema funcione."
            },
            {
              "prompt": "¿Cuál es el orden más útil para diagnosticar un sistema completo?",
              "difficulty": "recognition",
              "options": [
                "Fuente → captación → cableado → consola/ruteo → amplificación → parlantes → sala.",
                "Sala → flyer → luces → redes sociales.",
                "Amplificador → canción → público → micrófono sin revisar señal.",
                "Cualquier orden al azar."
              ],
              "correctIndex": 0,
              "explanation": "El orden por cadena evita omisiones."
            },
            {
              "prompt": "¿Qué evidencia demuestra mejor competencia que un multiple choice simple?",
              "difficulty": "criterion",
              "options": [
                "Detectar el error, justificarlo y proponer una acción segura.",
                "Recordar una palabra aislada.",
                "Completar una lectura sin aplicar nada.",
                "Elegir al azar hasta acertar."
              ],
              "correctIndex": 0,
              "explanation": "Learning Lab prioriza evidencia observable de criterio y acción."
            },
            {
              "prompt": "Caso: monitor no recibe voz pero PA sí. ¿Dónde revisás?",
              "difficulty": "application",
              "options": [
                "Envío auxiliar, pre/post, nivel de aux, salida de monitor y ruta correspondiente.",
                "Solo master L/R.",
                "Solo parlante principal.",
                "Solo acústica del público."
              ],
              "correctIndex": 0,
              "explanation": "El monitor tiene ruta propia, normalmente auxiliar."
            },
            {
              "prompt": "Caso: el fondo no escucha claro y el frente está demasiado fuerte. ¿Qué evitás?",
              "difficulty": "criterion",
              "options": [
                "Subir todo sin revisar cobertura.",
                "Medir en varias zonas.",
                "Revisar orientación de parlantes.",
                "Considerar distribución del sistema."
              ],
              "correctIndex": 0,
              "explanation": "Subir globalmente puede empeorar el frente sin resolver el fondo."
            },
            {
              "prompt": "Caso: una voz tiene graves molestos por cercanía al micrófono. ¿Qué fenómeno puede estar interviniendo?",
              "difficulty": "comprehension",
              "options": [
                "Efecto de proximidad.",
                "Filtro de peine exclusivamente por consola apagada.",
                "Impedancia del público.",
                "Refracción por partitura."
              ],
              "correctIndex": 0,
              "explanation": "Muchos direccionales aumentan graves cuando la fuente está muy cerca."
            },
            {
              "prompt": "¿Qué resultado final buscamos en la evaluación integradora?",
              "difficulty": "criterion",
              "options": [
                "Criterio técnico trazable: diagnóstico, acción y justificación.",
                "Memorizar marcas de equipos.",
                "Responder todo por velocidad sin leer casos.",
                "Evitar explicar decisiones."
              ],
              "correctIndex": 0,
              "explanation": "La evaluación integradora mide criterio aplicado, no solo memoria."
            }
          ]
        }
      ]
    }
  ]
};

function applyEditorialCuration() {
  // v17: las preguntas ya vienen curadas por unidad con dificultad progresiva.
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

function isValidMode(mode) {
  return mode === "student" || mode === "dev";
}

function loadMode() {
  try {
    const storedMode = localStorage.getItem(MODE_KEY);
    return isValidMode(storedMode) ? storedMode : null;
  } catch {
    return null;
  }
}

function getStorageKey(mode) {
  return STORAGE_KEYS[isValidMode(mode) ? mode : "student"];
}

function isDevMode() {
  return currentMode === "dev";
}

function getDefaultState(mode = currentMode || "student") {
  const firstId = getFirstLessonId();
  const lessonIds = getAllLessons().map((lesson) => lesson.id);
  return {
    xp: 0,
    hearts: 5,
    streak: 1,
    completed: [],
    unlocked: mode === "dev" ? lessonIds : [firstId],
    bestScores: {},
    readingDone: {},
    lastVisited: firstId,
    uiTheme: "dark",
    demoAdvances: 0,
    mode
  };
}

function loadState(mode = currentMode || "student") {
  try {
    const raw = localStorage.getItem(getStorageKey(mode));
    const loadedState = raw ? { ...getDefaultState(mode), ...JSON.parse(raw), mode } : getDefaultState(mode);
    return normalizeStateIds(loadedState, mode);
  } catch {
    return normalizeStateIds(getDefaultState(mode), mode);
  }
}

function saveState() {
  if (!currentMode) return;
  localStorage.setItem(getStorageKey(currentMode), JSON.stringify({ ...state, mode: currentMode }));
}

let currentMode = loadMode();
let state = currentMode ? loadState(currentMode) : getDefaultState("student");
let view = currentMode ? "home" : "gate";
let activeLessonId = getLesson(state.lastVisited) ? state.lastVisited : getFirstLessonId();
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

function getFirstLessonId() {
  return getAllLessons()[0]?.id || "u01";
}

function normalizeStateIds(rawState, mode = currentMode || "student") {
  const validIds = getAllLessons().map((lesson) => lesson.id);
  const firstId = getFirstLessonId();
  const normalized = { ...rawState, mode };

  normalized.unlocked = Array.isArray(normalized.unlocked)
    ? normalized.unlocked.filter((id) => validIds.includes(id))
    : [];

  if (mode === "dev") {
    normalized.unlocked = [...validIds];
  }

  if (!normalized.unlocked.length) {
    normalized.unlocked = [firstId];
  }

  normalized.completed = Array.isArray(normalized.completed)
    ? normalized.completed.filter((id) => validIds.includes(id))
    : [];

  normalized.lastVisited = validIds.includes(normalized.lastVisited)
    ? normalized.lastVisited
    : firstId;

  return normalized;
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
  return isDevMode() || state.unlocked.includes(lessonId);
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
      ${view !== "gate" ? renderTopbar() : ""}
      ${view !== "gate" && isDevMode() ? renderDevToolbar() : ""}
      ${view === "gate" ? renderModeGate() : ""}
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

function renderModeGate() {
  return `
    <main class="mode-gate panel">
      <span class="badge">🎧 Sonido Play · ${APP_VERSION}</span>
      <h1>¿Cómo querés ingresar?</h1>
      <p class="hero-copy">
        Separá la experiencia real del alumno de la revisión rápida del prototipo.
        Así podemos probar a fondo sin romper el avance progresivo del curso.
      </p>

      <div class="mode-grid">
        <article class="mode-card student-mode-card">
          <div class="mode-icon">🎓</div>
          <p class="kicker">Camino real</p>
          <h2>Entrar como alumno</h2>
          <p>Curso progresivo: arranca en U01, exige lectura, cuestionario aprobado y desbloqueo ordenado.</p>
          <ul>
            <li>Unidades bloqueadas hasta completar la anterior.</li>
            <li>Lectura obligatoria antes del cuestionario.</li>
            <li>Progreso separado para pruebas reales.</li>
          </ul>
          <button class="primary-btn" data-action="choose-mode" data-mode="student">Entrar como alumno</button>
        </article>

        <article class="mode-card dev-mode-card">
          <div class="mode-icon">🛠️</div>
          <p class="kicker">Revisión rápida</p>
          <h2>Entrar en modo dev</h2>
          <p>Modo de control para revisar navegación, documentos, cuestionarios y evaluación integradora sin bloqueos.</p>
          <ul>
            <li>Todas las unidades disponibles.</li>
            <li>Selector rápido U01 → U10.</li>
            <li>Botón “Seguir flujo” y atajos de revisión.</li>
          </ul>
          <button class="secondary-btn" data-action="choose-mode" data-mode="dev">Entrar en modo dev</button>
        </article>
      </div>
    </main>
  `;
}

function renderDevToolbar() {
  return `
    <section class="dev-toolbar" aria-label="Barra de revisión para desarrollo">
      <div class="dev-toolbar-main">
        <strong>🛠️ Modo Dev</strong>
        <span>Revisión libre · ${getLesson(activeLessonId)?.id?.toUpperCase() || "HOME"}</span>
      </div>
      <div class="dev-unit-list">
        ${getAllLessons().map((lesson) => `
          <button class="dev-unit-btn ${lesson.id === activeLessonId ? "active" : ""}" data-action="dev-open-lesson" data-lesson-id="${lesson.id}">${lesson.id.toUpperCase()}</button>
        `).join("")}
      </div>
      <div class="dev-toolbar-actions">
        <button class="ghost-btn" data-action="dev-mark-complete">Marcar unidad completa</button>
        <button class="ghost-btn" data-action="change-mode">Volver al selector</button>
      </div>
    </section>
  `;
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
        <button class="mode-pill" data-action="change-mode" title="Cambiar modo de uso">${isDevMode() ? "🛠️ Dev" : "🎓 Alumno"}</button>
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
        <span class="badge">🎧 Prototipo v18 · ${isDevMode() ? "Modo Dev" : "Modo Alumno"}</span>
        <h1>${isDevMode() ? "Revisá Sonido Play sin bloqueos." : "Aprendé sonido para espectáculos practicando."}</h1>
        <p class="hero-copy">
          ${isDevMode()
            ? "Modo de revisión: todas las unidades están disponibles para validar navegación, documentos, cuestionarios y evaluación integradora."
            : "Modo alumno: avanzás en orden con Documento Fuente, guía curada, cuestionario y desbloqueo progresivo."}
        </p>
        <div class="cta-row">
          <button class="primary-btn" data-action="continue">${isDevMode() ? "Continuar revisión" : "Continuar curso"}</button>
          <button class="secondary-btn" data-action="open-first">${isDevMode() ? "Abrir U01" : "Revisar desde el inicio"}</button>
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
            <p class="objective">${isDevMode() ? "Todas las unidades están desbloqueadas para revisión rápida. El avance dev no modifica el progreso de alumno." : "Completá las lecciones en orden: Documento Fuente, guía curada, cuestionario y desbloqueo de la siguiente unidad."}</p>
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
  const readingDone = isDevMode() || Boolean(state.readingDone[lesson.id]);
  const canStartQuiz = isDevMode() || readingDone;
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
        ${isDevMode() ? `<div class="flow-item demo"><strong>DEV</strong><span>Recorrido libre</span></div>` : ""}
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
          <button id="startQuizBtn" class="primary-btn" data-action="start-quiz" ${canStartQuiz ? "" : "disabled"}>
            ${canStartQuiz ? "Ir al cuestionario" : "Leé el Documento Fuente y la guía hasta el final"}
          </button>
          ${isDevMode() ? `<button class="flow-forward-btn" data-action="advance-flow" title="Modo dev: avanza sin contestar cuestionario">Seguir flujo →</button>` : ""}
          <button class="secondary-btn" data-action="go-home">Guardar y volver</button>
        </div>
        ${isDevMode() ? `<p class="demo-note">Modo Dev: “Seguir flujo” permite recorrer pantallas, unidades y tema visual sin responder el cuestionario.</p>` : ""}
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
          ${isDevMode() ? `<button class="flow-forward-btn" data-action="advance-flow" title="Modo dev: salta este cuestionario y avanza al siguiente paso">Seguir flujo →</button>` : ""}
          <button class="ghost-btn" data-action="back-to-lesson">Repasar teoría</button>
        </div>
        ${isDevMode() ? `<p class="demo-note quiz-demo-note">Modo Dev: podés saltar este cuestionario para revisar navegación, pantallas, unidad siguiente y GUI sin responder.</p>` : ""}
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
        ${isDevMode() ? `<button class="flow-forward-btn" data-action="advance-flow">Seguir flujo →</button>` : ""}
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
  document.querySelectorAll("[data-action='choose-mode']").forEach((el) => {
    el.addEventListener("click", () => {
      selectMode(el.getAttribute("data-mode"));
    });
  });

  document.querySelectorAll("[data-action='change-mode']").forEach((el) => {
    el.addEventListener("click", () => {
      view = "gate";
      localStorage.removeItem(MODE_KEY);
      currentMode = null;
      render();
    });
  });

  document.querySelectorAll("[data-action='dev-open-lesson']").forEach((el) => {
    el.addEventListener("click", () => {
      if (!isDevMode()) return;
      openLesson(el.getAttribute("data-lesson-id"));
    });
  });

  document.querySelectorAll("[data-action='dev-mark-complete']").forEach((el) => {
    el.addEventListener("click", () => {
      if (!isDevMode() || !getLesson(activeLessonId)) return;
      state.readingDone[activeLessonId] = true;
      if (!state.completed.includes(activeLessonId)) state.completed.push(activeLessonId);
      const nextId = getNextLessonId(activeLessonId);
      if (nextId && !state.unlocked.includes(nextId)) state.unlocked.push(nextId);
      saveState();
      render();
      showToast("Modo Dev: unidad marcada como completa.");
    });
  });

  document.querySelectorAll("[data-action='go-home']").forEach((el) => {
    el.addEventListener("click", () => {
      view = "home";
      render();
    });
  });

  document.querySelectorAll("[data-action='continue']").forEach((el) => {
    el.addEventListener("click", () => {
      const next = getAllLessons().find((lesson) => isUnlocked(lesson.id) && !isCompleted(lesson.id));
      openLesson(next?.id || (getLesson(activeLessonId) ? activeLessonId : "u01"));
    });
  });

  document.querySelectorAll("[data-action='open-first']").forEach((el) => {
    el.addEventListener("click", () => openLesson("u01"));
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
      state = getDefaultState(currentMode || "student");
      saveState();
      view = currentMode ? "home" : "gate";
      activeLessonId = getFirstLessonId();
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
      if (!isDevMode() && !state.readingDone[activeLessonId]) {
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

function selectMode(mode) {
  if (!isValidMode(mode)) return;
  currentMode = mode;
  localStorage.setItem(MODE_KEY, mode);
  state = loadState(mode);
  activeLessonId = getLesson(state.lastVisited) ? state.lastVisited : getFirstLessonId();
  view = "home";
  quizRuntime = null;
  saveState();
  render();
  showToast(mode === "dev" ? "Modo Dev activo." : "Modo Alumno activo.");
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
  if (!getLesson(lessonId)) {
    showToast("No se encontró la unidad solicitada.");
    view = "home";
    render();
    return;
  }
  activeLessonId = lessonId;
  state.lastVisited = lessonId;
  saveState();
  view = "lesson";
  quizRuntime = null;
  render();
}

function startQuiz(lessonId) {
  const lesson = getLesson(lessonId);
  if (!lesson) {
    view = "home";
    render();
    return;
  }
  activeLessonId = lessonId;
  state.lastVisited = lessonId;
  if (state.hearts <= 0) state.hearts = 5;
  quizRuntime = {
    index: 0,
    correct: 0,
    locked: false,
    questions: createRuntimeQuestions(lesson.questions),
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
