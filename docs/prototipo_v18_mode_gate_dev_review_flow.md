# Sonido Play v18 — Mode Gate + Dev Review Flow

## Objetivo

Separar la experiencia real del alumno de la experiencia de revisión rápida del prototipo.

## Decisión

La app inicia con dos caminos:

```text
Modo Alumno
Modo Dev / Revisión
```

## Modo Alumno

- Progreso real.
- U01 desbloqueada inicialmente.
- Unidades siguientes bloqueadas hasta aprobar.
- Lectura obligatoria antes del cuestionario.
- Sin atajos visibles.

## Modo Dev

- U01-U10 desbloqueadas.
- Barra rápida de navegación.
- Inicio de cuestionario sin lectura obligatoria.
- Botón “Seguir flujo →”.
- Botón “Marcar unidad completa”.

## Claves de estado

```text
sonido-play-v18-mode
sonido-play-v18-student-progress
sonido-play-v18-dev-progress
```

## Motivo

Evitar que la revisión rápida ensucie el avance del alumno y prevenir errores por estados viejos en `localStorage`.
