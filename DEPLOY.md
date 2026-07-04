# Deploy — Sonido Play v16

## Opción recomendada para ahora

Usar hosting estático desde la carpeta:

```text
dist/
```

El proyecto no necesita build con npm.

## GitHub Pages

1. Subir este proyecto al repositorio.
2. Verificar que exista `dist/index.html`.
3. En GitHub ir a:

```text
Settings → Pages → Build and deployment
```

4. Elegir:

```text
Source: GitHub Actions
```

5. Hacer push a `main`.
6. El workflow `.github/workflows/deploy-pages.yml` publicará `dist/`.

## Netlify

Configurar:

```text
Build command: vacío
Publish directory: dist
```

## Vercel

Configurar:

```text
Framework preset: Other
Build command: vacío
Output directory: dist
```

## Cloudflare Pages

Configurar:

```text
Build command: vacío
Build output directory: dist
```
