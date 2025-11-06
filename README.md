Модель візуального форматування для PWA-додатків

Структура проєкту

`docs/index.html` — основна сторінка з прикладами форматування  
`docs/style.css` — стилізація елементів  
`docs/manifest.json` — конфігурація PWA  
`docs/sw.js` — Service Worker (кешування + офлайн)  
`docs/offline.html` — сторінка при відсутності інтернету  
`docs/src/app.js` — логіка прокрутки та реєстрації SW

Запуск локально

```bash
npm install
npm run dev
