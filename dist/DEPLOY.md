# DEPLOY — Sonido Play v18

## Tipo de deploy

Deploy estático desde carpeta:

```text
dist/
```

## Build local

```powershell
powershell -ExecutionPolicy Bypass -File scripts/build-dist.ps1
```

## Probar dist

```powershell
cd dist
python -m http.server 8080
```

Abrir:

```text
http://localhost:8080
```

## Hosting recomendado

- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages

## Configuración

```text
Publish directory: dist
Build command: vacío / none
```

## Verificación post deploy

```text
[ ] Carga selector inicial.
[ ] Modo Alumno abre dashboard.
[ ] Modo Dev abre dashboard con barra rápida.
[ ] U01-U10 navegables en modo dev.
[ ] Modo Alumno mantiene avance progresivo.
[ ] Tema claro/oscuro funciona.
[ ] No hay rutas rotas ni 404 internos.
```
