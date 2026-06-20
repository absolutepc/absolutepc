$root = Split-Path -Parent $PSScriptRoot
$cartBtn = @'
                    <button type="button" class="site-cart-trigger js-cart-btn" aria-label="Открыть корзину">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 20" aria-hidden="true">
                            <path d="M4.258 0c.45 0 .842.31.944.738l.749 2.649h15.132a.972.972 0 01.945 1.207L20.21 11.94a.973.973 0 01-.945.74H7.643a.973.973 0 01-.947-.748l.005.017L3.503 1.947H.973A.973.973 0 01.973 0h3.285zM19.84 5.334H6.497l1.895 5.398h10.113l1.335-5.398zM8.857 13.699a2.719 2.719 0 012.715 2.717 2.719 2.719 0 01-2.715 2.716 2.719 2.719 0 01-2.716-2.716 2.719 2.719 0 012.716-2.717zm0 1.491a1.225 1.225 0 100 2.45 1.225 1.225 0 000-2.45zM17.901 13.699a2.719 2.719 0 012.715 2.717 2.719 2.719 0 01-2.715 2.716 2.719 2.719 0 01-2.715-2.716 2.719 2.719 0 012.715-2.717zm0 1.491a1.225 1.225 0 100 2.45 1.225 1.225 0 000-2.45z"/>
                        </svg>
                        <span class="site-cart-trigger__badge js-cart-badge" data-count="0"></span>
                    </button>
'@

$count = 0
Get-ChildItem -Path $root -Filter '*.html' -Recurse | ForEach-Object {
    if ($_.FullName -match 'admin\.html|login\.html|\\\.vscode\\') { return }

    $content = [IO.File]::ReadAllText($_.FullName)
    $original = $content

    if ($content -notmatch 'href="/css/cart\.css"') {
        if ($content -match '(<link rel="stylesheet" href="/css/[^"]+\.css"[^>]*>)') {
            $content = [regex]::Replace($content, '(<link rel="stylesheet" href="/css/[^"]+\.css"[^>]*>)', "`$1`r`n    <link rel=`"stylesheet`" href=`"/css/cart.css`">", 1)
        } elseif ($content -match '(<link rel="stylesheet" href="/components/[^"]+\.css"[^>]*>)') {
            $content = [regex]::Replace($content, '(<link rel="stylesheet" href="/components/[^"]+\.css"[^>]*>)', "`$1`r`n    <link rel=`"stylesheet`" href=`"/css/cart.css`">", 1)
        }
    }

    if ($content -notmatch 'href="/css/footer\.css"') {
        if ($content -match 'href="/css/cart\.css"') {
            $content = $content -replace '(<link rel="stylesheet" href="/css/cart\.css">)', "`$1`r`n    <link rel=`"stylesheet`" href=`"/css/footer.css`">"
        }
    }

    if ($content -match '<footer class="footer">' -or ($content -match '<footer>' -and $content -notmatch 'site-footer')) {
        $content = [regex]::Replace($content, '(?s)<footer class="footer">.*?</footer>', '<footer class="site-footer"></footer>')
        $content = [regex]::Replace($content, '(?s)<footer>\s*<div class="blocks.*?</footer>', '<footer class="site-footer"></footer>')
    }

    if ($content -match 'fa-shopping-cart text-xl' -and $content -notmatch 'site-cart-trigger') {
        $content = [regex]::Replace($content, '(?s)<div class="p-2">\s*<button class="p-2 p-2 text-gray-600 hover:text-blue-600">\s*<a href="[^"]*shop\.html">\s*<i class="fas fa-shopping-cart text-xl"></i>\s*</a>\s*</button>\s*</div>', $cartBtn)
    }

    if ($content -match 'flex items-center space-x-4' -and $content -notmatch 'header-actions') {
        $content = $content -replace 'class="flex items-center space-x-4"', 'class="flex items-center space-x-4 header-actions"'
    }

    if ($content -notmatch 'src="/shop\.js"') {
        if ($content -match 'src="/js/mobile-nav\.js"') {
            $content = $content -replace '(<script src="/js/mobile-nav\.js"></script>)', "`$1`r`n    <script src=`"/shop.js`"></script>"
        } else {
            $content = $content -replace '</body>', "    <script src=`"/js/mobile-nav.js`"></script>`r`n    <script src=`"/shop.js`"></script>`r`n</body>"
        }
    }

    if ($content -ne $original) {
        [IO.File]::WriteAllText($_.FullName, $content)
        $count++
        Write-Output $_.FullName
    }
}

Write-Host "Updated $count files"
