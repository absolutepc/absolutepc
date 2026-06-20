$root = Split-Path -Parent $PSScriptRoot
$count = 0
Get-ChildItem -Path $root -Filter '*.html' -Recurse | ForEach-Object {
    if ($_.Name -match 'admin|login') { return }
    $content = [IO.File]::ReadAllText($_.FullName)
    if ($content -match 'shop\.js' -and $content -notmatch 'mobile-nav\.js') {
        $content = $content -replace '(<script src="/shop\.js"></script>)', "<script src=`"/js/mobile-nav.js`"></script>`r`n    `$1"
        [IO.File]::WriteAllText($_.FullName, $content)
        $count++
    }
}
Write-Host "Added mobile-nav to $count files"
