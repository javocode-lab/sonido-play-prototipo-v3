# Sonido Play Research Library Green Sources v0.3

Proyecto: Blacksmith Academy - Sonido Play v0.1  
Estado: Research / Internal  
Uso: biblioteca privada de investigacion.

## Objetivo

Este paquete contiene un registro de fuentes externas con luz verde o verde controlada y un script para descargarlas localmente en tu PC.

No redistribuye PDFs externos ya descargados. El material descargado debe usarse para estudio, analisis, validacion y construccion de Documento Fuente propio.

## Como ejecutar

Abrir PowerShell en esta carpeta y correr:

```powershell
powershell -ExecutionPolicy Bypass -File .\download_green_sources.ps1
```

El script crea:

```text
downloaded_sources/
downloaded_sources/download_log.csv
```

## Nota v0.3

Esta version reemplaza el script v0.2 por uno ASCII-only para evitar errores de parseo en Windows PowerShell.

