# Sonido Play v17.2 — Navigation Fix

## Problema detectado

La estructura de unidades fue actualizada a IDs `u01` a `u10`, pero el estado inicial de la aplicación todavía usaba el ID legacy `lesson-01`.

Esto provocaba que:

- la primera unidad apareciera bloqueada;
- el botón `Continuar curso` intentara abrir una lección inexistente;
- el flujo mostrara pantalla faltante o no avanzara.

## Corrección aplicada

- `STORAGE_KEY` actualizado a `sonido-play-v17-2-progress`.
- Estado inicial actualizado a `u01`.
- Botón `Revisar desde el inicio` actualizado a `u01`.
- Reset actualizado a `u01`.
- Se agregó normalización de estado para descartar IDs inexistentes.

## Verificación

Probar localmente con:

```powershell
python -m http.server 8080
```

Abrir:

```text
http://localhost:8080
```

Validar:

1. `Continuar curso` abre U01.
2. `Revisar desde el inicio` abre U01.
3. La tarjeta U01 aparece desbloqueada.
4. `Seguir flujo` avanza por unidades.
