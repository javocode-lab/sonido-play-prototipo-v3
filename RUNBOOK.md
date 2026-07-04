# RUNBOOK — Sonido Play v16

## 1. Tipo de proyecto

App estática con:

```text
HTML + CSS + JavaScript
```

No requiere Node, Vite, React ni backend en esta etapa.

---

## 2. Instalación

No hay instalación de dependencias.

No ejecutar:

```powershell
npm init
```

---

## 3. Ejecutar en desarrollo

Desde la raíz del proyecto:

```powershell
python -m http.server 8080
```

Abrir:

```text
http://localhost:8080
```

Alternativa: usar Live Server en VS Code.

---

## 4. Generar carpeta dist

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

---

## 5. Probar dist localmente

```powershell
cd dist
python -m http.server 8080
```

Abrir:

```text
http://localhost:8080
```

---

## 6. Deploy manual

Subir el contenido de `dist/` a un hosting estático:

```text
Netlify
Vercel
GitHub Pages
Cloudflare Pages
Servidor propio
```

En Netlify/Vercel/Cloudflare Pages, configurar:

```text
Publish directory: dist
Build command: vacío / none
```

---

## 7. Deploy con GitHub Pages

La carpeta `.github/workflows/deploy-pages.yml` despliega `dist/` automáticamente cuando hay push a `main`.

En GitHub, configurar:

```text
Settings → Pages → Build and deployment → Source: GitHub Actions
```

Luego hacer push a `main`.

---

## 8. Verificación rápida

Después del deploy revisar:

```text
[ ] Carga Home.
[ ] Cambia tema claro/oscuro.
[ ] Abre Unidad 01.
[ ] Abre Unidad 02.
[ ] Se ve Documento Fuente.
[ ] El botón “Seguir flujo →” permite avanzar.
[ ] El cuestionario se puede saltear en modo UX.
[ ] No hay texto ilegible por contraste.
[ ] No hay imágenes rotas.
```

---

## 9. Errores comunes

### Pantalla en blanco

Revisar consola del navegador. Usualmente falta `app.js` o hay ruta rota.

### Imágenes no cargan

Verificar que `assets/` esté dentro de `dist/`.

### GitHub Pages muestra 404

Verificar que el artifact subido tenga `index.html` en el nivel superior de `dist/`.

### No aparecen cambios

Borrar caché o abrir en ventana incógnita. La app usa `localStorage` con clave:

```text
sonido-play-v16-progress
```

---

## 10. Próxima mejora recomendada

Crear `v16` funcional real con pantallas separadas:

```text
Home
Mapa de unidades
Vista previa de unidad
Documento Fuente
Ideas principales
Desafío
Cuestionario
Resultado
Glosario
Ajustes
```
