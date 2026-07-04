# Sonido Play v13 — Tema claro y recorrido UX

## Cambios principales

- Se agregó un botón de tema visual en la barra superior.
- El usuario puede alternar entre tema oscuro y tema claro.
- La preferencia de tema queda guardada en `localStorage`.
- Se agregó el botón `Seguir flujo →` dentro de cada lección y resultado.
- `Seguir flujo →` permite avanzar por las unidades sin responder cuestionarios.
- El botón está diseñado con alto contraste tanto en tema oscuro como en tema claro.

## Uso del modo recorrido UX

El botón `Seguir flujo →` está pensado para revisión de prototipo, no para evaluación real del alumno.

Cuando se usa:

1. marca la lección actual como revisada;
2. desbloquea la siguiente pantalla;
3. avanza automáticamente al siguiente paso;
4. evita depender del cuestionario para probar navegación, flujo e interfaz.

## Motivo

Durante la revisión con Matías se necesitaba evaluar rápidamente el comportamiento visual y la GUI entre unidades, sin quedar bloqueados por cuestionarios o reglas de avance.

## Nota operativa

En producción, este botón debería quedar oculto detrás de un modo interno, rol administrador, modo demo o flag de entorno.
