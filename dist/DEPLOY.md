# Nota v18.2 Matías A1

Este paquete agrega material de revisión para Matías y documenta la decisión A1: el Documento Madre debe aparecer visible en cada unidad, con imágenes originales, explicación Blacksmith ampliada y refuerzos externos seguros.

Ver primero: `00_LEER_PRIMERO_MATIAS.md`.

---

# DEPLOY — Sonido Play v18.1

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


## Nota de publicación

No publicar v18.1 en la web pública todavía. Esta versión es de validación interna para Matías y desarrollo. Publicar recién cuando se cierre la revisión de unidades y navegación.
