# Sonido Play — Prototipo v3

Prototipo funcional estático de un curso online interactivo tipo Duolingo sobre **sonido en espectáculos**.

## Qué incluye esta versión

- Contenido curado del Módulo 1: **Fundamentos del sonido**.
- No muestra texto crudo de la bitácora original.
- Flujo por lección:
  1. portada de lección;
  2. teoría dividida en bloques;
  3. scroll obligatorio hasta el final;
  4. cuestionario;
  5. aprobación con 70% o más;
  6. XP, vidas, racha y desbloqueo progresivo.
- Desafío final del módulo.
- Módulos futuros visibles pero bloqueados.
- Progreso guardado con `localStorage`.
- Sin backend, sin instalación, sin npm.

## Cómo probarlo

Opción rápida:

1. Descomprimir el ZIP.
2. Abrir `index.html` en el navegador.

Opción con servidor local:

```bash
cd sonido-play-prototipo-v2
python -m http.server 8080
```

Luego abrir:

```text
http://localhost:8080
```

## Archivos principales

- `index.html`: entrada principal.
- `styles.css`: estilos responsive.
- `app.js`: lógica del prototipo y contenido del curso.

## Nota editorial

Este prototipo usa la bitácora original solo como guía temática. El contenido visible fue reescrito para formato de curso y debe ser validado técnicamente antes de una versión comercial.


## Cambios v3

- Respuestas mezcladas aleatoriamente en cada intento.
- Preguntas de verdadero/falso con respuestas correctas variadas y opciones mezcladas.
- Distractores más plausibles y menos obvios.
- Corrección de textos de teoría para evitar repetición de “Idea clave”.
