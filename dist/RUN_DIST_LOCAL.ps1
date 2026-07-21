# Ejecutar Sonido Play desde la carpeta dist
$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot/dist"
python -m http.server 8080
