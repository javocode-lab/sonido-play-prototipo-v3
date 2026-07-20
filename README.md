# Sonido Play — Prototipo v17 Dist Deploy

Prototipo estático de **Sonido Play / Blacksmith Academy** para validar flujo, GUI, documento fuente, tema claro/oscuro, cuestionarios y recorrido UX.

## Qué incluye

- App estática sin backend.
- Unidad 01 y Unidad 02.
- Documento Fuente en Formato C Digital Premium.
- Tema claro / oscuro.
- Botón de recorrido UX para avanzar sin responder cuestionarios.
- Carpeta `dist/` lista para deploy.
- Workflow opcional para GitHub Pages.

## Estructura principal

```text
index.html
app.js
styles.css
assets/
docs/
dist/
scripts/
.github/workflows/deploy-pages.yml
RUNBOOK.md
```

## Probar localmente

Desde la raíz del proyecto:

```powershell
python -m http.server 8080
```

Abrir:

```text
http://localhost:8080
```

## Probar la versión deployable

```powershell
cd dist
python -m http.server 8080
```

Abrir:

```text
http://localhost:8080
```

## Rebuild de dist

```powershell
powershell -ExecutionPolicy Bypass -File scripts/build-dist.ps1
```

## Nota

No ejecutar `npm init`. Este prototipo no requiere npm mientras siga siendo HTML/CSS/JS estático.


## v17 — Unidades y evaluaciones

Esta versión aplica los Documentos Fuente Formato C v0.2 a todas las unidades del curso y actualiza cuestionarios/evaluaciones con dificultad progresiva.

Unidades activas: U01 a U10.

Criterio de aprobación: lectura del Documento Fuente + guía curada + 70% en cuestionario.


## v17.2 — Navigation Fix

Corrección de navegación: las unidades activas usan IDs `u01` a `u10`; se normalizó el estado inicial y el progreso local para que `Continuar curso` y `Revisar desde el inicio` abran correctamente la Unidad 01.
