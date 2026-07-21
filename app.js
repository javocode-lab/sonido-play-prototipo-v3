const APP_VERSION = "v18.4-u01-u03-u04-a1";
const MODE_KEY = "sonido-play-v18-4-mode";
const STORAGE_KEYS = {
  student: "sonido-play-v18-4-student-progress",
  dev: "sonido-play-v18-4-dev-progress"
};

const course = {
  "id": "sonido-play",
  "title": "Sonido Play",
  "subtitle": "Curso interactivo de sonido en espectáculos",
  "editorialNote": "Versión v18.4 A1: U01, U02, U03 y U04 ya incorporan Documento Madre visible dentro de la pantalla con imágenes originales, transcripción de respaldo, explicación Blacksmith ampliada, actividades y cuestionarios progresivos. Modo Alumno y Modo Dev/Revisión se conservan para pruebas completas.",
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
              "title": "Documento Madre visible · Clase 1: Cadena de Audio y Acústica",
              "sourceRef": "Documento Madre · Sonido del Espectáculo 2020 · Clase 1 · páginas 5 a 7 · A1",
              "body": "--- Página 5 del Documento Madre ---\n5 \n \nSistema desbalanceado ......................................................................................... 60 \n• \nOtros conectores balanceados y desbalanceados................................... 61 \nMas sobre consolas (material ampliado) ................................................................ 62 \n• \nConsolas para &quot;VIVO&quot; ............................................................................. 62 \n• \nSECCIONES DE UNA CONSOLA .......................................................... 62 \n• \nSECCION DE SALIDA ............................................................................ 65 \n• \nSalidas Submasters ................................................................................ 65 \n• \nSECCION AUXILIAR ............................................................................... 66 \n• \nRetornos Auxiliares Stereo: ..................................................................... 66 \n• \nAnexo Fotográfico ................................................................................... 66 \nClase 10: ................................................................................................................... 74 \nAmplificador. .......................................................................................................... 74 \n¿Como funciona un amplificador de audio? ............................................................ 74 \n¿Para que sirve un amplificador de sonido? ........................................................... 75 \nTipos ...................................................................................................................... 75 \n• \nClase A ................................................................................................... 76 \n• \nClase B ................................................................................................... 76 \n• \nClase C ................................................................................................... 77 \nUtilización ............................................................................................................... 77 \nAmplificadores de sonido ....................................................................................... 77 \n¿Como elegir Amplificadores de Audio Profesional? .............................................. 77 \n• \nGuía de Amplificadores de Audio Profesionales ...................................... 77 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nClase 1: \n&quot;Cadena de Audio&quot;. Este esquema está presente en todo evento de sonido, \npor lo que es indispensable conocerlo:\n\n--- Página 6 del Documento Madre ---\n6 \n \n \nConcepto de &quot;Acústica&quot;. &quot;De la Música al sonido&quot; \nIntroducción: \nComprendemos que la música es una forma de arte que vive en el tiempo. En otras \npalabras, la música no es una partitura, no es un disco musical, ni tampoco lo es una banda, \nni un instrumento, sino que la música existe y vive cada vez que se reproduce. Para poder oír \nuna música y que ella viva, es necesario el sonido, y para que exista sonido descubrimos que \nes necesario el aire. En otras palabras, la música es un conjunto de sonidos que vive en \nel aire. Una canción vive y muere cada vez que le damos PLAY a nuestro reproductor, o cada \nvez que la ejecutamos con un instrumento o nuestra propia voz. \nPor otra parte, estuvimos estudiando el sonido que se transmite por los distintos \nmateriales. Hablamos que el sonido más comúnmente se transmite por medio del aire y \nllamamos a este fenómeno energía sonora. \nDato curioso: en el espacio exterior fuera de la atmósfera no es posible oírnos ni oír una \nexplosión (típica de las películas) ya que en ausencia de aire o medio de propagación de las \nondas es imposible el fenómeno sonoro. \nOtro aspecto estudiado en clase, es que el sonido es una forma de energía llamada \nenergía sonora. La energía sonora no es infinita, y puede ser mayor o menor dependiendo \ndel impulso que le demos, ya sea con nuestra voz, un parlante o un instrumento musical. \nTenemos sonidos fuertes o débiles de acuerdo a como los nombramos musicalmente, y \npodemos medirlo de manera científica mediante una escala que llamaremos “escala de \npresión sonora, en decibeles” mediante un dispositivo llamado decibelímetro o sonómetro. \nOtro aspecto a repasar es que la energía del sonido no se pierde, sino que se va \ntransformando en energía de calor. Comentamos en clase, que distintos materiales son \ncapaces de absorber la energía sonora transformando el sonido en calor, aunque también \nnombramos que es tan pequeña este tipo de energía que medir el aumento de calor de un \npanel absorbente instalado en una pared es muy difícil dado las pequeñas magnitudes que \nse manejan. En palabras científicas llamamos a la capacidad de absorber la energía sonora \n“coeficiente de absorción” mientras que el sonido que se refleja la llamamos sonido reflejado. \nPor último, recordamos que la velocidad del sonido es de 340 metros por segundo, \nquiere decir que, en el tiempo comprendido en un segundo, el sonido que sale de la voz \nhumana, un aplauso, un instrumento o un parlante, recorre 3 cuadras y 40 mts.\n\n--- Página 7 del Documento Madre ---\n7 \n \nRepaso \nEl sonido se propaga por el aire y el aire no lo vemos. El viento es la forma en que \npodemos percibir ese aire. \nEl sonido nos permite afirmar que hay aire porque hay un medio por el cual se va a \npropagar. \nSonido definición: sensación de escuchar / el fenómeno físico que está el aire. \nTeniendo 10 autos que chocan. el numero 10 choca al 9 y el 9 al 8 y así llega en menor \nmedida al primero. El sonido funcionaría así pero el auto se abolla y el sonido no. \nClase 2: \nEco, reverberancia y absorción de sonido. \nPresión sonora: \n“En la primaria te ponían en fila agarrando los hombros de la persona de adelante. Y el \nultimo estudiante empuja. El empujón avanza en cadena.” \nEn este ejemplo se pueden analizar varias cuestiones: la fuerza del empujón. Porque si \nempuja muy suave, puede que no llegue al primero (presión sonora: esto se puede/debe \nmedir para cuidar los oídos y para asegurarse que se escuche). Puede llamarse energía \nacústica o potencia acústica. (dB) \n-0,0005 a millones. Es el orden de micro Pascales que podemos oír. (intensidad). Y \nnosotrxs lo medimos con una unidad más amigable y con menos 0:dB \n-dB (nivel de presión sonora) \n-También se puede calcular cuánto se va perdiendo en el aire el sonido \nPor ejemplo, un \nmosquito suena a 5dB \ny el motor de un auto \ntiene entre 75 y 80 dB \nmedido a un mt. A \nmayor \ndistancia \nse \nmediría menos. \nA partir de los \n120dB duele el oído.  \nY entre 150 y \n160dB corro riesgo de \nmuerte. Porque puede \nque el aire en las vías \nrespiratorias rompa los \nalveolos pulmonares. \nUna \nbomba \ntiene \naprox 120dB y nos \npuede dejar sordxs.",
              "documentPages": [
                {
                  "src": "assets/source/documento-madre/u01/u01_documento_madre_page_05.png",
                  "alt": "Documento Madre pagina 5 para U01",
                  "caption": "Documento Madre · página 05"
                },
                {
                  "src": "assets/source/documento-madre/u01/u01_documento_madre_page_06.png",
                  "alt": "Documento Madre pagina 6 para U01",
                  "caption": "Documento Madre · página 06"
                },
                {
                  "src": "assets/source/documento-madre/u01/u01_documento_madre_page_07.png",
                  "alt": "Documento Madre pagina 7 para U01",
                  "caption": "Documento Madre · página 07"
                }
              ],
              "visualLabel": "Documento Madre visible · Imágenes originales",
              "expertStatus": "A1 confirmado · Revisión técnica Matías",
              "tags": [
                "Documento Madre visible",
                "A1",
                "Clase 1",
                "Cadena de audio",
                "Acústica"
              ],
              "preserveLineBreaks": true
            },
            {
              "title": "Lectura guiada Blacksmith · De la música al sistema de audio",
              "sourceRef": "Blacksmith Academy · Desarrollo ampliado propio · Refuerzo OpenStax",
              "body": "La Clase 1 instala una idea central: en un espectáculo, la música se vuelve experiencia cuando aparece como sonido en el tiempo. Para que eso ocurra hay una fuente que vibra, un medio material por el que se propaga la perturbación, un sistema que puede captarla o reproducirla y un oyente que la percibe.\n\nEl Documento Madre habla del aire porque es el medio habitual en salas, teatros y eventos. La corrección técnica suave es que el sonido no necesita específicamente aire: necesita un medio material. En la práctica de espectáculos, ese medio casi siempre es aire, y sus condiciones influyen en cómo se propaga el sonido.\n\nLa cadena de audio sirve como mapa de trabajo. Permite ordenar fuente, acústica inicial, micrófono, cableado, consola, procesamiento, amplificación, parlante, sala y público. Cuando aparece una falla, esta cadena evita que el operador actúe al azar: primero se identifica en qué etapa del recorrido se perdió o se degradó la señal.",
              "documentPages": [],
              "visualLabel": "Explicación Blacksmith ampliada",
              "expertStatus": "Contenido ampliado · Validar con Matías",
              "tags": [
                "Desarrollo Blacksmith",
                "OpenStax",
                "Cadena",
                "Diagnóstico"
              ],
              "preserveLineBreaks": true
            }
          ],
          "theoryBlocks": [
            {
              "title": "Música, sonido y reproducción",
              "body": "La música no es solamente el soporte que la contiene. Como experiencia auditiva aparece cuando algo vibra, se propaga en un medio y llega a un oyente.",
              "note": "Una partitura, un archivo o un instrumento no son todavía la experiencia sonora completa."
            },
            {
              "title": "Sonido como energía que se propaga",
              "body": "El sonido puede entenderse como una perturbación mecánica que se transmite por un medio. En el aire, esa perturbación aparece como variaciones de presión.",
              "note": "En eventos trabajamos casi siempre con sonido propagándose por aire, pero el concepto general es medio material."
            },
            {
              "title": "Cadena de audio como herramienta",
              "body": "La cadena permite seguir el recorrido del sonido y la señal: fuente, captación, cableado, consola, amplificación, reproducción y sala.",
              "note": "Ordenar la cadena reduce diagnósticos impulsivos."
            },
            {
              "title": "Acústica al principio y al final",
              "body": "La acústica afecta lo que emite la fuente, lo que capta el micrófono y lo que escucha el público. No aparece solo después del parlante.",
              "note": "La sala también es parte del sistema."
            },
            {
              "title": "Energía, absorción y reflexión",
              "body": "Cuando el sonido encuentra superficies, parte de su energía puede reflejarse, absorberse o transformarse. Esta idea prepara las unidades de presión, reverberación y absorción.",
              "note": "El comportamiento de materiales modifica la experiencia sonora."
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
      "description": "Nivel, medición, distancia, intensidad y cuidado auditivo con Documento Madre visible.",
      "lessons": [
        {
          "id": "u02",
          "type": "lesson",
          "title": "Presión Sonora, dB y Seguridad Auditiva",
          "xp": 130,
          "objective": "Diferenciar presión sonora, intensidad, sonoridad percibida, decibeles, distancia y criterios básicos de exposición segura a partir del Documento Madre visible.",
          "sectionStatus": "U02 v0.3 A1 · Lista para revisión de Matías",
          "sourceSegments": [
            {
              "title": "Documento Madre visible · Clase 2 completa aplicada a U02",
              "sourceRef": "Documento Madre · Sonido del Espectáculo 2020 · Clase 2 · páginas 7-12 · A1 visible",
              "body": "--- Página 7 del Documento Madre ---\n7 \n \nRepaso \nEl sonido se propaga por el aire y el aire no lo vemos. El viento es la forma en que \npodemos percibir ese aire. \nEl sonido nos permite afirmar que hay aire porque hay un medio por el cual se va a \npropagar. \nSonido definición: sensación de escuchar / el fenómeno físico que está el aire. \nTeniendo 10 autos que chocan. el numero 10 choca al 9 y el 9 al 8 y así llega en menor \nmedida al primero. El sonido funcionaría así pero el auto se abolla y el sonido no. \nClase 2: \nEco, reverberancia y absorción de sonido. \nPresión sonora: \n“En la primaria te ponían en fila agarrando los hombros de la persona de adelante. Y el \nultimo estudiante empuja. El empujón avanza en cadena.” \nEn este ejemplo se pueden analizar varias cuestiones: la fuerza del empujón. Porque si \nempuja muy suave, puede que no llegue al primero (presión sonora: esto se puede/debe \nmedir para cuidar los oídos y para asegurarse que se escuche). Puede llamarse energía \nacústica o potencia acústica. (dB) \n-0,0005 a millones. Es el orden de micro Pascales que podemos oír. (intensidad). Y \nnosotrxs lo medimos con una unidad más amigable y con menos 0:dB \n-dB (nivel de presión sonora) \n-También se puede calcular cuánto se va perdiendo en el aire el sonido \nPor ejemplo, un \nmosquito suena a 5dB \ny el motor de un auto \ntiene entre 75 y 80 dB \nmedido a un mt. A \nmayor \ndistancia \nse \nmediría menos. \nA partir de los \n120dB duele el oído.  \nY entre 150 y \n160dB corro riesgo de \nmuerte. Porque puede \nque el aire en las vías \nrespiratorias rompa los \nalveolos pulmonares. \nUna \nbomba \ntiene \naprox 120dB y nos \npuede dejar sordxs.\n\n--- Página 8 del Documento Madre ---\n8 \n \n \nIlustración 1bx o dB meter para medir dB \nLa intensidad \nLa intensidad de un sonido es equivalente al volumen. Se clasifican como sonidos \nfuertes o débiles y es la potencia la que consigue una mayor o menor amplitud de la onda \nsonora. \nLa intensidad se mide en decibelios, y también existe un rango audible para el ser \nhumano: 0 dB, que indica que el hombre no es capaz de distinguirlo y 140 dB, un volumen \nque resultaría doloroso. La intensidad hace referencia a la amplitud de la onda sonora. \n \nEjemplo: En un recital pueden ser \naceptados diferentes niveles. Si hay una \ncena entre 60dB, 80dB para rock \n70/80dB y en electrónica puede hasta \n110dB \nVolvemos al ejemplo del empujón \nen la fila en primaria. Si el compañero \nempuja una sola vez, no habría un \nfenómeno vibratorio. Para que el sonido \nse perciba tiene que haber empujones \nconstantes. (varios empujones). Esa \nrepetición de empujones y la cantidad \nde veces que lo haga en un tiempo determinado, sería la frecuencia.\n\n--- Página 9 del Documento Madre ---\n9 \n \nEl oído, al igual que \nel ojo con la luz, tiene un \nmargen de audición. Tanto \npor intensidad como por el \nrango audible. Podemos \nescuchar entre 20hz a \n20000hz.\n\n--- Página 10 del Documento Madre ---\n10 \n \n \n \n \nEl eje de abajo (hz) la frecuencia. Mas bajo es grave, medios y hasta altas y agudas. \nEl eje y es dBsPL niveles de presión sonora en dB- la línea roja está al margen de los \n0dB \nEs el análisis de un parlante que funciona recién a partir de los 60hz de un modo \naudible.\n\n--- Página 11 del Documento Madre ---\n11 \n \n \nGráfico de cómo funciona el oído humano \nLas pancitas hacia abajo son más agudas y son las más sensibles. Pueden doler. Y las \ncurvas hacia arriba son las más graves y menos sensibles. Las palabras suenan en la zona \nen que están los números. \nLos números son los dB a los que escuchamos.  Y las curvas muestran a la izquierda \ncómo escuchamos los graves y a la derecha los agudos. \n En una habitación cerrada, el sonido va a rebotar (reflexión) en todas las paredes de \nla sala tantas veces como sea necesario para agotar su energía. Por esta razón las salas \nconstruidas con materiales duros (no absorbentes) como ser el baño, tienen muchos rebotes \n(reflexiones) mientras que lugares como un teatro, un estudio de grabación, una radio, etc. \nque están construidas con materiales absorbentes el sonido dura menos tiempo en la sala. A \neste efecto le llamamos reverberación, o reverberancia. Y llamamos eco cuando el sonido \nrebota solo una vez en una pared, y debe ser lejana para que podamos reconocerlo como tal. \nPor último, llamamos absorción a la capacidad que tiene un material de atrapar y transformar \nla energía sonora en energía de calor.\n\n--- Página 12 del Documento Madre ---\n12 \n \n \nLa configuración de sonido cambia si cambia la temperatura y la humedad del aire. \nEl viento puede llevarse el sonido. \nAnálisis de la onda: \n“la onda no existe, sino que es una forma de explicar un fenómeno en la vida real.” Dice \nel profe. Es una convención.  \nEn la zona más oscura \nsería la parte del empujón, \nvolviendo al ejemplo \nLa parte más clara es \nla parte de rarefacción o \nseparación donde hay menor \npresión \nEntre presión y presión \ntenemos un ciclo \nEn el caso b vemos \nque en el eje y tenemos la \npresión. Y en x el tiempo.  \nEl parlante empuja y \nvuelve a su posición para \nvolver a empujar. \nEste es un gráfico ideal. De presión y descompresión constante. \nEl punto entre medio es el punto en que no hay presión ni descompresión.",
              "documentPages": [
                {
                  "src": "assets/source/documento-madre/u02/u02_documento_madre_clase_2_page_07.png",
                  "alt": "Documento Madre Clase 2 pagina 7",
                  "caption": "Documento Madre · Clase 2 · página 07"
                },
                {
                  "src": "assets/source/documento-madre/u02/u02_documento_madre_clase_2_page_08.png",
                  "alt": "Documento Madre Clase 2 pagina 8",
                  "caption": "Documento Madre · Clase 2 · página 08"
                },
                {
                  "src": "assets/source/documento-madre/u02/u02_documento_madre_clase_2_page_09.png",
                  "alt": "Documento Madre Clase 2 pagina 9",
                  "caption": "Documento Madre · Clase 2 · página 09"
                },
                {
                  "src": "assets/source/documento-madre/u02/u02_documento_madre_clase_2_page_10.png",
                  "alt": "Documento Madre Clase 2 pagina 10",
                  "caption": "Documento Madre · Clase 2 · página 10"
                },
                {
                  "src": "assets/source/documento-madre/u02/u02_documento_madre_clase_2_page_11.png",
                  "alt": "Documento Madre Clase 2 pagina 11",
                  "caption": "Documento Madre · Clase 2 · página 11"
                },
                {
                  "src": "assets/source/documento-madre/u02/u02_documento_madre_clase_2_page_12.png",
                  "alt": "Documento Madre Clase 2 pagina 12",
                  "caption": "Documento Madre · Clase 2 · página 12"
                }
              ],
              "visualLabel": "Documento Madre visible · Imágenes originales",
              "expertStatus": "A1 confirmado · Revisión técnica Matías",
              "tags": [
                "Documento Madre visible",
                "A1",
                "Clase 2",
                "Imágenes originales",
                "U02 v0.3"
              ],
              "preserveLineBreaks": true
            },
            {
              "title": "Lectura guiada Blacksmith · Presión, intensidad y seguridad",
              "sourceRef": "Blacksmith Academy · Desarrollo ampliado propio · Refuerzo OpenStax/SRT",
              "body": "La Clase 2 del Documento Madre introduce presión sonora, intensidad, dB, distancia, rango audible, curvas de audición, reverberación, eco, absorción y análisis de onda. Para esta unidad nos concentramos en presión sonora, intensidad, nivel en dB, distancia y seguridad auditiva.\n\nEl ejemplo del empujón en fila funciona como puente pedagógico: una perturbación se transmite de una partícula a otra. En sonido, esa perturbación se manifiesta como pequeñas variaciones de presión en el medio.\n\nLa intensidad no debe confundirse de forma absoluta con el volumen percibido. La intensidad es una magnitud física; la sonoridad o volumen percibido depende también del oído humano, la frecuencia, el tiempo de exposición y el contexto.\n\nEl decibel permite trabajar con rangos enormes usando una escala logarítmica. Por eso pequeños cambios numéricos pueden representar cambios importantes, y siempre hay que aclarar de qué dB hablamos: dB SPL/NPS, dBA, dBu o dBV.\n\nEn operación de espectáculos, medir sirve para tomar decisiones con evidencia: cobertura, inteligibilidad, comodidad del público y cuidado auditivo. Más fuerte no siempre significa mejor.",
              "documentPages": [],
              "visualLabel": "Explicación Blacksmith ampliada",
              "expertStatus": "Contenido ampliado · Validar con Matías",
              "tags": [
                "Desarrollo Blacksmith",
                "Refuerzo externo",
                "OpenStax",
                "SRT",
                "Seguridad auditiva"
              ],
              "preserveLineBreaks": true
            }
          ],
          "theoryBlocks": [
            {
              "title": "Presión sonora",
              "body": "El sonido produce variaciones muy pequeñas de presión alrededor de la presión atmosférica. El nivel de presión sonora se expresa habitualmente como dB SPL o NPS.",
              "note": "dB SPL no mide watts ni calidad artística: mide nivel de presión sonora respecto de una referencia."
            },
            {
              "title": "Intensidad vs volumen percibido",
              "body": "La intensidad es una magnitud física asociada a energía por unidad de área. El volumen percibido o sonoridad es una experiencia auditiva que depende de nivel, frecuencia, duración y sensibilidad del oído.",
              "note": "Esta es una corrección pedagógica suave sobre la simplificación del Documento Madre."
            },
            {
              "title": "Decibeles y escala logarítmica",
              "body": "El dB permite representar rangos enormes. No se interpreta como una escala lineal: una diferencia de pocos dB puede ser relevante y siempre depende de la referencia usada.",
              "note": "dB SPL, dBA, dBu y dBV no significan lo mismo."
            },
            {
              "title": "Distancia y cobertura",
              "body": "Como guía inicial, al duplicar distancia desde una fuente puntual en campo libre, el nivel directo puede caer cerca de 6 dB. En salas reales influyen reflexiones, absorción, público y distribución del sistema.",
              "note": "Medir en una sola zona no representa a todo el público."
            },
            {
              "title": "Seguridad auditiva",
              "body": "El riesgo auditivo depende del nivel y del tiempo de exposición. En eventos, el criterio profesional combina escucha, medición, normativa y comunicación clara con producción.",
              "note": "Más fuerte no siempre es más profesional."
            }
          ],
          "readingChecklist": [
            "Explicar el ejemplo del empujón como propagación de energía/perturbación.",
            "Distinguir presión sonora, intensidad física y volumen percibido.",
            "Leer una referencia de dB sin tratarla como escala lineal.",
            "Usar la regla de caída aproximada por distancia como guía, no como verdad absoluta.",
            "Relacionar nivel y tiempo de exposición con seguridad auditiva."
          ],
          "preQuizFocus": [
            "dB SPL/NPS y medición con sonómetro.",
            "Diferencia entre intensidad física y sonoridad percibida.",
            "Distancia, cobertura e inteligibilidad.",
            "Criterio operativo ante quejas de volumen.",
            "Seguridad auditiva y exposición."
          ],
          "flowOutcome": "El alumno debe poder tomar una decisión básica de nivel sonoro sin limitarse a “subir o bajar volumen”: debe medir, escuchar por zonas y justificar técnicamente.",
          "activity": {
            "title": "Diagnóstico de nivel por zonas",
            "scenario": "En una cena con música en vivo, las primeras mesas dicen que está muy fuerte y el fondo dice que no entiende la voz. El operador tiene un sonómetro básico y puede moverse por la sala.",
            "tasks": [
              "Medir o estimar el nivel en tres zonas: frente, centro y fondo.",
              "Anotar qué se entiende bien y qué se pierde: voz, música, graves o agudos.",
              "Proponer una acción antes de subir el master general.",
              "Justificar cómo esa acción cuida inteligibilidad y seguridad auditiva."
            ],
            "evidence": "Diagnóstico breve con niveles aproximados por zona, hipótesis de cobertura y acción técnica justificada.",
            "teacherNote": "Validar con Matías si los rangos de referencia por tipo de evento deben ajustarse a su experiencia práctica."
          },
          "questions": [
            {
              "prompt": "¿Qué expresa principalmente dB SPL o NPS?",
              "difficulty": "recognition",
              "options": [
                "Nivel de presión sonora.",
                "Potencia eléctrica del amplificador.",
                "Cantidad de canales de consola.",
                "Velocidad del cableado."
              ],
              "correctIndex": 0,
              "explanation": "dB SPL/NPS refiere al nivel de presión sonora respecto de una referencia."
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
              "title": "Documento Madre visible · Eco, reverberancia, absorción y condiciones del aire",
              "sourceRef": "Documento Madre · Sonido del Espectáculo 2020 · Clase 2/3 · páginas 7, 11 y 12 · A1",
              "body": "--- Página 7 del Documento Madre ---\n7 \n \nRepaso \nEl sonido se propaga por el aire y el aire no lo vemos. El viento es la forma en que \npodemos percibir ese aire. \nEl sonido nos permite afirmar que hay aire porque hay un medio por el cual se va a \npropagar. \nSonido definición: sensación de escuchar / el fenómeno físico que está el aire. \nTeniendo 10 autos que chocan. el numero 10 choca al 9 y el 9 al 8 y así llega en menor \nmedida al primero. El sonido funcionaría así pero el auto se abolla y el sonido no. \nClase 2: \nEco, reverberancia y absorción de sonido. \nPresión sonora: \n“En la primaria te ponían en fila agarrando los hombros de la persona de adelante. Y el \nultimo estudiante empuja. El empujón avanza en cadena.” \nEn este ejemplo se pueden analizar varias cuestiones: la fuerza del empujón. Porque si \nempuja muy suave, puede que no llegue al primero (presión sonora: esto se puede/debe \nmedir para cuidar los oídos y para asegurarse que se escuche). Puede llamarse energía \nacústica o potencia acústica. (dB) \n-0,0005 a millones. Es el orden de micro Pascales que podemos oír. (intensidad). Y \nnosotrxs lo medimos con una unidad más amigable y con menos 0:dB \n-dB (nivel de presión sonora) \n-También se puede calcular cuánto se va perdiendo en el aire el sonido \nPor ejemplo, un \nmosquito suena a 5dB \ny el motor de un auto \ntiene entre 75 y 80 dB \nmedido a un mt. A \nmayor \ndistancia \nse \nmediría menos. \nA partir de los \n120dB duele el oído.  \nY entre 150 y \n160dB corro riesgo de \nmuerte. Porque puede \nque el aire en las vías \nrespiratorias rompa los \nalveolos pulmonares. \nUna \nbomba \ntiene \naprox 120dB y nos \npuede dejar sordxs.\n\n--- Página 11 del Documento Madre ---\n11 \n \n \nGráfico de cómo funciona el oído humano \nLas pancitas hacia abajo son más agudas y son las más sensibles. Pueden doler. Y las \ncurvas hacia arriba son las más graves y menos sensibles. Las palabras suenan en la zona \nen que están los números. \nLos números son los dB a los que escuchamos.  Y las curvas muestran a la izquierda \ncómo escuchamos los graves y a la derecha los agudos. \n En una habitación cerrada, el sonido va a rebotar (reflexión) en todas las paredes de \nla sala tantas veces como sea necesario para agotar su energía. Por esta razón las salas \nconstruidas con materiales duros (no absorbentes) como ser el baño, tienen muchos rebotes \n(reflexiones) mientras que lugares como un teatro, un estudio de grabación, una radio, etc. \nque están construidas con materiales absorbentes el sonido dura menos tiempo en la sala. A \neste efecto le llamamos reverberación, o reverberancia. Y llamamos eco cuando el sonido \nrebota solo una vez en una pared, y debe ser lejana para que podamos reconocerlo como tal. \nPor último, llamamos absorción a la capacidad que tiene un material de atrapar y transformar \nla energía sonora en energía de calor.\n\n--- Página 12 del Documento Madre ---\n12 \n \n \nLa configuración de sonido cambia si cambia la temperatura y la humedad del aire. \nEl viento puede llevarse el sonido. \nAnálisis de la onda: \n“la onda no existe, sino que es una forma de explicar un fenómeno en la vida real.” Dice \nel profe. Es una convención.  \nEn la zona más oscura \nsería la parte del empujón, \nvolviendo al ejemplo \nLa parte más clara es \nla parte de rarefacción o \nseparación donde hay menor \npresión \nEntre presión y presión \ntenemos un ciclo \nEn el caso b vemos \nque en el eje y tenemos la \npresión. Y en x el tiempo.  \nEl parlante empuja y \nvuelve a su posición para \nvolver a empujar. \nEste es un gráfico ideal. De presión y descompresión constante. \nEl punto entre medio es el punto en que no hay presión ni descompresión.",
              "documentPages": [
                {
                  "src": "assets/source/documento-madre/u03/u03_documento_madre_page_07.png",
                  "alt": "Documento Madre pagina 7 para U03",
                  "caption": "Documento Madre · página 07"
                },
                {
                  "src": "assets/source/documento-madre/u03/u03_documento_madre_page_11.png",
                  "alt": "Documento Madre pagina 11 para U03",
                  "caption": "Documento Madre · página 11"
                },
                {
                  "src": "assets/source/documento-madre/u03/u03_documento_madre_page_12.png",
                  "alt": "Documento Madre pagina 12 para U03",
                  "caption": "Documento Madre · página 12"
                }
              ],
              "visualLabel": "Documento Madre visible · Imágenes originales",
              "expertStatus": "A1 confirmado · Revisión técnica Matías",
              "tags": [
                "Documento Madre visible",
                "A1",
                "Eco",
                "Reverberación",
                "Absorción"
              ],
              "preserveLineBreaks": true
            },
            {
              "title": "Lectura guiada Blacksmith · La sala también mezcla",
              "sourceRef": "Blacksmith Academy · Desarrollo ampliado propio · Refuerzo conceptual externo",
              "body": "La unidad U03 toma el bloque de la Clase 2 donde el Documento Madre explica que, en una habitación cerrada, el sonido rebota en superficies hasta agotar su energía. Esta idea es clave: el resultado que escucha el público no depende solo de consola y parlantes, sino también de paredes, piso, techo, distancia, materiales y geometría.\n\nReflexión es el rebote de una parte de la energía sonora. Reverberación es la acumulación de muchas reflexiones que permanecen durante un tiempo y pueden dar sensación de espacio, pero también reducir claridad. Eco es una reflexión suficientemente separada en el tiempo como para percibirse como repetición. Absorción es la capacidad de un material de tomar parte de la energía sonora y transformarla principalmente en calor.\n\nLa temperatura, la humedad y el viento no son detalles decorativos. En exteriores, el viento puede alterar cobertura y dirección aparente; en interiores, la materialidad del espacio define cuánto dura el sonido y cuánto se entiende la palabra. Por eso, ante una voz poco clara, subir volumen no siempre resuelve: a veces aumenta todavía más la energía que rebota.",
              "documentPages": [],
              "visualLabel": "Explicación Blacksmith ampliada",
              "expertStatus": "Contenido ampliado · Validar con Matías",
              "tags": [
                "Desarrollo Blacksmith",
                "Sala",
                "Inteligibilidad",
                "Reflexiones"
              ],
              "preserveLineBreaks": true
            }
          ],
          "theoryBlocks": [
            {
              "title": "Reflexión",
              "body": "Ocurre cuando parte de la energía sonora rebota en una superficie. En salas con materiales duros, las reflexiones suelen ser más notorias.",
              "note": "No toda reflexión es mala: el problema aparece cuando afecta claridad, cobertura o control."
            },
            {
              "title": "Reverberación",
              "body": "Es la permanencia del sonido en un espacio por acumulación de muchas reflexiones. Puede aportar sensación de sala, pero si es excesiva reduce inteligibilidad.",
              "note": "Una sala reverberante puede sonar fuerte y aun así entenderse mal."
            },
            {
              "title": "Eco",
              "body": "Se percibe cuando una reflexión llega con suficiente retardo como para ser reconocida como repetición separada del sonido directo.",
              "note": "No todo rebote es eco; muchos rebotes cercanos forman reverberación."
            },
            {
              "title": "Absorción",
              "body": "Es la capacidad de un material de reducir la energía reflejada. No elimina mágicamente todo el sonido: depende de material, superficie, frecuencia y ubicación.",
              "note": "Absorber no es lo mismo que aislar."
            },
            {
              "title": "Condiciones del aire",
              "body": "Temperatura, humedad y viento pueden modificar la propagación. En exteriores, el viento puede afectar la cobertura más de lo que parece.",
              "note": "El contexto físico siempre influye."
            }
          ],
          "questions": [
            {
              "prompt": "¿Qué describe mejor la reverberación?",
              "difficulty": "recognition",
              "options": [
                "La permanencia del sonido por múltiples reflexiones en un espacio.",
                "Un único rebote percibido como repetición aislada.",
                "La conversión de una señal balanceada a no balanceada.",
                "La pérdida de voltaje en un cable largo."
              ],
              "correctIndex": 0,
              "explanation": "La reverberación aparece por acumulación de reflexiones que siguen sonando después del sonido directo."
            },
            {
              "prompt": "¿Qué diferencia básica hay entre eco y reverberación?",
              "difficulty": "comprehension",
              "options": [
                "El eco se percibe como repetición separada; la reverberación como permanencia acumulada.",
                "El eco ocurre solo en cables y la reverberación solo en micrófonos.",
                "La reverberación siempre mejora la palabra y el eco siempre mejora la música.",
                "No hay diferencia técnica ni perceptiva."
              ],
              "correctIndex": 0,
              "explanation": "La percepción temporal es clave: repetición distinguible versus cola o acumulación."
            },
            {
              "prompt": "Una sala de baño suele sonar “viva” porque...",
              "difficulty": "application",
              "options": [
                "tiene superficies duras que reflejan mucho sonido.",
                "tiene demasiada absorción en todas las frecuencias.",
                "el aire no permite propagación sonora.",
                "los graves desaparecen por completo."
              ],
              "correctIndex": 0,
              "explanation": "El Documento Madre usa este tipo de ejemplo: materiales duros generan más reflexiones."
            },
            {
              "prompt": "¿Qué afirmación sobre absorción es más correcta?",
              "difficulty": "comprehension",
              "options": [
                "Reduce parte de la energía sonora reflejada y suele depender de la frecuencia.",
                "Hace que el sonido deje de existir antes de llegar al micrófono.",
                "Convierte una señal de micrófono en señal de línea.",
                "Siempre equivale a aislamiento acústico."
              ],
              "correctIndex": 0,
              "explanation": "Absorción e aislamiento no son lo mismo. La absorción trata energía dentro del recinto."
            },
            {
              "prompt": "En una charla, la voz suena fuerte pero poco clara en una sala vidriada. ¿Qué conviene sospechar?",
              "difficulty": "application",
              "options": [
                "Exceso de reflexiones/reverberación que afecta inteligibilidad.",
                "Falta de watts en el cable XLR.",
                "Ausencia total de frecuencia en la voz.",
                "Que el problema se resuelve siempre subiendo master."
              ],
              "correctIndex": 0,
              "explanation": "El nivel puede ser suficiente; el problema puede ser acústico."
            },
            {
              "prompt": "¿Por qué subir volumen puede empeorar una sala reverberante?",
              "difficulty": "criterion",
              "options": [
                "Porque aumenta la energía directa y también la energía que rebota en la sala.",
                "Porque elimina automáticamente los rebotes.",
                "Porque convierte reverberación en absorción.",
                "Porque baja la presión sonora."
              ],
              "correctIndex": 0,
              "explanation": "Más nivel puede alimentar más reflexiones y empeorar la inteligibilidad."
            },
            {
              "prompt": "¿Cuál sería una primera acción razonable ante voz poco clara por sala?",
              "difficulty": "criterion",
              "options": [
                "Revisar ubicación, orientación de parlantes/micrófonos y posibles superficies reflectantes.",
                "Subir todos los graves al máximo.",
                "Agregar más micrófonos sin analizar la sala.",
                "Desactivar todos los parlantes sin escuchar."
              ],
              "correctIndex": 0,
              "explanation": "Primero se evalúa el comportamiento físico del sistema y la sala."
            },
            {
              "prompt": "¿Qué muestra mejor criterio técnico?",
              "difficulty": "criterion",
              "options": [
                "Diferenciar problema de nivel de problema de inteligibilidad antes de corregir.",
                "Usar siempre la misma EQ en toda sala.",
                "Resolver todo con el volumen principal.",
                "Ignorar materiales porque la consola digital compensa todo."
              ],
              "correctIndex": 0,
              "explanation": "La decisión técnica comienza por diagnosticar la causa real del síntoma."
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
              "title": "Documento Madre visible · Frecuencia, rango audible, onda, timbre y longitud de onda",
              "sourceRef": "Documento Madre · Sonido del Espectáculo 2020 · Clase 2/4 · páginas 8 a 12 y 14 a 21 · A1",
              "body": "--- Página 8 del Documento Madre ---\n8 \n \n \nIlustración 1bx o dB meter para medir dB \nLa intensidad \nLa intensidad de un sonido es equivalente al volumen. Se clasifican como sonidos \nfuertes o débiles y es la potencia la que consigue una mayor o menor amplitud de la onda \nsonora. \nLa intensidad se mide en decibelios, y también existe un rango audible para el ser \nhumano: 0 dB, que indica que el hombre no es capaz de distinguirlo y 140 dB, un volumen \nque resultaría doloroso. La intensidad hace referencia a la amplitud de la onda sonora. \n \nEjemplo: En un recital pueden ser \naceptados diferentes niveles. Si hay una \ncena entre 60dB, 80dB para rock \n70/80dB y en electrónica puede hasta \n110dB \nVolvemos al ejemplo del empujón \nen la fila en primaria. Si el compañero \nempuja una sola vez, no habría un \nfenómeno vibratorio. Para que el sonido \nse perciba tiene que haber empujones \nconstantes. (varios empujones). Esa \nrepetición de empujones y la cantidad \nde veces que lo haga en un tiempo determinado, sería la frecuencia.\n\n--- Página 9 del Documento Madre ---\n9 \n \nEl oído, al igual que \nel ojo con la luz, tiene un \nmargen de audición. Tanto \npor intensidad como por el \nrango audible. Podemos \nescuchar entre 20hz a \n20000hz.\n\n--- Página 10 del Documento Madre ---\n10 \n \n \n \n \nEl eje de abajo (hz) la frecuencia. Mas bajo es grave, medios y hasta altas y agudas. \nEl eje y es dBsPL niveles de presión sonora en dB- la línea roja está al margen de los \n0dB \nEs el análisis de un parlante que funciona recién a partir de los 60hz de un modo \naudible.\n\n--- Página 11 del Documento Madre ---\n11 \n \n \nGráfico de cómo funciona el oído humano \nLas pancitas hacia abajo son más agudas y son las más sensibles. Pueden doler. Y las \ncurvas hacia arriba son las más graves y menos sensibles. Las palabras suenan en la zona \nen que están los números. \nLos números son los dB a los que escuchamos.  Y las curvas muestran a la izquierda \ncómo escuchamos los graves y a la derecha los agudos. \n En una habitación cerrada, el sonido va a rebotar (reflexión) en todas las paredes de \nla sala tantas veces como sea necesario para agotar su energía. Por esta razón las salas \nconstruidas con materiales duros (no absorbentes) como ser el baño, tienen muchos rebotes \n(reflexiones) mientras que lugares como un teatro, un estudio de grabación, una radio, etc. \nque están construidas con materiales absorbentes el sonido dura menos tiempo en la sala. A \neste efecto le llamamos reverberación, o reverberancia. Y llamamos eco cuando el sonido \nrebota solo una vez en una pared, y debe ser lejana para que podamos reconocerlo como tal. \nPor último, llamamos absorción a la capacidad que tiene un material de atrapar y transformar \nla energía sonora en energía de calor.\n\n--- Página 12 del Documento Madre ---\n12 \n \n \nLa configuración de sonido cambia si cambia la temperatura y la humedad del aire. \nEl viento puede llevarse el sonido. \nAnálisis de la onda: \n“la onda no existe, sino que es una forma de explicar un fenómeno en la vida real.” Dice \nel profe. Es una convención.  \nEn la zona más oscura \nsería la parte del empujón, \nvolviendo al ejemplo \nLa parte más clara es \nla parte de rarefacción o \nseparación donde hay menor \npresión \nEntre presión y presión \ntenemos un ciclo \nEn el caso b vemos \nque en el eje y tenemos la \npresión. Y en x el tiempo.  \nEl parlante empuja y \nvuelve a su posición para \nvolver a empujar. \nEste es un gráfico ideal. De presión y descompresión constante. \nEl punto entre medio es el punto en que no hay presión ni descompresión.\n\n--- Página 14 del Documento Madre ---\n14 \n \n \nCada elemento que emite sonido hace vibrar el aire que lo rodea (cantante, instrumento, \nuna pava) \nSe van formando esferas alrededor de los objetos. \nClase 4 \n \nLa amplitud es la fuerza/intensidad de la \nenergía \nEntre ambas curvas no se modifica la \nfrecuencia. Sólo la amplitud. \nLa manera más habitual de expresar \ncuantitativamente la magnitud de un campo \nsonoro es mediante la presión sonora, o \nfuerza que ejercen las partículas de aire por \nunidad de superficie.\n\n--- Página 15 del Documento Madre ---\n15 \n \nEsto sucede con el sonido a \ntravés de la distancia. \nSi fuese luz, la luz se va \ndispersando y tenemos menos \ncantidad de luz, pero abarcando \nmás \nsuperficie \n(menos \nintensidad) \nA medida que duplicas la \ndistancia, bajan 6 dB según la \nley \n1mt=80dB    2mt=74dB     \n4mt=68dB    8mt=62dB \nEl parlante suele estar a más de un mt de la gente. Así que se le puede aplicar más dB \ny se calcula lo que escucha la gente. \n \nSPL o NPS es el nivel de presión sonora. \n \nHaciendo un pequeño repaso, recordamos que la presión sonora, o el sonido puede \nconsiderarse como una sucesión de ondas de compresión y rarefacción que se propaga por \nel aire. Sin embargo, si nos ubicamos en un punto en el espacio (una posición fija) veremos \ncomo la presión atmosférica aumenta y disminuye periódicamente a medida que tienen lugar \nlas sucesivas perturbaciones. La presión atmosférica se mide en Pascal y es del orden de los \n100.000 Pa (o como en los informes meteorológicos de 100 hPa). Sin embargo, cambios de \npresión debidos al pasaje de una onda sonora son muy pequeños respecto a este valor de \npresión atmosférica. Los sonidos más intensos que se perciben implican un incremento de \n20 Pa. Por esta razón, para distinguir el incremento de presión de la presión atmosférica en \nausencia de sonido se lo denomina presión sonora (p). La presión sonora es la presión que \nse debe agregar a la presión atmosférica para obtener el valor real de presión atmosférica en \npresencia de sonido. \nLa oscilación de las partículas tiene lugar en la misma dirección que la de propagación \nde la onda. En este caso se habla de ondas sonoras longitudinales, en contraposición a \nlas ondas electromagnéticas que son transversales (oscilación de la señal generadora \nperpendículo- lar a la dirección de propagación de la onda).\n\n--- Página 16 del Documento Madre ---\n16 \n \n \n \nFrecuencia \nCantidad de ciclos o de veces que pasa en \nuna determinada cantidad de tiempo \nTambién llamada altura del sonido, es la \nafinación \nde \nun \nsonido. \nLa \naltura \nestá \ndeterminada por la frecuencia de vibración de las \nondas sonoras. \nSe puede distinguir entre tres tipos de \nsonidos: \n-graves, \n-medios \n-agudos. \nEsta clasificación hace alusión a unos \nparámetros \nque \npueden \nser \nmedidos \nfísicamente. \nSegún estos indicadores, decimos que un \nsonido puede ser grave o agudo. Esto está \nvalorando un rango del sonido que es perceptible para el ser humano. \nLos instrumentos y las voces están dentro de este rango, situado entre los 20 y los \n20000 Hz. Fuera de él quedan sonidos que los seres humanos no estamos capacitados para \ndistinguir. \nOnda de 20khz tiene 1,7cm (la más aguda que podemos escuchar) \nUna onda de 20hz son 17mt. (la más grave) \nLa frecuencia se mide en Hertz, se define como el número de oscilaciones por unidad \nde tiempo.\n\n--- Página 17 del Documento Madre ---\n17 \n \n \nOtro factor a tener en cuenta es la velocidad a la que viaja el sonido.  \nEl sonido recorre 340mt x segundo \nSi yo tengo un segundo se tiempo puedo tener los 20000hz, recorre 340mt. \nCon esos datos puedo saber cuánto mide la onda.  \n340mts / 20.000= 0,017 mts \nVelocidad de propagación del sonido (c) \nLa velocidad de propagación del sonido (c) es función de la elasticidad y densidad del \nmedio de propagación. Debido a que, en el aire, ambas magnitudes dependen de la presión \natmosférica estática P0 y de la temperatura, resulta que, considerando las condiciones \nnormales de 1 atmosfera de presión y 22 °C de temperatura, la velocidad de propagación del \nsonido es de, aproximadamente, 345 m/s. \nSi bien el aire constituye el medio habitual de propagación de las ondas sonoras, \nconviene tener presente que el sonido puede propagarse a través de cualquier otro medio \nelástico y denso. Cuanto más denso y menos elástico sea el medio, mayor será́  la velocidad \ndel sonido a su través. Por ejemplo, la velocidad de propagación del sonido generado por un \ntren a través de los raíles es mucho mayor que a través del aire, por lo que la vibración del \nrail se percibirá́ mucho antes que el sonido aéreo debido a dicho tren. \nSaber el tamaño de la onda sirve para la elección del parlante. Los graves necesitan \nparlantes más grandes, que recorren más distancia en menor tiempo. Y los agudos recorre \npoca distancia en poco tiempo (mayor frecuencia) \nDepende el tamaño de la onda es con qué se puede tapar. La onda aguda se puede \ntapar con la mano. La onda grave, no. Esquiva una mano.\n\n--- Página 18 del Documento Madre ---\n18 \n \n \n \nSi nos fijamos, tanto la marrón como la celeste tienen la misma frecuencia, pero la forma \nde la onda es diferente. Hasta ahora venimos viendo ondas sinusoidales ideales. Pero en \nrealidad tienen más variables. Que hacen que suene distinto una trompeta a una guitarra. El \ntimbre. \n \n \n \nLa forma de la onda es lo que define el timbre \nEn el cuadradito celeste se ve una frecuencia pura a la izquierda- pero la de la derecha \ntiene dos frecuencias más (la básica y dos armónicos) \nEl timbre \nEl timbre es la cualidad que más datos te aporta. El timbre de una misma nota musical \ntocada al mismo volumen en un violín y una flauta no será igual. Cada fuente de sonido tiene \ncaracterísticas propias sonoras según el material del que esté hecho, el modo de hacerlo \nsonar, etc.\n\n--- Página 19 del Documento Madre ---\n19 \n \nTambién se aplica a \nlas voces humanas. Puedes \nencontrar una voz ronca, \ndulce o ligera, áspera… El \ntimbre puede modificarse \ncon la intensidad y la \nduración, pudiendo variar la \ncalidad del sonido. El timbre \nde \nun \nsonido \nestá \ncompuesto de un sonido \nfundamental y otros sonidos \nllamados \narmónicos, \nde \nmenor intensidad. \n \n \n \nCada armonía aporta una amplitud y una fase (corrida respecto a la básica) \nEl análisis de los armónicos presentes en un sonido que tiene un determinado timbre, \nse realiza mediante análisis de Fourier. El teorema de Fourier es viene a decir algo parecido \na lo siguiente: \nCualquier forma de onda, a condición de que sea periódica (se repita siempre igual) se \npuede descomponer en una serie más o menos larga (quizás infinita) de ondas puras \n(senoidales) llamadas armónicos. Estos armónicos son tales que su combinación o mezcla \ndan lugar de nuevo al sonido original, y sus frecuencias son múltiplos enteros de la del sonido \nfundamental.\n\n--- Página 20 del Documento Madre ---\n20 \n \n \nEste proceso sacrifica calidad y se pierden armónicos \nLa duración \nLa duración de un sonido hace referencia a la longitud de onda. Indica el tiempo que se \nmantiene una onda sonora completa. Puedes diferenciar sonidos largos o cortos. Según cuál \nsea la fuente que los produzca, los sonidos pueden alargarse de forma ininterrumpida o \nacortarse, como en instrumentos de cuerda frotada, o producir sonidos con una longitud \nespecífica, como un tambor o la nota de un piano. \nEl sonido cesa cuando cesa la vibración. Esta cualidad está limitada al físico de la fuente \ndel sonido. Con la tecnología, esta limitación se ha superado y los sonidos pueden \nmantenerse digitalmente por tiempo indefinido. \nLongitud de onda del sonido (λ) (letra lamnda) \n(tamaño/longitud de cada onda representada en metro) \nUna vez definidos los conceptos fundamentales de frecuencia y velocidad de \npropagación del sonido, es preciso definir otro concepto básico que guarda una estrecha \nrelación con ambos: la longitud de onda del sonido (λ). \nSe define como la distancia entre dos puntos consecutivos del campo sonoro que se \nhallan en el mismo estado de vibración en cualquier instante de tiempo. Por ejemplo, si en un \ninstante dado se seleccionan dos puntos consecutivos del espacio donde los valores de \npresión son máximos, la longitud de onda es precisamente la distancia entre ambos puntos \n(figura 1.9).\n\n--- Página 21 del Documento Madre ---\n21 \n \nLa relación entre las tres magnitudes: \nfrecuencia (f), velocidad de propagación (c) \ny longitud de onda (λ), viene dada por la \nsiguiente expresión: λ = c/f \nSegún \nse \nobserva, \npara \ncada \nfrecuencia, la longitud de onda depende del \nmedio \nde \npropagación, \nya \nque \nes \nproporcional a la velocidad, y esta varia para \ncada medio. \nPor otro lado, se puede ver que la \nlongitud de onda y la frecuencia son inversamente proporcionales, es decir, cuanto mayor es \nf menor es λ, y viceversa. \nPor ejemplo, en el aire, las longitudes de onda correspondientes a la banda de \nfrecuencias audibles se hallan situadas entre 17,25 m (f = 20 Hz) y 1,72 cm (f = 20 kHz). \n  \n \nClase 5 \nCancelaciones de Fase \nInterferencia acústica de fase \n También denominada “Comb Filter”, se produce cuando la misma fuente sonora es \ncaptada por dos micrófonos o más, en diferentes tiempos. La diferencia de tiempo de \ncaptación es en razón de la distancia que tienen los micrófonos con respecto a la fuente. La \nsuma de las mismas señales en la consola, darán como resultado una nueva respuesta de \nfrecuencia con cancelaciones en diferentes frecuencias. También podemos tener estas \ncancelaciones con un micrófono que tiene una pared cercana. El micrófono captará la fuente \nsonora directa y a su vez, captará la reflexión que se produce en la pared, pero con un \npequeño retardo de tiempo dependiendo de la distancia.",
              "documentPages": [
                {
                  "src": "assets/source/documento-madre/u04/u04_documento_madre_page_08.png",
                  "alt": "Documento Madre pagina 8 para U04",
                  "caption": "Documento Madre · página 08"
                },
                {
                  "src": "assets/source/documento-madre/u04/u04_documento_madre_page_09.png",
                  "alt": "Documento Madre pagina 9 para U04",
                  "caption": "Documento Madre · página 09"
                },
                {
                  "src": "assets/source/documento-madre/u04/u04_documento_madre_page_10.png",
                  "alt": "Documento Madre pagina 10 para U04",
                  "caption": "Documento Madre · página 10"
                },
                {
                  "src": "assets/source/documento-madre/u04/u04_documento_madre_page_11.png",
                  "alt": "Documento Madre pagina 11 para U04",
                  "caption": "Documento Madre · página 11"
                },
                {
                  "src": "assets/source/documento-madre/u04/u04_documento_madre_page_12.png",
                  "alt": "Documento Madre pagina 12 para U04",
                  "caption": "Documento Madre · página 12"
                },
                {
                  "src": "assets/source/documento-madre/u04/u04_documento_madre_page_14.png",
                  "alt": "Documento Madre pagina 14 para U04",
                  "caption": "Documento Madre · página 14"
                },
                {
                  "src": "assets/source/documento-madre/u04/u04_documento_madre_page_15.png",
                  "alt": "Documento Madre pagina 15 para U04",
                  "caption": "Documento Madre · página 15"
                },
                {
                  "src": "assets/source/documento-madre/u04/u04_documento_madre_page_16.png",
                  "alt": "Documento Madre pagina 16 para U04",
                  "caption": "Documento Madre · página 16"
                },
                {
                  "src": "assets/source/documento-madre/u04/u04_documento_madre_page_17.png",
                  "alt": "Documento Madre pagina 17 para U04",
                  "caption": "Documento Madre · página 17"
                },
                {
                  "src": "assets/source/documento-madre/u04/u04_documento_madre_page_18.png",
                  "alt": "Documento Madre pagina 18 para U04",
                  "caption": "Documento Madre · página 18"
                },
                {
                  "src": "assets/source/documento-madre/u04/u04_documento_madre_page_19.png",
                  "alt": "Documento Madre pagina 19 para U04",
                  "caption": "Documento Madre · página 19"
                },
                {
                  "src": "assets/source/documento-madre/u04/u04_documento_madre_page_20.png",
                  "alt": "Documento Madre pagina 20 para U04",
                  "caption": "Documento Madre · página 20"
                },
                {
                  "src": "assets/source/documento-madre/u04/u04_documento_madre_page_21.png",
                  "alt": "Documento Madre pagina 21 para U04",
                  "caption": "Documento Madre · página 21"
                }
              ],
              "visualLabel": "Documento Madre visible · Imágenes originales",
              "expertStatus": "A1 confirmado · Revisión técnica Matías",
              "tags": [
                "Documento Madre visible",
                "A1",
                "Frecuencia",
                "Timbre",
                "Longitud de onda"
              ],
              "preserveLineBreaks": true
            },
            {
              "title": "Lectura guiada Blacksmith · La onda como modelo de trabajo",
              "sourceRef": "Blacksmith Academy · Desarrollo ampliado propio · Refuerzo OpenStax",
              "body": "El Documento Madre insiste en que la onda es una forma de representar un fenómeno real. Esa aclaración es muy valiosa: el gráfico no es “el sonido en sí”, sino un modelo que permite entender presión, tiempo, ciclos, frecuencia, amplitud, timbre y longitud de onda.\n\nFrecuencia es cantidad de ciclos por segundo y se mide en hertz. En percepción musical se relaciona con altura: grave, medio o agudo. Amplitud se relaciona con el tamaño de la variación de presión y con el nivel, pero no debe confundirse de forma automática con calidad sonora. Longitud de onda es una distancia: la separación entre puntos equivalentes de una onda, como dos compresiones consecutivas.\n\nEl timbre permite distinguir dos fuentes aunque hagan una nota parecida a nivel similar. Depende de la forma de onda, los armónicos, la envolvente, el material y la forma de producir el sonido. La duración, por su parte, no es longitud de onda: duración es cuánto tiempo permanece un sonido; longitud de onda es tamaño espacial de cada ciclo. Esta corrección queda marcada para evitar una confusión frecuente.",
              "documentPages": [],
              "visualLabel": "Explicación Blacksmith ampliada",
              "expertStatus": "Contenido ampliado · Validar con Matías",
              "tags": [
                "Desarrollo Blacksmith",
                "OpenStax",
                "Onda",
                "Frecuencia",
                "Timbre"
              ],
              "preserveLineBreaks": true
            }
          ],
          "theoryBlocks": [
            {
              "title": "Frecuencia y altura",
              "body": "La frecuencia indica cuántos ciclos ocurren por segundo. En audición se asocia a la altura: frecuencias bajas se perciben como graves y frecuencias altas como agudas.",
              "note": "Hz mide repetición por segundo, no volumen."
            },
            {
              "title": "Amplitud y nivel",
              "body": "La amplitud describe el tamaño de la variación de presión. Se relaciona con intensidad/nivel, pero la percepción depende también de frecuencia, duración y sensibilidad del oído.",
              "note": "Dos sonidos con igual nivel pueden percibirse distinto."
            },
            {
              "title": "Longitud de onda",
              "body": "Es una distancia entre puntos equivalentes de la onda. A igual velocidad, una frecuencia más baja tiene una longitud de onda mayor.",
              "note": "Los graves son largos; los agudos son cortos."
            },
            {
              "title": "Timbre y armónicos",
              "body": "El timbre depende de cómo se combina la frecuencia fundamental con armónicos y de cómo evoluciona el sonido en el tiempo.",
              "note": "Por eso una trompeta y una guitarra pueden tocar la misma nota y sonar distintas."
            },
            {
              "title": "Duración y envolvente",
              "body": "La duración describe cuánto permanece el sonido. La envolvente describe cómo aparece, se sostiene y desaparece. No es lo mismo que longitud de onda.",
              "note": "Corrección pedagógica clave para esta unidad."
            }
          ],
          "questions": [
            {
              "prompt": "¿Qué mide la frecuencia de una onda sonora?",
              "difficulty": "recognition",
              "options": [
                "La cantidad de ciclos por segundo.",
                "La distancia entre el escenario y la consola.",
                "La cantidad de cables conectados.",
                "El tamaño físico del parlante únicamente."
              ],
              "correctIndex": 0,
              "explanation": "La frecuencia se mide en hertz y representa ciclos por segundo."
            },
            {
              "prompt": "¿Qué relación general hay entre frecuencia y longitud de onda si la velocidad se mantiene aproximadamente constante?",
              "difficulty": "comprehension",
              "options": [
                "A mayor frecuencia, menor longitud de onda.",
                "A mayor frecuencia, mayor longitud de onda siempre.",
                "No tienen ninguna relación.",
                "La longitud de onda depende solo del volumen."
              ],
              "correctIndex": 0,
              "explanation": "La relación es inversa: λ = c/f."
            },
            {
              "prompt": "¿Por qué los graves suelen ser más difíciles de controlar con objetos pequeños?",
              "difficulty": "application",
              "options": [
                "Porque tienen longitudes de onda grandes y rodean obstáculos pequeños.",
                "Porque no viajan por el aire.",
                "Porque no tienen energía.",
                "Porque solo existen dentro de la consola."
              ],
              "correctIndex": 0,
              "explanation": "Las longitudes de onda graves son grandes en comparación con muchos objetos cotidianos."
            },
            {
              "prompt": "Dos instrumentos tocan la misma nota a nivel parecido, pero se distinguen. ¿Qué concepto explica mejor esto?",
              "difficulty": "application",
              "options": [
                "Timbre.",
                "Solo distancia.",
                "Cantidad de conectores.",
                "Impedancia de salida del amplificador."
              ],
              "correctIndex": 0,
              "explanation": "El timbre depende de armónicos, forma de onda, material y modo de ejecución."
            },
            {
              "prompt": "¿Cuál es la corrección importante sobre duración y longitud de onda?",
              "difficulty": "comprehension",
              "options": [
                "Duración es tiempo de permanencia; longitud de onda es distancia espacial entre ciclos equivalentes.",
                "Duración y longitud de onda son siempre lo mismo.",
                "Longitud de onda mide volumen percibido.",
                "Duración solo se aplica a cables."
              ],
              "correctIndex": 0,
              "explanation": "Esta corrección evita una confusión presente en muchos apuntes introductorios."
            },
            {
              "prompt": "¿Qué representa una compresión en una onda sonora en aire?",
              "difficulty": "comprehension",
              "options": [
                "Una región de mayor presión relativa.",
                "Una zona sin materia ni energía.",
                "Un cable balanceado invertido.",
                "Una frecuencia fuera del rango audible."
              ],
              "correctIndex": 0,
              "explanation": "En aire, las ondas sonoras tienen compresiones y rarefacciones."
            },
            {
              "prompt": "Un analizador muestra eje X en Hz y eje Y en dB SPL. ¿Qué está cruzando?",
              "difficulty": "application",
              "options": [
                "Frecuencia horizontal con nivel de presión sonora vertical.",
                "Solo tiempo con color de luces.",
                "Voltaje de phantom con impedancia.",
                "Cantidad de público con precio de entrada."
              ],
              "correctIndex": 0,
              "explanation": "El Documento Madre trabaja gráficos de frecuencia y dB SPL para comprender respuesta y audición."
            },
            {
              "prompt": "¿Qué muestra mejor criterio técnico al ecualizar?",
              "difficulty": "criterion",
              "options": [
                "Saber si se está corrigiendo frecuencia, nivel, timbre o un problema de sala antes de mover controles.",
                "Mover todos los controles al azar hasta que guste.",
                "Subir agudos siempre porque parecen más claros.",
                "Confundir timbre con volumen y corregir solo master."
              ],
              "correctIndex": 0,
              "explanation": "La ecualización exige distinguir qué propiedad del sonido se quiere modificar."
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
  const additions = {
  "u01": {
    "sectionStatus": "Completa para revisión de Matías",
    "flowOutcome": "El alumno debe poder seguir una cadena de audio completa y diagnosticar una falla por etapas antes de tocar controles al azar.",
    "readingChecklist": [
      "Diferenciar sonido acústico, señal eléctrica y escucha.",
      "Ordenar fuente, captación, consola, amplificación, parlante, sala y oyente.",
      "Ubicar una falla usando el recorrido de la cadena."
    ],
    "activity": {
      "title": "Microdesafío: seguir la cadena antes de corregir",
      "scenario": "Una banda prueba sonido. La voz llega a la consola, pero no se escucha por el sistema principal. El operador tiene poco tiempo y producción pide resolver rápido.",
      "tasks": [
        "Dibujar la cadena desde el micrófono hasta el público.",
        "Marcar qué etapas ya están verificadas y cuáles faltan revisar.",
        "Proponer tres chequeos en orden antes de subir el volumen general."
      ],
      "evidence": "Mapa simple de cadena + lista de chequeos ordenados.",
      "teacherNote": "Evaluar si el alumno evita respuestas impulsivas y razona por etapas."
    },
    "preQuizFocus": [
      "Cadena de audio como mapa.",
      "Diferencia entre fenómeno acústico y señal eléctrica.",
      "Acústica como parte del sistema."
    ]
  },
  "u02": {
    "sectionStatus": "Completa para revisión de Matías",
    "flowOutcome": "El alumno debe diferenciar nivel físico, percepción y exposición, usando medición como apoyo y no como reemplazo del criterio auditivo.",
    "readingChecklist": [
      "Distinguir presión sonora, intensidad y sonoridad percibida.",
      "Reconocer que el decibel es una escala logarítmica.",
      "Relacionar nivel, tiempo de exposición y seguridad auditiva."
    ],
    "activity": {
      "title": "Microdesafío: nivel alto no siempre significa mejor sonido",
      "scenario": "En una charla con música de entrada, adelante se quejan de volumen excesivo y atrás dicen que la voz no llega clara.",
      "tasks": [
        "Indicar qué zonas medirías y por qué.",
        "Separar problema de nivel, problema de cobertura y problema de inteligibilidad.",
        "Proponer una acción inicial que no sea simplemente subir el master."
      ],
      "evidence": "Mini informe con zonas de medición y decisión técnica justificada.",
      "teacherNote": "Buscar que el alumno combine escucha, medición y cuidado auditivo."
    },
    "preQuizFocus": [
      "dB SPL, dBA y referencia de medición.",
      "Intensidad física versus percepción.",
      "Cobertura y exposición."
    ]
  },
  "u03": {
    "sectionStatus": "Completa para revisión de Matías",
    "flowOutcome": "El alumno debe reconocer cuándo el problema no es falta de volumen sino comportamiento acústico del espacio.",
    "readingChecklist": [
      "Diferenciar eco, reverberación, reflexión y absorción.",
      "Relacionar superficies duras con pérdida de claridad.",
      "Proponer acciones antes de ecualizar de forma extrema."
    ],
    "activity": {
      "title": "Microdesafío: sala dura y voz poco clara",
      "scenario": "Un salón con vidrio, piso cerámico y paredes lisas hace que la voz del orador se entienda mal aunque el nivel sea alto.",
      "tasks": [
        "Identificar qué fenómeno acústico puede estar afectando la inteligibilidad.",
        "Elegir tres acciones prácticas antes de tocar ecualización extrema.",
        "Explicar por qué subir volumen podría empeorar el problema."
      ],
      "evidence": "Diagnóstico breve + tres acciones preventivas.",
      "teacherNote": "Evaluar criterio acústico: ubicación, orientación, cobertura y materialidad."
    },
    "preQuizFocus": [
      "Eco versus reverberación.",
      "Absorción parcial y dependiente de frecuencia.",
      "Inteligibilidad como objetivo."
    ]
  },
  "u04": {
    "sectionStatus": "Completa para revisión de Matías",
    "flowOutcome": "El alumno debe conectar propiedades físicas de la onda con decisiones audibles: graves, agudos, timbre, duración y longitud de onda.",
    "readingChecklist": [
      "Distinguir frecuencia, amplitud, duración y longitud de onda.",
      "Entender por qué los graves tienen longitudes de onda mayores.",
      "Reconocer que timbre no es lo mismo que altura ni volumen."
    ],
    "activity": {
      "title": "Microdesafío: mismo tono, distinto instrumento",
      "scenario": "Una guitarra y un teclado tocan la misma nota a nivel parecido, pero se distinguen claramente.",
      "tasks": [
        "Explicar qué variable permite distinguirlos.",
        "Relacionar armónicos y envolvente con timbre.",
        "Indicar por qué cambiar volumen no cambia necesariamente la identidad sonora."
      ],
      "evidence": "Explicación corta con al menos tres conceptos: frecuencia, armónicos y duración/envolvente.",
      "teacherNote": "Evitar que el alumno confunda frecuencia, volumen y timbre."
    },
    "preQuizFocus": [
      "Frecuencia y altura.",
      "Longitud de onda como distancia.",
      "Timbre, armónicos y envolvente."
    ]
  },
  "u05": {
    "sectionStatus": "Completa para revisión de Matías",
    "flowOutcome": "El alumno debe sospechar problemas de fase cuando dos señales parecidas pierden cuerpo al combinarse.",
    "readingChecklist": [
      "Entender fase como relación temporal entre señales.",
      "Reconocer interferencias por micrófonos o reflexiones.",
      "Distinguir inversión de polaridad, retardo y ubicación física."
    ],
    "activity": {
      "title": "Microdesafío: dos micrófonos, una guitarra y menos graves",
      "scenario": "Una guitarra acústica suena bien con cada micrófono por separado, pero al abrir ambos canales pierde cuerpo y graves.",
      "tasks": [
        "Explicar por qué puede ocurrir sin culpar al ecualizador primero.",
        "Proponer tres acciones antes de aplicar EQ.",
        "Indicar qué escucharías al activar/desactivar cada canal."
      ],
      "evidence": "Hipótesis de fase + acciones de prueba ordenadas.",
      "teacherNote": "Buscar que el alumno piense en distancia, retardo, polaridad y regla 3:1."
    },
    "preQuizFocus": [
      "Fase y retardo.",
      "Comb filter.",
      "Prevención desde ubicación de micrófonos."
    ]
  },
  "u06": {
    "sectionStatus": "Completa para revisión de Matías",
    "flowOutcome": "El alumno debe elegir y ubicar micrófonos con intención según fuente, patrón polar, sensibilidad, SPL máximo y contexto acústico.",
    "readingChecklist": [
      "Distinguir dinámico, condensador y ribbon a nivel introductorio.",
      "Relacionar patrón polar con captación y rechazo.",
      "Reconocer phantom power, sensibilidad y SPL máximo como variables de uso."
    ],
    "activity": {
      "title": "Microdesafío: elegir micrófono para voz en vivo",
      "scenario": "Una cantante actuará en una sala chica con monitores cerca, batería al fondo y mucho ruido de escenario.",
      "tasks": [
        "Elegir un tipo de micrófono razonable y justificarlo.",
        "Definir patrón polar conveniente.",
        "Indicar dos cuidados de ubicación para reducir acoples o filtración."
      ],
      "evidence": "Ficha técnica simplificada de elección de micrófono.",
      "teacherNote": "No evaluar marca; evaluar criterio de selección y ubicación."
    },
    "preQuizFocus": [
      "Transducción.",
      "Patrones polares.",
      "Phantom, sensibilidad y SPL máximo."
    ]
  },
  "u07": {
    "sectionStatus": "Completa para revisión de Matías",
    "flowOutcome": "El alumno debe evitar conexiones peligrosas y distinguir niveles de micrófono, línea, instrumento y potencia.",
    "readingChecklist": [
      "Diferenciar nivel de mic, línea, instrumento y parlante.",
      "Reconocer conexiones balanceadas y desbalanceadas.",
      "Identificar errores críticos de conexión antes de dañar equipos."
    ],
    "activity": {
      "title": "Microdesafío: la conexión que no se debe hacer",
      "scenario": "Alguien propone conectar la salida de un amplificador directamente a una entrada de línea de la consola para grabar.",
      "tasks": [
        "Explicar por qué puede ser peligroso.",
        "Identificar qué nivel de señal está involucrado.",
        "Proponer una alternativa segura o pedir el dispositivo correcto."
      ],
      "evidence": "Advertencia técnica + alternativa segura.",
      "teacherNote": "Unidad crítica: priorizar seguridad de equipos y personas."
    },
    "preQuizFocus": [
      "Niveles de señal.",
      "Balanceado/desbalanceado.",
      "Conectores y compatibilidad."
    ]
  },
  "u08": {
    "sectionStatus": "Completa para revisión de Matías",
    "flowOutcome": "El alumno debe entender la consola como sistema de entrada, ganancia, mezcla, procesamiento y ruteo, no solo como faders.",
    "readingChecklist": [
      "Distinguir gain, fader, EQ, aux y buses.",
      "Entender pre/post fader en monitoreo.",
      "Seguir una ruta desde entrada hasta salida."
    ],
    "activity": {
      "title": "Microdesafío: monitor sin voz, PA con voz",
      "scenario": "La voz sale por el sistema principal, pero el cantante no se escucha en su monitor.",
      "tasks": [
        "Indicar qué ruta revisarías.",
        "Nombrar al menos cuatro puntos posibles de falla.",
        "Explicar por qué el master L/R no necesariamente resuelve el problema."
      ],
      "evidence": "Ruta auxiliar dibujada + chequeos por orden.",
      "teacherNote": "Buscar comprensión de aux, pre/post, salida de monitor y nivel de envío."
    },
    "preQuizFocus": [
      "Gain staging.",
      "Auxiliares y pre/post.",
      "Ruteo y buses."
    ]
  },
  "u09": {
    "sectionStatus": "Completa para revisión de Matías",
    "flowOutcome": "El alumno debe comprender la relación entre señal, potencia, amplificación, impedancia y parlantes activos/pasivos.",
    "readingChecklist": [
      "Diferenciar señal de línea y señal de potencia.",
      "Distinguir parlante activo y pasivo.",
      "Relacionar impedancia y compatibilidad de amplificador/parlante."
    ],
    "activity": {
      "title": "Microdesafío: parlante pasivo sin amplificador",
      "scenario": "En un evento chico quieren conectar un parlante pasivo directamente a la salida de la consola porque “el conector entra”.",
      "tasks": [
        "Explicar por qué no funcionará correctamente.",
        "Identificar qué etapa falta en la cadena.",
        "Proponer una conexión correcta para parlante pasivo o una alternativa con parlante activo."
      ],
      "evidence": "Diagrama de conexión correcta + justificación.",
      "teacherNote": "Evaluar si el alumno diferencia línea, potencia, activo y pasivo."
    },
    "preQuizFocus": [
      "Amplificación de potencia.",
      "Impedancia.",
      "Parlantes activos y pasivos."
    ]
  },
  "u10": {
    "sectionStatus": "Borrador listo para revisión metodológica final",
    "flowOutcome": "El alumno debe integrar todo el curso diagnosticando casos reales con evidencia, acción segura y justificación técnica.",
    "readingChecklist": [
      "Seguir la cadena completa de audio.",
      "Distinguir falla de conexión, acústica, fase, ruteo o potencia.",
      "Proponer acciones seguras y justificadas."
    ],
    "activity": {
      "title": "Microdesafío integrador: mesa de diagnóstico",
      "scenario": "Durante una prueba de sonido aparecen tres problemas: voz poco clara en sala reverberante, guitarra que pierde cuerpo al abrir dos micrófonos y monitor sin voz aunque el PA sí funciona.",
      "tasks": [
        "Separar los tres problemas por categoría técnica.",
        "Proponer el primer chequeo para cada problema.",
        "Justificar qué NO harías primero y por qué."
      ],
      "evidence": "Tabla de diagnóstico: síntoma, causa probable, primer chequeo, acción segura.",
      "teacherNote": "Esta actividad prepara el examen final, pero todavía no reemplaza la evaluación validada por Matías."
    },
    "preQuizFocus": [
      "Diagnóstico por cadena.",
      "Criterio seguro.",
      "Justificación técnica."
    ],
    "finalBlueprint": {
      "status": "Preparado como borrador interno, pendiente de cierre con Matías.",
      "learningLabUse": "Conviene usar Learning Lab para la evaluación final porque permite medir evidencia, criterio, simulación y transferencia. No es obligatorio para cada unidad, pero sí es ideal para el cierre integrador.",
      "method": [
        "Caso 1: diagnóstico de cadena y ruteo.",
        "Caso 2: acústica, fase o micrófonos.",
        "Caso 3: niveles, seguridad, cables, amplificación o parlantes."
      ],
      "rubric": [
        "Detecta la causa probable.",
        "Propone una acción inicial segura.",
        "Justifica con conceptos del curso.",
        "Evita decisiones peligrosas o impulsivas."
      ]
    }
  }
};
  getAllLessonsFromCourse().forEach((lesson) => {
    const extra = additions[lesson.id];
    if (!extra) return;
    Object.assign(lesson, extra);
  });
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
        <div class="flow-item"><strong>3</strong><span>Actividad</span></div>
        <div class="flow-item"><strong>4</strong><span>Cuestionario</span></div>
        ${isDevMode() ? `<div class="flow-item demo"><strong>DEV</strong><span>Recorrido libre</span></div>` : ""}
      </div>

      <div class="source-policy">
        <strong>📌 Nueva regla:</strong> primero se muestra la documentación fuente completa o segmentada.
        Este bloque conserva texto fuente, referencias visuales y estado de validación experta antes de pasar a guía, actividad y cuestionario.
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
            <p>Esta segunda parte muestra las ideas principales de la unidad, ordenadas para estudiar mejor. No reemplaza al Documento Fuente: deriva de él y prepara la actividad.</p>
          </div>
          ${lesson.theoryBlocks.map(renderTheoryBlock).join("")}
          ${renderUnitReadiness(lesson)}
          ${renderActivitySection(lesson)}
          ${renderFinalEvaluationBlueprint(lesson)}
        </section>

        <div class="footer-actions">
          <button id="startQuizBtn" class="primary-btn" data-action="start-quiz" ${canStartQuiz ? "" : "disabled"}>
            ${canStartQuiz ? "Ir al cuestionario" : "Leé el Documento Fuente, guía y actividad hasta el final"}
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


function renderUnitReadiness(lesson) {
  const checklist = lesson.readingChecklist || [];
  const focus = lesson.preQuizFocus || [];
  if (!checklist.length && !focus.length && !lesson.flowOutcome) return "";
  return `
    <section class="completion-section">
      <div class="study-divider compact-divider">
        <span>🧭 Control de comprensión</span>
        <h2>Antes de hacer la actividad</h2>
        ${lesson.flowOutcome ? `<p>${lesson.flowOutcome}</p>` : ""}
      </div>
      <div class="readiness-grid">
        ${checklist.length ? `
          <article class="readiness-card">
            <h3>El alumno debería poder</h3>
            <ul>${checklist.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>
        ` : ""}
        ${focus.length ? `
          <article class="readiness-card">
            <h3>Foco del cuestionario</h3>
            <ul>${focus.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>
        ` : ""}
      </div>
    </section>
  `;
}

function renderActivitySection(lesson) {
  const activity = lesson.activity;
  if (!activity) return "";
  return `
    <section class="activity-section">
      <div class="study-divider compact-divider">
        <span>⚒️ Actividad aplicada</span>
        <h2>${activity.title}</h2>
        <p>Esta parte convierte la lectura en una decisión técnica observable. No es un examen final: es práctica guiada antes del cuestionario.</p>
      </div>
      <article class="activity-card">
        <div class="activity-status-row">
          <span class="review-pill">${lesson.sectionStatus || "Sección lista para revisión"}</span>
          <span class="small-pill">Evidencia práctica</span>
        </div>
        <h3>Situación</h3>
        <p>${activity.scenario}</p>
        <h3>Consigna</h3>
        <ol>${(activity.tasks || []).map((task) => `<li>${task}</li>`).join("")}</ol>
        ${activity.evidence ? `<div class="activity-evidence"><strong>Entrega esperada:</strong> ${activity.evidence}</div>` : ""}
        ${activity.teacherNote ? `<div class="teacher-note"><strong>Nota para Matías / revisión:</strong> ${activity.teacherNote}</div>` : ""}
      </article>
    </section>
  `;
}

function renderFinalEvaluationBlueprint(lesson) {
  const blueprint = lesson.finalBlueprint;
  if (!blueprint) return "";
  return `
    <section class="final-blueprint-section">
      <div class="study-divider compact-divider">
        <span>🏁 Evaluación final</span>
        <h2>Borrador metodológico preparado</h2>
        <p>La evaluación final queda preparada como estructura, pero la cerramos después de que Matías revise todas las unidades. Así evitamos rehacer el examen antes de ajustar el contenido.</p>
      </div>
      <article class="final-blueprint-card">
        <div class="activity-status-row">
          <span class="review-pill">${blueprint.status}</span>
          <span class="small-pill">Learning Lab recomendado</span>
        </div>
        <p>${blueprint.learningLabUse}</p>
        <div class="readiness-grid">
          <div>
            <h3>Metodología propuesta</h3>
            <ul>${(blueprint.method || []).map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div>
            <h3>Rúbrica base</h3>
            <ul>${(blueprint.rubric || []).map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        </div>
        ${isDevMode() ? `<div class="demo-note">Modo Dev: este bloque permite evaluar la metodología del examen final sin publicarlo como cierre definitivo.</div>` : `<div class="demo-note">Modo Alumno: examen final pendiente de habilitación cuando Matías cierre la revisión técnica.</div>`}
      </article>
    </section>
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
        showToast("Primero leé el Documento Fuente, la guía y la actividad hasta el final.");
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
