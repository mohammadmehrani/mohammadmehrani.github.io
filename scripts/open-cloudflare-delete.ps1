Start-Process "https://dash.cloudflare.com/?to=/:account/billing/subscriptions"
Write-Host "1. اون بالا صفحه سابسکریپشن باز شد - هر سابسکریپشن فعال رو کنسل کن" -ForegroundColor Yellow
Write-Host "2. بعد کنسل کردن، دکمه Confirm رو بزن" -ForegroundColor Yellow
Read-Host "`nوقتی سابسکریپشن‌ها رو کنسل کردی، Enter بزن تا بریم مرحله بعد"

Start-Process "https://dash.cloudflare.com/?to=/:account/profile/delete"
Write-Host "3. صفحه دیلیت اکانت باز شد - گزینه Delete this account رو بزن" -ForegroundColor Yellow
Write-Host "4. دلیل رو انتخاب کن و تایید کن" -ForegroundColor Yellow
Write-Host "`nبعد از دیلیت، برگرد تا wrangler رو برای اکانت جدید ست کنیم" -ForegroundColor Green
