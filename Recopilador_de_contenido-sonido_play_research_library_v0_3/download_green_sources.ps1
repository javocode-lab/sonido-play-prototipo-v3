# Sonido Play Research Library - Green Sources Downloader v0.3
# ASCII-only PowerShell script to avoid encoding/parser issues in Windows PowerShell 5.x.

$BaseDir = Join-Path $PSScriptRoot "downloaded_sources"
$LogFile = Join-Path $BaseDir "download_log.csv"

New-Item -ItemType Directory -Force -Path $BaseDir | Out-Null
"status,category,out_file,url,message" | Set-Content -Path $LogFile -Encoding UTF8

$Sources = @(
    [pscustomobject]@{ Category = "OpenStax"; OutFile = "openstax_17_1_ondas_sonoras.html"; Url = "https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/17-1-ondas-sonoras" },
    [pscustomobject]@{ Category = "OpenStax"; OutFile = "openstax_17_2_velocidad_del_sonido.html"; Url = "https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/17-2-velocidad-del-sonido" },
    [pscustomobject]@{ Category = "OpenStax"; OutFile = "openstax_17_3_intensidad_del_sonido.html"; Url = "https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/17-3-intensidad-del-sonido" },

    [pscustomobject]@{ Category = "SRT Argentina"; OutFile = "srt_res_85_12_protocolo_ruido.pdf"; Url = "https://www.argentina.gob.ar/sites/default/files/res_srt_85_12_protocolo_ruido.pdf" },
    [pscustomobject]@{ Category = "SRT Argentina"; OutFile = "srt_res_85_12_guia_practica_ruido.pdf"; Url = "https://www.argentina.gob.ar/sites/default/files/res_srt_85_12_protocolo_ruido_guia-practiva.pdf" },
    [pscustomobject]@{ Category = "SRT Argentina"; OutFile = "srt_res_85_12_anexo_ruido.pdf"; Url = "https://www.argentina.gob.ar/sites/default/files/res_srt_85_12_protocolo_ruido-anexo.pdf" },
    [pscustomobject]@{ Category = "SRT Argentina"; OutFile = "srt_res_85_12_formulario_ruido.pdf"; Url = "https://www.argentina.gob.ar/sites/default/files/res_srt_85_12_protocolo_ruido-formulario.pdf" },
    [pscustomobject]@{ Category = "SRT Argentina"; OutFile = "srt_pagina_oficial_protocolo_ruido.html"; Url = "https://www.argentina.gob.ar/srt/prevencion/publicaciones/protocolos/medicion-del-nivel-de-ruido-en-el-ambiente-laboral" },

    [pscustomobject]@{ Category = "RadioLibres"; OutFile = "radioslibres_tutorial_9_tecnologia_radial.pdf"; Url = "https://radioslibres.net/wp-content/uploads/media/uploads/documentos/tutorial_9_tecnologia_radial.pdf" },
    [pscustomobject]@{ Category = "RadioLibres"; OutFile = "radioslibres_34_como_funcionan_los_microfonos.html"; Url = "https://radioslibres.net/34-como-funcionan-los-microfonos/" },
    [pscustomobject]@{ Category = "RadioLibres"; OutFile = "radioslibres_33_cables_y_conectores.html"; Url = "https://radioslibres.net/33-que-tipos-de-cables-y-conectores-hay/" },
    [pscustomobject]@{ Category = "RadioLibres"; OutFile = "radioslibres_capitulo_5_botones_consola.html"; Url = "https://radioslibres.net/capitulo-5-que-son-todos-esos-botones/" },
    [pscustomobject]@{ Category = "RadioLibres"; OutFile = "radioslibres_capitulo_9_altavoces.html"; Url = "https://radioslibres.net/capitulo-9-como-conecto-los-altavoces/" },

    [pscustomobject]@{ Category = "CEDEC INTEF"; OutFile = "cedec_intef_home.html"; Url = "https://cedec.intef.es/" }
)

foreach ($Source in $Sources) {
    $Target = Join-Path $BaseDir $Source.OutFile
    Write-Host ("Downloading: " + $Source.OutFile)

    try {
        Invoke-WebRequest -Uri $Source.Url -OutFile $Target -Headers @{ "User-Agent" = "Mozilla/5.0 BlacksmithAcademyResearch/0.3" } -UseBasicParsing
        $Line = "OK," + $Source.Category + "," + $Source.OutFile + "," + $Source.Url + ",Downloaded"
        Add-Content -Path $LogFile -Value $Line -Encoding UTF8
    }
    catch {
        $Msg = $_.Exception.Message
        if ($null -eq $Msg) { $Msg = "Unknown error" }
        $Msg = $Msg.Replace(",", ";")
        Write-Warning ("Failed: " + $Source.OutFile + " - " + $Msg)
        $Line = "FAILED," + $Source.Category + "," + $Source.OutFile + "," + $Source.Url + "," + $Msg
        Add-Content -Path $LogFile -Value $Line -Encoding UTF8
    }
}

Write-Host "Done. Files saved in:"
Write-Host $BaseDir
Write-Host "Download log:"
Write-Host $LogFile
