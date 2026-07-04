# Servir /dist localmente con Python
# Uso: powershell -ExecutionPolicy Bypass -File scripts/serve-dist.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$dist = Join-Path $root "dist"

if (-not (Test-Path $dist)) {
  throw "No existe la carpeta dist. Ejecutá primero: powershell -ExecutionPolicy Bypass -File scripts/build-dist.ps1"
}

Set-Location $dist
python -m http.server 8080
