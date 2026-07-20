# Sonido Play — Prototipo v18

Prototipo estático de **Sonido Play / Blacksmith Academy** para validar flujo de curso, documentos fuente, cuestionarios, evaluación integradora y navegación de revisión.

## Estado actual

| Item | Valor |
|---|---|
| Versión | v18 |
| Tipo | App estática HTML/CSS/JS |
| Backend | No aplica |
| Build | Copia estática a `dist/` |
| Running oficial | `python -m http.server 8080` |

## Cambio principal v18

Se agregó un **selector inicial de modo**:

- **Modo Alumno:** experiencia real del curso. Arranca en U01, exige lectura, cuestionario aprobado y desbloqueo progresivo.
- **Modo Dev / Revisión:** experiencia rápida para probar. Todas las unidades están desbloqueadas, aparece una barra rápida U01-U10 y se habilita “Seguir flujo →”.

Los progresos están separados:

```text
sonido-play-v18-student-progress
sonido-play-v18-dev-progress
sonido-play-v18-mode
```

## Qué incluye

- U01 a U10 activas.
- Documentos Fuente Formato C v0.2 como base.
- Cuestionarios con dificultad progresiva.
- U10 como evaluación integradora.
- Tema claro / oscuro.
- Modo dev para revisión rápida sin bloquear navegación.
- Carpeta `dist/` lista para deploy.

## Probar localmente

Desde la raíz del proyecto:

```powershell
python -m http.server 8080
```

Abrir:

```text
http://localhost:8080
```

## Regenerar dist

```powershell
powershell -ExecutionPolicy Bypass -File scripts/build-dist.ps1
```

## Nota operativa

No ejecutar `npm init`, `npm install` ni `npm run dev`. Este prototipo todavía no usa Node, Vite ni React.
