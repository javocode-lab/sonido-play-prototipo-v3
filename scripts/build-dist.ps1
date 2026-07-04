# Build estático de Sonido Play hacia /dist
# Uso: powershell -ExecutionPolicy Bypass -File scripts/build-dist.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$dist = Join-Path $root "dist"

if (Test-Path $dist) {
  Remove-Item $dist -Recurse -Force
}

New-Item -ItemType Directory -Path $dist | Out-Null

$items = @("index.html", "app.js", "styles.css", "assets", "docs")
foreach ($item in $items) {
  $source = Join-Path $root $item
  $target = Join-Path $dist $item
  if (Test-Path $source) {
    Copy-Item $source $target -Recurse -Force
  } else {
    throw "No se encontró $item en $root"
  }
}

# GitHub Pages: evita procesamiento Jekyll y conserva assets estáticos.
New-Item -ItemType File -Path (Join-Path $dist ".nojekyll") -Force | Out-Null

# Fallback simple para hosts que redirigen 404 a una app estática.
Copy-Item (Join-Path $dist "index.html") (Join-Path $dist "404.html") -Force

Write-Host "Build generado correctamente en: $dist"
Write-Host "Para probar: cd dist; python -m http.server 8080"
