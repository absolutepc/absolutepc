$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$count = 0
Get-ChildItem -Path $root -Filter "*.html" -Recurse | ForEach-Object {
    $content = [IO.File]::ReadAllText($_.FullName)
    $original = $content
    if ($content -notmatch 'href="/css/cart\.css"') {
        $content = $content -replace '(<link rel="stylesheet" href="/css/[^"]+\.css"[^>]*>)', "`$1`r`n    <link rel=`"stylesheet`" href=`"/css/cart.css`">"
        if ($content -eq $original) {
            $content = $content -replace '(<link rel="stylesheet" href="/components/[^"]+\.css"[^>]*>)', "`$1`r`n    <link rel=`"stylesheet`" href=`"/css/cart.css`">"
        }
    }
    if ($content -notmatch 'src="/js/site-cart\.js"') {
        if ($content -match 'mobile-nav\.js') {
            $content = $content -replace '(<script src="/js/mobile-nav\.js"></script>)', "`$1`r`n    <script src=`"/js/site-cart.js`"></script>"
        } else {
            $content = $content -replace '</body>', "    <script src=`"/js/site-cart.js`"></script>`r`n</body>"
        }
    }
    if ($content -ne $original) {
        [IO.File]::WriteAllText($_.FullName, $content)
        $count++
    }
}
Write-Host "Updated $count files"
