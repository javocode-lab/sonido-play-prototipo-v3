# RUNBOOK — Sonido Play v18.1

## 1. Tipo de proyecto

App estática con:

```text
HTML + CSS + JavaScript
```

No requiere Node, Vite, React ni backend en esta etapa.

## 2. Ejecutar en desarrollo

Desde la raíz del proyecto:

```powershell
python -m http.server 8080
```

Abrir:

```text
http://localhost:8080
```

## 3. Generar carpeta dist

```powershell
powershell -ExecutionPolicy Bypass -File scripts/build-dist.ps1
```

Esto recrea:

```text
dist/
```

con:

```text
index.html
app.js
styles.css
assets/
docs/
.nojekyll
404.html
```

## 4. Probar dist localmente

```powershell
cd dist
python -m http.server 8080
```

Abrir:

```text
http://localhost:8080
```

## 5. Verificación v18.1

### Selector inicial

```text
[ ] Aparece selector de modo al abrir por primera vez.
[ ] Entrar como alumno lleva al dashboard normal.
[ ] Entrar en modo dev lleva al dashboard con barra rápida.
[ ] Volver al selector permite cambiar de modo.
```

### Modo Alumno

```text
[ ] U01 aparece desbloqueada.
[ ] U02-U10 aparecen bloqueadas al inicio.
[ ] Continuar curso abre U01.
[ ] El cuestionario no inicia hasta completar lectura.
[ ] Aprobar una unidad desbloquea la siguiente.
[ ] No aparece botón “Seguir flujo →”.
```

### Modo Dev

```text
[ ] U01-U10 aparecen desbloqueadas.
[ ] La barra rápida permite abrir cualquier unidad.
[ ] El cuestionario puede iniciarse sin lectura obligatoria.
[ ] Aparece “Seguir flujo →”.
[ ] “Marcar unidad completa” actualiza el avance dev.
[ ] El progreso dev no modifica el progreso alumno.
```

## 6. Errores comunes

### La app parece no avanzar

Borrar `localStorage` o usar el botón “Volver al selector” y elegir modo nuevamente. v18.1 usa claves nuevas:

```text
sonido-play-v18.1-student-progress
sonido-play-v18.1-dev-progress
sonido-play-v18.1-mode
```

### GitHub Pages muestra versión vieja

Regenerar `dist/` y subir cambios:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/build-dist.ps1
git add .
git commit -m "feat: add student and dev course modes"
git push
```


## Verificación v18.1

- Entrar en Modo Alumno y confirmar que U01 exige lectura hasta el final antes del cuestionario.
- Entrar en Modo Dev y recorrer U01-U10 con la barra rápida.
- Confirmar que cada unidad muestra Documento Fuente, Guía curada, Control de comprensión, Actividad aplicada y Cuestionario.
- Revisar U10: la evaluación final debe figurar como borrador metodológico pendiente de cierre con Matías.
