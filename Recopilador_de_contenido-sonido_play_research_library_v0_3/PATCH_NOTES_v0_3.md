# Patch Notes v0.3

## Correccion principal

Se reemplazo download_green_sources.ps1 por una version ASCII-only para evitar errores de terminador de cadena y llaves en Windows PowerShell.

## Cambios

- Sin caracteres especiales en el script.
- Sin comentarios con acentos o guiones largos dentro del script.
- Uso de [pscustomobject] para definir fuentes.
- Se agrega -UseBasicParsing para compatibilidad con Windows PowerShell 5.x.
- El script no se detiene si falla una fuente.
- Se mantiene downloaded_sources/download_log.csv.

