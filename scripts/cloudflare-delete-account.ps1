param(
  [string]$Email,
  [string]$ApiKey
)

if (-not $Email -or -not $ApiKey) {
  Write-Host "=== Cloudflare Account Cleanup Script ===" -ForegroundColor Cyan
  Write-Host "`nقبل از اجرا، از داشبورد Cloudflare بردار:`n  https://dash.cloudflare.com/profile/api-tokens`n" -ForegroundColor Yellow
  Write-Host "برو به 'Global API Key' -> View -> Copy" -ForegroundColor Yellow
  $Email  = Read-Host "`nایمیل اکانت Cloudflare"
  $ApiKey = Read-Host "Global API Key" -AsSecureString
  $ApiKey = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($ApiKey)
  )
}

$Headers = @{
  "X-Auth-Email" = $Email
  "X-Auth-Key"   = $ApiKey
  "Content-Type" = "application/json"
}

# 1. Get Account ID
Write-Host "`n[1/4] گرفتن Account ID..." -ForegroundColor Green
try {
  $Accounts = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/accounts" -Headers $Headers -Method Get
  if (-not $Accounts.success) { throw $Accounts.errors[0].message }
  $AccountId = $Accounts.result[0].id
  $AccountName = $Accounts.result[0].name
  Write-Host "  Account: $AccountName ($AccountId)" -ForegroundColor Cyan
} catch {
  Write-Host "  خطا: $_" -ForegroundColor Red
  Write-Host "  ایمیل یا API Key اشتباهه." -ForegroundColor Red
  exit 1
}

# 2. List subscriptions
Write-Host "[2/4] گرفتن لیست سابسکریپشن‌ها..." -ForegroundColor Green
try {
  $Subs = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/accounts/$AccountId/subscriptions" -Headers $Headers -Method Get
  if ($Subs.success -and $Subs.result.Count -gt 0) {
    $Subs.result | ForEach-Object {
      Write-Host "  - $($_.id): $($_.state) | $(if ($_.price) { '$' + $_.price })" -ForegroundColor Yellow
    }
    # 3. Cancel each subscription
    Write-Host "[3/4] لغو سابسکریپشن‌ها..." -ForegroundColor Green
    foreach ($sub in $Subs.result) {
      try {
        $Del = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/accounts/$AccountId/subscriptions/$($sub.id)" `
          -Headers $Headers -Method Delete
        if ($Del.success) {
          Write-Host "  ✅ $($sub.id) cancelled" -ForegroundColor Green
        }
      } catch {
        Write-Host "  ⚠️ $($sub.id): $_" -ForegroundColor DarkYellow
      }
    }
  } else {
    Write-Host "  هیچ سابسکریپشن فعالی نیست." -ForegroundColor Green
  }
} catch {
  Write-Host "  خطا در گرفتن سابسکریپشن‌ها: $_" -ForegroundColor DarkYellow
}

# 4. Open dashboard for account deletion
Write-Host "[4/4] باز کردن صفحه دیلیت اکانت..." -ForegroundColor Green
Start-Process "https://dash.cloudflare.com/?to=/:account/profile/delete"
Write-Host "`n✅ سابسکریپشن‌ها لغو شدن (اگه بودن)." -ForegroundColor Green
Write-Host "📌 حالا تو مرورگر:" -ForegroundColor Cyan
Write-Host "  1. 'Delete this user' رو بزن" -ForegroundColor White
Write-Host "  2. تایید کن" -ForegroundColor White
Write-Host "  3. برگرد تا wrangler رو برای اکانت جدید ست کنیم" -ForegroundColor Cyan
