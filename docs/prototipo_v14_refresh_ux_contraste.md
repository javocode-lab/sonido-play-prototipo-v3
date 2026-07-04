# Sonido Play v14 — Refresh UX y contraste

Cambios aplicados:

- Se reemplazó el tema claro/oscuro por un sistema de tokens semánticos.
- Se redujo el uso de transparencias problemáticas en tarjetas, botones y bloques de lectura.
- Se reforzó el contraste de texto principal, texto secundario, badges, feedback y botones.
- Se mantuvo el botón `Seguir flujo →` como control de prototipo, con alto contraste en claro y oscuro.
- Se agregaron estados `focus-visible` para navegación por teclado.
- Se ajustaron botones, tarjetas, paneles, respuestas, feedback, avisos, Documento Fuente y navegación lateral.
- Se aplicó una estética más cercana a design systems actuales: superficies neutras, tokens, estados claros y jerarquía visual limpia.

Criterio usado:

- Texto normal con contraste objetivo AA.
- Botones y componentes interactivos con contraste reforzado.
- No depender solo del color para estados: se conserva texto, borde, feedback y jerarquía visual.

Referencias de criterio:

- WCAG AA: 4.5:1 para texto normal y 3:1 para texto grande/componentes.
- Material Design / Material 3: paletas tonales y contraste accesible.
- Apple HIG: colores adaptables a claro/oscuro y suficiente contraste.
- Microsoft Fluent 2: accesibilidad, personalización de color y no comunicar solo con color.
- Atlassian Design System: tokens de color y estándares AA.
