# Nota v18.2 Matías A1

Este paquete agrega material de revisión para Matías y documenta la decisión A1: el Documento Madre debe aparecer visible en cada unidad, con imágenes originales, explicación Blacksmith ampliada y refuerzos externos seguros.

Ver primero: `00_LEER_PRIMERO_MATIAS.md`.

---

# RUNNING — Sonido Play v18.1

## Tipo de proyecto

Sonido Play v18.1 es una app estática:

```text
HTML + CSS + JavaScript
```

No requiere Node, npm, Vite, React ni backend.

## Ejecutar desde la raíz

```powershell
python -m http.server 8080
```

Abrir:

```text
http://localhost:8080
```

## Ejecutar desde dist

```powershell
cd dist
python -m http.server 8080
```

Abrir:

```text
http://localhost:8080
```

## Comandos que NO corresponden en esta etapa

```powershell
npm init
npm install
npm run dev
npm run build
```

## Modos de uso

Al abrir la app aparece un selector:

```text
Entrar como alumno
Entrar en modo dev
```

### Modo Alumno

- U01 desbloqueada inicialmente.
- Las demás unidades se desbloquean por avance.
- Se exige lectura antes del cuestionario.
- Se requiere 70% o más para aprobar.

### Modo Dev / Revisión

- U01 a U10 desbloqueadas.
- Barra rápida de navegación.
- Botón “Seguir flujo →”.
- Progreso separado del alumno.

## Reset de progreso

El botón de reset reinicia el modo activo, no el otro modo.
