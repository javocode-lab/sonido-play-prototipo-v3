# Sonido Play — Prototipo v16 Dist Deploy

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
